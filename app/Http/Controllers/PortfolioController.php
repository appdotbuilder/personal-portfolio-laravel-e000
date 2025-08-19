<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Skill;
use App\Models\BlogPost;
use App\Models\Contact;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio home page.
     */
    public function index()
    {
        $projects = Project::latest()->take(4)->get();
        $skills = Skill::orderBy('percentage', 'desc')->get();
        $blogPosts = BlogPost::latest('published_at')->take(3)->get();
        
        return Inertia::render('welcome', [
            'projects' => $projects,
            'skills' => $skills,
            'blogPosts' => $blogPosts,
        ]);
    }

    /**
     * Store a contact form submission.
     */
    public function store()
    {
        $validated = request()->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        return redirect()->back()->with('success', 'Thank you for your message! I\'ll get back to you soon.');
    }
}