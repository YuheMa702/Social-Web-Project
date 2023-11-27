function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Perform client-side validation here if needed

    // Send login data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "backend.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;

            if (response === "success") {
                alert("Login successful!"); // You can replace this with a more user-friendly notification

                // Set a state variable to indicate the user is logged in
                loggedIn = true;

                // Redirect to the main page or perform other actions
                window.location.href = "index.html";
            } else {
                alert("Login failed. Please check your credentials.");
            }
        }
    };

    // Send data to the server
    xhr.send("action=login&username=" + username + "&password=" + password);
}