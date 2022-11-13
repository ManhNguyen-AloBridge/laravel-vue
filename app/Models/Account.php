<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Account extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable =[
        'email',
        'password',
        'url_avatar',
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];
}
