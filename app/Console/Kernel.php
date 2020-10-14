<?php

namespace App\Console;

use App\Models\Group;
use Carbon\Carbon;
use App\Models\Schedule as ScheduleModel;
use Illuminate\Console\Scheduling\Schedule;
use App\Http\Controllers\ScraperController;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function(){

            if(ScheduleModel::whereDate('created_at', Carbon::today())->count() == 0){
                $groups = Group::all();
                foreach ($groups as $group){
                    $scraper = new ScraperController($group->groupName, $group->groupUrl);
                    $scraper->scrapData();
                }
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
