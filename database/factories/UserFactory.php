<?php

namespace Database\Factories;

use App\Models\Account;
use App\Models\CCCDCard;
use App\Models\Room;
use App\Models\School;
use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'account_id' => Account::all()->rand()->uniqid()->id,
            'phong_id' => Room::all()->rand()->id,
            'truong_id' => School::all()->rand()->id,
            'phuong_tien_id' => Vehicle::all()->rand()->id,
            'cccd_id' => CCCDCard::all()->rand()->id,
            'ho_ten' => $this->faker->name(),
            'ngay_sinh' => $this->faker->date,
            'dia_chi' => $this->faker->address(),
            'ngay_den' => $this->faker->date(),
            'ngay_di' => $this->faker->date(),
        ];
    }
}
