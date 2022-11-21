<?php

namespace Database\Factories;

use App\Models\Account;
use App\Models\IdCard;
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

        // dd(Account::all()->random()->id);
        return [
            'account_id' => Account::all()->unique()->random()->id,
            'phong_id' => Room::all()->random()->id,
            'truong_id' => School::all()->random()->id,
            'phuong_tien_id' => Vehicle::all()->random()->id,
            'cccd_id' => IdCard::all()->random()->id,
            'ho_ten' => $this->faker->name(),
            'ngay_sinh' => $this->faker->date,
            'dia_chi' => $this->faker->address(),
            'ngay_den' => $this->faker->date(),
            'ngay_di' => $this->faker->date(),
        ];
    }
}
