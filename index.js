function wrapGifts(name, event) { 
  let cards = []
  for (let i = 0; name.length; i++) {
    cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
  }