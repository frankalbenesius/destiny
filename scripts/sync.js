import fs from 'fs'

import fetchCharacters from './api'
import getSquads from './getSquads'
import addSquadStats from './addSquadStats'

function write(name, data) {
  console.log(`writing to /static/${name}.json`)
  fs.writeFile(`./static/${name}.json`, JSON.stringify(data), 'utf-8', err => {
    if (err) {
      console.error(`error writing ${name}.json`, err)
    }
  })
}

const dir = './static'
fetchCharacters().then(characters => {
  write('characters', characters)
  const byDiceTotal = (a, b) => a.dice > b.dice
  const squads = getSquads(characters)
    .map(addSquadStats)
    .filter(squad => squad.stats.dice >= 5)
  write('squads', squads)
})
