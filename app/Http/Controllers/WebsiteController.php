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
        $project = Project::with('cover')->findOrFail($id);

        return Inertia::render('ProjectDetail', [
            'title' => $project->title,
            'content' => $project->content,
            'cover_url' => $project->cover ? asset('storage/images/' . $project->cover->url) : null 
        ]);
    }

    public function articles()
    {
        $articles = Article::with('cover')->get();
        return Inertia::render('Articles', ['articles' => $this->getRegistersWithCover($articles)]);
    }

    public function showArticle(string $id)
    {
        $article = Article::with('cover')->findOrFail($id);
        return Inertia::render('ArticleDetail', [
            'title' => $article->title,
            'content' => $article->content,
            'cover_url' => $article->cover ? asset('store/images/' . $article->cover->url) : null
        ]);
    }

    private function getRegistersWithCover(Collection $registers){
        
        return $registers->map(
            function ($register){
                return[
                    'id' => $register->id,
                    'title' => $register->title,
                    'content' => $register->content,
                    'cover_url' => $register->cover ? asset('storage/images/' . $register->cover->url) : null     
                ];
            }
        )->toArray();
    }
}
