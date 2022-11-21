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
        'so_dien',
        'so_nuoc',
        'thang',
        'tinh_trang_cap_nhat'
    ];

    protected $casts = [
        'tinh_trang_cap_nhat' => 'boolean'
    ];
}
