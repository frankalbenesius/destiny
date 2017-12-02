import test from 'tape'

import createDecks from './createDecks'

test('createDecks should return an array', assert => {
  const isArray = Array.isArray(createDecks())
  assert.true(isArray)
  assert.end()
})
