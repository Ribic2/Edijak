<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Event
 * @package App\Models
 * @property int id,
 * @property string eventTitle
 * @property string description
 * @property string to
 * @property string type
 */

class Event extends Model
{

    public $fillable = ['eventTitle', 'description', 'to', 'type', 'groupId', 'userId'];
    use HasFactory;
}
