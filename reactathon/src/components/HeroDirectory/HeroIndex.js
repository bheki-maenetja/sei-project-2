import React from 'react'
import axios from 'axios'

import HeroCard from './HeroCard'
import HeroSearchForm from './HeroSearchForm'

class HeroIndex extends React.Component {
  state = { 
    data: [], 
    searchData: [],
    displayAdvancedSearch: false,
    advancedSearchData: null,
    advancedSearchParameters: {
      race: '',
      gender: '',
      publisher: '',
      alignment: ''
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
      (item.biography.alignment === searchParams.alignment || !searchParams.alignment) && 
      (item.appearance.gender === searchParams.gender || !searchParams.gender) && 
      (item.appearance.race === searchParams.race || !searchParams.race) && 
      (item.biography.publisher === searchParams.publisher || !searchParams.publisher)
    ))
    this.setState({ searchData, advancedSearchParameters: searchParams })
  }

  resetData = () => {
    this.setState({ searchData: this.state.data, advancedSearchParameters: { race: '', gender: '', publisher: '', alignment: '' } })
  }

  render() {
    return (
      <>
      <section className="section hero-index">
        <div className="container">
          <div className="columns">
            <div className="column is-fullwidth">
              <HeroSearchForm 
                basicSearchFunction={this.basicSearchFunction}
                getAdvancedSearchData={this.getAdvancedSearchData}
                resetData={this.resetData}
                searchFunction={this.searchFunction}
                {...this.state}
              />
            </div>
          </div>
          
        </div>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.searchData.length === 0 && <h1 className="title is-1">No Matches. Try Again</h1>}
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