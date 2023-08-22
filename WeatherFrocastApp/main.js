// Standard variation
function api() {
    var txtbox = document.querySelector('#input-box');
    var url = "http://api.weatherapi.com/v1/forecast.json?key=cecdda0161a94d299c7102158232208&q=" + txtbox.value + "&days=5&aqi=no&alerts=no";
    fetch(url)
        .then(function (response) {
        console.log("response", response);
        return response.json();
    })
        .then(function (data) {
        console.log("data", data);
        // displaying the data
    })
        .catch(function (error) {
        console.log("error", error);
    });
}
