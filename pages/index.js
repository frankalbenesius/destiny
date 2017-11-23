import React from 'react'

import { fetchCharacters } from '../modules/api'

import Wrapper from '../components/Wrapper'
import CharacterTable from '../components/CharacterTable'

export default class IndexPage extends React.Component {
  state = {
    characters: [],
    affiliation: 'All',
    cardsFetched: false,
  }
  async componentDidMount() {
    const characters = await fetchCharacters()
    this.setState({
      characters: characters,
      cardsFetched: true,
    })
  }
  handleRadio = e => {
    this.setState({ affiliation: e.target.value })
  }
  render() {
    if (!this.state.cardsFetched) return <div>fetching cards...</div>
    return (
      <Wrapper>
        <label>
          <input
            type="radio"
            value="All"
            checked={this.state.affiliation === 'All'}
            onChange={this.handleRadio}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="Hero"
            checked={this.state.affiliation === 'Hero'}
            onChange={this.handleRadio}
          />
          Hero
        </label>
        <label>
          <input
            type="radio"
            value="Villain"
            checked={this.state.affiliation === 'Villain'}
            onChange={this.handleRadio}
          />
          Villain
        </label>
        <CharacterTable
          characters={this.state.characters.filter(
            c =>
              this.state.affiliation === 'All' ||
              c.affiliation_name === this.state.affiliation,
          )}
        />
      </Wrapper>
    )
  }
}
