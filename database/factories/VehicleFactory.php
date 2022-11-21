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
            'ten_phuong_tien' => $this->faker->name(),
            'bien_so' => Str::random(6,6),
            'mau_sac' => $this->faker->randomElement(['black','red','blue']),
            'url_anh' => null
        ];
    }
}
