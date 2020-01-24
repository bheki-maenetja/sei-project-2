import React from 'react'


const SinglePlayerCard = ({ choiceObject, choiceBoolean, handleConfirm, buttonName }) => (
  <>
  <div className="card hero-card">
    <div className="card-image">
      <figure className="image">
        <img src={choiceObject.images.lg} alt="player choice" />
      </figure>
    </div>
    <div className="card-content">
      <h3 className="title is-3">POWER STATS</h3>
      <h5 className="subtitle is-5">{choiceObject.name}</h5>
      <hr />
      {Object.keys(choiceObject.powerstats).map((stat, i) => {
        return (
          <>
          <h5 className="title is-5" key={i}>{stat.toUpperCase()}</h5>
          <p>{choiceObject.powerstats[stat]}</p>
          <hr />
          </>
        )
      })}
      {choiceBoolean && <button className="button is-primary" name={buttonName} onClick={handleConfirm}>Confirm Choice</button>}
    </div>
  </div>
  </>
)

export default SinglePlayerCard