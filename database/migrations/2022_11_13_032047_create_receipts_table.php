<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceiptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receipts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('phong_id')->constrained('rooms');
            $table->foreignId('gia_sinh_hoat_id')->constrained('cost_livings');
            $table->foreignId('gia_phong_id')->constrained('room_prices');
            $table->integer('hoa_don_thang');
            $table->integer('tien_phong');
            $table->integer('tien_dien');
            $table->integer('tien_nuoc');
            $table->integer('tien_mang');
            $table->integer('tien_ve_sinh');
            $table->string('khac')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('receipts');
    }
}
