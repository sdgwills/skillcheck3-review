import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  changeName = e => {
    this.setState({
      name: e.target.value
    })
  }

  sort = () => {
    const houseId = Math.ceil(Math.random() * 4)
    if (this.state.name) {
      axios.post(`/api/student/${houseId}`, this.state).then(() => {
        this.props.history.push(`/house/${houseId}`)
      })
    }
  }

  render() {
    return (
      <div className="welcome">
        <h1>Sorting Hat</h1>
        <div>
          <input placeholder='Name' onChange={this.changeName} type="text" />
          <button onClick={this.sort}>Sort Me</button>
        </div>
        <div>
          <Link to="/house/1">
            <button>Hufflepuff</button>
          </Link>
          <Link to="/house/2">
            <button>Gryffindor</button>
          </Link>
          <Link to="/house/3">
            <button>Slytherin</button>
          </Link>
          <Link to="/house/4">
            <button>Ravenclaw</button>
          </Link>
        </div>
      </div>
    )
  }
}
