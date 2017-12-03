import createAffiliationTest from './createAffiliationTest'
import createBudgetTest from './createBudgetTest'
import createUniquenessTest from './createUniquenessTest'

const createEligibilityTest = deck => {
  const testCreators = [
    createAffiliationTest,
    createBudgetTest,
    createUniquenessTest,
  ]
  const tests = testCreators.map(tc => tc(deck))
  const testPassesWith = card => test => test(card)
  return card => tests.every(testPassesWith(card))
}

export default createEligibilityTest
