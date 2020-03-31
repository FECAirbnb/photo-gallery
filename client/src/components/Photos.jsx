import React, { Component } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Button from 'react-bootstrap/Button'
import Slider from './Slider.jsx'
import Image from 'react-bootstrap/Image'

const Photos = props => {
  //console.log(props)
  return (
    <div>
      <MDBContainer fluid className='photo-gallery-display' style={{ paddingLeft: 100, paddingRight: 60, height: '400px', overflow: 'hidden' }}>
        <MDBRow className='image-wrapper' style={{ height: '400px', width: '100%', overflow: 'hidden', position: 'relative' }} >
          <MDBCol md='6' className='main' style={{ paddingLeft: 0, paddingRight: 0, maxHeight: ' 50px' }}>
            <Image src={props.image1} alt='' className='img-fluid z-depth-1' thumbnail />
          </MDBCol>
          <MDBCol md='3' className='smImages' style={{ paddingLeft: 0, paddingRight: 0, minHeight: '200px', maxHeight: '200px' }}>
            <Image src={props.image2} alt='' className='img-fluid ' thumbnail />
            <Image src={props.image3} alt='' className='img-fluid ' thumbnail />
          </MDBCol>
          <MDBCol md='3' className='smImages' style={{ paddingLeft: 0, paddingRight: 0, minHeight: '200px', maxHeight: '200px' }}>
            <Image src={props.image4} alt='' className='img-fluid ' thumbnail />
            <div className='img-wrapper' style={{ position: 'relative' }}>
              <Image src={props.image5} alt='' className='bottom-image img-fluid ' thumbnail />
              <div className='img-overlay' style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, textAlign: 'center', paddingRight: '60px' }}>
                < Button onClick={props.togglePopup} className='photoButton' variant="light" size="sm" height='5' width='50' style={{ position: 'absolute', right: 0, bottom: 'auto' }}>
                  Show photos
          </Button>
              </div>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div >
  )
}

export default Photos

