import Card from '../Card'
import colors from '../colors'

export default ({ squad, row }) =>
  <div className="squad">
    <div className="number">
      #{row + 1}
    </div>
    <div className="cards">
      {squad.characters.map(character =>
        <Card key={character.id} card={character} />,
      )}
    </div>
    <style jsx>{`
      .squad {
        position: relative;
        padding: 0.5em;
        background-color: ${row % 2 === 0 ? colors.gray[2] : colors.gray[0]};
      }
      .number {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 0.8em;
        color: ${colors.gray[0]};
        padding: 0.25em;
        background-color: ${colors.black};
        z-index: 1;
      }
      .cards {
        display: flex;
        justify-content: space-between;
      }
      @media (min-width: 30em) {
        .squad {
          padding: 1em;
        }
        .number {
          font-size: 1em;
        }
      }
      @media (min-width: 48em) {
        .squad {
          padding: 1em 3em;
        }
      }
    `}</style>
  </div>
