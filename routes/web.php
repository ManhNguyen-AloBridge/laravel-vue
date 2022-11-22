<?php

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

Route::get('/', function () {
    return view('home');
});

Route::controller(StatisticController::class)->prefix('/statistic')->name('statistic')->group(function(){
    Route::post('/','store')->name('.store');
});

Route::controller(UserController::class)->prefix('user')->name('user')->group(function(){
    Route::get('/','index')->name('.list');
    // Route::get('/list',function(){
    //     return view('pages.user.index')->name('.list');
    // });
    Route::get('/:id','show')->name('.show');
    Route::post('/','create')->name('.create');
    Route::put('/:id','update')->name('.update');
    Route::delete('/','delete')->name('.delete');
});
