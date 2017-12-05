const Elite = () =>
  <div className="wrapper">
    <span className="text">ELITE</span>
    <style jsx>{`
      .wrapper {
        position: absolute;
        bottom: 1.5em;
        width: 100%;
        font-size: 1.2em;
        text-align: center;
      }
      .text {
        background: black;
        color: white;
        padding: 0.2em 0.4em;
        opacity: 0.8;
        border-radius: 0.4em;
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
