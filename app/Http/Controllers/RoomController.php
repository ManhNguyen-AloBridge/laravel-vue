<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Room;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Image;

class RoomController extends Controller
{
    public function index(): JsonResponse
    {
        $products = Room::all();
        return response()->json([
            'rooms' => $products
        ], 200);
    }
}
