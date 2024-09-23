<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use App\Models\Image;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::with('cover')->get();
        return Inertia::render('Admin/Article/Index', ['articles' => $this->getArticlesWithCover($articles)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Article/Create', ['images' => Image::getAllWithUrl()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        $article = new Article([
            'title' => $request->title,
            'content' => $request->content
        ]);
        
        //dd('Mensaje ID: '. $image->id . ' -  Nombre: ' . $image->name);
        $image = ProjectController::storeImage($request->file);
        $article->cover_id = $image->id;
        $article->save();
        return redirect()->route('admin.articles')->with('message', 'Artículo registrado exitosamente');
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

    private function getArticlesWithCover(Collection $articles){
        
        return $articles->map(
            function ($article){
                return[
                    'id' => $article->id,
                    'title' => $article->title,
                    'content' => $article->content,
                    'cover_url' => $article->cover ? asset('storage/images/' . $article->cover->url) : null     
                ];
            }
        )->toArray();
    }
}
