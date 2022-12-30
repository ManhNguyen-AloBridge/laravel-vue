<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'license_plate' => Str::random(6,6),
            'color' => $this->faker->randomElement(['black','red','blue']),
            'url_image' => null
        ];
    }
}
