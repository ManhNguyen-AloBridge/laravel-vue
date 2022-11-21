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
        'user_id',
        'gia_sinh_hoat_id',
        'gia_phong_id',
        'hoa_don_thang',
        'tien_phong',
        'tien_dien',
        'tien_nuoc',
        'tien_mang',
        'tien_ve_sinh',
        'khac',
    ];

    protected $hidden = [
    ];
}
