const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
   card.addEventListener("click", () => {
      removeExpandClasses()
      card.classList.add('card-expand');

   });
});

function removeExpandClasses() {
   cards.forEach((card) => {
      card.classList.remove('card-expand');
   });
}