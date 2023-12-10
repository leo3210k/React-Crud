import React from 'react'
import './Home.css'

import Header from '../template/Header'

export default props =>
  <>
    <Header title="Início" icon="house" 
      subtitle="Segundo Projeto do Capítulo de React.">
    </Header>
    <div className="main">
      <div className="card">
        <h1 className="welcome__title">Bem Vindo!</h1>
        <hr />
        <p className="welcome__text">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
      </div>
    </div>
  </>