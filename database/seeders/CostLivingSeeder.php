<?php

namespace Database\Seeders;

use App\Models\CostLiving;
use Illuminate\Database\Seeder;

class CostLivingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CostLiving::factory()->count(1)->create();
    }
}
