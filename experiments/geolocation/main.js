let button = document.querySelector("#get-location");
let latText = document.querySelector("#latitude");
let longText = document.querySelector("#longitude");

button.addEventListener("click", function () {


    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        latText.innerText = lat.toFixed(2);
        longText.innerText = long.toFixed(2);
        console.dir(position);

        console.log("dentro");


    });
    console.log("fuera");
});