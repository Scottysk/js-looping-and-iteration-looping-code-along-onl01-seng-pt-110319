function wrapCards(names, event) { 
  let cards = []
  for (let i = 0; names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
  }