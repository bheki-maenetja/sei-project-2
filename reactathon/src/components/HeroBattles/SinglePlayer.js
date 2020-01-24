import React from 'react'
import axios from 'axios'

import SinglePlayerCard from './SinglePlayerCard'
import SinglePlayerChoiceForm from './SinglePlayerChoiceForm'

class SinglePlayer extends React.Component {

  state = {
    data: [],
    firstChoice: null,
    secondChoice: null,
    gotFirstChoice: false,
    gotSecondChoice: false,
    gameInPlay: false,
    winner: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      this.setState({ data: res.data, firstChoice: res.data[0], secondChoice: res.data[0] })
    } catch (err) {
      console.log('Error', err)
    }
  }

  handleChange = (e) => {
    const heroChoice = this.state.data.filter(item => item.id === parseInt(e.target.value))[0]
    this.setState({ [e.target.name]: heroChoice })
  }

  getRandomHero = (e) => {
    e.preventDefault()
    const heroChoice = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    this.setState({ [e.target.name]: heroChoice })
  }

  confirmChoice = (e) => {
    if (e.target.value === 0) return
    this.setState({ [e.target.name]: true })
  }

  findWinner = () => {
    const playerStatNames = Object.keys(this.state.firstChoice.powerstats)
    const playerStatValues = playerStatNames.map(item => this.state.firstChoice.powerstats[item])
    const playerTotal = playerStatValues.reduce((acc, i) => acc + i, 0)

    const compStatNames = Object.keys(this.state.secondChoice.powerstats)
    const compStatValues = compStatNames.map(item => this.state.secondChoice.powerstats[item])
    const compTotal = compStatValues.reduce((acc, i) => acc + i, 0)

    if (playerTotal > compTotal) {
      this.setState({ winner: 'firstChoice', gameInPlay: true })
    } else if (compTotal > playerTotal) {
      this.setState({ winner: 'secondChoice', gameInPlay: true })
    } else {
      this.setState({ gameInPlay: true })
    }
    
    console.log('First Choice:', playerTotal, 'Second Choice:', compTotal)
  }

  resetPage = () => {
    this.setState({ 
      gameInPlay: false, 
      gotFirstChoice: false, 
      gotSecondChoice: false, 
      winner: '', 
      firstChoice: this.state.data[0],
      secondChoice: this.state.data[0]
    })
  }

  render() {
    if (!this.state.firstChoice) return false
    return (
      <section className="section hero-battle">
        <div className="container">
          <div className="container">
            {this.state.gotFirstChoice && this.state.gotSecondChoice &&
              <button className={`button ${this.state.gameInPlay ? 'is-danger' : 'is-success'}`} onClick={this.state.gameInPlay ? this.resetPage : this.findWinner }>{this.state.gameInPlay ? 'Reset' : 'Find the Winner'}</button>
            }
          </div>
          <div className="columns">
            <div className={`column is-half ${this.state.gotFirstChoice ? '' : 'is-offset-one-quarter'}`}>
              <div className="title">
                {!this.state.gotFirstChoice &&
                <SinglePlayerChoiceForm 
                  choiceObject={this.state.firstChoice}
                  heroData={this.state.data}
                  handleChange={this.handleChange}
                  getRandomHero={this.getRandomHero}
                  name={'firstChoice'}
                />
                }
              </div>
              {this.state.gameInPlay && <h1 className="title is-1">{this.state.winner === 'firstChoice' ? 'Winner' : this.state.winner === 'secondChoice' ? 'Loser' : 'Draw'}</h1>}
              <SinglePlayerCard 
                choiceObject={this.state.firstChoice}
                choiceBoolean={!this.state.gotFirstChoice}
                handleConfirm={this.confirmChoice}
                buttonName={'gotFirstChoice'}
              />
            </div>
            {this.state.gotFirstChoice && 
            <div className="column is-half">
              <div className="title">
                {!this.state.gotSecondChoice &&
                <SinglePlayerChoiceForm 
                  choiceObject={this.state.secondChoice}
                  heroData={this.state.data}
                  handleChange={this.handleChange}
                  getRandomHero={this.getRandomHero}
                  name={'secondChoice'}
                />
                }
              </div>
              {this.state.gameInPlay && <h1 className="title is-1">{this.state.winner === 'secondChoice' ? 'Winner' : this.state.winner === 'firstChoice' ? 'Loser' : 'Draw'}</h1>}
              <SinglePlayerCard 
                choiceObject={this.state.secondChoice}
                choiceBoolean={this.state.gotFirstChoice && !this.state.gotSecondChoice}
                handleConfirm={this.confirmChoice}
                buttonName={'gotSecondChoice'}
              />
            </div>
            }
          </div>
          
        </div>
      </section>
    )
  }
}

export default SinglePlayer