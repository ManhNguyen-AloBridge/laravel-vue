<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RoomPriceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'tang_so'=> $this->faker->rand(1,5),
            'gia_tien'=> $this->faker->randomElement([1000,2000,3000,4000,5000]),
        ];
    }
}
