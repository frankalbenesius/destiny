import test from 'tape'

import getSquads from './'

test('getSquads', assert => {
  const isArray = Array.isArray(getSquads())
  assert.true(isArray, 'getSquads should return an array')
  assert.end()
})

test('getSquads', assert => {
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
  const actual = getSquads(characters)
  const expected = [[{ ...eDarth }], [{ ...darth }]]
  assert.deepEqual(
    actual,
    expected,
    'getSquads should combine characters into unique eligible decks',
  )
  assert.end()
})

test('getSquads', assert => {
  const trooper = {
    name: 'Death Trooper',
    is_unique: false,
    points: 10, // non-elite
    affiliation_code: 'villain',
  }
  const characters = [{ ...trooper }]
  const actual = getSquads(characters)
  const expected = [[{ ...trooper }, { ...trooper }, { ...trooper }]]
  assert.deepEqual(
    actual,
    expected,
    'getSquads should combine characters into unique eligible decks',
  )
  assert.end()
})

test('getSquads', assert => {
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
  const actual = getSquads(characters)
  const expected = [
    [{ ...eDarth }],
    [{ ...darth }, { ...trooper }],
    [{ ...trooper }, { ...trooper }, { ...trooper }],
    [{ ...hired }, { ...hired }, { ...hired }],
  ]
  assert.deepEqual(
    actual,
    expected,
    'getSquads should combine characters into unique eligible decks',
  )
  assert.end()
})
