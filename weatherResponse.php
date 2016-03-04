<?php


    if(!(isset($_GET))) {
        echo("Submission Failed!");
        return false;

    } else {
        echo ("Submission Succeeded!");

        $zipcode = $_GET['zip'];
        echo $zipcode;

        if(empty($_GET)) {
            return ("Zipcode is missing, please resubmit.");
        }

        $url = "https://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%22$zipcode%22&format=json";

        $jsonStr = file_get_contents($url);
        // echo $jsonStr;

        $jsonArr = json_decode($jsonStr, true);
        // print_r($jsonArr);

        echo json_last_error_msg();

        var_dump($jsonArr);
        return $jsonArr;

};
