function validateForm() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

if (name === "" || email === "") {
alert("Please fill out all required fields.");
return false;
} else {
alert("Your message was sent successfully.");
document.getElementById("contactForm").reset();
return false;
}
}

function toggleDescription(id) {
var description = document.getElementById(id);

if (description.style.display === "none") {
description.style.display = "block";
} else {
description.style.display = "none";
}
}

window.onload = function() {
var footer = document.querySelector("footer");

if (footer !== null) {
var paragraph = document.createElement("p");
var currentDate = new Date();
var text = document.createTextNode("Page loaded on: " + currentDate);

paragraph.appendChild(text);
footer.appendChild(paragraph);
}

var quote = document.getElementById("quote");

if (quote !== null) {
quote.addEventListener("mouseover", function() {
quote.style.backgroundColor = "#e0f7fa";
quote.style.fontStyle = "normal";
});

quote.addEventListener("mouseout", function() {
quote.style.backgroundColor = "";
quote.style.fontStyle = "italic";
});
}
};