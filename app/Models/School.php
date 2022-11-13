<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'ten_truong',
        'ten_viet_tat',
        'dia_chi',
    ];

    protected $hidden = [
    ];
}
