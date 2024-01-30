let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
    updateCursor();
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
    updateCursor();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
    updateCursor();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
    updateCursor();
}

function updateCursor() {
    const display = document.getElementById("display");
    display.setSelectionRange(display.value.length, display.value.length);
}

// Allow keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLastCharacter();
    } else if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/" || key === "." ) {
        appendToDisplay(key);
    }
});
