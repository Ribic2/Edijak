<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Poll extends Model
{
    use HasFactory;

    protected $fillable = [
        "pollTitle",
        "pollDescription",
        "creatorId",
        "groupId",
    ];

    public function options(): HasMany
    {
        return $this->hasMany(Option::class, 'pollId', 'id');
    }
}
