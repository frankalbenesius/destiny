const createUniquenessTest = deck => card => {
  if (!card.is_unique) {
    return true
  }
  const names = deck.map(c => c.name)
  return names.indexOf(card.name) === -1
}
export default createUniquenessTest
