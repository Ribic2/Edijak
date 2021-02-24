<?php

namespace App\Http\Controllers;

use App\Events\UpdateNewEvent;
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
}
