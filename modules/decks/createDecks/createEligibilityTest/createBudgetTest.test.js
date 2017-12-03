import test from 'tape'
import createBudgetTest from './createBudgetTest'

test('createBudgetTest', assert => {
  const deck = [{ points: 10 }, { points: 12 }]
  const card = { points: 11 }

  const budgetTest = createBudgetTest(deck)
  const result = budgetTest(card)

  assert.false(
    result,
    'createBudgetTest should not approve a card that puts the deck over budget',
  )
  assert.end()
})

test('createBudgetTest', assert => {
  const deck = []
  const card = { points: 7 }

  const budgetTest = createBudgetTest(deck)
  const result = budgetTest(card)

  assert.true(
    result,
    'createBudgetTest should approve a card even when the deck is empty',
  )
  assert.end()
})

test('createBudgetTest', assert => {
  const deck = [{ points: 6 }]
  const card = { points: 28 }

  const budgetTest = createBudgetTest(deck)
  const result = budgetTest(card)

  assert.false(
    result,
    'createBudgetTest should deny a card that puts the deck over budget',
  )
  assert.end()
})
