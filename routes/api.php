<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/student/{id}/schedule', [StudentController::class, 'getSchedule']);
Route::post('/user/login', [AuthController::class, 'login']);

// works teacher
Route::get('/teacher/schedule', [TeacherController::class, 'getSchedules']);
Route::get('/teacher/groups', [TeacherController::class, 'allGroups']);

