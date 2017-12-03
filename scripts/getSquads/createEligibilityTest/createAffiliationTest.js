const createAffiliationTest = squad => card => {
  if (card.affiliation_code === 'neutral') {
    return true
  }
  const affiliatedCards = squad.filter(c => c.affiliation_code !== 'neutral')
  if (affiliatedCards.length < 1) {
    return true // squad isn't affiliated yet, card is fine
  }
  return affiliatedCards[0].affiliation_code === card.affiliation_code
}
export default createAffiliationTest
