<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Image;

class ProductController extends Controller
{
    public function getAll(): JsonResponse
    {
        $products = Product::all();
        return response()->json([
            'products' => $products
        ], 200);
    }

    public function store(Request $request): void
    {
        $product = new Product();
        $name = '';
        $product->name = $request->name;
        $product->description = $request->description;

        if ($request->photo != '') {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo, 0, $strpos);
            $ex =  explode('/', $sub)[1];
            $name = time() . "." . $ex;
            $img = Image::make($request->photo)->resize(200, 200);
            $upload_path = public_path() . '/upload/';
            $img->save($upload_path . $name);
            $product->photo  = $name;
        } else {
            $product->photo = 'image.png';
        }

        $product->photo = $name;
        $product->type = $request->type;
        $product->quantity = $request->quantity;
        $product->price = $request->price;

        $product->save();
    }

    public function show($id): JsonResponse
    {
        $product = Product::find($id);
        return response()->json(['product' => $product], 200);
    }

    public function update(Request $request, int $id): void
    {
        $product = Product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        if ($product->photo != $request->photo) {
            $strpos = strpos($request->photo, ';');
            $sub = substr($request->photo, 0, $strpos);
            $ex =  explode('/', $sub)[1];
            $name = time() . "." . $ex;
            $img = Image::make($request->photo)->resize(200, 200);
            $upload_path = public_path() . '/upload/';
            $image = $upload_path . $product->photo;
            $img->save($upload_path . $name);

            if (file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $product->photo;
        }

        $product->photo = $name;
        $product->type = $request->type;
        $product->quantity = $request->quantity;
        $product->price = $request->price;

        $product->save();
    }

    public function delete(int $id): void
    {
        $product = Product::findOrFail($id);
        $image_path = public_path() . '/upload/';
        $image = $image_path . $product->photo;
        if (file_exists($image)) {
            @unlink($image);
        }
        $product->delete();
    }
}
