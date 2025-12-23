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

    /* ---------- ORDER FORM ---------- */
    const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const cake = document.getElementById("cakeName").value;
        const weight = document.getElementById("weight").value;
        const message = document.getElementById("message").value.trim() || "None";
        const date = document.getElementById("date").value;

        if (!name || !cake || !date) {
            alert("Please fill all required fields.");
            return;
        }

        const order = { name, cake, weight, message, date };

        console.log("Saving order:", order);

        localStorage.setItem("latestOrder", JSON.stringify(order));

        // HARD CONFIRM SAVE
        if (!localStorage.getItem("latestOrder")) {
            alert("Order could not be saved. Try again.");
            return;
        }

        setTimeout(() => {
    window.location.href = "order-summary.html";
}, 100);

    });
}


    /* ---------- ORDER SUMMARY ---------- */
    const summaryBox = document.getElementById("summaryBox");

if (summaryBox) {
    const order = JSON.parse(localStorage.getItem("latestOrder"));

    if (!order || !order.name || !order.cake) {
        alert("No order found. Please place an order first.");
        window.location.href = "order.html";
        return;
    }

    summaryBox.innerHTML = `
        <p><strong>Name:</strong> ${order.name}</p>
        <p><strong>Cake:</strong> ${order.cake}</p>
        <p><strong>Weight:</strong> ${order.weight} kg</p>
        <p><strong>Message:</strong> ${order.message}</p>
        <p><strong>Delivery Date:</strong> ${order.date}</p>
    `;
}


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



