<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\PollController;
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

Route::post('/user/login', [AuthController::class, 'login']);
Route::get('/user', [AuthController::class, 'getUser']);

Route::middleware(['auth:api'])->group(function () {
    Route::get('/student/schedule', [StudentController::class, 'getSchedule']);
    Route::get('/student/polls', [StudentController::class, 'getPollsAndEvents']);

    // Teacher only methods
    #Route::middleware(['checkTeacher'])->group(function(){
    Route::get('/teacher/schedule', [TeacherController::class, 'getSchedules']);
    Route::get('/teacher/groups', [TeacherController::class, 'allGroups']);
    Route::post('/teacher/group/students', [TeacherController::class, 'getStudentsForSelectedHour']);
    Route::post('/teacher/event', [EventController::class, 'addEvent']);
    Route::post('/teacher/poll', [PollController::class, 'createGroupPoll']);
    Route::get('/teacher/group/{id}', [TeacherController::class, 'getGroup']);
    #Route::post('/teacher/poll', [PollController::class, 'createPoll']);
    #});
});


