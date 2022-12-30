<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Receipt extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'id',
        'room_id',
        'user_id',
        'cost_living_id',
        'monthly_bill',
        'room_price',
        'electric_price',
        'water_price',
        'internet_price',
        'general_hygiene_price',
        'other',
    ];

    protected $hidden = [
    ];
}
