import './index.scss'
import React from 'react'
import Monogram from '../../assets/images/jm-logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={Monogram} alt="mongoram" />
    </div>
  )
}

export default Header
