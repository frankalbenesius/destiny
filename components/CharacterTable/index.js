export default class CharacterTable extends React.Component {
  state = {
    attribute: 'name',
    reverse: false,
  }
  handleSort = e => {
    e.preventDefault()
    const attribute = e.target.dataset.sort
    const reverse =
      attribute === this.state.attribute ? !this.state.reverse : false
    this.setState({
      attribute: e.target.dataset.sort,
      reverse: reverse,
    })
  }
  render() {
    const createSorter = () => {
      const attr = this.state.attribute
      const dataIsNumeric = !isNaN(this.props.characters[0][attr])
      if (dataIsNumeric) {
        return (a, b) => {
          const val = b[attr] - a[attr]
          if (this.state.reverse) {
            return val * -1
          }
          return val
        }
      } else {
        return (a, b) => {
          const val = a[attr] > b[attr]
          if (this.state.reverse) {
            return !val
          }
          return val
        }
      }
    }
    return (
      <table>
        <style jsx>{`
          table {
            margin: 0 auto;
            border-collapse: collapse;
            text-align: left;
          }
          thead {
            border-bottom: 1px solid black;
          }
          th,
          td {
            padding: 0.2em 0.5em 0;
          }
          th {
            cursor: default;
          }
          th:hover {
            text-decoration: underline;
          }
          tr:nth-child(2n) {
            background: #f3f3f3;
          }
          tbody tr:hover {
            background: #ddf3f6;
          }
        `}</style>
        <thead>
          <tr>
            <th title="Elite" onClick={this.handleSort} data-sort="is_elite">
              E
            </th>
            <th title="Name" onClick={this.handleSort} data-sort="name">
              Name
            </th>
            <th title="Subtitle" onClick={this.handleSort} data-sort="subtitle">
              Subtitle
            </th>
            <th title="Set" onClick={this.handleSort} data-sort="set_name">
              Set
            </th>
            <th
              title="Faction"
              onClick={this.handleSort}
              data-sort="faction_name"
            >
              F
            </th>
            <th title="Points" onClick={this.handleSort} data-sort="points">
              P
            </th>
            <th title="Health" onClick={this.handleSort} data-sort="health">
              H
            </th>
            <th
              title="Health Per Point"
              onClick={this.handleSort}
              data-sort="hpp"
            >
              HPP
            </th>
            <th
              title="Dice Per Point"
              onClick={this.handleSort}
              data-sort="dpp"
            >
              DPP
            </th>
            <th title="Damage Sides" onClick={this.handleSort} data-sort="ds">
              Ds
            </th>
            <th
              title="Damage Sides Per Point"
              onClick={this.handleSort}
              data-sort="dspp"
            >
              DsPP
            </th>
            <th
              title="Sum & Average of Dice Sides"
              onClick={this.handleSort}
              data-sort="diceSum"
            >
              Dice Sum
            </th>
            <th
              title="Sum & Average of Damage Sides"
              onClick={this.handleSort}
              data-sort="diceDmgSum"
            >
              Damage Sum
            </th>
            <th
              title="Damage Sum Per Point"
              onClick={this.handleSort}
              data-sort="diceDmgSumPP"
            >
              Damage Sum PP
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.characters.sort(createSorter()).map(character => (
            <tr key={character.id}>
              <td>{character.is_elite ? 'E' : ''}</td>
              <td>
                <a href={`https://swdestinydb.com/card/${character.code}`}>
                  {character.name}
                  {character.is_unique ? '*' : ''}
                </a>
              </td>
              <td>{character.subtitle}</td>
              <td>{character.set_code}</td>
              <td>{character.faction_name.substr(0, 1)}</td>
              <td>{character.points}</td>
              <td>{character.health}</td>
              <td>{character.hpp}</td>
              <td>{character.dpp}</td>
              <td>{character.ds}</td>
              <td>{character.dspp}</td>
              <td>
                {character.diceSum} ({character.diceAvg})
              </td>
              <td>
                {character.diceDmgSum} ({character.diceDmgAvg})
              </td>
              <td>{character.diceDmgSumPP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
