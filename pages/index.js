import React from 'react'

import { fetchCharacters, getStoredCharacters } from '../modules/api'

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
    return (
      <Wrapper>
        <p>characters: {this.state.characters.length}</p>
      </Wrapper>
    )
  }
}
