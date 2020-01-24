import React from 'react'

const SinglePlayerChoiceForm = ({ choiceObject, heroData, handleChange, getRandomHero, name }) => (
  <>
  <form>
    <label className="label">Choose your hero</label>
    <div className="field">
      <div className="level">
        <div className="level-left">
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
        <div className="level-right">
          <div className="control">
            <button className="button is-warning" name={name} onClick={getRandomHero}>Random</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  </>
)

export default SinglePlayerChoiceForm