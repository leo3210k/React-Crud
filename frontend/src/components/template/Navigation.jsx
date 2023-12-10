import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.css'

export default props =>
  <aside className="navigation">
    <Link to="/" className="link">
      <i className="fa-solid fa-house"></i> Início
    </Link>
    <Link to="/usercrud" className="link">
      <i className="fa-solid fa-users"></i> Usuários
    </Link>
  </aside>

