const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        slider.style.animationPlayState = "paused";
    })

    card.addEventListener("mouseleave", () => {
        slider.style.animationPlayState = "running";
    })
})