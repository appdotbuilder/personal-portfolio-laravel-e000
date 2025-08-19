<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use App\Models\BlogPost;
use App\Models\Contact;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create skills with sample data
        $skills = [
            ['name' => 'React', 'percentage' => 95, 'category' => 'Frontend'],
            ['name' => 'JavaScript', 'percentage' => 90, 'category' => 'Frontend'],
            ['name' => 'TailwindCSS', 'percentage' => 85, 'category' => 'Frontend'],
            ['name' => 'Node.js', 'percentage' => 80, 'category' => 'Backend'],
            ['name' => 'Design', 'percentage' => 75, 'category' => 'Design'],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        // Create projects with sample data
        $projects = [
            [
                'title' => 'Personal Website',
                'type' => 'Web',
                'description' => 'Web portofolio pribadi responsive',
                'url' => 'https://example.com',
                'tech_stack' => 'React, TailwindCSS',
            ],
            [
                'title' => 'E-Commerce App',
                'type' => 'Web',
                'description' => 'Full-stack toko online',
                'url' => 'https://shop.example.com',
                'tech_stack' => 'React, Node.js, MongoDB',
            ],
            [
                'title' => 'Mobile Game',
                'type' => 'Mobile',
                'description' => 'Game mobile sederhana Android',
                'url' => 'https://game.example.com',
                'tech_stack' => 'Unity, C#',
            ],
            [
                'title' => 'Branding Design',
                'type' => 'Design',
                'description' => 'Desain branding untuk klien',
                'url' => 'https://design.example.com',
                'tech_stack' => 'Figma, Illustrator',
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // Create blog posts with sample data
        $blogPosts = [
            [
                'title' => 'Tips Belajar React',
                'content' => 'React merupakan salah satu framework JavaScript yang paling populer saat ini. Dalam artikel ini, saya akan berbagi tips dan trik untuk mempelajari React dengan lebih efektif. Mulai dari memahami konsep komponen, state management, hingga best practices dalam development.',
                'excerpt' => 'Cara cepat memahami React untuk pemula',
                'published_at' => '2025-08-19',
            ],
            [
                'title' => 'Modern Web UI Design',
                'content' => 'Dunia UI design terus berkembang dengan tren-tren baru yang menarik. Glassmorphism, dark mode, dan micro-interactions menjadi standar baru dalam menciptakan user experience yang memukau. Mari kita eksplorasi berbagai teknik dan tools yang bisa digunakan.',
                'excerpt' => 'Tren UI terbaru & glassmorphism',
                'published_at' => '2025-08-10',
            ],
            [
                'title' => 'Animasi Web Efektif',
                'content' => 'Animasi yang smooth dan natural dapat meningkatkan user experience secara signifikan. Dalam tutorial ini, kita akan belajar bagaimana mengimplementasikan animasi yang efektif menggunakan CSS dan JavaScript, serta tips untuk optimasi performa.',
                'excerpt' => 'Panduan smooth animation di Laravel',
                'published_at' => '2025-08-05',
            ],
        ];

        foreach ($blogPosts as $post) {
            BlogPost::create($post);
        }

        // Create sample contact messages
        $contacts = [
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'subject' => 'Project Collaboration',
                'message' => 'Hi! I saw your portfolio and would like to discuss a potential project collaboration.',
                'is_read' => false,
            ],
            [
                'name' => 'Sarah Wilson',
                'email' => 'sarah@company.com',
                'subject' => 'Freelance Opportunity',
                'message' => 'We have a web development project that might be perfect for your skillset. Are you available for freelance work?',
                'is_read' => true,
            ],
        ];

        foreach ($contacts as $contact) {
            Contact::create($contact);
        }
    }
}