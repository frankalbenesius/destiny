import { sortBy, concat, uniqWith, isEqual } from 'lodash'
import createEligibilityTest from './createEligibilityTest'

export default (characters = []) => {
  // expandDeck is a recursive function for finding all the deck
  // combinations possible for a set of characters
  const expandDeck = (characters, deck = []) => {
    const isEligible = createEligibilityTest(deck)
    const eligibleCharacters = characters.filter(isEligible)
    if (eligibleCharacters.length === 0) {
      // base case
      return [deck]
    } else {
      // recursive case
      const newDecks = eligibleCharacters.map(character => {
        // keep decks sorted for easier deduplication later
        return sortBy([...deck, character], ['name'])
      })
      const expandedDecks = newDecks
        .map(d => expandDeck(characters, d))
        .reduce((decks, deck) => {
          return decks.concat(deck)
        })
      return expandedDecks
    }
  }

  // rawDecks includes duplicate character combinations
  const rawDecks = expandDeck(characters, [])

  const uniqueDecks = uniqWith(rawDecks, (a, b) => {
    return isEqual(JSON.stringify(a), JSON.stringify(b))
  })

  return uniqueDecks
}
