<?php

namespace App\Console\Commands;

use App\Events\GroupPauseReminder;
use App\Models\Group;
use App\Models\Hour;
use App\Models\Pause;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Console\Command;

class presentationPauseReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send next hour reminder (presentation)';

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
     * @return void
     */
    public function handle()
    {
        $groups = Group::all();

        foreach ($groups as $group) {
            event(new GroupPauseReminder($group->id, 6));
        }
    }
}
