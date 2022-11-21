<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(
            [
                RoomSeeder::class,
                AccountSeeder::class,
                IdCardSeeder::class,
                CostLivingSeeder::class,
                RoomPriceSeeder::class,
                SchoolSeeder::class,
                VehicleSeeder::class,
                UserSeeder::class,
                ReceiptSeeder::class,
            ]
        );
    }
}
