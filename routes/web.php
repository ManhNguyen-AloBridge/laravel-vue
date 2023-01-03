<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DemoController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReceiptController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(HomeController::class)->prefix('/home')->name('home')->group(function (): void {
    Route::get('/', 'index');
});


Route::controller(AuthController::class)->group(function (): void {
    Route::middleware('guest')->group(function (): void {
        Route::view('/login','pages.auth.login');
    });

    Route::post('/login', 'login')->name('login');
    Route::get('/logout', 'logout');
});

Route::middleware('auth')->group(function(){


    Route::controller(StatisticController::class)->prefix('/statistic')->name('statistic')->group(function (): void {
        Route::post('/', 'store')->name('.store');
    });

    Route::controller(UserController::class)->prefix('/user')->name('user')->group(function (): void {
        Route::get('/', 'index')->name('.list');
        Route::get('/{id}', 'show')->name('.show');
        Route::post('/', 'create')->name('.create');
        Route::put('/{id}', 'update')->name('.update');
        Route::delete('/', 'delete')->name('.delete');
    });

    Route::controller(ReceiptController::class)->prefix('/receipt')->name('receipt')->group(function():void{
        Route::get('/{id}','show')->name('.show');
    });

    Route::controller(RoomController::class)->prefix('/room')->name('room')->group(function():void{
        Route::get('/','index')->name('.list');
    });
});


