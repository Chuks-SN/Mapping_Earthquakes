// Add console.log to check to see if our code is working.
console.log("working");


//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 100,
    color: 'black',
    fillcolor: '#ffffa1',
 }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zomm: 3,
    layeres: [streets]

});

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);