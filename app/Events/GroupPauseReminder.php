<?php

namespace App\Events;

use App\Models\Schedule;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class GroupPauseReminder implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public int $id;
    public int $hour;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($id, $hour)
    {
        $this->id = $id;
        $this->hour = $hour;
    }

    public function broadcastWith(): array
    {
        $nextSchedule = Schedule::where(['groupId' => $this->id, 'hourId' => $this->hour])->first();

        if($nextSchedule === null){
            return [
              "Konec pouka"
            ];
        }
        return [
            'subject' => $nextSchedule->subject,
            'class' => $nextSchedule->class,
            'hour' => $nextSchedule->hour,
            'type' => $nextSchedule->type,
        ];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return ['group.'.$this->id];
    }
}
