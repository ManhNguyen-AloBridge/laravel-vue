<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CccdCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'so_cccd' => rand(100000000000,999999999999),
            'url_cccd' => $this->faker->url(),
        ];
    }
}
