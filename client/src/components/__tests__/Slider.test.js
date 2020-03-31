import React from 'react';
import { shallow, mount } from './setupTests';

import Slider from '../Slider'


describe('Slider', () => {
  let slider
  const images = ["https://loremflickr.com/cache/resized/4527_24526622268_5d058f4312_z_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/4610_39855219511_4d9e681168_n_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_48787650227_eccb525b11_n_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/1800_30104425248_b1b1042a39_n_320_160_nofilter.jpg",
    "https://loremflickr.com/cache/resized/4561_38307587181_9de8dcdf85_320_160_nofilter.jpg"]


  it('should render slider component ', () => {
    const test = shallow(<Slider slides={images} />)
  })

  const sliders = () => {
    if (!slider) {
      slider = mount(<Slider slides={images} />)
    }
    return slider
  }

  const Slide = ({ image, closePopup }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '40% 30%'
    }
    return <div className="slide" style={styles}>
      <span className="close" onClick={closePopup} >
        &times;
            </span>
    </div>
  }

  afterEach(() => {
    slider = null;
  })

  test('should rendering Slider component', () => {
    const slide = sliders().find('.slide')
    expect(slide).toEqual(expect.any(Object))
    expect(slide).toHaveLength(images.length)
  });

  test('should display first slide when Slider renders', () => {
    const index = 0
    //const display = sliders().find('.slide');
    const image = sliders().find(Slide).at(index)

    expect(sliders().state('currentIndex')).toBe(0)

  })


});