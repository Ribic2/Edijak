<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Schedule extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["subject", "class", "hour", "userId", "groupId", "hourId", "type", "classRoom"];
    protected $hidden = ['userId', 'groupId', 'hourId'];

    public function teacher(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'userId')
            ->select(array('id', 'nameAndSurname'));
    }

    public function hour(): HasOne
    {
        return $this->hasOne(Hour::class, 'id', 'hourId');
    }
}
