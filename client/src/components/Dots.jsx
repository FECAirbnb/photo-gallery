
import React from 'react'

const Dot = ({ active }) => {
  const styles = {
    padding: `10px`,
    marginRight: '5px',
    cursor: 'pointer',
    borderRadius: '50% ',
    background: `${active ? 'black' : 'gray'}`
  }
  return <span style={styles} />
}

const Dots = ({ slides, activeIndex }) => {
  const styles = {
    position: 'absolute',
    bottom: '25px',
    width: '100%',
    display: ' flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return <div style={styles} >
    {slides.map((slide, i) => (
      <Dot key={slide + i} active={activeIndex === i} />
    ))}
  </div>
}


export default Dots