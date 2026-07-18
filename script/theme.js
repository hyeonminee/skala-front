const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ 라이트모드";
    } else {
        themeBtn.textContent = "🌙 다크모드";
    }
});