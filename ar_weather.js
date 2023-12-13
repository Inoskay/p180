let coordinates = {}

$(document).ready(function () {
    get_coordinates();
//TAsk 3 call the get_weather function
    get_weather()

})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
    } else {
        alert("Coordinates not selected!")
        window.history.back();
    }
}

function get_weather() {
//Task 2 Fetching the relevant data from AJAX Request -
$.ajax({
    url: `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates.source_lon}%2C${coordinates.source_lat}%3B${coordinates.destination_lon}%2C${coordinates.destination_lat}?alternatives=true&geometries=polyline&steps=true&access_token=pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA`,
    type: "get",
    success: function (response){
        let name = response.name
        let weather = response.weather[0].main
        $("#scene_container").append(
            `
            <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                <a-entity>
                    <a-text height="50" value="Weather" forcast is ${weather} at ${name}"></a-text>
                </a-entity>
            </a-entity>
            `
        )
    }
})










}