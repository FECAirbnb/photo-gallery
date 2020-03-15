import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/photogallery')
      .then(response => {
        { console.log(response.data[0].imageUrl) }
        this.setState({
          image1: response.data[11].imageUrl,
          image2: response.data[6].imageUrl,
          image3: response.data[7].imageUrl,
          image4: response.data[8].imageUrl,
          image5: response.data[9].imageUrl,
        })
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div className='photogallery'>
        <img src={this.state.image1} />
        <img src={this.state.image2} />
        <img src={this.state.image3} />
        <img src={this.state.image4} />
        <img src={this.state.image5} />
      </div>
    )
  }

}

export default App