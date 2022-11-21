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
        $roomPrice = RoomPrice::all()->random();
        $costLiving = CostLiving::all()->random();
        $room = Room::all()->random();

        return [
            'phong_id' => $room->id,
            'gia_sinh_hoat_id' => $costLiving->id,
            'gia_phong_id' => $roomPrice->id,
            'hoa_don_thang' => rand(1,12),
            'tien_phong' => $roomPrice->gia_tien,
            'tien_dien' => $costLiving->gia_dien*3,
            'tien_nuoc' => $costLiving->gia_nuoc*3,
            'tien_mang' => $costLiving->gia_mang*3,
            'tien_ve_sinh' => $costLiving->gia_ve_sinh*3,
            'khac' => null,
        ];
    }
}
