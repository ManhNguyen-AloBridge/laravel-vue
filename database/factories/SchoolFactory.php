<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SchoolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'ten_truong' => $this->faker->name(),
            'ten_viet_tat' => $this->faker->name(),
            'dia_chi' => $this->faker->address(),
        ];
    }
}
