function findMiddleCharacter() {
    let userInput = prompt("Enter a word:");

    if (userInput === null) {
        alert("Canceled.");
        return;
    }

    userInput = userInput.trim();

    if (userInput === "") {
        alert("Invalid value");
        return;
    }

    const length = userInput.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        alert(userInput[middleIndex - 1] + userInput[middleIndex]);
    } else {
        alert(userInput[middleIndex]);
    }
}

findMiddleCharacter();
