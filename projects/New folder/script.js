//  Write JS in script.js
//  1) Select all filter buttons using document.querySelectorAll(".filter-btn")
//  2) Select all cards using document.querySelectorAll(".card")
//  3) Add click event on each button:
//    - Read button.getAttribute("data-filter")
//    - Remove "active" from all buttons, then add to clicked one
//    - Loop all cards:
//      * If filter === "all" → show card
//      * Else → compare card.getAttribute("data-category") with selected filter
//        If match → show
//        Else 
// → hide (style.display = "none")




const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    cards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "";
        } else {
        card.style.display = "none";
        }
    });
  }
);
});