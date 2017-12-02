import addCharacterStats from './addCharacterStats'
import seperateElites from './seperateElites'

export const fetchCharacters = async () => {
  const res = await fetch('https://swdestinydb.com/api/public/cards/')
  const cards = await res.json()
  const characters = cards.filter(c => c.type_code === 'character')
  return characters.reduce(seperateElites, []).map(addCharacterStats)
}
