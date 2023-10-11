
    // მოდალური გვერდის შემცველობა
        var modal = document.getElementById("myModal");
    // როდესაც დავაწვებით span ელემენტს დაიხურება მოდალური გვერდი
        var span = document.getElementsByClassName("close")[0];
    // როდესაც წებგვერდის ტანი ჩაიტვირთება ამოვარდება მოდლური გვერდი 
        function load() { modal.style.display = "block";}
    // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }