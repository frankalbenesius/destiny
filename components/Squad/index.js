import Card from '../Card'

export default ({ squad }) => (
  <div className="squad">
    {squad.map(character => <Card card={character} />)}
  </div>
)
