const Elite = () =>
  <div className="wrapper">
    <span className="text">ELITE</span>
    <style jsx>{`
      .wrapper {
        position: absolute;
        width: 100%;
        font-size: 0.8em;
        bottom: 0;
        text-align: center;
      }
      @media (min-width: 35em) {
        .wrapper {
          font-size: 1.2em;
        }
      }
      .text {
        background: black;
        color: white;
        padding: 0.1em 0.4em 0em;
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
        position: relative;
        width: 32%;
      }
      img {
        width: 100%;
        display: block;
        border-radius: 5%; // cuts off card corners
      }
      .point {
      }
    `}</style>
  </div>
