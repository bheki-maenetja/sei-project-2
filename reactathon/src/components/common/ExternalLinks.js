import React from 'react'

class ExternalLinks extends React.Component {
  
  state = {
    marvel: 'https://www.marvel.com/',
    dc: 'https://www.dccomics.com/',
    image: 'https://imagecomics.com/',
    darkhorse: 'https://www.darkhorse.com/',
    aspen: 'http://www.aspencomics.com/',
    idw: 'https://www.idwpublishing.com/',
    boom: 'http://www.boom-studios.com/',
    chosenSite: 'https://www.marvel.com/'
  }

  setSite = (e) => {
    this.setState({ chosenSite: this.state[e.target.value] })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-fullwidth">
              <iframe src={this.state.chosenSite} style={ { width: '100%', height: '700px' } }></iframe>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-fullwidth">  
              <button className="button is-danger" onClick={this.setSite} value="marvel">Marvel</button>
              <button className="button is-danger" onClick={this.setSite} value="dc">DC Comics</button>
              <button className="button is-danger" onClick={this.setSite} value="image">Image</button>
              <button className="button is-danger" onClick={this.setSite} value="darkhorse">Darkhorse</button>
              <button className="button is-danger" onClick={this.setSite} value="aspen">Aspen</button>
              <button className="button is-danger" onClick={this.setSite} value="idw">IDW</button>
              <button className="button is-danger" onClick={this.setSite} value="boom">Boom</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default ExternalLinks