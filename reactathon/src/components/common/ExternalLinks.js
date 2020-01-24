import React from 'react'

class ExternalLinks extends React.Component {
  
  state = {
    marvel: 'https://www.marvel.com/',
    aspen: 'http://www.aspencomics.com/',
    idw: 'https://www.idwpublishing.com/',
    boom: 'http://www.boom-studios.com/',
    superHeroHype: 'https://www.mcmcomiccon.com/london-may-2020',
    batmanNews: 'https://batman-news.com/',
    chosenSite: 'https://www.marvel.com/'
  }

  setSite = (e) => {
    e.preventDefault()
    this.setState({ chosenSite: this.state[e.target.value] })
  }

  render() {
    return (
      <section className="section ex-link">
        <h1 className="title is-2">Explore more places from the world of Superheroes</h1>
        <div className="container">
          <div className="columns">
            <div className="column is-fullwidth">
              <iframe src={this.state.chosenSite} ></iframe>
            </div>
          </div>
        </div>
        <div className="container">
          <form>
            <div className="columns">
              <div className="field has-addons column is-fullwidth">
                <div className="control">
                  <button className="button is-danger" onClick={this.setSite} value="marvel">Marvel</button>
                </div>
                <div className="control">
                  <button className="button is-warning" onClick={this.setSite} value="aspen">Aspen</button>
                </div>
                <div className="control">
                  <button className="button is-success" onClick={this.setSite} value="idw">IDW</button>
                </div>
                <div className="control">
                  <button className="button is-primary" onClick={this.setSite} value="boom">Boom</button>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.setSite} value="superHeroHype">Superhero Hype</button>
                </div>
                <div className="control">
                  <button className="button is-dark" onClick={this.setSite} value="batmanNews">Batman News</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default ExternalLinks