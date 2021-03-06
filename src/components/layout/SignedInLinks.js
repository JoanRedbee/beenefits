import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating red lighten-1">JA</NavLink></li>
    </ul>
  )
}

export default SignedInLinks
