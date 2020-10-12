<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->insert([
            [
                "id" => 1,
                "groupName" => "R4B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407674"
            ],
            [
                "id" => 2,
                "groupName" => "R4A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407671"
            ]
        ]);
    }
}
