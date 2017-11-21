// const map = require('./index.js');
const mapboxgl = require("mapbox-gl");

function newMarker(type, latlong, map) {
    console.log("this is running")
    let el = document.createElement('div');
    el.style.width = "32px";
    el.style.height = "39px";

    if (type === 'Activity') {
        el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    } else if (type === 'Hotel'){
        el.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (type === 'Restaurant') {
        el.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png";
    }

    new mapboxgl.Marker(el)
    .setLngLat(latlong)
    .addTo(map);

}


module.exports = newMarker;