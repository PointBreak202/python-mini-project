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
