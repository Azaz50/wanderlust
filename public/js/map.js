mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

console.log(coordinates);
const lngLat = coordinates.map(Number);

const marker = new mapboxgl.Marker({color: "red"})
.setLngLat(coordinates) //Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(`<p>Exact Location Provided after Booking</p>`))
.addTo(map);