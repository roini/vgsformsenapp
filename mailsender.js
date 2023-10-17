    function sendMail(){
        //----------------------------------------------------------------------
            ///ცვლადების შემოტანა
                var firstname= document.getElementById("fname").value;
	        var lastname=document.getElementById("lname").value;
	        var sendername=firstname + ' ' + lastname ;
                var piradinomeri= document.getElementById("piradinomeri").value;
                var phoneNumber=document.getElementById("phone").value;
                var replyto = document.getElementById("replyto").value;
                var typeInt= document.getElementById("typeInt").value;
                var regions = document.getElementById("regions").value;
                var CityAndVilages = document.getElementById("CityAndVilages").value;
                var saidan = document.getElementById("saidan").value;
                var alreadyus = document.getElementById("alreadyus").value;
                var why = document.getElementById("why").value;
                var geocoord = document.ElementById("geocoord").value;
(function(){emailjs.init("UFa_cH3yFhHBNo1L9"); // Account Public Key})();
        var to='r.giorgadze1996@gmail.com'
	var subject='ონლაინ შეკვეთა!!!';
	var message='test';
        var params = {
        sendername: sendername,
        to:to,
        subject:subject,
        replyto:replyto,
        piradinomeri:piradinomeri,
	phonenumber:phoneNumber,
	typeInt:typeInt,
	regions:regions,
	CityAndVilages:CityAndVilages,
	saidan:saidan,
	alreadyus:alreadyus,
	why:why,
	typeInt:typeInt,
	geocoord:geocoord
};
        console.log(sendername);
        var serviceID ="service_o9flavu";//Email Service ID
        var templateID ="template_efrimtd"; // Email Template ID

        emailjs.send(serviceID, templateID, params)
        .then( res => {
            alert("Email sent successfully!!")
        })
        .catch();
    }
