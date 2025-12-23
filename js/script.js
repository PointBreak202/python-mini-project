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
