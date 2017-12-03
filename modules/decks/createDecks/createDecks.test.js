import test from 'tape'

import createDecks from './createDecks'

test('createDecks', assert => {
  const isArray = Array.isArray(createDecks())
  assert.true(isArray, 'should return an array')
  assert.end()
})
