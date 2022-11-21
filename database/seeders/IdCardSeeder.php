<?php

namespace Database\Seeders;

use App\Models\IdCard;
use Illuminate\Database\Seeder;

class IdCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        IdCard::factory()->count(20)->create();
    }
}
