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
           [ RoomSeeder::class,
            AccountSeeder::class,
            CCCDCardSeeder::class,
            CostLivingSeeder::class,
            ReceiptSeeder::class,
            RoomPriceSeeder::class,
            SchoolSeeder::class,
            UserSeeder::class,
            VehicleSeeder::class,]
        );
    }
}
