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
            // 1. Letniki
            [
                "id" => 1,
                "groupName" => "E1A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407749"
            ],
            [
                "id" => 2,
                "groupName" => "E1B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407752"
            ],
            [
                "id" => 3,
                "groupName" => "E1C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407755"
            ],
            [
                "id" => 4,
                "groupName" => "E1TA",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407758"
            ],
            [
                "id" => 5,
                "groupName" => "R1A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407761"
            ],
            [
                "id" => 6,
                "groupName" => "R1B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407764"
            ],
            [
                "id" => 7,
                "groupName" => "R1C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407782"
            ],
            [
                "id" => 8,
                "groupName" => "R1E",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407767"
            ],
            [
                "id" => 9,
                "groupName" => "R1TA",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407770"
            ],
            [
                "id" => 10,
                "groupName" => "T1A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407773"
            ],
            [
                "id" => 11,
                "groupName" => "T1B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407776"
            ],
            [
                "id" => 12,
                "groupName" => "T1C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407779"
            ],
            // 2. letniki
            [
                "id" => 13,
                "groupName" => "E2A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407716"
            ],
            [
                "id" => 14,
                "groupName" => "E2B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407719"
            ],
            [
                "id" => 15,
                "groupName" => "E2C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407722"
            ],
            [
                "id" => 16,
                "groupName" => "E2TA",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407725"
            ],
            [
                "id" => 17,
                "groupName" => "R2A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407728"
            ],
            [
                "id" => 18,
                "groupName" => "R2B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407731"
            ],
            [
                "id" => 19,
                "groupName" => "R2E",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407734"
            ],
            [
                "id" => 20,
                "groupName" => "R2TA",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407737"
            ],
            [
                "id" => 21,
                "groupName" => "T2A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407740"
            ],
            [
                "id" => 22,
                "groupName" => "T2B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407743"
            ],
            [
                "id" => 23,
                "groupName" => "T2C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407746"
            ],
            // 3. letnik
            [
                "id" => 24,
                "groupName" => "E3A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407689"
            ],
            [
                "id" => 25,
                "groupName" => "E3B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407692"
            ],
            [
                "id" => 26,
                "groupName" => "E3C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407695"
            ],
            [
                "id" => 27,
                "groupName" => "R3A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407698"
            ],
            [
                "id" => 28,
                "groupName" => "R3B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407701"
            ],
            [
                "id" => 29,
                "groupName" => "R3E",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407704"
            ],
            [
                "id" => 30,
                "groupName" => "T3A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407707"
            ],
            [
                "id" => 31,
                "groupName" => "T3B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407710"
            ],
            [
                "id" => 32,
                "groupName" => "T3C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407713"
            ],
            // 4. letnik
            [
                "id" => 33,
                "groupName" => "E4A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407665"
            ],
            [
                "id" => 34,
                "groupName" => "E4B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407668"
            ],
            [
                "id" => 35,
                "groupName" => "R4A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407671"
            ],
            [
                "id" => 36,
                "groupName" => "R4B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407674"
            ],
            [
                "id" => 37,
                "groupName" => "T4A",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407677"
            ],
            [
                "id" => 38,
                "groupName" => "T4B",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407683"
            ],
            [
                "id" => 39,
                "groupName" => "T4C",
                "groupUrl" => "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407686"
            ],
        ]);
    }
}
