import React from 'react'

const HeroSearchForm = ({ basicSearchFunction, getAdvancedSearchData, resetData, searchFunction, ...stateVars }) => (
  <>
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="field has-addons">
      <div className="control">
        <input className="input" placeholder="Search" onChange={basicSearchFunction}/>
      </div>
      <div className="control">
        <button type="submit" className="button is-primary">Search</button>
      </div>
      <div className="control">
        <button className="button is-success" onClick={getAdvancedSearchData}>Advanced Search</button>
      </div>
      <div className="control">
        <button className="button is-danger" onClick={resetData}>Clear</button>
      </div>
    </div>
    {stateVars.displayAdvancedSearch &&
    <>
    <div className="columns">
      <div className="field column is-one-quarter">
        <div className="control">
          <label className="label">Alignment</label>
          {stateVars.advancedSearchData.alignments.map(item => (
            <>
            <p>{item}</p>
            <input key={item} className="radio" type="radio" onChange={searchFunction} name='alignment' value={item} checked={item === stateVars.advancedSearchParameters.alignment} />
            </>
          ))}
        </div>
      </div>
      <div className="field column is-one-quarter">
        <div className="control">
          <label className="label">Gender</label>
          {stateVars.advancedSearchData.genders.map(item => (
            <>
            <p>{item}</p>
            <input key={item} className="radio" type="radio" name='gender' onChange={searchFunction} value={item} checked={item === stateVars.advancedSearchParameters.gender} />
            </>
          ))}
        </div>
      </div>
      <div className="field column is-one-quarter">
        <div className="control">
          <label className="label">Race</label>
          <select className="select" name="race" onChange={searchFunction} value={stateVars.advancedSearchParameters.race}>
            {stateVars.advancedSearchData.races.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field column is-one-quarter">
        <div className="control">
          <label className="label">Publisher</label>
          <select className="select" name="publisher" onChange={searchFunction} value={stateVars.advancedSearchParameters.alignment}>
            {stateVars.advancedSearchData.publishers.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
    </>
    }
  </form>
  </>
)

export default HeroSearchForm