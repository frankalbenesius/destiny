export default characters => {
  const add = (sum, val) => sum + val
  const dice = characters.map(c => c.dice).reduce(add)
  const health = characters.map(c => c.health).reduce(add)
  return {
    id: characters.map(c => c.id).join('|'),
    characters,
    stats: {
      dice,
      health,
    },
  }
}
