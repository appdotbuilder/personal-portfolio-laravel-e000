<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    /**
     * Display all projects.
     */
    public function index()
    {
        $projects = Project::latest()->get();
        
        return Inertia::render('portfolio/projects', [
            'projects' => $projects,
        ]);
    }
}