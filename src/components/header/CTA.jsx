import React from 'react';
import CV from '../../assets/download/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA;
