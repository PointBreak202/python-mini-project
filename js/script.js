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

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const order = {
            name: document.getElementById("customerName").value,
            cake: document.getElementById("cakeName").value,
            weight: document.getElementById("weight").value,
            message: document.getElementById("message").value,
            date: document.getElementById("date").value
        };

        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));

        alert("🎂 Order placed successfully!");

        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("customerName");
            const cakeSelect = document.getElementById("cakeName");
            const weightSelect = document.getElementById("weight");
            const messageInput = document.getElementById("message");
            const dateInput = document.getElementById("date");

            const order = {
                name: nameInput.value.trim(),
                cake: cakeSelect.value,
                weight: weightSelect.value,
                message: messageInput.value.trim() || "None",
                date: dateInput.value
            };

            localStorage.setItem("latestOrder", JSON.stringify(order));

            window.location.href = "order-summary.html";
        });
    }

    loadOrderSummary();
});

function loadOrderSummary() {
    const summaryBox = document.getElementById("summaryBox");
    if (!summaryBox) return;

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

function sendToWhatsApp() {
    const order = JSON.parse(localStorage.getItem("latestOrder"));
    if (!order) return;

    const phoneNumber = "91XXXXXXXXXX"; // replace with real number

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


