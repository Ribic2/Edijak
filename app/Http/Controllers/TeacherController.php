<?php

namespace App\Http\Controllers;

use App\Models\Hour;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    /**
     * Return schedule for specific teacher
     * @return JsonResponse
     */
    public function getSchedules(): JsonResponse
    {
        return response()->json(
           Hour::with('schedules')->get()
        );
    }

    /**
     * Returns all groups that teacher is teaching
     * @return JsonResponse
     */
    public function allGroups(): JsonResponse
    {
        return response()->json(
            DB::table('groups')
                ->select('groups.groupName')
                ->join('schedules', 'groups.id', '=', 'schedules.groupId')
                ->where('schedules.userId', '=', 15)
                ->distinct()->get()
        );
    }
}
