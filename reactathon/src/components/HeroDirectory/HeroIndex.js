import React from 'react'
import axios from 'axios'

import HeroCard from './HeroCard'

class HeroIndex extends React.Component {
  state = { 
    data: [], 
    searchData: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      this.setState({ data: res.data, searchData: res.data })
    } catch (err) {
      console.log('Error', err)
    }
  }

  searchForHeroes = (e) => {
    const searchData = this.state.data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ searchData })
  }

  render() {
    return (
      <>
      <section className="section">
        <div className="column is-fullwidth">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field has-addons">
              <div className="control">
                <input className="input" placeholder="Search" onChange={this.searchForHeroes}/>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
            </div>
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