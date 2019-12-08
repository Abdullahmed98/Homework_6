$(document).ready(function(){
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&APPID=97d0e7d64f269c63c7265e82d7d3855e";

$("#search-weather").on("click", function(event){

    var location = $("#weather-input").val();
    queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=metric&APPID=97d0e7d64f269c63c7265e82d7d3855e";



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
})