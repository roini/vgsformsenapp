    function sendMail(){
        //----------------------------------------------------------------------
            ///ცვლადების შემოტანა
                var sendername= document.getElementById("fname").value + " " + docement.getElementById("lname").value;
                var piradinomeri=document.getElementById("pn");
                var phoneNumber=document.getElementById("phone");
                var replyto=document.getElementById("replyto");
                
	  
	   
        (function(){
          emailjs.init("UFa_cH3yFhHBNo1L9"); // Account Public Key
        })();
        var to='r.giorgadze1996@gmail.com'
		var subject='ონლაინ შეკვეთა!!!';
		var message='test';
        var params = {
         sendername: sendername,
          to:to,
          subject: subject,
          replyto:replyto,
          message: message,
        };

        var serviceID ="service_o9flavu";//Email Service ID
        var templateID ="template_efrimtd"; // Email Template ID

        emailjs.send(serviceID, templateID, params)
        .then( res => {
            alert("Email sent successfully!!")
        })
        .catch();
    }