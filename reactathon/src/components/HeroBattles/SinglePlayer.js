import React from 'react'
import axios from 'axios'

class SinglePlayer extends React.Component {

  state = {
    data: [],
    playerChoice: {},
    compChoice: {}
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      this.setState({ data: res.data })
    } catch (err) {
      console.log('Error', err)
    }
  }

  handleChange = (e) => {
    const playerChoice = this.state.data.filter(item => item.id === parseInt(e.target.value))[0]
    const compChoice = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    this.setState({ playerChoice, compChoice })
  }

  render() {
    console.log(this.state)
    return (
      <form>
        <select className="select" onChange={this.handleChange}>
          {this.state.data.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          })}
        </select>
      </form>
    )
  }
}

export default SinglePlayer