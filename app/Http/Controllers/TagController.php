<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class TagController extends Controller
{

    public function search(Request $request)
    {
        $query = $request->get('query');
        Log::info('Tag search request: ', [$request->all()]);
        $tags = Tag::where('name', 'like', "%{$query}%")->get();
        return response()->json($tags);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(TagRequest $request)
    {
        Log::info('Create tag request: ', [$request->all()]);
        $tag = Tag::create(['name' => $request->name]);
        Log::info('Tag devuelto: ', [$tag->name . ' - id: ', $tag->id]);
        return response()->json(data: ['tag' => ['id' => $tag->id, 'name' => $tag->name]]);
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
}
