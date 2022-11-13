<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CostLiving extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'gia_dien',
        'gia_nuoc',
        'gia_mang',
        'gia_ve_sinh',
    ];

    protected $hidden = [
    ];
}
