import test from 'tape'
import createBudgetTest from './createBudgetTest'

test('createBudgetTest', assert => {
  const squad = [{ points: 10 }, { points: 12 }]
  const card = { points: 11 }

  const budgetTest = createBudgetTest(squad)
  const result = budgetTest(card)

  assert.false(
    result,
    'createBudgetTest should not approve a card that puts the squad over budget',
  )
  assert.end()
})

test('createBudgetTest', assert => {
  const squad = []
  const card = { points: 7 }

  const budgetTest = createBudgetTest(squad)
  const result = budgetTest(card)

  assert.true(
    result,
    'createBudgetTest should approve a card even when the squad is empty',
  )
  assert.end()
})

test('createBudgetTest', assert => {
  const squad = [{ points: 6 }]
  const card = { points: 28 }

  const budgetTest = createBudgetTest(squad)
  const result = budgetTest(card)

  assert.false(
    result,
    'createBudgetTest should deny a card that puts the squad over budget',
  )
  assert.end()
})
