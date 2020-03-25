import React, { Component } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Button from 'react-bootstrap/Button'
import { Airplay, Heart, Star } from 'react-feather'

const Title = props => {
  const title = {
    paddingLeft: 60,
    paddingRight: 0,
    paddingTop: 35,
    paddingBottom: 20
  }
  const heading = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 40,

  }

  const titleButtons = {
    position: 'absolute',
    right: 0,
    paddingRight: 60,
    textDecorationLine: 'underline'
  }

  return (
    <MDBContainer className='title' style={title}>
      <MDBRow className='heading' style={heading}><h2> Ocean Front Home</h2></MDBRow>
      <MDBRow>
        <div>
          <Star color='red' />
         3.14 (7) • Superhost • Key Caulker, Belize
          </div>
        <div className='titleButtons' style={titleButtons} >
          <Button variant="light" > <Airplay /> Share</Button>{'      '}
          <Button variant="light"><Heart />  Save</Button>
        </div>
      </MDBRow>
    </MDBContainer >
  )
}

export default Title
