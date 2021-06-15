<?php

namespace App\Console\Commands;

use App\Events\GroupPauseReminder;
use App\Models\Group;
use App\Models\Hour;
use App\Models\Pause;
use App\Models\Schedule;
use Carbon\Carbon;
use DateTime;
use Illuminate\Console\Command;

class SendPauseResponse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pause:reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends data to every group about next hour during pause.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $hours = Hour::all();
        $groups = Group::all();

        $now = new DateTime("now", new \DateTimeZone('Europe/Berlin'));
        $max = new DateTime('14:35:00', new \DateTimeZone('Europe/Berlin'));
        $min = new DateTime('07:10:00', new \DateTimeZone('Europe/Berlin'));

        $getHourTime = new DateTime('now', new  \DateTimeZone('Europe/Berlin'));
        $getHourTime->modify('+10 minutes');
        $getNextHour = Hour::whereTime('from', '<', $getHourTime)->whereTime('to', '>', $getHourTime)->first();

        (int)$counter = 0;
        $currentHour = null;

        // Loop goes through every possible hour in hours table and compares them to current time
        foreach ($hours as $hour) {
            if ($hour->from != "Po pouku") {
                $from = new DateTime(strval($hour->from), new \DateTimeZone('Europe/Berlin'));
                $to = new DateTime(strval($hour->to), new \DateTimeZone('Europe/Berlin'));

                // If now is in between in any hours then it increments counter variable
                if ($now >= $from && $now <= $to) {
                    $counter++;
                }

                // If current time is before 07:00 or over 14.35 then it returns and error
                if ($now > $max || $now < $min) {
                    $this->error('Konec pouka!');
                    return 1;
                }
            }
        }

        foreach ($groups as $group) {
            // Checks if next hour exists for a group
            /*$checkNextHour = Schedule::where(
                ['groupId' => $group->id, "hourId" => $getNextHour->id]
            )->whereDate('created_at', Carbon::today())->first();

            // Checks if request was already sent so there are no duplicates and unwanted traffic
            $check = Pause::where([
                "groupId" => $group->id,
                "hourId" => $getNextHour->id,
            ])->whereDate('created_at', Carbon::today())->count();

            if ($checkNextHour != null && $check > 0) {
                Pause::create([
                    "groupId" => $group->id,
                    "hourId" => $getNextHour->id
                ])->save();

                event(new GroupPauseReminder($group->id, $getNextHour->id));
            }*/
            event(new GroupPauseReminder($group->id, $getNextHour->id));
        }
    }
}
