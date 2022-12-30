<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CostLiving extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        'id',
        'electric_price',
        'water_price',
        'internet_price',
        'general_hygiene_price',
    ];

    protected $hidden = [
    ];

    public function receipts(){
        return $this->hasMany(Receipt::class);
    }
}
