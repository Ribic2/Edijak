<?php

namespace App\Http\Controllers;

use App\Events\UpdateNewEvent;
use App\Models\Answer;
use App\Models\Poll;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PollController extends Controller
{
    /**
     * Create poll for certain group
     * @param Request $request
     * @return JsonResponse
     */
    public function createGroupPoll(Request $request): JsonResponse
    {
        Auth::user()->createPoll($request)->addOptions();

        // Broadcasts new event message
        UpdateNewEvent::dispatch();

        return response()->json(
          "Anketa je bila dodana!"
        );
    }

    /**
     * Adds answer to database
     * @param Request $request
     * @return JsonResponse
     */
    public function addAnswer(Request $request): JsonResponse
    {
        if(!$request->exists(['pollId', 'answerId'])){
            abort(400, "Manjkajoči podatki!");
        }

        // Stores answer into database
        Answer::create([
            "userId" => Auth::id(),
            "pollId" => $request->input('pollId'),
            "optionId" => $request->input('answerId')
        ])->save();

        return response()->json([
          "response" => "Anketa uspešno odgovorjena!"
        ]);
    }
}
