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
            $table->bigInteger('account_id');
            $table->integer('phong_id');
            $table->integer('truong_id');
            $table->bigInteger('phuong_tien_id');
            $table->bigInteger('cccd_id');
            $table->string('ho_ten');
            $table->dateTime('ngay_sinh');
            $table->string('dia_chi');
            $table->string('ngay_den');
            $table->string('ngay_di');
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
