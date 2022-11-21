<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('account_id')->constrained('accounts')->nullable();
            $table->foreignId('phong_id')->constrained('rooms');
            $table->foreignId('truong_id')->constrained('schools')->nullable();
            $table->foreignId('phuong_tien_id')->constrained('vehicles')->nullable();
            $table->foreignId('cccd_id')->constrained('id_cards');
            $table->string('ho_ten');
            $table->dateTime('ngay_sinh')->nullable();
            $table->string('dia_chi')->nullable();
            $table->string('ngay_den');
            $table->string('ngay_di')->nullable();
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
        Schema::dropIfExists('users');
    }
}
