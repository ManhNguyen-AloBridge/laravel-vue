<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CostLivingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'electric_price' => 1000,
            'water_price' => 2000,
            'internet_price' => 3000,
            'general_hygiene_price' => 4000,
        ];
    }
}
