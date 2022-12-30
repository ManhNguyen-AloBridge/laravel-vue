<?php

namespace Database\Factories;

use App\Models\RoomPrice;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Log;

class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $roomPrice = RoomPrice::all()->random();
        $roomNumber = $this->faker->unique(true)->randomElement([1,2,3,4,5,6,7,8,9,10]);

        return [
            'number' => $roomNumber,
            'price_id' => $roomPrice->id,
        ];
    }
}
