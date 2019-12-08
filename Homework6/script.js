$(document).ready(function(){
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=metric&APPID=97d0e7d64f269c63c7265e82d7d3855e";
var location = ""

$("#search-weather").on("click", function(event){

    location = $("#weather-input").val();
    console.log(location)

    
})



$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {

    console.log(response)

    var nameUrl = response.city.name;
    console.log(nameUrl)

    var tempUrl = response.list[0].main.temp;
    console.log(tempUrl)

    var humidityUrl = response.list[0].main.humidity;
    console.log(humidityUrl)

    var windspeedUrl = response.list[0].wind.speed;
    console.log(windspeedUrl)

    var dateUrl = response.list[0].dt_txt;
    console.log(dateUrl)
})
})