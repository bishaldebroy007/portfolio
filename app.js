// Showing alert on button click

// Handling the form submission of the site
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Preventing form, from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form Data:", { name, email, message });
    alert(`Thank you, ${name}! We have received your message.`);

    // Clearing the form
    document.getElementById("contactForm").reset();
});