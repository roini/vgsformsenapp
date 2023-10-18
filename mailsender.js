
 //ლოკაციის დადგენის სკრიპტი

    ver geolocation = ' ';

    function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                geolocation = "Geolocation is not supported by this browser.";
            }
        }
    function showPosition(position) {
            let lat= position.coords.latitude;
            let lon=position.coords.longitude;
            geolocation = lat + ' ' + lon ; 
            modal.style.display = "none";
    }
//ლოკაციის დადგენის სკრიპტი



function sendMail() {
    // Variable input extraction
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var sendername = firstname + ' ' + lastname;
    var piradinomeri = document.getElementById("piradinomeri").value;
    var phoneNumber = document.getElementById("phone").value;
    var replyto = document.getElementById("replyto").value;
    var typeInt = document.getElementById("typeInt").value;
    var regions = document.getElementById("regions").value;
    var cityAndVillages = document.getElementById("CityAndVilages").value;
    var saidan = document.getElementById("saidan").value;
    var alreadyus = document.getElementById("alreadyus").value;
    var why = document.getElementById("why").value;
   
    (function() {
        emailjs.init("UFa_cH3yFhHBNo1L9"); // Account Public Key
    })();

    var to = 'r.giorgadze1996@gmail.com';
    var subject = 'ონლაინ შეკვეთა!!!';
    var message = 'test';

    var params = {
        sendername: sendername,
        to: to,
        subject: subject,
        replyto: replyto,
        piradinomeri: piradinomeri,
        phonenumber: phoneNumber,
        typeInt: typeInt,
        regions: regions,
        cityAndVillages: cityAndVillages,
        saidan: saidan,
        alreadyus: alreadyus,
        why: why,
       geolocation:geolocation,
};

    alert(geolocation);
   

 var serviceID = "service_o9flavu"; // Email Service ID
    var templateID = "template_efrimtd"; // Email Template ID

    emailjs.send(serviceID, templateID, params)
        .then(function(res) {
            alert("Email sent successfully!!");
        })
        .catch(function(error) {
            console.error('Error sending email:', error);
        });
}
