import React from 'react'
import axios from 'axios'

class HeroProfile extends React.Component {

  state = {
    heroData: null
  }

  async componentDidMount() {
    const heroId = this.props.match.params.id
    console.log(heroId)
    try {
      const res = await axios.get(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${heroId}.json`)
      console.log(res.data)
      this.setState({ heroData: res.data })
    } catch (err) {
      console.log('Error', err)
    }
  }

  render() {
    if (!this.state.heroData) return false
    const { images, name, biography, work } = this.state.heroData
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={images.lg} alt="an image will go here" />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Full Name</h4>
              <p>{biography.fullName}</p>
              <hr />
              <h4 className="title is-4">Aliases</h4>
              <p>{biography.aliases.join(', ')}</p>
              <hr />
              <h4 className="title is-4">Alter Egos</h4>
              <p>{biography.alterEgos}</p>
              <hr />
              <h4 className="title is-4">Job</h4>
              <p>{work.occupation}</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroProfile