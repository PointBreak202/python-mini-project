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

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

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

        // SAVE ORDER FOR SUMMARY PAGE
        localStorage.setItem("latestOrder", JSON.stringify(order));
    });
});

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
    window.location.href = url;
}
