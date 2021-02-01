<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Hour extends Model
{
    use HasFactory;

    public function schedules(): HasOne
    {
        return $this->hasOne(\App\Models\Schedule::class, 'hourId', 'id')
            ->where('userId', 15)
            ->whereDate('Created_at', Carbon::today());
    }
}
