import React, { Component } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Button from 'react-bootstrap/Button'
import Slider from './Slider.jsx'

const Photos = props => {
  //console.log(props)
  return (
    <div>
      <MDBContainer fluid className='photo-gallery-display' style={{ paddingLeft: 0, paddingRight: 0 }}>
        <MDBRow className='image-wrapper' style={{ paddingLeft: 0, paddingRight: 0 }}>
          <MDBCol md='6' className='main' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <img src={props.image1} alt='' className='img-fluid z-depth-1' />
          </MDBCol>

          <MDBCol md='3' className='smImages' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <img src={props.image2} alt='' className='img-fluid ' />
            <img src={props.image3} alt='' className='img-fluid ' />
          </MDBCol>
          <MDBCol md='3' className='smImages' style={{ paddingLeft: 0, paddingRight: 0 }}>
            <img src={props.image1} alt='' className='img-fluid ' />
            <img src={props.image5} alt='' className='img-fluid ' />
          </MDBCol>
        </MDBRow>
        <div className="gallery-display fx">
          <div className="gallery-display-top fx">
            <Button variant="light">Share</Button>{'      '}
            <Button variant="light">Save</Button>
          </div>
          <div className="gallery-display-bottom" >
            < Button onClick={props.togglePopup} style={{ position: 'absolute', left: 0, bottom: 0 }}>
              View Photo
          </Button>
          </div>
        </div>
      </MDBContainer>
    </div>
  )
}

export default Photos

