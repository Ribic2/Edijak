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
        // Array loops through Polls that are assigned to users group, then it adds then to array with answer.
        // If answer  was not provided, then answer is returned as null.
        foreach (Poll::where(['groupId' => Auth::user()->groupId])->with('options')->orderByDesc('created_at')->get() as $poll) {
            array_push($availablePolls, ["poll" => $poll, "answer" => Answer::where(
                    ['userId' => Auth::user()->id, "pollId" => $poll->id])
                    ->with('option')->first()
                ]
            );
        }

        return response()->json([
            "polls" => $availablePolls,
            "events" => Event::where('groupId', Auth::user()->groupId)->orderByDesc('created_at')->get()
        ]);
    }
}
