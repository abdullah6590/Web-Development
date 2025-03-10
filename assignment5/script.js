// Access elements using getElementById(), getElementsByClassName(), and querySelector()
let paragraph = document.getElementById("myParagraph");
let items = document.getElementsByClassName("item");
let header = document.querySelector("h1");

// Change the text content of a paragraph element
paragraph.textContent = "This paragraph has been updated using JavaScript!";

// Change the background color of a div when a button is clicked
let colorButton = document.getElementById("colorButton");
let colorDiv = document.getElementById("colorDiv");

colorButton.addEventListener("click", function() {
    colorDiv.style.backgroundColor = "lightblue";
});

// Add a border to an image on mouse hover
let image = document.getElementById("myImage");

image.addEventListener("mouseover", function() {
    image.style.border = "5px solid black";
});

image.addEventListener("mouseout", function() {
    image.style.border = "none";
});

// Create a form with two inputs and a submit button. Display the entered values when the button is clicked
let form = document.getElementById("myForm");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let displayArea = document.getElementById("displayArea");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    let value1 = input1.value;
    let value2 = input2.value;
    displayArea.textContent = `You entered: ${value1} and ${value2}`;
});