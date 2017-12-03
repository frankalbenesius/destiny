import test from 'tape'

import createEligibilityTest from './'

test('createEligibilityTest', assert => {
  const deck = [
    {
      affiliation_code: 'hero',
      points: 6,
      is_unique: false,
      name: 'Lisa',
    },
    {
      affiliation_code: 'hero',
      points: 6,
      is_unique: true,
      name: 'Maggie',
    },
  ]
  const test = createEligibilityTest(deck)

  const card = {
    affiliation_code: 'villain',
    points: 6,
    is_unique: true,
    name: 'Bart',
  }
  assert.false(test(card), 'an eligiblity test should deny an ineligible card')
  assert.end()
})

test('createEligibilityTest', assert => {
  const deck = [
    {
      affiliation_code: 'hero',
      points: 6,
      is_unique: false,
      name: 'Lisa',
    },
    {
      affiliation_code: 'hero',
      points: 6,
      is_unique: true,
      name: 'Maggie',
    },
  ]
  const test = createEligibilityTest(deck)

  const card = {
    affiliation_code: 'hero',
    points: 6,
    is_unique: true,
    name: 'Bart',
  }
  assert.true(test(card), 'an eligiblity test should allow an eligible card')
  assert.end()
})
