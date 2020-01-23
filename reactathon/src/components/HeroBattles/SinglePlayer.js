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
    showCompStats: false
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

  getSecondChoice = () => {
    const newData = this.state.data.filter(item => item.id !== this.state.firstChoice.id)
    const secondChoice = newData[Math.floor(Math.random() * newData.length)]
    return secondChoice
  }

  findWinner = () => {
    const playerStatNames = Object.keys(this.state.firstChoice.powerstats)
    const playerStatValues = playerStatNames.map(item => this.state.firstChoice.powerstats[item])
    const playerTotal = playerStatValues.reduce((acc, i) => acc + i, 0)

    const compStatNames = Object.keys(this.state.secondChoice.powerstats)
    const compStatValues = compStatNames.map(item => this.state.secondChoice.powerstats[item])
    const compTotal = compStatValues.reduce((acc, i) => acc + i, 0)

    let result
    if (playerTotal > compTotal) {
      result = 'player wins!'
    } else if (compTotal > playerTotal) {
      result = 'computer wins'
    } else {
      result = 'it\'s a draw!'
    }
    window.alert(result)
  }

  render() {
    if (!this.state.firstChoice) return false
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          {this.state.gotFirstChoice && this.state.gotSecondChoice && <button className="button is-success" onClick={this.findWinner}>Find the Winner</button>}
          <div className="columns">
            <div className={`column is-half ${this.state.gotFirstChoice ? '' : 'is-offset-one-quarter'}`}>
              {!this.state.gotFirstChoice &&
              <SinglePlayerChoiceForm 
                choiceObject={this.state.firstChoice}
                heroData={this.state.data}
                handleChange={this.handleChange}
                getRandomHero={this.getRandomHero}
                name={'firstChoice'}
              />
              }
              <SinglePlayerCard 
                choiceObject={this.state.firstChoice}
                choiceBoolean={!this.state.gotFirstChoice}
                handleConfirm={this.confirmChoice}
                buttonName={'gotFirstChoice'}
              />
            </div>
            {this.state.gotFirstChoice && 
            <div className="column is-half">
              {!this.state.gotSecondChoice &&
              <SinglePlayerChoiceForm 
                choiceObject={this.state.secondChoice}
                heroData={this.state.data}
                handleChange={this.handleChange}
                getRandomHero={this.getRandomHero}
                name={'secondChoice'}
              />
              }
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