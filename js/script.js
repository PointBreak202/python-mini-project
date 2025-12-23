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
/* =========================
   ORDER FORM LOGIC
   (DESKTOP + MOBILE SAFE)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const orderForm = document.getElementById("orderForm");

    if (!orderForm) return; // runs only on order page

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault(); // stop default submit

        // Read values explicitly
        const name = document.getElementById("customerName").value.trim();
        const cake = document.getElementById("cakeName").value;
        const weight = document.getElementById("weight").value;
        const message =
            document.getElementById("message").value.trim() || "None";
        const date = document.getElementById("date").value;

        // HARD VALIDATION (mobile-safe)
        if (!name || !cake || !date) {
            alert("Please fill all required fields and confirm the date.");
            return;
        }

        // Order object
        const order = {
            name: name,
            cake: cake,
            weight: weight,
            message: message,
            date: date
        };

        // Save order
        localStorage.setItem("latestOrder", JSON.stringify(order));

        // ===== MOBILE-SAFE REDIRECT =====
        // JS redirects often fail on mobile → use native form submit
        const redirectForm = document.createElement("form");
        redirectForm.method = "GET";
        redirectForm.action = "order-summary.html";

        document.body.appendChild(redirectForm);
        redirectForm.submit();
    });
});


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



