import React from 'react'
import ReactDOM from 'react-dom'


class Slider extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      images: props.slides,
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return;
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          <span className="close" >
            &times;
          </span>
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />

      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default Slider



// ["https://loremflickr.com/cache/resized/4527_24526622268_5d058f4312_z_320_160_nofilter.jpg",
//         "https://loremflickr.com/cache/resized/4610_39855219511_4d9e681168_n_320_160_nofilter.jpg",
//         "https://loremflickr.com/cache/resized/65535_48787650227_eccb525b11_n_320_160_nofilter.jpg",
//         "https://loremflickr.com/cache/resized/1800_30104425248_b1b1042a39_n_320_160_nofilter.jpg",
//         "https://loremflickr.com/cache/resized/4561_38307587181_9de8dcdf85_320_160_nofilter.jpg",
//         "https://loremflickr.com/cache/resized/908_27372703007_a31f94b0c9_n_320_160_nofilter.jpg"]