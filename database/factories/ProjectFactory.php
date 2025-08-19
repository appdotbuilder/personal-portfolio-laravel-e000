<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Project>
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'type' => fake()->randomElement(['Web', 'Mobile', 'Design']),
            'description' => fake()->paragraph(2),
            'url' => fake()->url(),
            'tech_stack' => fake()->randomElement([
                'React, TailwindCSS',
                'React, Node.js, MongoDB',
                'Unity, C#',
                'Figma, Illustrator'
            ]),
            'image_path' => null,
        ];
    }
}