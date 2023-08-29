const targetWords = ["パチンコ", "寿司", "花火", "祭り"];

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const resultMessage = document.getElementById("result");

guessButton.addEventListener("click", () => {
    const userGuess = guessInput.value.trim().toLowerCase();
    if (targetWords.includes(userGuess)) {
        resultMessage.textContent = "その通りです!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "間違っています。 もう一度やり直してください!";
        resultMessage.style.color = "red";
    }
    guessInput.value = "";
});
