<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(WebsiteController::class)->group(function(){
    Route::get('/', 'index')->name('home');
    Route::get('/projects', 'projects')->name('projects');
    Route::get('/articles', 'articles')->name('articles');
    Route::get('/projects/{id}', 'showProject')->name('project.detail');
    Route::get('/articles/{id}', 'showArticle')->name('article.detail');
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', function () {
    return Inertia::render('Admin/Welcome');
})->middleware(['auth', 'verified'])->name('admin');

Route::middleware(['auth', 'verified'])->controller(ProjectController::class)->group(function(){
    Route::get('/admin/projects', 'index')->name('admin.projects');
    Route::get('/admin/projects/create', 'create')->name('project.create');
    Route::post('/admin/projects/create', 'store')->name('project.store');
    Route::get('/admin/projects/edit/{id}', 'edit')->name('project.edit');
    Route::post('/admin/projects/edit/{id}', 'update')->name('project.update');
});

Route::middleware(['auth', 'verified'])->controller(ArticleController::class)->group(function(){
    Route::get('/admin/articles', 'index')->name('admin.articles');
    Route::get('/admin/articles/create', 'create')->name('article.create');
    Route::post('/admin/articles/create', 'store')->name('article.store');
    Route::get('/admin/articles/edit/{id}', 'edit')->name('article.edit');
    Route::post('/admin/articles/edit/{id}', 'update')->name('article.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
