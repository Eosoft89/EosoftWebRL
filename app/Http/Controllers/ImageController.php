<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images = Image::all();

        return Inertia::render('Admin/Image/Index', [    
            'images' => $images->map(function($image){
                return[
                    'id' => $image->id,
                    'name' => $image->name,
                    'url' => asset('storage/images/' . $image->url)
                ];
            }),
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->storeImage($request->file);
        
    }

    public static function storeImage(UploadedFile $file) : Image
    {
        $file_url = time().'.'. $file->extension();
        $file->storeAs('public/images', $file_url);

        $image = new Image();
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
        if ($this->deleteImage($id)) {
            return redirect()->back()->with('success', 'Imagen eliminada exitosamente.');
        }
        else {
            return redirect()->back()->with('error', 'Error al intentar eliminar la imagen.');
        }
    }

    public function deleteImage(string $id){
        return DB::transaction(function () use ($id){
            $image = Image::findOrFail($id);
            $file_url = asset('storage/images/' . $image->url);

            if (Storage::exists($file_url)){
                Storage::delete($file_url);
            }

            $image->delete();

            return true;
        });
    }
}
