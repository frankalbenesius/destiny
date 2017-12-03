export default ({ card }) => (
  <div className="card">
    <img src={card.imagesrc} />
    <style jsx>{`
      .card {
        display: inline-block;
      }
      img {
        width: 100%;
        max-width: 8em;
        display: block;
      }
    `}</style>
  </div>
)
