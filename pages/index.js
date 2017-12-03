import React from 'react'

import { fetchCharacters, getStoredCharacters } from '../modules/api'

import Squad from '../components/Squad'
import Wrapper from '../components/Wrapper'

export default class IndexPage extends React.Component {
  state = {
    characters: [],
    isFetching: true,
  }
  async componentDidMount() {
    this.setState({
      characters: getStoredCharacters() || [],
    })
    const characters = await fetchCharacters()
    this.setState({
      characters: characters,
      isFetching: false,
    })
  }
  render() {
    if (this.state.characters.length < 1) {
      return (
        <Wrapper>
          <p>fetching cards...</p>
        </Wrapper>
      )
    }
    const squadA = this.state.characters.slice(0, 4)
    const squadB = this.state.characters.slice(12, 14)
    return (
      <Wrapper>
        <Squad squad={squadA} />
        <Squad squad={squadB} />
      </Wrapper>
    )
  }
}
