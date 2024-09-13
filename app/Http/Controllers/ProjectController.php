<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Models\Image;
use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        return Inertia::render('Admin/Project/Index', ['projects' => Project::all()]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Project/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request)
    {
        $filename = time().'.'.$request->file->extension();
        $request->file->storeAs('public/images', $filename);

        $image = new Image;
        $image->name = $request->file->getClientOriginalName();
        $image->url = $filename;
        $image->save();

        $project = new Project([
            'title' => $request->title,
            'content' => $request->content
        ]);
        
        //dd('Mensaje ID: '. $image->id . ' -  Nombre: ' . $image->name);
        $project->cover_id = $image->id;
        $project->save();
        return redirect()->route('createProject');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
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
