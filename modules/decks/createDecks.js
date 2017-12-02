export const createFactionTest = deck => card => {
  return true
}

export const createAffiliationTest = deck => card => {
  if (card.affiliation_code === 'neutral') {
    return true
  }
  const affiliatedCards = deck.filter(c => c.affiliation_code !== 'neutral')
  if (affiliatedCards.length < 1) {
    return true // deck isn't affiliated yet, card is fine
  }
  return affiliatedCards[0].affiliation_code === card.affiliation_code
}

export const createBudgetTest = deck => card => {
  return true
}

export const createUniquenessTest = deck => card => {
  return true
}

export const createEligibilityTest = deck => {
  const testCreators = [
    createFactionTest,
    createAffiliationTest,
    createBudgetTest,
    createUniquenessTest,
  ]
  const tests = testCreators.map(tc => tc(deck))
  const testPassesWith = card => test => test(card)
  return card => tests.every(testPassesWith(card))
}

const createDecks = characters => []
export default createDecks
