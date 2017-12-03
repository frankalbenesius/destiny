export default function(cards, card) {
  const pointsArray = card.points.split('/')
  cards.push({
    ...card,
    points: parseInt(pointsArray[0], 10),
    is_elite: false,
    dice: 1,
  })
  if (pointsArray[1]) {
    cards.push({
      ...card,
      points: parseInt(pointsArray[1], 10),
      is_elite: true,
      dice: 2,
    })
  }
  return cards
}
