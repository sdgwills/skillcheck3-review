import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      house_name: '',
      description: '',
      patron_animal: '',
      img: '',
      color_1: '',
      color_2: '',
      color_3: '',
      students: []
    }
  }

  componentDidMount() {
    this.getHouseData()
    this.getStudentData()
  }

  getHouseData() {
    let { id: houseToGet } = this.props.match.params
    axios.get(`/api/house/${houseToGet}`).then(({ data: house }) => {
      this.setState(house)
    })
  }

  getStudentData() {
    let { id: houseToGet } = this.props.match.params
    axios.get(`/api/students/${houseToGet}`).then(res => {
      this.setState({students: res.data})
    })
  }

  componentDidUpdate(pastProps) {
    if (pastProps.match.params.id !== this.props.match.params.id) {
      this.getHouseData()
      console.log('it ran')
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color_1,
          width: '100%',
          height: '100vh'
        }}
      >
        <h1 style={{ color: this.state.color_3 }}>{this.state.house_name}</h1>
        <h3 style={{ color: this.state.color_3 }}>{this.state.description}</h3>
        <h2 style={{ color: this.state.color_3 }}>
          {this.state.patron_animal}
        </h2>
        <figure>
          <img src={this.state.img} alt={`${this.state.house_name} crest`} />
        </figure>
        <hr/>
        <h2 style={{color: this.state.color_3}}>Students</h2>
        {this.state.students.map((student, i) => (
          <h4 style={{ color: this.state.color_2 }} key={i}>{student.student}</h4>
        ))}
      </div>
    )
  }
}
