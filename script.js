function expandCard(cardId) {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    if (card.classList.contains(cardId)) {
      card.classList.toggle('expanded');
    } else {
      card.classList.remove('expanded');
    }
  });
}

function shrinkCard(cardId) {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.remove('expanded');
  });
}
