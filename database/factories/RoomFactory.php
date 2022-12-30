<?php

namespace Database\Factories;

use App\Models\RoomPrice;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            'room_number' => rand(1, 5),
            'room_price_id' => $roomPrice->id,
        ];
    }
}
