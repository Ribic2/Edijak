<?php

namespace App\Console;

use App\Models\Group;
use Carbon\Carbon;
use App\Models\Schedule as ScheduleModel;
use Illuminate\Console\Scheduling\Schedule;
use App\Http\Controllers\Scraper\ScraperController;
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
     * @param Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {

            if (Schedule::whereDate('created_at', Carbon::today())->count() == 0) {
                $groups = Group::all();
                foreach ($groups as $group) {
                    error_log($group->groupName);
                    $scraper = new ScraperController($group->groupName, $group->groupUrl);
                    $scraper->scrapData();
                }
            }
            error_log("Data was scrapped successfully!");
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
