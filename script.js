document.addEventListener("DOMContentLoaded", function () {
    let products = document.querySelectorAll(".product");
    let container = document.querySelector(".container");

    // Ipakita lahat ng products sa simula
    products.forEach(product => product.classList.add("show"));
    container.classList.add("show");
});

function filterCategory(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all") {
            product.classList.add("show");
        } else {
            if (product.classList.contains(category)) {
                product.classList.add("show");
            } else {
                product.classList.remove("show");
            }
        }
    });
}