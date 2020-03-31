import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import Photos from './Photos.jsx'
import Slider from './Slider.jsx'
import NavigationBar from './Navbar.jsx'
import Title from './Title.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      images: [],
      showPopup: false
    }

    this.togglePopup = this.togglePopup.bind(this)
  }

  componentDidMount() {
    axios.get('/photogallery')
      .then(response => {
        // { console.log(response.data) }
        this.setState({
          image1: response.data[50].imageUrl,
          image2: response.data[6].imageUrl,
          image3: response.data[7].imageUrl,
          image4: response.data[28].imageUrl,
          image5: response.data[30].imageUrl,
          images: [response.data[50].imageUrl, response.data[6].imageUrl,
          response.data[7].imageUrl, response.data[28].imageUrl, response.data[30].imageUrl, response.data[5].imageUrl]
        })
      })
      .catch((err) => {
        throw err;
      })
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {

    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <div>
          <Title />
        </div>
        <div className='photo-gallery' style={{ justifyContent: "flex-end" }}>
          <Photos image1={this.state.image1}
            image2={this.state.image2}
            image3={this.state.image3}
            image4={this.state.image4}
            image5={this.state.image5}
            togglePopup={this.togglePopup}
            showPopup={this.state.showPopup}
          />

          {this.state.showPopup ?
            <Slider closePopup={this.togglePopup} slides={this.state.images} />
            : null
          }
        </div>
      </div>
    )
  }
}

export default App
