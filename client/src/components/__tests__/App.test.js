import React from 'react';
import { shallow } from './setupTests';

import App from '../App'


describe('App', () => {
  it('rendering App component', () => {
    const wrapper = shallow(<App />)
  });

  const image_1 = "https://loremflickr.com/cache/resized/4527_24526622268_5d058f4312_z_320_160_nofilter.jpg"
  const image_2 = "https://loremflickr.com/cache/resized/4610_39855219511_4d9e681168_n_320_160_nofilter.jpg"
  const image_3 = "https://loremflickr.com/cache/resized/65535_48787650227_eccb525b11_n_320_160_nofilter.jpg"
  const image_4 = "https://loremflickr.com/cache/resized/1800_30104425248_b1b1042a39_n_320_160_nofilter.jpg"
  const image_5 = "https://loremflickr.com/cache/resized/4561_38307587181_9de8dcdf85_320_160_nofilter.jpg"

  const url = [
    "https://loremflickr.com/cache/resized/4527_24526622268_5d058f4312_z_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/4610_39855219511_4d9e681168_n_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_48787650227_eccb525b11_n_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/1800_30104425248_b1b1042a39_n_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/4561_38307587181_9de8dcdf85_320_160_nofilter.jpg"
  ]
  const wrapper = shallow(<App />)

  beforeEach(() => {
    wrapper.setState({
      image1: image_1,
      image2: image_2,
      image3: image_3,
      image4: image_4,
      image5: image_5,
      images: url,
      showPopup: false
    });
    wrapper.setState({ showPopup: false })
  })
  it('should have image1', () => {
    expect(wrapper.state('image1')).toEqual(image_1)
  });

  it('should have image2', () => {
    expect(wrapper.state('image2')).toEqual(image_2)
  });

  it('should have image3', () => {
    expect(wrapper.state('image3')).toEqual(image_3)
  });

  it('should have image4', () => {
    expect(wrapper.state('image4')).toEqual(image_4)
  });

  it('should have image5', () => {
    expect(wrapper.state('image5')).toEqual(image_5)
  });

  it('should have all images', () => {
    expect(wrapper.state('images')).toEqual(url)
  });

  it('should have a button picture', () => {
    const wrapper = shallow(<App />)
    wrapper.find('.photoButton')simulate('click')
    expect(wrapper.state('showPopup')).toBeTruthy();
  })

});