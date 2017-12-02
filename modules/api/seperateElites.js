export default function(cards, card) {
  const pointsArray = card.points.split('/')
  cards.push({
    ...card,
    points: pointsArray[0],
    is_elite: false,
    dice: 1,
  })
  if (pointsArray[1]) {
    cards.push({
      ...card,
      points: pointsArray[1],
      is_elite: true,
      dice: 2,
    })
  }
  return cards
}
