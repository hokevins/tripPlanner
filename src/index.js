const mapboxgl = require("mapbox-gl");
var markerFactory = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1IjoiaG9rZXZpbnMiLCJhIjoiY2phOXVpYzVtMGJpZTMzcXRkYmc5emszbiJ9.wFyZiyn0YBk7VBtXwZwckw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

// new mapboxgl.Marker(markerFactory.createRestaurantMark()).setLngLat([-74.009, 40.705]).addTo(map);
