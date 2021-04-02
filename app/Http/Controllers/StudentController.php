<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Event;
use App\Models\Group;
use App\Models\Poll;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    /**
     * Returns latest schedule for selected group
     * @return JsonResponse
     */
    public function getSchedule(): JsonResponse
    {
        return response()->json([
            "Schedule" => Schedule::where('groupId', Auth::user()->groupId)->whereDate('created_at', Carbon::today())->
            with('teacher', 'hour')->get(),
            "Group" => Group::where('id', Auth::user()->groupId)->get()
        ]);
    }

    /**
     * Get all polls for specific group
     * @return JsonResponse
     */
    public function getPollsAndEvents(): JsonResponse
    {
        (array)$availablePolls = [];
        foreach (Poll::where(['groupId' => Auth::user()->groupId, 'isFinished' => 0])->with('options')->get() as $poll){
            if(Answer::where(['pollId' => $poll->id, 'userId' => Auth::id()])->count() == 0){
                array_push($availablePolls, $poll);
            }
        }


        return response()->json([
            "polls"  => $availablePolls,#Poll::where('groupId', Auth::user()->groupId)->with(['options'])->get(),
            "events" => Event::where('groupId', Auth::user()->groupId)->get()
        ]);
    }
}
