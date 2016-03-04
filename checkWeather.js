makeJsonRequest = function() {
    var xhr;
    var url;
    var key;
    var val;

    document.getElementById("weatherCheck").onclick = function(event) {
        event.preventDefault();

        val = document.getElementById("zip").value;
        console.log('The variable val is a ' + typeof(val));

        makeXHR(val);

    };

    function makeXHR(val) {
        console.log("Inside makeXHR with my zipcode of " + val);
        xhr = new XMLHttpRequest();
        key = "?zip=";
        url = "weatherResponse.php" + key + val;
        console.log("This is the url I'm feeding the ajax request... " + url);

        if (!xhr) {
            alert('Giving up :( Cannot create an XMLHttp instance');
            return false;

        } else {
            xhr.onload = displayContents;
            xhr.open('GET', url, true);
            xhr.responseType = "";
            xhr.send();
        }
    }

    function displayContents() {

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status !== 200) {
                console.log('There was a problem with the request.');
                return false;

            } else {
                var yahooResponse = xhr.responseText;
                // console.log("This is my yahooResponse " + yahooResponse);

                var json = JSON.parse(yahooResponse);
                // console.log("This is my parsed json " + json);

                document.getElementById("p0").innerHTML = "This AJAX request was parsed by JavaScript.";
                document.getElementById("p1").innerHTML = "Random fact about the weather is " + json.query.results.channel.item.title;
                document.getElementById("p2").innerHTML = "Random fact about the weather is " + json;
                document.getElementById("p3").innerHTML = "Random fact about the weather is " + json;
            }
        }
    }

};