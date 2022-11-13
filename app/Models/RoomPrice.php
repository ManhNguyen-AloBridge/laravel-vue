<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RoomPrice extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'tang_so',
        'gia_tien',
    ];

    protected $hidden = [
    ];
}
