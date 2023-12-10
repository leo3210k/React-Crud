import React from 'react'
import './Header.css'

export default props =>
  <header className="header">
    <h1 className="title">
      <i className={`fa-solid fa-${ props.icon } title__icon`}></i>  
      <span className="title__text">{ props.title }</span>
    </h1>
    <span className="subtitle">{ props.subtitle }</span>
  </header>