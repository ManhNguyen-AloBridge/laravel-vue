<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'so_phong',
        'so_dien',
        'so_nuoc',
        'tinh_trang_cap_nhat',
    ];

    protected $hidden = [
    ];

    protected $casts = [
        'tinh_trang_cap_nhat' => 'boolean'
    ];
}
