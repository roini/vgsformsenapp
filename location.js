 //ლოკაციის დადგენის სკრიპტი

    const x = document.getElementById("geolokacia");

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
            x.innerHTML = lat + ' ' + lon ; 
            modal.style.display = "none";
    }
//ლოკაციის დადგენის სკრიპტი