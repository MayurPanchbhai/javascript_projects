function showInput() {
    var select = document.getElementById("position");
    var inputContainer = document.getElementById("otherPosition");

    // Check if the last option is selected
    if (select.value === "other") {
        inputContainer.style.display = "block"; // Show the input container
    } else {
        inputContainer.style.display = "none"; // Hide the input container
    }
}