const Elite = () =>
  <div className="wrapper">
    <span className="text">ELITE</span>
    <style jsx>{`
      .wrapper {
        position: absolute;
        bottom: 1em;
        width: 100%;
        font-size: 12px;
        text-align: center;
      }
      .text {
        background: black;
        color: white;
        padding: 0 0.2em;
        opacity: 0.8;
      }
    `}</style>
  </div>

export default ({ card }) =>
  <div className="card">
    <img src={card.imagesrc} />
    {card.is_elite ? <Elite /> : null}
    <style jsx>{`
      .card {
        display: inline-block;
        margin: 0.4em;
        position: relative;
      }
      img {
        width: 100%;
        max-width: 8em;
        display: block;
      }
      .point {
      }
    `}</style>
  </div>
