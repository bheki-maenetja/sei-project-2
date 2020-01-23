import React from 'react'
import axios from 'axios'

import HeroCard from './HeroCard'

class HeroIndex extends React.Component {
  state = { 
    data: [], 
    searchData: [],
    displayAdvancedSearch: false,
    advancedSearchData: null,
    advancedSearchParameters: {
      race: 'Human',
      gender: 'Male',
      publisher: 'Marvel Comics',
      alignment: 'good'
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      this.setState({ data: res.data, searchData: res.data })
    } catch (err) {
      console.log('Error', err)
    }
  }

  getPublishers = () => {
    const publishers = new Set()
    this.state.data.map(item => {
      const heroPublisher = item.biography.publisher
      if (!publishers.has(heroPublisher) && !!heroPublisher) publishers.add(heroPublisher)
    })
    return Array(...publishers)
  }

  getAlignments = () => {
    const alignments = new Set()
    this.state.data.map(item => {
      let heroAlignment = item.biography.alignment
      if (heroAlignment === '-') heroAlignment = 'neutral'
      if (!alignments.has(heroAlignment) && !!heroAlignment) alignments.add(heroAlignment)
    })
    return Array(...alignments)
  }

  getGenders = () => {
    const genders = new Set()
    this.state.data.map(item => {
      const heroGender = item.appearance.gender
      if (!genders.has(heroGender) && !!heroGender && heroGender !== '-') genders.add(heroGender)
    })
    return Array(...genders)
  }

  getRaces = () => {
    const races = new Set()
    this.state.data.map(item => {
      const heroRace = item.appearance.race
      if (!races.has(heroRace) && !!heroRace) races.add(heroRace)
    })
    return Array(...races)
  }

  getAdvancedSearchData = () => {
    const publishers = this.getPublishers()
    const alignments = this.getAlignments()
    const genders = this.getGenders()
    const races = this.getRaces()

    this.setState({ advancedSearchData: { publishers, alignments, genders, races }, displayAdvancedSearch: !this.state.displayAdvancedSearch })
  }

  basicSearchFunction = (e) => {
    const searchData = this.state.data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ searchData })
  }

  searchFunction = (e) => {
    const searchParams = this.state.advancedSearchParameters
    searchParams[e.target.name] = e.target.value
    const searchData = this.state.data.filter(item => (
      item.biography.alignment === searchParams.alignment && item.appearance.gender === searchParams.gender && item.appearance.race === searchParams.race && item.biography.publisher === searchParams.publisher
    ))
    this.setState({ searchData, advancedSearchParameters: searchParams })
  }

  resetData = () => {
    this.setState({ searchData: this.state.data, advancedSearchParameters: { race: 'Human', gender: 'Male', publisher: 'Marvel Comics', alignment: 'good' } })
  }

  render() {
    console.log(this.state)
    return (
      <>
      <section className="section">
        <div className="column is-fullwidth">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field has-addons">
              <div className="control">
                <input className="input" placeholder="Search" onChange={this.basicSearchFunction}/>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">Search</button>
              </div>
              <div className="control">
                <button className="button is-success" onClick={this.getAdvancedSearchData}>Advanced Search</button>
              </div>
              <div className="control">
                <button className="button is-danger" onClick={this.resetData}>Clear</button>
              </div>
            </div>
            {this.state.displayAdvancedSearch &&
              <>
              <div className="columns">
                <div className="field column is-one-quarter">
                  <div className="control">
                    <label className="label">Alignment</label>
                    {this.state.advancedSearchData.alignments.map(item => (
                      <>
                      <p>{item}</p>
                      <input key={item} className="radio" type="radio" onChange={this.searchFunction} name='alignment' value={item} checked={item === this.state.advancedSearchParameters.alignment} />
                      </>
                    ))}
                  </div>
                </div>
                <div className="field column is-one-quarter">
                  <div className="control">
                    <label className="label">Gender</label>
                    {this.state.advancedSearchData.genders.map(item => (
                      <>
                      <p>{item}</p>
                      <input key={item} className="radio" type="radio" name='gender' onChange={this.searchFunction} value={item} checked={item === this.state.advancedSearchParameters.gender} />
                      </>
                    ))}
                  </div>
                </div>
                <div className="field column is-one-quarter">
                  <div className="control">
                    <label className="label">Race</label>
                    <select className="select" name="race" onChange={this.searchFunction} value={this.state.advancedSearchParameters.race}>
                      {this.state.advancedSearchData.races.map(item => (
                        <option value={item} key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field column is-one-quarter">
                  <div className="control">
                    <label className="label">Publisher</label>
                    <select className="select" name="publisher" onChange={this.searchFunction} value={this.state.advancedSearchParameters.alignment}>
                      {this.state.advancedSearchData.publishers.map(item => (
                        <option value={item} key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              </>
            }
          </form>
        </div>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.searchData.map(item => {
              return (
                <HeroCard {...item} key={item.id}/>
              )
            })}
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default HeroIndex