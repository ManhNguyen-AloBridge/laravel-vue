<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class IdCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'card_number' => rand(100000000000,999999999999),
            'url_id' => $this->faker->url(),
        ];
    }
}
