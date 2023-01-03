<?php

namespace Database\Factories;

use App\Models\CostLiving;
use App\Models\Room;
use App\Models\RoomPrice;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReceiptFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $costLiving = CostLiving::all()->random();
        $room = Room::all()->random();

        return [
            'room_id' => $room->id,
            'cost_living_id' => $costLiving->id,
            'monthly_bill' => rand(1,12),
            'room_price' => 3000,
            'electric_price' => $costLiving->electric_price*3,
            'water_price' => $costLiving->water_price*3,
            'internet_price' => $costLiving->internet_price*3,
            'general_hygiene_price' => $costLiving->general_hygiene_price*3,
            'other' => null,
        ];
    }
}
