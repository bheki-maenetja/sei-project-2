import React from 'react'


const SinglePlayerCard = ({ choiceObject, choiceBoolean, handleConfirm, buttonName }) => (
  <>
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={choiceObject.images.lg} alt="player choice" />
      </figure>
    </div>
    <div className="card-content">
      <h3 className="title is-3">{choiceObject.name}</h3>
      <hr />
      <h4 className="title is-4">Stats</h4>
      {Object.keys(choiceObject.powerstats).map((stat, i) => {
        return (
          <>
          <h5 className="title is-5" key={i}>{stat}</h5>
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