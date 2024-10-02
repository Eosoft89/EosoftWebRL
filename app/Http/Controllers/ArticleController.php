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
        $articles = Article::with('cover', 'tags')->get();
        return Inertia::render('Admin/Article/Index', [
            'articles' => $this->getArticlesWithCover($articles),
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ],
        ]);
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

        if($request->hasFile('file')){
            $image = ImageController::storeImage($request->file);
            $article->cover()->associate($image->id);
        }
        else{
            if(isset($request['imageId'])){
                $article->cover()->associate($request->imageId);
            }
        }

        $article->save();

        if(isset($request['tags'])) {
            $tagIds = collect($request->input('tags'))->pluck('id')->all();
            $article->tags()->attach($tagIds);
        }

        return redirect()->route('admin.articles')->with('success', 'Artículo registrado exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $article = Article::with('cover', 'tags')->findOrFail($id);
        $article->cover_url = asset('storage/images/' . $article->cover->id);

        return Inertia::render('ArticleDetail', [$article]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $article = Article::with('cover', 'tags')->findOrFail($id);
        $article->cover_url = $article->cover ? asset('storage/images/' . $article->cover->url) : null;
        
        return Inertia::render('Admin/Article/Create', ['images' => Image::getAllWithUrl(), 'article' => $article]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleRequest $request, string $id)
    {
        $article = Article::findOrFail($id);

        if ($request->hasFile('file')){
            $image = ImageController::storeImage($request->file('file'));
            $article->cover()->associate($image->id);
        }
        else{
            if($request['imageId'] != null && $article->cover?->id != $request->imageId){
                $article->cover()->associate($request->imageId);
            } 
        }
        $article->title = $request->title;
        $article->content = $request->content;
        $article->save();

        if ($request->has('tags')) {
            $tagIds = collect($request->input('tags'))->pluck('id')->all();
            $article->tags()->sync($tagIds);
        }

        return redirect()->route('admin.articles')->with('success', 'Artículo actualizado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();
        return redirect()->back()->with('success', 'Artículo eliminado exitosamente');
    }

    private function getArticlesWithCover(Collection $articles){
        
        return $articles->map(
            function ($article){
                return[
                    'id' => $article->id,
                    'title' => $article->title,
                    'content' => $article->content,
                    'cover_url' => $article->cover ? asset('storage/images/' . $article->cover->url) : null,
                    'tags' => $article->tags     
                ];
            }
        )->toArray();
        
    }
}
