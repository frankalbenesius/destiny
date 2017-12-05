import Card from '../Card'
import colors from '../colors'

export default ({ squad, row }) =>
  <div className="squad">
    {squad.characters.map(character =>
      <Card key={character.id} card={character} />,
    )}
    <style jsx>{`
      .squad {
        display: flex;
        justify-content: space-between;
        padding: 0.5em;
        background-color: ${row % 2 === 0 ? colors.gray[2] : colors.gray[0]};
      }
      @media (min-width: 53em) {
        .squad {
          padding: 1em 3em;
        }
      }
    `}</style>
  </div>
