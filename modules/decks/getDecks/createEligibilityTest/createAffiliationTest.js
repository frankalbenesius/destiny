const createAffiliationTest = deck => card => {
  if (card.affiliation_code === 'neutral') {
    return true
  }
  const affiliatedCards = deck.filter(c => c.affiliation_code !== 'neutral')
  if (affiliatedCards.length < 1) {
    return true // deck isn't affiliated yet, card is fine
  }
  return affiliatedCards[0].affiliation_code === card.affiliation_code
}
export default createAffiliationTest
