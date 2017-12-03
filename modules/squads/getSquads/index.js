import { sortBy, concat, uniqWith, isEqual } from 'lodash'
import createEligibilityTest from './createEligibilityTest'

export default (characters = []) => {
  // expandSquad is a recursive function for finding all the character
  // combinations possible for a set of characters
  const expandSquad = (characters, squad = []) => {
    const isEligible = createEligibilityTest(squad)
    const eligibleCharacters = characters.filter(isEligible)
    if (eligibleCharacters.length === 0) {
      // base case
      return [squad]
    } else {
      // recursive case
      const newSquads = eligibleCharacters.map(character => {
        // keep squads sorted for easier deduplication later
        return sortBy([...squad, character], ['name'])
      })
      const expandedSquads = newSquads
        .map(d => expandSquad(characters, d))
        .reduce((squads, squad) => {
          return squads.concat(squad)
        })
      return expandedSquads
    }
  }

  // rawSquads includes duplicate character combinations
  const rawSquads = expandSquad(characters, [])

  const uniqueSquads = uniqWith(rawSquads, (a, b) => {
    return isEqual(JSON.stringify(a), JSON.stringify(b))
  })

  return uniqueSquads
}
