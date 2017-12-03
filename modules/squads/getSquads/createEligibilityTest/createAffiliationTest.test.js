import test from 'tape'

import createAffiliationTest from './createAffiliationTest'

test('createAffiliationTest', assert => {
  const villainsquad = [
    {
      affiliation_code: 'villain',
    },
  ]
  const villainAffiliationTest = createAffiliationTest(villainsquad)

  const villainCard = { affiliation_code: 'villain' }
  assert.true(
    villainAffiliationTest(villainCard),
    'should accept a villain card in a villain squad',
  )

  const heroCard = { affiliation_code: 'hero' }
  assert.false(
    villainAffiliationTest(heroCard),
    'should deny a hero card in a villain squad',
  )

  const neutralCard = { affiliation_code: 'neutral' }
  assert.true(
    villainAffiliationTest(neutralCard),
    'should accept a neutral card in a villain squad',
  )

  const emptysquad = []
  const emptysquadAffiliationTest = createAffiliationTest(emptysquad)
  const anyCard = { affiliation_code: 'anything!' }
  assert.true(
    emptysquadAffiliationTest(anyCard),
    'should allow a card of any affiliation if the squad is empty',
  )

  assert.end()
})
