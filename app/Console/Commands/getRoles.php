<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Role;

class getRoles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:roles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create roles!';

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
     */
    public function handle()
    {
        Role::create(['name' => 'student'])->save();
        Role::create(['name' => 'teacher'])->save();
    }
}
