import Card from '../Card'
import colors from '../colors'

export default ({ squad }) =>
  <div className="squad">
    {squad.characters.map(character =>
      <Card key={character.id} card={character} />,
    )}
    <style jsx>{`
      .squad {
        margin-bottom: 1em;
      }
    `}</style>
  </div>
