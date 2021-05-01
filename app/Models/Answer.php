<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = ['userId', 'optionId', 'pollId'];

    public function option(){
        return $this->hasOne(Option::class, 'pollId');
    }
}
