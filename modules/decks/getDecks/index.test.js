import test from 'tape'

import getDecks from './'

test('getDecks', assert => {
  const isArray = Array.isArray(getDecks())
  assert.true(isArray, 'getDecks should return an array')
  assert.end()
})

test('getDecks', assert => {
  const eDarth = {
    name: 'Darth Vader',
    is_unique: true,
    points: 21, // elite
    affiliation_code: 'villain',
  }
  const darth = {
    name: 'Darth Vader',
    is_unique: true,
    points: 16, // non-elite
    affiliation_code: 'villain',
  }
  const characters = [{ ...eDarth }, { ...darth }]
  const actual = getDecks(characters)
  const expected = [[{ ...eDarth }], [{ ...darth }]]
  assert.deepEqual(
    actual,
    expected,
    'getDecks should combine characters into unique eligible decks',
  )
  assert.end()
})

test('getDecks', assert => {
  const trooper = {
    name: 'Death Trooper',
    is_unique: false,
    points: 10, // non-elite
    affiliation_code: 'villain',
  }
  const characters = [{ ...trooper }]
  const actual = getDecks(characters)
  const expected = [[{ ...trooper }, { ...trooper }, { ...trooper }]]
  assert.deepEqual(
    actual,
    expected,
    'getDecks should combine characters into unique eligible decks',
  )
  assert.end()
})

test('getDecks', assert => {
  const eDarth = {
    name: 'Darth Vader',
    is_unique: true,
    points: 21, // elite
    affiliation_code: 'villain',
  }
  const darth = {
    name: 'Darth Vader',
    is_unique: true,
    points: 16, // non-elite
    affiliation_code: 'villain',
  }
  const trooper = {
    name: 'Death Trooper',
    is_unique: false,
    points: 10, // non-elite
    affiliation_code: 'villain',
  }
  const hired = {
    name: 'Hired Gun',
    is_unique: false,
    points: 8,
    affiliation_code: 'hero',
  }
  const characters = [{ ...eDarth }, { ...darth }, { ...trooper }, { ...hired }]
  const actual = getDecks(characters)
  const expected = [
    [{ ...eDarth }],
    [{ ...darth }, { ...trooper }],
    [{ ...trooper }, { ...trooper }, { ...trooper }],
    [{ ...hired }, { ...hired }, { ...hired }],
  ]
  assert.deepEqual(
    actual,
    expected,
    'getDecks should combine characters into unique eligible decks',
  )
  assert.end()
})
