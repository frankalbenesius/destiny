const budget = 30

const createBudgetTest = squad => {
  const pointsInsquad = squad.map(c => c.points).reduce((s, p) => s + p, 0)
  return card => card.points + pointsInsquad <= budget
}
export default createBudgetTest
