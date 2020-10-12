<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


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
}
