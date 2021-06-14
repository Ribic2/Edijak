<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Hour;
use App\Models\User;
use App\Models\Waker;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
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
     * Gets all students off specific group
     * @param Request $request
     * @return JsonResponse
     */
    public function getGroupStudents(Request $request): JsonResponse
    {
        $className = $request->input('className');
        $group = Group::where('groupName', $className)->first();
        return response()->json(
            User::where('groupId', $group->id)->with('waker')->get()
        );
    }
    /**
     * Get students for selected hour
     * @param Request $request
     * @return JsonResponse
     */
    public function getStudentsForSelectedHour(Request $request): JsonResponse
    {
        $group = Group::where('groupName', $request->input('groupName'))->first();
        return response()->json([
            User::where('groupId', $group->id)->with('waker')->get()
        ]);
    }

    /**
     * Returns all groups that teacher is teaching
     * @return JsonResponse
     */
    public function allGroups(): JsonResponse
    {
        return response()->json(
            DB::table('groups')
                ->select('groups.groupName', 'groups.id')
                ->join('schedules', 'groups.id', '=', 'schedules.groupId')
                ->where('schedules.userId', '=', Auth::id())
                ->distinct()->get()
        );
    }

    /**
     * Gets selected group info
     * @param int $id
     * @return JsonResponse
     */
    public function getGroup(int $id): JsonResponse
    {
        return response()->json(
            Group::find($id)
        );
    }
}
