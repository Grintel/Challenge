function open_email_dialog(button_id) {
    // Small verifying script from Stackoverflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // get email
    var email = window.prompt("Bitte geben Sie ihre Email ein.");
    if (email != null) {
        // validate
        if (validateEmail(email)) {
            var button = document.getElementById(button_id);
            button.innerText = "Thanks!";
            button.style.backgroundColor = "#25c24f";
            // make button normal after 3 seconds
            setTimeout(function() {
                button.innerText = "Follow Us Now";
                button.style.backgroundColor = "#000000";
            }, 3000);
        }
        else {
            window.alert("The given input is no valid email adress. Please try again.");
        }
    }
}