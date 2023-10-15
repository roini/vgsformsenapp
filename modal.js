
    // მოდალური გვერდის შემცველობა
        var modal = document.getElementById("myModal");
    // როდესაც დავაწვებით span ელემენტს დაიხურება მოდალური გვერდი
        var span = document.getElementsByClassName("close")[0];
        //როცა ეკრანის რეზოლუცი მეტი იქნება 768-ე მოდალი არ გაიხსნას
        let width=window.screen.availWidth;
        if(width<768){
            // როდესაც წებგვერდის ტანი ჩაიტვირთება ამოვარდება მოდლური გვერდი 
        function load() { modal.style.display = "block";}
        }
        else{
            modal.style.display = "none";
        }
    // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }





        /*** */
        
