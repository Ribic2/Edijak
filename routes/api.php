<?php

use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\AuthController;

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

Route::get('/group/{id}/schedule', [ScheduleController::class, 'getSchedule']);
Route::post('/user/login', [AuthController::class, 'login']);

Route::post('/test', [AuthController::class, 'test']);
