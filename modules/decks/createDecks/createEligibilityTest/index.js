import createAffiliationTest from './createAffiliationTest'
import createFactionTest from './createFactionTest'
import createBudgetTest from './createBudgetTest'
import createUniquenessTest from './createUniquenessTest'

const createEligibilityTest = deck => {
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

export default createEligibilityTest
