<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;


/**
 * Class Group
 * @package App\Models
 * @property int id
 * @property string groupName
 * @property string groupUrl
 */
class Group extends Model
{
    use HasFactory;


    public function schedules(): BelongsTo
    {
        return $this->belongsTo(Schedule::class)->where(['userId' => Auth::id()]);
    }
}
