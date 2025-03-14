document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            alert("Signup successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                alert("Login successful! Redirecting to shop...");
                window.location.href = "shop.html";
            } else {
                alert("Incorrect email or password. Please try again.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("uploadForm");

    if (uploadForm) {
        uploadForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const fileInput = document.getElementById("prescriptionFile");

            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                alert("Prescription uploaded: " + file.name);
                window.location.href = "shop.html";  // Redirect to shop page after upload
            } else {
                alert("Please select a file before uploading.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkoutForm");

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("customerName").value;
            const email = document.getElementById("customerEmail").value;
            const address = document.getElementById("customerAddress").value;
            const paymentMethod = document.getElementById("paymentMethod").value;

            if (paymentMethod === "paypal") {
                window.location.href = "https://www.paypal.com";
            } else if (paymentMethod === "credit_card") {
                alert("Credit Card payment processing is not set up yet.");
            } else if (paymentMethod === "cashapp") {
                window.location.href = "https://cash.app";
            } else {
                alert("Please select a valid payment method.");
            }
        });
    }
});
