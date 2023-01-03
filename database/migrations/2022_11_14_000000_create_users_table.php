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
            $table->string('email');
            $table->string('password');
            $table->string('url_avatar')->nullable();
            $table->foreignId('room_id')->constrained('rooms');
            $table->foreignId('school_id')->constrained('schools')->nullable();
            $table->foreignId('vehicle_id')->constrained('vehicles')->nullable();
            $table->foreignId('card_id')->constrained('id_cards');
            $table->string('name');
            $table->dateTime('birthdate')->nullable();
            $table->string('address')->nullable();
            $table->string('joined_date');
            $table->string('leaved_date')->nullable();
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
