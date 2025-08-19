<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display all blog posts.
     */
    public function index()
    {
        $blogPosts = BlogPost::latest('published_at')->get();
        
        return Inertia::render('portfolio/blog', [
            'blogPosts' => $blogPosts,
        ]);
    }

    /**
     * Show a specific blog post.
     */
    public function show(BlogPost $blogPost)
    {
        return Inertia::render('portfolio/blog-post', [
            'blogPost' => $blogPost,
        ]);
    }
}