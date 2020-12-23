<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["subject", "class", "hour", "userId", "groupId", "hourId"];
    protected $hidden = ['userId', 'groupId', 'hourId'];

    public function teacher(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(User::class, 'id', 'userId')
            ->select(array('id', 'nameAndSurname'));
    }

    public function hour(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Hour::class, 'id', 'hourId');
    }
}
