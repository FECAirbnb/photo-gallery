import React, { Component } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Button from 'react-bootstrap/Button'
import { Airplay, Heart, Star } from 'react-feather'



const Title = props => {
  return (
    <MDBContainer style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 5, paddingBottom: 20 }}>
      <MDBRow style={{ paddingLeft: 0, paddingRight: 0 }}><h2> Ocean Front Home</h2></MDBRow>
      <MDBRow>
        <div>
          <Star color='red' />
         4.78 (7) • Superhost • Key Caulker, Belize
          </div>
        <div style={{ position: 'absolute', right: 0 }} >
          <Button style={{ textDecorationLine: 'underline' }} variant="light" > <Airplay /> Share</Button>{'      '}
          <Button style={{ textDecorationLine: 'underline' }} variant="light"><Heart />  Save</Button>
        </div>
      </MDBRow>
    </MDBContainer >
  )
}


export default Title