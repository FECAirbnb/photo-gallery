import React from 'react';
import { shallow, mount } from './setupTests';

import Photos from '../Photos'

describe('Photos', () => {
  it('rendering Photos component', () => {
    const tester = mount(<Photos />)
  });

  const image_1 = "https://loremflickr.com/cache/resized/4527_24526622268_5d058f4312_z_320_160_nofilter.jpg"
  const image_2 = "https://loremflickr.com/cache/resized/4610_39855219511_4d9e681168_n_320_160_nofilter.jpg"
  const image_3 = "https://loremflickr.com/cache/resized/65535_48787650227_eccb525b11_n_320_160_nofilter.jpg"
  const image_4 = "https://loremflickr.com/cache/resized/1800_30104425248_b1b1042a39_n_320_160_nofilter.jpg"
  const image_5 = "https://loremflickr.com/cache/resized/4561_38307587181_9de8dcdf85_320_160_nofilter.jpg"


  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Photos image1={image_1}
      image2={image_2}
      image3={image_3}
      image4={image_4}
      image5={image_5}
    />)
  })

  it('should have a main picture', () => {
    expect(wrapper.find('.main').length).toBe(2)
  })

  it('should have four smaller picture', () => {
    expect(wrapper.find('.smImages').length).toBe(4)
  })

  it('should have a button picture', () => {
    expect(wrapper.find('.photoButton').length).toBe(2)
  })


});
