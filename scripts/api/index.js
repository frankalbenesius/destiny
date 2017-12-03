import fetch from 'isomorphic-unfetch'

import addCharacterStats from './addCharacterStats'
import seperateElites from './seperateElites'

async function fetchCharacters() {
  const res = await fetch('https://swdestinydb.com/api/public/cards/')
  const cards = await res.json()
  const sets = ['AW', 'SoR', 'EaW', 'TPG'] // no LEG or RIV
  const characters = cards
    .filter(c => c.type_code === 'character')
    .filter(c => sets.indexOf(c.set_code) !== -1)
  const decoratedCharacters = characters
    .reduce(seperateElites, [])
    .map(addCharacterStats)
  return decoratedCharacters
}

export default fetchCharacters
