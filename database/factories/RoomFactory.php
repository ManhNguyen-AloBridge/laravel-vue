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
            'so_phong' => rand(1, 5),
            'gia_phong_id' => $roomPrice->id,
        ];
    }
}
