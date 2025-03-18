document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const button = document.querySelector(".dropdown__button");
    const items = document.querySelectorAll(".dropdown__item");

    button.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    items.forEach(item => {
        item.addEventListener("click", function () {
            button.innerHTML = `${this.textContent} <span class="dropdown__icon">▼</span>`;
            dropdown.classList.remove("active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});
