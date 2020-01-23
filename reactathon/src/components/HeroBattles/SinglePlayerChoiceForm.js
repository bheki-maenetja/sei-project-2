import React from 'react'

const SinglePlayerChoiceForm = ({ choiceObject, heroData, handleChange, getRandomHero, name }) => (
  <>
  <form>
    <div className="field">
      <label className="hero">Choose your hero</label>
      <div className="control">
        <select className="select" name={name} value={choiceObject.id} onChange={handleChange}>
          {heroData.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          })}
        </select>
      </div>
    </div>
    <button className="button is-warning" name={name} onClick={getRandomHero}>Randomise</button>
  </form>
  </>
)

export default SinglePlayerChoiceForm