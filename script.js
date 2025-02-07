function initMap() {
    const location = { lat: 31.77196, lng: 35.21371 }; // החלף בקואורדינטות המדויקות של נחל קדרון 26
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 15,
        center: location,
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "בית חב\"ד נחל קדרון",
    });
}

