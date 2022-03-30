




const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

// const apikey = "pk.eyJ1IjoibnVhbSIsImEiOiJjbDE2bXN1NXEwdmU0M2JzZ3hyeG51emVoIn0.h0mj6xpoN2vu-bOonKwYOw"
// const apikey = 'pk.eyJ1IjoibnVhbSIsImEiOiJjbDE2bXN1NXEwdmU0M2JzZ3hyeG51emVoIn0.h0mj6xpoN2vu-bOonKwYOw';


// const mymap = L.map('map').setView([40.770116, -73.967909], 13);
//33.401968, 44.355534
const mymap = L.map('map').setView([33.401968, 44.355534], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Adding Marker

const marker = L.marker([33.401968, 44.355534]).addTo(mymap);



//paths 

const p1 = [
    [33.401093, 44.347709],
    [33.401440, 44.347773],
]
const p2 = [
    [33.401440, 44.347773],
    [33.401762, 44.345695],
]

let p3 = [
    [33.401762, 44.345695], 
    [33.406064, 44.358729]
]

let paths = [p1, p2, p3]

paths.forEach(e=>{
    L.polygon(e, {
        color:'red',
        fillColor:'blue',
        fillOpacity:0.2
    }).addTo(mymap)
    
})


let btn = document.querySelector("btn")



// map.addEventListener('mousemove', (e) => {
//     document.getElementById('info').innerHTML =
//         // `e.point` is the x, y coordinates of the `mousemove` event
//         // relative to the top-left corner of the map.
//         JSON.stringify(e.point) +
//         '<br />' +
//         // `e.lngLat` is the longitude, latitude geographical position of the event.
//         JSON.stringify(e.lngLat.wrap());
// });


// console.log(typeof p1)
// console.log(p2)


// L.polygon(p2, {
//     color:'red',
//     fillColor:'blue',
//     fillOpacity:0.2
// }).addTo(mymap)

//get data; paths from database; mongodb 


