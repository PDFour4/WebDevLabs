
function greetingFunc() {
    var d = new Date();
    var h = d.getHours();

    var E = document.getElementById("greeting");
    if (h >= 5 && h < 12) {
        E.innerHTML = "Good morning, I am Raul Melendez";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, I am Raul Melendez";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, I am Raul Melendez";
    } else {
        E.innerHTML = "Good night, I am Raul Melendez";
    }

}

var L = window.location.href;
console.log(L);
if (L.includes("index.html")) {
    greetingFunc();
}

function addYear() {
    var d = new Date();
    var y = d.getFullYear();

    var E = document.getElementById("copyYear");
    E.innerHTML += y;
}

// function showList() {
//     document.getElementById("FavList").style.display = "block";
//     document.getElementById("SeeMoreBTN").style.display = "none";
// }

$("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();    
});
 
$("#readMore").click(function() {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();    
});

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("UserText");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}

let map;

async function initMap() {
    // The location of Home
    const position1 = { lat: 29.402748588915784,
    lng: -95.25580477116453};

    const position2 = { lat: 40.443304764597215, 
    lng: -79.94283917116454}
    
    const middle = { lat: 34.41775367123849, 
    lng: -84.91106206456654}

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered between Home and School
    map = new Map(document.getElementById("map"),
    {
        zoom: 4.75,
        center: middle,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Home
    const marker = new AdvancedMarkerElement
    ({
        map: map,
        position: position1,
        title: "Home",
    });

    // Another marker, positioned at school
    const marker2 = new AdvancedMarkerElement
    ({
        map: map,
        position: position2,
        title: "School",
    })
}

if (L.includes("fun.html")) {
    initMap();
}

function activeNav() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}