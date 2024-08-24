function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
}

function convert() {
    const conversionType = document.getElementById("conversionType").value;
    const userInput = document.getElementById("inputField").value;
    let result;

    if (conversionType === "asciiToBytes") {
        const byteArray = asciiToBytes(userInput);
        result = "Byte Array: [" + byteArray.join(", ") + "]";
    } else if (conversionType === "bytesToAscii") {
        const byteArray = new Uint8Array(userInput.split(',').map(Number));
        const asciiString = bytesToAscii(byteArray);
        result = "ASCII String: " + asciiString;
    }

    document.getElementById("outputResult").textContent = result;
}

function toggleNightMode() {
    document.body.classList.toggle("dark-mode");
}