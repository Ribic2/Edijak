<?php

namespace App\Http\Controllers;

use Goutte\Client;

class ScraperController extends Controller
{
    /**
     * Stores Easistent url of selected class
     * @var string
     */
    public string $easistentClassUrl;

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
     * Adds new data to database
     */
    public function appendToDB()
    {
        foreach ($this->schedule as $hour) {
            var_dump($hour);
        }
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
        (array)$tempArray = array();

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
     * Organises data for block hour and stores it to public array
     * @param string $data
     * @param string $hour
     */
    public function organiseBlockHourData(string $data, string $hour)
    {
        $separate_data = explode(" ", $data);

        if (count($separate_data) >= 5) {
            array_pop($separate_data);
        }

        (string)$nameAndSurname = "";
        (string)$classRoom = $separate_data[3];
        (string)$subject = $separate_data[0];

        /**
         * Creates name and surname
         */
        for ($i = 1; $i < count($separate_data) - 1; $i++) {
            if ($nameAndSurname == "") {
                $nameAndSurname .= $separate_data[$i];
            } else {
                $nameAndSurname .= " " . $separate_data[$i];
            }
        }

        /**
         * Formatted data
         */
        $data = array(
            "teacher" => rtrim($nameAndSurname, ","),
            "classRoom" => $classRoom,
            "subject" => $subject,
            "hour" => $hour
        );

        array_push($this->schedule, $data);
    }

    /**
     * Formats received data and stores them into public array
     * @param array $data
     */
    public function formatData(array $data)
    {
        foreach ($data as $j) {
            (string)$tempString = "";
            $explode = explode(", ", $j["text"]);

            // Only if explode is longer than 2 (if it's exactly 2 then it counts as normal hours)
            if (count($explode) > 2) {
                $sec_explode = explode(" ", $j["text"]);
                foreach ($sec_explode as $i) {
                    /**
                     * At the start of the loops, string will be added to tempString with no spaces at the beginning
                     */
                    if (strlen($tempString) == 0) {
                        $tempString .= $i;
                    } else if ($i == end($sec_explode)) {
                        $tempString .= " " . $i;
                        $this->organiseBlockHourData($tempString, $j["hour"]);
                        break;
                    } /**
                     * If expression matches the regex, it stores it into temp array and resets the string
                     * Regex checks for subject names in short version (ROM, NSA, SLO...)
                     */
                    else if (preg_match('/([[:upper:]]|(-v|-p)){3,}/u', $i)) {
                        /**
                         * Data will be furthermore formatted into subject, hour, teacher and class room
                         * then It will be added to temp array
                         */
                        $this->organiseBlockHourData($tempString, $j["hour"]);
                        $tempString = "";
                        $tempString .= $i;
                    } else {
                        /**
                         * It adds new string to string, unless single number is found.
                         * Single number is found, where there is more than 1 subject per hour
                         * Usually class it self is split into groups
                         */
                        if (strlen($i) != 1) {
                            $tempString .= " " . $i;
                        }
                    }
                }
            } else if(count($explode) == 2) {
                // Second explode separates subject and name/surnames
                (array)$sec_explode = explode(" ", $explode[0]);
                (string)$subject = $sec_explode[0];
                (string)$nameAndSurname = "";
                (string)$classRoom = $explode[1];


                // Combines name and surname
                for ($i = 1; $i < count($sec_explode); $i++) {
                    if ($nameAndSurname == null) {
                        $nameAndSurname .= $sec_explode[$i];
                    } else {
                        $nameAndSurname .= " " . $sec_explode[$i];
                    }
                }

                $data = array(
                    "teacher" => $nameAndSurname,
                    "classRoom" => $classRoom,
                    "subject" => $subject,
                    "hour" => $j["hour"]
                );
                array_push($this->schedule, $data);
            }
            else{
                $data = array(
                    "teacher" => "",
                    "classRoom" => "",
                    "subject" => "",
                    "hour" => $j["hour"]
                );

                array_push($this->schedule, $data);
            }

        }
        $this->appendToDB();
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

        // Gets school timetable for today
        $crawler->filter('.ednevnik-seznam_ur_teden-td.ednevnik-seznam_ur_teden-td-danes')->each(function ($node) use (&$tempArray, &$counter) {
            array_push($tempArray, ["hour" => $counter, "text" => $node->text()]);
            $counter++;
        });
        $this->formatData($tempArray);
    }

}
