/* =========================
   ZESTIFY CART FUNCTIONALITY
========================= */

let cartCount = 0;

const cartButtons = document.querySelectorAll(".add-cart");
const cartDisplay = document.getElementById("cartCount");

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartDisplay.textContent = cartCount;

        button.textContent = "Added ✓";

        button.classList.remove("btn-primary");
        button.classList.add("btn-success");

        setTimeout(function () {

            button.textContent = "Add to Cart";

            button.classList.remove("btn-success");
            button.classList.add("btn-primary");

        }, 1000);

    });

});


/* =========================
   NEWSLETTER SUBSCRIPTION
========================= */

const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

if (subscribeForm) {

    subscribeForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = emailInput.value.trim();

        emailError.textContent = "";
        successMessage.textContent = "";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // Empty email validation
        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            return;
        }


        // Invalid email validation
        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            return;
        }


        // Successful subscription
        successMessage.textContent =
            "Thank you for subscribing to Zestify!";

        subscribeForm.reset();

    });

}