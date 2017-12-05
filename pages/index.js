import React from 'react'
import { getJSON } from 'jquery'

import Squad from '../components/Squad'
import Wrapper from '../components/Wrapper'

export default class IndexPage extends React.Component {
  state = {}
  componentDidMount() {
    getJSON('/static/squads.json', squads => {
      this.setState({ squads })
    })
  }
  render() {
    if (!this.state.squads) return null
    return (
      <Wrapper>
        <h2>All 5 Dice Squads</h2>
        <p>
          {this.state.squads.length} Squads Sorted by Total Health<br />
        </p>
        {this.state.squads
          .sort((a, b) => a.stats.health < b.stats.health)
          .map((squad, i) => <Squad squad={squad} row={i} />)}
      </Wrapper>
    )
  }
}
