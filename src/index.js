const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
// buildMarker("Activity", [-73.9772, 40.7527]); // or [-87.6354, 41.8885]


mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbm5lbnllIiwiYSI6ImNqYTl1a3hudDBiYngycXF0dzZqcnFyMWUifQ.cOCRx-egAmyvL0BorCcGfA';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// let Marker = document.createElement("MARKER");
// let el = document.createElement('div');
// el.style.width = "32px";
// el.style.height = "39px";
// el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(el)
// .setLngLat([-74.009151, 40.705086])
// .addTo(map);
buildMarker("Hotel", [-75, 40], map); // or [-87.6354, 41.8885]


module.exports = map;

