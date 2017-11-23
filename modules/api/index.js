import { includes } from 'lodash'
const precision = 2
export const fetchCharacters = async () => {
  const res = await fetch('https://swdestinydb.com/api/public/cards/')
  const cards = await res.json()
  const characters = cards.filter(c => c.type_code === 'character')
  const isDamageSide = s =>
    s.indexOf('D') !== -1 && s.indexOf('Dr') === -1 && s.indexOf('Dc') === -1
  const sumSides = (sum, side) => {
    const value = parseInt(side.match(/\d+/) || 0)
    return sum + value
  }
  function decorateCharacter(card) {
    const perPoint = metric => (metric / card.points).toFixed(precision)
    const damageSides = card.sides.filter(isDamageSide).length * card.dice
    const diceSum = card.sides.reduce(sumSides, 0) * card.dice
    const diceDmgSum =
      card.sides.filter(isDamageSide).reduce(sumSides, 0) * card.dice
    return {
      ...card,
      id: `${card.is_elite ? 'e' : ''}${card.code}`,
      hpp: perPoint(card.health),
      dpp: perPoint(card.dice),
      ds: damageSides,
      dspp: perPoint(damageSides),
      diceSum: diceSum,
      diceAvg: (diceSum / 6).toFixed(precision),
      diceDmgSum: diceDmgSum,
      diceDmgAvg: (diceDmgSum / 6).toFixed(precision),
      diceDmgSumPP: perPoint(diceDmgSum),
    }
  }
  function splitForms(cards, card) {
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
  return characters.reduce(splitForms, []).map(decorateCharacter)
}
