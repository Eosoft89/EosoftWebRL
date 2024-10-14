<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;
use Inertia\Inertia;

class WebsiteController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function projects()
    {
        $projects = Project::with('cover')->get();
        return Inertia::render('Projects', ['projects' => $this->getRegistersWithCover($projects)]);
    }

    public function showProject(string $id)
    {
        $project = Project::with('cover', 'tags')->findOrFail($id);

        return Inertia::render('ProjectDetail', [
            'title' => $project->title,
            'content' => $project->content,
            'cover_url' => $project->cover ? asset('storage/images/' . $project->cover->url) : null 
        ]);
    }

    public function articles()
    {
        $articles = Article::with('tags')->get();
        $articles->each->append('cover_url');
        return Inertia::render('Articles', ['articles' => $articles]);
    }

    public function showArticle(string $id)
    {
        $article = Article::with('tags')->findOrFail($id);
        $article->append('cover_url');

        return Inertia::render('ArticleDetail', $article);
    }

    private function getRegistersWithCover(Collection $registers){
        
        return $registers->map(
            function ($register){
                return[
                    'id' => $register->id,
                    'title' => $register->title,
                    'content' => $register->content,
                    'cover_url' => $register->cover ? asset('storage/images/' . $register->cover->url) : null,
                    'tags' => $register->tags     
                ];
            }
        )->toArray();
    }
}
