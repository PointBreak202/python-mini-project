/* =========================
   BASIC UI FUNCTIONS
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
   NAVBAR (HAMBURGER)
========================= */

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}

/* =========================
   ORDER FORM + SUMMARY
   (DESKTOP WORKING VERSION)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- ORDER FORM ---------- */
    document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("orderForm");
    if (!form) return;

    form.addEventListener("submit", function () {

        const order = {
            name: document.getElementById("customerName").value.trim(),
            cake: document.getElementById("cakeName").value,
            weight: document.getElementById("weight").value,
            message:
                document.getElementById("message").value.trim() || "None",
            date: document.getElementById("date").value
        };

        localStorage.setItem("latestOrder", JSON.stringify(order));

        // IMPORTANT:
        // ❌ No preventDefault
        // ❌ No window.location
        // Browser handles navigation
    });
});

    /* ---------- ORDER SUMMARY ---------- */
    const summaryBox = document.getElementById("summaryBox");

    if (summaryBox) {
        const order = JSON.parse(localStorage.getItem("latestOrder"));

        if (!order) {
            summaryBox.innerHTML = "<p>No order found.</p>";
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
});

/* =========================
   WHATSAPP REDIRECT
========================= */

function sendToWhatsApp() {
    const order = JSON.parse(localStorage.getItem("latestOrder"));
    if (!ord




