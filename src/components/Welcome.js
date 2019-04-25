import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Houses</h1>
        <div>
          <button>Hufflepuff</button>
          <button>Gryffindor</button>
          <button>Slytherin</button>
          <button>Ravenclaw</button>
        </div>
      </div>
    )
  }
}
