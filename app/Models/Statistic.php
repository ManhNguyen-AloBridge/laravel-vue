<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Statistic extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'id',
        'room_id',
        'electric_number',
        'water_number',
        'month',
        'status_update'
    ];

    protected $casts = [
        'status_update' => 'boolean'
    ];
}
