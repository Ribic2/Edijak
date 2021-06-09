<?php

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('edijak', \App\Broadcasting\Edijak::class);

Broadcast::channel('edijak.{userId}', function ($user, $userId) {
    return $user->id == $userId;
});

Broadcast::channel('group.{groupId}', function ($user, $groupId) {
    return $user->id == User::where(['groupId', $groupId])->first()->id;
});
