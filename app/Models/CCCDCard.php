<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CCCDCard extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'so_cccd',
        'url_cccd',
    ];

    protected $hidden = [
    ];
}
