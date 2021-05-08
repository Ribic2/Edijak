<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waker extends Model
{
    use HasFactory;

    protected $fillable = ['userId', 'teacherId', 'currentHour', 'nonResponsive'];
}
