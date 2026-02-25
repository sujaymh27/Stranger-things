
// Select all character boxes
const members = document.querySelectorAll(".members");

// Select all popup boxes
const popups = document.querySelectorAll(".members1");

// Overlay
const overlay = document.getElementById("overlay");

// Function to open popup
function openPopup(id) {
    document.getElementById(id).style.display = "block";
    overlay.style.display = "block";
}

// Function to close popup
function closePopup() {
    popups.forEach(popup => {
        popup.style.display = "none";
    });
    overlay.style.display = "none";
}

// Add click event to each character box
members.forEach(member => {
    member.addEventListener("click", function () {
        const id = member.id + "1"; // example: eleven → eleven1
        openPopup(id);
    });
});

// Add click event to all close buttons
const closeButtons = document.querySelectorAll(".closeBtn");

closeButtons.forEach(btn => {
    btn.addEventListener("click", closePopup);
});

// Close when clicking overlay
overlay.addEventListener("click", closePopup);
