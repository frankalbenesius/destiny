import addCharacterStats from './addCharacterStats'
import seperateElites from './seperateElites'

function hasStorage() {
  return typeof Storage !== 'undefined'
}

export function getStoredCharacters() {
  if (!hasStorage()) return null
  return JSON.parse(localStorage.getItem('characters'))
}

export async function fetchCharacters() {
  const res = await fetch('https://swdestinydb.com/api/public/cards/')
  const cards = await res.json()
  const characters = cards.filter(c => c.type_code === 'character')
  const decoratedCharacters = characters
    .reduce(seperateElites, [])
    .map(addCharacterStats)
  if (hasStorage()) {
    localStorage.setItem('characters', JSON.stringify(decoratedCharacters))
  }
  return decoratedCharacters
}
