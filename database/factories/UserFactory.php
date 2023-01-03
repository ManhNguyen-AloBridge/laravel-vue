<?php

namespace Database\Factories;

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

        return [
            'email' => $this->faker->email,
            'password' => $this->faker->password(6,10),
            'url_avatar' => null,
            'room_id' => Room::all()->random()->id,
            'school_id' => School::all()->random()->id,
            'vehicle_id' => Vehicle::all()->random()->id,
            'card_id' => IdCard::all()->random()->id,
            'name' => $this->faker->name(),
            'birthdate' => $this->faker->date,
            'address' => $this->faker->address(),
            'joined_date' => $this->faker->date(),
            'leaved_date' => $this->faker->date(),
        ];
    }
}
