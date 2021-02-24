<?php

namespace App\Http\Controllers;

use App\Events\UpdateNewEvent;
use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    /**
     * Adds new event for specific class
     * @param Request $request
     * @return JsonResponse
     */
    public function addEvent(Request $request): JsonResponse
    {
        // Checks if all data was provided
        if(!$request->exists(['eventTitle', 'eventType', 'eventDescription', 'to'])){
            abort(400, "Nekaj podatkov manjka");
        }

        // Creates new Event
        Event::create([
            'eventTitle' => $request->input('eventTitle'),
            'description' => $request->input('eventDescription'),
            'type' => $request->input('eventType'),
            'to' => $request->input('to'),
            'userId' => Auth::id(),
            'groupId' => $request->input('groupId')
        ])->save();

        // Broadcasts new event message
        UpdateNewEvent::dispatch();

        return response()->json(
            "Dogodek je bil ustvarjen in poslan dijakom!"
        );
    }
}
