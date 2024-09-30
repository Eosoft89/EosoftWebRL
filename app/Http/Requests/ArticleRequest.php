<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => ['required','string', 'min:3'],
            'content' => ['required', 'min:10'],
            'tags' => ['array', 'nullable']
        ];

        if ($this->routeIs('article.store')){
            $rules['file'] = ['required', File::image()->max(10*1024)];
        }
        else if ($this->routeIs('article.update')){
            $rules['file'] = ['nullable', File::image()->max(10*1024)];
        }

        return $rules;
    }
}
