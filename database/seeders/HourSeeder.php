<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hours')->insert([
            [
                "id" => 1,
                "from" => "7:10",
                "to" => "7:55"
            ],
            [
                "id" => 2,
                "from" => "8:00",
                "to" => "8:45"
            ],
            [
                "id" => 3,
                "from" => "8:50",
                "to" => "9:35"
            ],
            [
                "id" => 4,
                "from" => "9:40",
                "to" => "10:25"
            ],
            [
                "id" => 5,
                "from" => "10:30",
                "to" => "11:15"
            ],
            [
                "id" => 6,
                "from" => "11:20",
                "to" => "12:05"
            ],
            [
                "id" => 7,
                "from" => "12:10",
                "to" => "12:55"
            ],
            [
                "id" => 8,
                "from" => "13:00",
                "to" => "13:45"
            ],
            [
                "id" => 9,
                "from" => "13:50",
                "to" => "14:35"
            ],
        ]);
    }
}
