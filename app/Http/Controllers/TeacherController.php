<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Goutte\Client;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    /**
     * Formats surname data
     * @param array $surname
     * @return string
     */
    public function formatSurname(array $surname): string{
        array_pop($surname);
        (string)$formattedSurname = "";

        foreach ($surname as $i){
            if($formattedSurname == null){
                $formattedSurname .= $i;
            }
            else{
                $formattedSurname .= " ".$i;
            }
        }
        return $formattedSurname;
    }

    /**
     * Formats data and stores it to database
     * @param array $data
     */
    public function formatDataAndStoreIt(array $data)
    {
        foreach ($data as $teacher){
            $explode = explode('=', $teacher);
            $explodeNameAndSurname = explode(" ", $explode[0]);

            // Formatting data
            (string)$name = end($explodeNameAndSurname);
            (string)$surname =  $this->formatSurname($explodeNameAndSurname);
            (string)$email = str_replace('(at)', '@', $explode[2]);
            (string)$subject = $explode[1];
            (string)$firstLetterSurname = mb_substr(end($explodeNameAndSurname), 0, 1);

            $teacher = Teacher::create([
                "name"=>$name,
                "surname" => $surname,
                "nameAndSurname" => $firstLetterSurname.". ".$surname,
                "email" => $email,
                "password" => Hash::make("test"),
                "subject" => $subject
            ]);

            if(!$teacher->save()){
                abort(403, "There was an error storing the data!");
            }
        }
    }

    /**
     * Scraps data from SESTG teacher council and stores it to temporary array
     */
    public function scrapData()
    {
        // Checks if data was already inserted
        if (Teacher::all()->count() == 0) {
            $client = new Client();
            (string)$tempString = "";
            (array)$tempArray = [];

            $crawler = $client->request('GET', 'https://www.sc-nm.si/sestg/informacije/zaposleni_2/uciteljski-zbor-sestg');

            $data = $crawler->filter('.page-part-content > .moja_tabela > tbody > tr > td');

            // Loops through data and formats it together into a string and pushes it do temporary array;
            $len = count($data);
            $i = 0;
            foreach ($data as $node){
                if (!is_numeric($node->nodeValue)) {
                    if ($tempString == null) {
                        $tempString .= $node->nodeValue;
                    }
                    // Determines if iteration is last
                    else if($i == $len - 1){
                        $tempString .= "=" . $node->nodeValue;
                        array_push($tempArray, $tempString);
                    }
                    else {
                        $tempString .= "=" . $node->nodeValue;
                    }
                } else {
                    array_push($tempArray, $tempString);
                    $tempString = "";
                }
                $i++;
            }

            // Removes first item from array since it's not the data I need
            array_shift($tempArray);
            $this->formatDataAndStoreIt($tempArray);

        }
        else{
            abort(403, "Data already scrapped and inserted!");
        }
    }
}
