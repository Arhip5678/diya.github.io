document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "1234"; // Укажите нужный код
    let inputCode = "";

    const dots = document.querySelectorAll(".dot");
    const keys = document.querySelectorAll(".key");
    const deleteButton = document.querySelector(".delete");

    // Функция обновления точек
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index < inputCode.length ? "black" : "lightgray";
        });

        // Проверка кода
        if (inputCode.length === correctCode.length) {
            if (inputCode === correctCode) {
                window.location.href = "success.html"; // Укажите нужную страницу
            } else {
                alert("Неверный код!");
                inputCode = "";
                updateDots();
            }
        }
    }

    // Обработчик ввода цифр
    keys.forEach((key) => {
        key.addEventListener("click", () => {
            if (inputCode.length < correctCode.length) {
                inputCode += key.dataset.value;
                updateDots();
            }
        });
    });

    // Удаление последнего символа
    deleteButton.addEventListener("click", () => {
        inputCode = inputCode.slice(0, -1);
        updateDots();
    });

    // Начальная инициализация
    updateDots();
});
