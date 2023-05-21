import React from 'react'
import PropTypes from 'prop-types';

import style from './Button.module.css'

export const Button = ({ text, number }) => {
  return (    
    <button className={style.Button}>
        //&nbsp;{`${number}`}.&nbsp;&nbsp;{`<${text}/>`}
    </button>
  )
}

Button.propTypes = {
    tag: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  
  Button.defaultProps = {
    tag: 'button',
    text: 'Button',
  };

  