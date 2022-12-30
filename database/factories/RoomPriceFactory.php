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
            'floor'=> $this->faker->unique()->randomElement([1,2,3,4,5]),
            'price'=> $this->faker->unique()->randomElement([1000,2000,3000,4000,5000]),
        ];
    }
}
