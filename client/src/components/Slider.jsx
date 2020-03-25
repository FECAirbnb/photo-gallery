import React from 'react'
import ReactDOM from 'react-dom'
import Dots from './Dots.jsx'

import { ArrowRight, ArrowLeft } from 'react-feather'


class Slider extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      images: props.slides,
      currentIndex: 0,
      translateValue: 0
    }
    this.props = props
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
    const slider = {
      position: 'relative',
      width: '800px',
      margin: '0 auto',
      height: '800px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      backgroundColor: 'white'
    }
    return (
      <div className="slider" style={slider}>

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            position: 'relative',
            height: '100%',
            width: '100%'
          }}>

          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} closePopup={this.props.closePopup} />
            ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
        <Dots
          slides={this.state.images}
          activeIndex={this.state.currentIndex}
        />

      </div>
    );
  }
}

const Slide = ({ image, closePopup }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '40% 30%',
    display: 'inline-block',
    height: '100%',
    width: '100%'
  }
  return <div className="slide" style={styles}>
    <span className="close" onClick={closePopup} style={{ float: 'right', cursor: 'pointer' }} >
      &times;
          </span>
  </div>
}

const LeftArrow = (props) => {
  const backArrow = {
    position: 'absolute',
    top: '50%',
    left: '25px',
    zIndex: 999,
    color: '#fff',
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f9f9f9',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform ease-in .1s'
  }
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide} style={backArrow} >
      <i className="arrow-left " aria-hidden="true"><ArrowLeft color='black' /></i>
    </div >
  );
}

const RightArrow = (props) => {
  const rightArrow = {
    position: 'absolute',
    zIndex: 999,
    top: '50%',
    right: '25px',
    color: '#fff',
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f9f9f9',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform ease-in .1s'
  }
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide} style={rightArrow}>
      <i className="arrow-right " aria-hidden="true"><ArrowRight color='black' /></i>
    </div>
  );
}

export default Slider

