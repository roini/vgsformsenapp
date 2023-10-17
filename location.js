 //ლოკაციის დადგენის სკრიპტი

    const x = document.getElementById("geocoord");

    function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
    function showPosition(position) {
            let lat= position.coords.latitude;
            let lon=position.coords.longitude;
            x.innerHTML = "გრძედი: " +  lat+
            "<br>განედი: " +lon ;
            modal.style.display = "none";
    }
//ლოკაციის დადგენის სკრიპტი