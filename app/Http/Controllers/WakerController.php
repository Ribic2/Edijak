<?php

namespace App\Http\Controllers;

use App\Events\WakerEvent;
use App\Models\Group;
use App\Models\User;
use App\Models\Waker;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WakerController extends Controller
{

    public function findRecordBeforeInsert($request): bool
    {
        $user = Waker::where(
            [
                'userId' => $request->input('userId'),
                'teacherId' => Auth::id(),
                'currentHour' => $request->input('currentHour'),
                #'created_at' => Carbon::today()
            ]
        )->count();
        return $user > 0;
    }

    public function updateWakerCounter(int $user, int $hour)
    {
        $user = Waker::where([
            'userId' => $user,
            'teacherId' => Auth::id(),
            'currentHour' => $hour])->first();

        if ($user->wakeCallsCounter != 3) {
            $user->increment('wakeCallsCounter');
        } else {
            $user->update(['nonResponsive' => 1]);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function sendWakerCall(Request $request): JsonResponse
    {
        if ($this->findRecordBeforeInsert($request)) {
           $this->updateWakerCounter($request->input('userId'), $request->input('currentHour'));
        } else {
            // Creates new instance if user was not woken before in specific group
            Waker::create([
                "userId" => $request->input('userId'),
                "teacherId" => Auth::id(),
                "currentHour" => $request->input('currentHour')
            ])->save();
        }

        $user = User::where('id', $request->input('userId'))->first();

        event(new WakerEvent($user->id));

        return response()->json(
            User::where('groupId', $user->groupId)->with('waker')->get()
        );
    }
}
