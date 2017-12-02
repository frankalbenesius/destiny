import React from 'react'

import { fetchCharacters } from '../modules/api'

import Wrapper from '../components/Wrapper'

export default class IndexPage extends React.Component {
  state = {
    characters: [],
    isFetching: true,
  }
  async componentDidMount() {
    const characters = await fetchCharacters()
    this.setState({
      characters: characters,
      isFetching: false,
    })
  }
  render() {
    if (this.state.isFetching) return <div>fetching cards...</div>
    return (
      <Wrapper>
        <p>test</p>
      </Wrapper>
    )
  }
}
