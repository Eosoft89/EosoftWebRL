<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Article extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function cover()
    {
        return $this->belongsTo(Image::class, 'cover_id');
    }

    public function tags() : MorphToMany 
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function getCoverUrlAttribute()
    {
        return $this->cover ? asset('storage/images/' . $this->cover->url) : null;
    }

}
