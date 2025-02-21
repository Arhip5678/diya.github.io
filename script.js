document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "1234"; // Укажите правильный код
    let inputCode = "";

    const dots = document.querySelectorAll(".dot");
    const keys = document.querySelectorAll(".key");
    const deleteButton = document.querySelector(".delete");

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index < inputCode.length ? "black" : "lightgray";
        });

        // Проверяем код
        if (inputCode.length === correctCode.length) {
            if (inputCode === correctCode) {
                window.location.href = "https://arhip5678.github.io/diya.github.io/home/";
 // Переход в папку home
            } else {
                alert("Неверный код!");
                inputCode = "";
                updateDots();
            }
        }
    }

    // Обработчик нажатия кнопок
    keys.forEach((key) => {
        key.addEventListener("click", () => {
            if (inputCode.length < correctCode.length) {
                inputCode += key.dataset.value;
                updateDots();
            }
        });
    });

    // Удаление последней цифры
    deleteButton.addEventListener("click", () => {
        inputCode = inputCode.slice(0, -1);
        updateDots();
    });

    updateDots();
});
