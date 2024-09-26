<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Models\Image;
use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Log;
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
        return Inertia::render('Admin/Project/Index', [
            'projects' => $this->getProjectsWithCover($projects),
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ],
            'tag' => session('tag'),
        ]);
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
        $image = ImageController::storeImage($request->file);
        $project->cover_id = $image->id;
        $project->save();
        return redirect()->route('admin.projects')->with('success', 'Proyecto registrado correctamente');
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
    public function update(ProjectRequest $request, string $id)
    {   

        $project = Project::findOrFail($id);

        //Log::info('datos del request', [$request->all()]);
        //Log::info('Has File:', [$request->hasFile('file')]);
        if ($request->hasFile('file')){
            $image = ImageController::storeImage($request->file('file'));
            $project->cover_id = $image->id;
        }

        $project->title = $request->title;
        $project->content = $request->content;
        $project->save();

        return redirect()->route('admin.projects')->with('success', 'Actualizado exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return redirect()->back()->with('success', 'Proyecto eliminado exitosamente');
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
