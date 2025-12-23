/* =========================
   GENERAL UI FUNCTIONS
========================= */

function welcomeMessage() {
    alert("Welcome to Club Cafe! Check out our delicious menu.");
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you! We will contact you soon.");
}

function likeGallery() {
    alert("Thanks for liking our gallery ❤️");
}

function openImage(img) {
    window.open(img.src, "_blank");
}

/* =========================
   NAVBAR (HAMBURGER MENU)
========================= */

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (!navLinks) return;

    navLinks.classList.toggle("show");
}

// CLOSE MENU WHEN ANY LINK IS CLICKED (MOBILE FIX)
document.addEventListener("click", function (e) {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    if (!navLinks || !hamburger) return;

    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("show");
    }
});


/* =========================
   MAIN LOGIC (RUNS ON LOAD)
========================= */

document.addEventListener("DOMContentLoaded", () => {

 document.addEventListener("DOMContentLoaded", () => {

    const orderForm = document.getElementById("orderForm");
    if (!orderForm) return;

    orderForm.addEventListener("submit", function () {

        const name = document.getElementById("customerName").value.trim();
        const cake = document.getElementById("cakeName").value;
        const weight = document.getElementById("weight").value;
        const message =
            document.getElementById("message").value.trim() || "None";
        const date = document.getElementById("date").value;

        // Validation (browser will also enforce required fields)
        if (!name || !cake || !date) {
            alert("Please fill all required fields.");
            return false;
        }

        const order = {
            name,
            cake,
            weight,
            message,
            date
        };

        localStorage.setItem("latestOrder", JSON.stringify(order));

        // IMPORTANT:
        // Do NOT prevent default
        // Let browser redirect naturally
    });
});



/* =========================
   WHATSAPP ORDER REDIRECT
========================= */

function sendToWhatsApp() {
    const order = JSON.parse(localStorage.getItem("latestOrder"));
    if (!order) {
        alert("No order found.");
        return;
    }

    const phoneNumber = "918956161106";

    const message =
`Hello Club Cafe!
Name: ${order.name}
Cake: ${order.cake}
Weight: ${order.weight} kg
Message: ${order.message}
Delivery Date: ${order.date}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.location.assign(url);
}



