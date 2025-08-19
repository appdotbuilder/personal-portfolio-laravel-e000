<?php

namespace Database\Factories;

use App\Models\Skill;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Skill>
 */
class SkillFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Skill>
     */
    protected $model = Skill::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['React', 'JavaScript', 'TailwindCSS', 'Node.js', 'Design']),
            'percentage' => fake()->numberBetween(60, 95),
            'category' => fake()->randomElement(['Frontend', 'Backend', 'Design', 'Mobile']),
        ];
    }
}