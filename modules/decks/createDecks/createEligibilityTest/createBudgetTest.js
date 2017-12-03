const budget = 30

const createBudgetTest = deck => {
  const pointsInDeck = deck.map(c => c.points).reduce((s, p) => s + p, 0)
  return card => card.points + pointsInDeck <= budget
}
export default createBudgetTest
