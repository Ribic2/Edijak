<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;

class Hour extends Model
{
    use HasFactory;

    public function schedules(): HasOne
    {
        return $this->hasOne(\App\Models\Schedule::class, 'hourId', 'id')
            ->where('userId', Auth::id())
            ->whereDate('Created_at', Carbon::today());
    }
}
