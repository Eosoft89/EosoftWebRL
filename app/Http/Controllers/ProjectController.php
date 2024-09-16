<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Models\Image;
use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

use function PHPUnit\Framework\returnSelf;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('cover')->get();
        return Inertia::render('Project', ['projects' => $this->getProjectsWithCover($projects)]);
    }

    public function adminIndex()
    {
        $projects = Project::with('cover')->get();
        return Inertia::render('Admin/Project/Index', ['projects' => $this->getProjectsWithCover($projects)]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Project/Create', ['images' => Image::getAllWithUrl()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request)
    {
        
        $project = new Project([
            'title' => $request->title,
            'content' => $request->content
        ]);
        
        //dd('Mensaje ID: '. $image->id . ' -  Nombre: ' . $image->name);
        $image = $this->storeImage($request->file);
        $project->cover_id = $image->id;
        $project->save();
        return redirect()->route('createProject');
    }

    public function storeImage(UploadedFile $file) : Image {

        $file_url = time().'.'. $file->extension();
        $file->storeAs('public/images', $file_url);

        $image = new Image;
        $image->name = $file->getClientOriginalName();
        $image->url = $file_url;
        $image->save();

        return $image;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::with('cover')->findOrFail($id);

        return Inertia::render('ProjectDetail', [
            'title' => $project->title,
            'content' => $project->content,
            'cover_url' => $project->cover ? asset('storage/images/' . $project->cover->url) : null 
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Admin/Project/Create', ['images' => Image::getAllWithUrl(), 'project' => Project::with('cover')->findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {   
        $request->validate([
            'title' => 'required|string|min:3',
            'content' => 'required|min:10',
            'file' => ['nullable', File::image()->max(10*1024)] 
        ]);

        $project = Project::findOrFail($id);

        //Log::info('datos del request', [$request->all()]);
        //Log::info('Has File:', [$request->hasFile('file')]);
        if ($request->hasFile('file')){
            $image = $this->storeImage($request->file('file'));
            $project->cover_id = $image->id;
        }

        $project->title = $request->title;
        $project->content = $request->content;
        $project->save();

        return redirect()->route('adminProjects')->with('success', 'Proyecto actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    private function getProjectsWithCover(Collection $projects){
        
        return $projects->map(
            function ($project){
                return[
                    'id' => $project->id,
                    'title' => $project->title,
                    'content' => $project->content,
                    'cover_url' => $project->cover ? asset('storage/images/' . $project->cover->url) : null     
                ];
            }
        )->toArray();
    }
}
