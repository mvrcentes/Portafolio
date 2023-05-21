import React from 'react'

import style from './Word.module.css'
export const Word = ({ word, color }) => {
    const color_classes = color
    ? `${style.Color} }`
    : `${style.Color}`
  return (
    <span className={color_classes}>{word}</span>
  )
}
