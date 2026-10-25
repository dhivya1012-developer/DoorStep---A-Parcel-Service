(function () {
    emailjs.init("ZWYEvxOunKXzlmGBQ");

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        var templateParams = {
            u_name: document.getElementById("u_name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            from_loc: document.getElementById("from_loc").value,
            to_loc: document.getElementById("to_loc").value,
            service: document.getElementById("service").value,
            details: document.getElementById("details").value,
        };

        emailjs.send("service_cf4sg6v", "template_aczdl08", templateParams).then(
            function () {
                alert("Message sent successfully!");
                contactForm.reset();
            },
            function (error) {
                alert("Failed to send: " + error);
                console.log(error);
            },
        );
    });
})();
