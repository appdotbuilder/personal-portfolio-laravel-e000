<?php

use App\Models\BlogPost;
use App\Models\Contact;
use App\Models\Project;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    // Create test data
    Project::factory()->create([
        'title' => 'Test Project',
        'type' => 'Web',
        'description' => 'A test project',
        'url' => 'https://example.com',
        'tech_stack' => 'React, Laravel',
    ]);

    Skill::factory()->create([
        'name' => 'React',
        'percentage' => 95,
        'category' => 'Frontend',
    ]);

    BlogPost::factory()->create([
        'title' => 'Test Blog Post',
        'content' => 'This is a test blog post content.',
        'excerpt' => 'Test excerpt',
        'published_at' => now(),
    ]);
});

it('displays portfolio data on homepage', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('welcome')
        ->has('projects')
        ->has('skills')
        ->has('blogPosts')
    );
});

it('displays all projects on projects page', function () {
    $response = $this->get('/projects');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('portfolio/projects')
        ->has('projects')
    );
});

it('displays all posts on blog page', function () {
    $response = $this->get('/blog');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('portfolio/blog')
        ->has('blogPosts')
    );
});

it('loads contact page', function () {
    $response = $this->get('/contact');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('portfolio/contact')
    );
});

it('can submit contact form', function () {
    $contactData = [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'subject' => 'Test Subject',
        'message' => 'This is a test message.',
    ];

    $response = $this->post('/contact', $contactData);

    $response->assertRedirect();
    $this->assertDatabaseHas('contacts', $contactData);
});

it('allows admin to access projects', function () {
    $admin = User::factory()->create();

    $response = $this->actingAs($admin)->get('/admin/projects');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('admin/projects/index')
        ->has('projects')
    );
});

it('allows admin to create project', function () {
    $admin = User::factory()->create();

    $projectData = [
        'title' => 'New Project',
        'type' => 'Web',
        'description' => 'A new test project',
        'url' => 'https://newproject.com',
        'tech_stack' => 'Vue, Laravel',
        'image_path' => '',
    ];

    $response = $this->actingAs($admin)->post('/admin/projects', $projectData);

    $response->assertRedirect();
    $this->assertDatabaseHas('projects', [
        'title' => 'New Project',
        'type' => 'Web',
        'url' => 'https://newproject.com',
    ]);
});

it('allows admin to view contacts', function () {
    $admin = User::factory()->create();
    Contact::factory()->create();

    $response = $this->actingAs($admin)->get('/admin/contacts');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('admin/contacts/index')
        ->has('contacts')
    );
});

it('prevents guests from accessing admin routes', function () {
    $response = $this->get('/admin/projects');
    $response->assertRedirect('/login');

    $response = $this->get('/admin/contacts');
    $response->assertRedirect('/login');
});

it('seeds portfolio data correctly', function () {
    $this->artisan('db:seed');

    // Check that sample data exists (plus the test project created in beforeEach)
    expect(Project::count())->toBe(5); // 4 seeded + 1 test
    expect(Skill::count())->toBe(6);   // 5 seeded + 1 test
    expect(BlogPost::count())->toBe(4); // 3 seeded + 1 test
    expect(Contact::count())->toBe(2);  // 2 seeded

    // Check specific sample data
    $this->assertDatabaseHas('projects', [
        'title' => 'Personal Website',
        'type' => 'Web',
    ]);

    $this->assertDatabaseHas('skills', [
        'name' => 'React',
        'percentage' => 95,
    ]);

    $this->assertDatabaseHas('blog_posts', [
        'title' => 'Tips Belajar React',
    ]);
});