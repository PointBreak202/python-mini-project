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
    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}

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

        window.location.href = "order-summary.html";
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
    if (!order) return;

    const phoneNumber = "918956161106"; // replace if needed

    const message = `Hello Club Cafe! 🍰
I would like to place an order:

Name: ${order.name}
Cake: ${order.cake}
Weight: ${order.weight} kg
Message on Cake: ${order.message}
Delivery Date: ${order.date}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}



