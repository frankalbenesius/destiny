import test from 'tape'

import createDecks, {
  createFactionTest,
  createAffiliationTest,
  createBudgetTest,
  createUniquenessTest,
} from './createDecks'

test('createDecks', assert => {
  const isArray = Array.isArray(createDecks())
  assert.true(isArray, 'should return an array')
  assert.end()
})

test('createAffiliationTest', assert => {
  const villainDeck = [
    {
      affiliation_code: 'villain',
    },
  ]
  const affiliationTest = createAffiliationTest(villainDeck)

  const villainCard = { affiliation_code: 'villain' }
  const villainCardEligibility = affiliationTest(villainCard)
  const villainCardMessage = 'should accept a villain card in a villain deck'
  assert.true(villainCardEligibility, villainCardMessage)

  const heroCard = { affiliation_code: 'hero' }
  const heroCardEligibility = affiliationTest(heroCard)
  const heroCardMessage = 'should deny a hero card in a villain deck'
  assert.false(heroCardEligibility, heroCardMessage)

  const neutralCard = { affiliation_code: 'neutral' }
  const neutralCardEligibility = affiliationTest(neutralCard)
  const neutralCardMessage = 'should accept a neutral card in a villain deck'
  assert.true(neutralCardEligibility, neutralCardMessage)

  const emptyDeck = []
  const emptyDeckAffiliationTest = createAffiliationTest(emptyDeck)
  const anyCard = { affiliation_code: 'anything!' }
  const emptyDeckEligiblity = emptyDeckAffiliationTest(anyCard)
  const emptyDeckMessage =
    'should allow a card of any affiliation if the deck is empty'
  assert.false(emptyDeckEligiblity, emptyDeckMessage)

  assert.end()
})
