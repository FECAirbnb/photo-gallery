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
      <MDBContainer fluid className='photo-gallery-display' style={{ paddingLeft: 25, paddingRight: 10 }}>
        <MDBRow className='image-wrapper' >
          <MDBCol md='6' className='main' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Image src={props.image1} alt='' className='img-fluid z-depth-1' thumbnail />
          </MDBCol>
          <MDBCol md='3' className='smImages' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Image src={props.image2} alt='' className='img-fluid ' thumbnail />
            <Image src={props.image3} alt='' className='img-fluid ' thumbnail />
          </MDBCol>
          <MDBCol md='3' className='smImages' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Image src={props.image1} alt='' className='img-fluid ' thumbnail />
            <Image src={props.image5} alt='' className='img-fluid ' thumbnail />
          </MDBCol>
          < Button onClick={props.togglePopup} variant="light" size="sm" style={{ position: 'absolute', right: 0, bottom: 'auto' }}>
            Show all photos
          </Button>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Photos

