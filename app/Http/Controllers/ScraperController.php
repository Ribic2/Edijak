<?php

namespace App\Http\Controllers;

use Goutte\Client;
use App\Models\Teacher;

class ScraperController extends Controller
{
    /**
     * Stores Easistent url of selected class
     * @var string
     */
    public string $easistentClassUrl = "https://www.easistent.com/urniki/5738623c4f3588f82583378c44ceb026102d6bae/razredi/407674";

    /**
     * Name of currently selected class
     * @var string
     */
    public string $className;

    /**
     * Used for storing school timetable
     * @var array
     */
    public array $schedule = [];

    /**
     * ScraperController constructor.
     * @param string $className
     * @param string $url
     */
    public function __construct(string $className, string $url)
    {
        $this->easistentClassUrl = $url;
        $this->className = $className;
    }

    /**
     * TODO
     * Adds new data to database
     */
    public function appendToDB()
    {
        // Loops through schedule
        foreach ($this->schedule as $hour){

        }
    }

    /**
     * Checks if teacher is already stored in database
     * @param string $teacherName
     */
    public function checkForTeachers(string $teacherName){

    }
    /**
     * Checks if event lasts whole day and formats it correctly
     * @return bool
     */
    public function checkForEvent(): bool
    {
        $client = new Client();
        $crawler = $client->request('GET', $this->easistentClassUrl);

        /**
         * Counter counts hours
         */
        (int)$counter = 1;
        (array)$tempArray = [];

        /**
         * Checks for events
         */
        $crawler->filter('.ednevnik-seznam_ur_teden-td-dogodek')->each(function ($node) use (&$tempArray, &$counter) {
            $explode = explode(" ", $node->text());
            $dataArray = [
                "Subject" => $explode[2] . " " . $explode[3],
                "Teacher" => "",
                "Class" => "",
                "Hour" => $counter
            ];
            array_push($tempArray, $dataArray);
            $counter++;
        });

        if (count($tempArray) != 0) {
            $this->schedule = $tempArray;
            return true;
        }
        return false;
    }

    /**
     * Formats data
     * @param array $data
     */
    public function formatData(array $data)
    {
        (array)$tempArray = [];
        foreach ($data as $j) {
            (string)$tempString = "";
            $explode = explode(" ", $j["text"]);
            foreach ($explode as $i) {
                /** Checks if string is null or not
                 * If it is it adds new element with no space in beginning
                 * Else it add new element WITH space
                 */
                if (strlen($tempString) == 0) {
                    $tempString .= $i;
                } else if (preg_match('/([[:upper:]]|(-v|-p)){3,}/u', $i)) {
                    /**
                     * Checks only if there are multiple classes in one hour
                     */
                    $other = explode(" ", $tempString);
                    $this->checkForTeachers($other[1]." ".$other[2]);

                    $dataArray = [
                        "Subject" => $other[0],
                        "Teacher" => $other[1] . " " . $other[2],
                        "Class" => $other[3],
                        "Hour" => $j["ura"]

                    ];
                    array_push($tempArray, $dataArray);
                    $tempString = "";
                    $tempString .= $i;
                } else {
                    // Removes single number from array
                    if (strlen($i) != 1) {
                        $tempString .= " " . $i;
                    }
                }
            }

            /**
             * Checks if there is only one subject per given hour
             */
            if ($tempString != null) {
                $other = explode(" ", $tempString);
                $this->checkForTeachers($other[1]." ".$other[2]);
                $dataArray = [
                    "Subject" => $other[0],
                    "Teacher" => $other[1] . " " . $other[2],
                    "Class" => $other[3],
                    "Hour" => $j["ura"]
                ];
                array_push($tempArray, $dataArray);
            } else {
                /**
                 * Appends empty with hour data, if there is no subject at given hour
                 */
                $dataArray = [
                    "ura" => $j["ura"]
                ];
                array_push($tempArray, $dataArray);
            }
        }

        // Appends array to public global array
        $this->schedule = $tempArray;
    }

    /**
     * Scraps data from Easistent urniki
     */
    public function scrapData()
    {
        $client = new Client();
        $crawler = $client->request('GET', $this->easistentClassUrl);

        /**
         * Counter counts hours
         */
        (int)$counter = 1;
        (array)$tempArray = [];

        // If there is no event data wil be formatted normally
        if (!$this->checkForEvent()) {
            // Gets school timetable for today
            $crawler->filter('.ednevnik-seznam_ur_teden-td.ednevnik-seznam_ur_teden-td-danes')->each(function ($node) use (&$tempArray, &$counter) {
                array_push($tempArray, ["ura" => $counter, "text" => $node->text()]);
                $counter++;
            });
            $this->formatData($tempArray);
        }
    }
}
