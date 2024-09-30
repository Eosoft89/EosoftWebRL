<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function articles()
    {
        return $this->hasOne(Article::class, 'cover_id');
    }

    public function projects()
    {
        return $this->hasOne(Project::class, 'cover_id');
    }

    public static function getAllWithUrl() 
    {
        $images = Image::all();
        return $images->map(
            function ($image){
                return [
                    'id' => $image->id,
                    'name' => $image->name,
                    'url' => asset('storage/images/' . $image->url)
                ];
            }
        );
    }
}
