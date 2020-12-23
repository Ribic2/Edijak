<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    /**
     * Returns latest schedule for selected group
     * @param int $id
     * @return JsonResponse
     */
    public function getSchedule(int $id): JsonResponse
    {
        return response()->json([
            "Schedule" => Schedule::where('groupId', $id)->whereDate('created_at', Carbon::today())->
            with('teacher', 'hour')->get(),
            "Group" => Group::where('id', $id)->get()
        ]);
    }

}
