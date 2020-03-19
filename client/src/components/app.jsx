import React from 'react'
import axios from 'axios'

import Photos from './Photos.jsx'
import Slider from './Slider.jsx'




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

    // this.showSlides = this.showSlides.bind(this)
    // this.hideSlides = this.hideSlides.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }

  componentDidMount() {
    axios.get('/photogallery')
      .then(response => {
        { console.log(response.data) }
        this.setState({
          image1: response.data[11].imageUrl,
          image2: response.data[6].imageUrl,
          image3: response.data[7].imageUrl,
          image4: response.data[8].imageUrl,
          image5: response.data[9].imageUrl,
          images: [response.data[11].imageUrl, response.data[6].imageUrl,
          response.data[7].imageUrl, response.data[8].imageUrl, response.data[9].imageUrl, response.data[1].imageUrl]
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

  // showSlides(e) {
  //   e && e.stopPropagation && e.stopPropagation();
  //   document.body.classList.add('hide-all');
  //   this.setState({ isSliderHidden: false });
  // }

  // hideSlides() {
  //   document.body.classList.remove('hide-all')
  //   this.setState({ isSliderHidden: true })
  // }

  render() {

    return (
      <div className='photo-gallery'>
        <Photos image1={this.state.image1}
          image2={this.state.image2}
          image3={this.state.image3}
          image4={this.state.imag4}
          image5={this.state.image5}
          togglePopup={this.togglePopup}
          showPopup={this.state.showPopup}
        />

      </div>
    )
  }
}

export default App