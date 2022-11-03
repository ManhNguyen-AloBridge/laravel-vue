<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->prefix('product')->group(function () {
    Route::get('/get-list', 'getAll');
    Route::post('/create', 'store');
    Route::get('/{id}', 'show');
    Route::post('/{id}', 'update');
    Route::get('/delete/{id}', 'delete');
});

Route::controller(RoomController::class)->prefix('room')->group(function () {
    route::get('/', 'index');
});
