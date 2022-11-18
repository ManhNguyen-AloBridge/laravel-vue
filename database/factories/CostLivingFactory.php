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
            'gia_dien' => 1000,
            'gia_nuoc' => 2000,
            'gia_mang' => 3000,
            'gia_ve_sinh' => 4000,
        ];
    }
}
