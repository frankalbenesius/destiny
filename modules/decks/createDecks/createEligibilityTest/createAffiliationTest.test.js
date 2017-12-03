import test from 'tape'

import createAffiliationTest from './createAffiliationTest'

test('createAffiliationTest', assert => {
  const villainDeck = [
    {
      affiliation_code: 'villain',
    },
  ]
  const villainAffiliationTest = createAffiliationTest(villainDeck)

  const villainCard = { affiliation_code: 'villain' }
  assert.true(
    villainAffiliationTest(villainCard),
    'should accept a villain card in a villain deck',
  )

  const heroCard = { affiliation_code: 'hero' }
  assert.false(
    villainAffiliationTest(heroCard),
    'should deny a hero card in a villain deck',
  )

  const neutralCard = { affiliation_code: 'neutral' }
  assert.true(
    villainAffiliationTest(neutralCard),
    'should accept a neutral card in a villain deck',
  )

  const emptyDeck = []
  const emptyDeckAffiliationTest = createAffiliationTest(emptyDeck)
  const anyCard = { affiliation_code: 'anything!' }
  assert.true(
    emptyDeckAffiliationTest(anyCard),
    'should allow a card of any affiliation if the deck is empty',
  )

  assert.end()
})
