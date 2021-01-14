var cardsData = [
  { class: "color-1", id: 1 },
  { class: "color-2", id: 2 },
  { class: "color-3", id: 3 },
  { class: "color-2", id: 4 },
  { class: "color-3", id: 5 },
  { class: "color-4", id: 6 },
  { class: "color-4", id: 7 },
  { class: "color-1", id: 8 },
  { class: "color-3", id: 9 }
];

function renderView(cards) {
  const cardSection = document.querySelector(".cards-section .list-items");
  cardSection.innerHTML = "";
  if (cards && cards.length) {
    cards.forEach((data) => {
      const node = document.createElement("li");
      node.classList.add(data.class);
      const textnode = document.createTextNode(data.id);
      node.appendChild(textnode);
      cardSection.appendChild(node);
    });
  }
}

function shuffleCards() {
  let newPos, temp;
  for (let i=cardsData.length - 1; i > 0; i--)
	{
    newPos = Math.floor((Math.random() * (i +1)));
    temp = cardsData[i];
    cardsData[i] = cardsData[newPos];
    cardsData[newPos] = temp;
  }
  renderView(cardsData);
}

function sortCards() {
  cardsData.sort((a,b) => a.id - b.id);
  renderView(cardsData);
}

(function () {
  if (cardsData && cardsData.length) {
    const shuffleBtn = document.getElementById("shuffleBtn");
    const sortBtn = document.getElementById("sortBtn");
    shuffleBtn.addEventListener('click', shuffleCards);
    sortBtn.addEventListener('click', sortCards);
    renderView(cardsData);
  }
})();
