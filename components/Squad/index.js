import Card from '../Card'
import colors from '../colors'

export default ({ squad }) => (
  <div className="squad">
    {squad.characters.map(character => (
      <Card key={character.customKey} card={character} />
    ))}
    <style jsx>{`
      .squad {
        margin-bottom: 1em;
      }
    `}</style>
  </div>
)
