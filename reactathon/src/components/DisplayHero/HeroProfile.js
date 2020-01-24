import React from 'react'
import axios from 'axios'

import SinglePlayerCard from '../HeroBattles/SinglePlayerCard'

class HeroProfile extends React.Component {

  state = {
    heroData: null
  }

  async componentDidMount() {
    const heroId = this.props.match.params.id
    try {
      const res = await axios.get(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${heroId}.json`)
      this.setState({ heroData: res.data })
    } catch (err) {
      console.log('Error', err)
    }
  }

  render() {
    if (!this.state.heroData) return false
    console.log(this.state)
    const { name, biography, work, connections } = this.state.heroData
    return (
      <section className="section hero-profile">
        <div className="container">
          <h2 className="title">{name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <SinglePlayerCard
                choiceObject={this.state.heroData}
                choiceBoolean={false}
                handleConfirm={() => ''}
                buttonName={''}
              />
            </div>
            <div className="column is-half">
              <h2 className="title is-2">Biography</h2>
              <hr />
              {Object.keys(biography).map(item => {
                return (
                  <>
                  {!!biography[item] &&
                  <>
                  <h5 className="title is-5">{item.toUpperCase()}</h5>
                  <p>{typeof biography[item] === 'string' ? biography[item] : biography[item].join(', ')}</p>
                  <hr />
                  </>
                  }
                  </>
                )
              })}
              <h2 className="title is-2">Work</h2>
              <hr />
              {Object.keys(work).map(item => {
                return (
                  <>
                  {!!work[item] &&
                  <>
                  <h5 className="title is-5">{item.toUpperCase()}</h5>
                  <p>{work[item]}</p>
                  <hr />
                  </>
                  }
                  </>
                )
              })}
              <h2 className="title is-2">Connections</h2>
              <hr />
              {Object.keys(connections).map(item => {
                return (
                  <>
                  {!!connections[item] &&
                  <>
                  <h5 className="title is-5">{item.toUpperCase()}</h5>
                  <p>{typeof connections[item] === 'string' ? connections[item] : connections[item].join(', ')}</p>
                  <hr />
                  </>
                  }
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroProfile