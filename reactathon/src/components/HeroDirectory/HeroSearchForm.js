import React from 'react'

const HeroSearchForm = ({ basicSearchFunction, getAdvancedSearchData, resetData, searchFunction, ...stateVars }) => (
  <>
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="columns is-mobile is-multiline">
      <div className="column is-full-desktop is-full-tablet is-full-mobile">
        <div className="level">
          <div className="level-left">
            <div className="field has-addons">
              <div className="control">
                <input className="input is-fullwidth" placeholder="Search" onChange={basicSearchFunction}/>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">Search</button>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="field has-addons">
              <div className="control">
                <button className="button is-success" onClick={getAdvancedSearchData}>Advanced Search</button>
              </div>
              <div className="control">
                <button className="button is-danger" onClick={resetData}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {stateVars.displayAdvancedSearch &&
    <>
    <div className="columns is-mobile is-multiline">
      <div className="field column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <div className="control">
          <label className="label">Alignment</label>
          <select className="select" name="alignment" onChange={searchFunction} value={stateVars.advancedSearchParameters.alignment}>
            <option value={''}>Any</option>
            {stateVars.advancedSearchData.alignments.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <div className="control">
          <label className="label">Gender</label>
          <select className="select" name="gender" onChange={searchFunction} value={stateVars.advancedSearchParameters.gender}>
            <option value={''}>Any</option>
            {stateVars.advancedSearchData.genders.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <div className="control">
          <label className="label">Species</label>
          <select className="select" name="race" onChange={searchFunction} value={stateVars.advancedSearchParameters.race}>
            <option value={''}>Any</option>
            {stateVars.advancedSearchData.races.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <div className="control">
          <label className="label">Publisher</label>
          <select className="select" name="publisher" onChange={searchFunction} value={stateVars.advancedSearchParameters.publisher}>
            <option value={''}>Any</option>
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