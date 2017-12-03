import test from 'tape'

import createEligibilityTest from './'

test('createEligibilityTest: affiliations', assert => {
  const deck = [
    {
      affiliation_code: 'hero',
    },
    {
      affiliation_code: 'hero',
    },
  ]
  const test = createEligibilityTest(deck)

  const card = {
    affiliation_code: 'villain',
  }
  assert.false(test(card), 'should not accept a villain card in a hero deck')
  assert.end()
})
