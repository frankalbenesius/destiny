import test from 'tape'
import createUniquenessTest from './createUniquenessTest'

test('createUniquenessTest', assert => {
  const deck = [
    {
      is_unique: true,
      // name: 'Darth Vader',
      // subtitle: 'Sith Lord',
    },
  ]
  const uniqueTest = createUniquenessTest(deck)
  const card = {
    is_unique: false,
  }

  assert.true(
    uniqueTest(card),
    'uniqueness tests should approve of any card that is not unique',
  )

  assert.end()
})

test('createUniquenessTest', assert => {
  const deck = [
    {
      is_unique: true,
      name: 'Darth Vader',
      subtitle: 'Sith Lord',
    },
  ]
  const uniqueTest = createUniquenessTest(deck)
  const card = {
    is_unique: true,
    name: 'Darth Vader',
    subtitle: 'Dark Apprentice',
  }

  assert.false(
    uniqueTest(card),
    'uniqueness tests should deny unique cards that share a name with a deck card',
  )

  assert.end()
})

test('createUniquenessTest', assert => {
  const deck = [
    {
      is_unique: true,
      name: 'Darth Vader',
      subtitle: 'Sith Lord',
    },
  ]
  const uniqueTest = createUniquenessTest(deck)
  const card = {
    is_unique: true,
    name: 'Captain Phasma',
    subtitle: 'Elite Trooper',
  }

  assert.true(
    uniqueTest(card),
    'uniqueness tests should approve unique cards that do not share a name with a deck card',
  )

  assert.end()
})
