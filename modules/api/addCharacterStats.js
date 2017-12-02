import { includes } from 'lodash'

const precision = 2

function isDamageSide(s) {
  return (
    s.indexOf('D') !== -1 && s.indexOf('Dr') === -1 && s.indexOf('Dc') === -1
  )
}

function sumSides(sum, side) {
  const value = parseInt(side.match(/\d+/) || 0)
  return sum + value
}

export default function(card) {
  const perPoint = metric => (metric / card.points).toFixed(precision)
  const damageSides = card.sides.filter(isDamageSide).length * card.dice
  const diceSum = card.sides.reduce(sumSides, 0) * card.dice
  const diceDmgSum =
    card.sides.filter(isDamageSide).reduce(sumSides, 0) * card.dice
  return {
    ...card,
    customKey: `${card.is_elite ? 'e' : ''}${card.code}`,
    stats: {
      hpp: perPoint(card.health),
      dpp: perPoint(card.dice),
      ds: damageSides,
      dspp: perPoint(damageSides),
      diceSum: diceSum,
      diceAvg: (diceSum / 6).toFixed(precision),
      diceDmgSum: diceDmgSum,
      diceDmgAvg: (diceDmgSum / 6).toFixed(precision),
      diceDmgSumPP: perPoint(diceDmgSum),
    },
  }
}
