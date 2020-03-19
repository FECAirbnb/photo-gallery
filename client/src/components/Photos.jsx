import React, { Component, useState } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Font from 'react-fontawesome'
import Button from 'react-bootstrap/Button'
import Slider from './Slider.jsx'

const Photos = props => {
  const [modalShow, setModalShow] = useState(false)

  // const handleClickForPhotos = event => {
  //   { console.log('clicked') }
  //   event && event.stopPropagation && event.stopPropagation();
  //   if (event.target.nodeName !== 'DIV' || !event.target.classList.contains('gallery-display')) {
  //     return;
  //   }
  //   props.showSlides();
  //this goes in line 26 mdb container onClick={handleClickForPhotos}
  // }

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
            <Button variant="link">Share</Button>
            <Button variant="link">Save</Button>
          </div>
          <div className="gallery-display-bottom" >
            < Button onClick={props.togglePopup} style={{ position: 'absolute', left: 0, bottom: 0 }}>
              View Photo
          </Button>
          </div>
        </div>

      </MDBContainer>
      <div>
        {props.showPopup ?
          <Slider closePopup={props.togglePopup} />
          : null
        }
      </div>

    </div>
  )

}

export default Photos

