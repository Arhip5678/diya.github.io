const correctPIN = "1234"; // Задайте правильный PIN-код
let enteredPIN = "";

const dots = document.querySelectorAll(".dot");
const keys = document.querySelectorAll(".key");
const deleteButton = document.querySelector(".delete");

keys.forEach(key => {
    key.addEventListener("click", () => {
        if (enteredPIN.length < 4) {
            enteredPIN += key.getAttribute("data-value");
            updateDots();
        }
        if (enteredPIN.length === 4) {
            checkPIN();
        }
    });
});

deleteButton.addEventListener("click", () => {
    enteredPIN = enteredPIN.slice(0, -1);
    updateDots();
});

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("filled", index < enteredPIN.length);
    });
}

function checkPIN() {
    setTimeout(() => {
        if (enteredPIN === correctPIN) {
            alert("Доступ разрешен!");
            // Здесь можно перенаправить на другую страницу
            window.location.href = "dashboard.html";
        } else {
            alert("Неверный код!");
            enteredPIN = "";
            updateDots();
        }
    }, 300);
}