<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Teacher
 * @package App\Models
 * @property string name
 * @property string surname
 * @property string email
 * @property string password
 * @property string subject
 * @property string nameAndSurname
 */
class Teacher extends Model
{
    protected $fillable = ['name', 'surname', 'email', 'password', 'subject', 'nameAndSurname'];
}
