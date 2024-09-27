<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Tag extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function projects() : MorphToMany 
    {
        return $this->morphedByMany(Project::class, 'taggable');
    }

    public function articles() : MorphToMany 
    {
        return $this->morphedByMany(Article::class, 'taggable');
    }
    
}
