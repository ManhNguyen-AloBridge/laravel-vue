<?php

namespace Database\Seeders;

use App\Models\CCCDCard;
use Illuminate\Database\Seeder;

class CccdCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CccdCard::factory()->count(20)->create();
    }
}
