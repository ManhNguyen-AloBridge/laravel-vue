<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable =[
        // 'id',
        'room_price_id',
        'room_number',
    ];

    protected $hidden = [
    ];

    protected $casts = [
    ];

    public function roomPrice(){
        return $this->belongsTo(RoomPrice::class, 'price_id','id');
    }
}
