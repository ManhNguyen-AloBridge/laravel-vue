<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vehicle extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'ten_phuong_tien',
        'bien_so',
        'mau_sac',
        'url_anh',
    ];

    protected $hidden = [
    ];
}
