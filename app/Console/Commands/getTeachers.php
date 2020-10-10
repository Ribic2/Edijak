<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\TeacherController;

class getTeachers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:teachers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scraps data from Sestg website and stores teachers data to database';

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
        $scraper = new TeacherController();

        $scraper->scrapData();
    }
}
