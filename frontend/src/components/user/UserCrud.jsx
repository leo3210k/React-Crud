import React, { Component } from 'react'
import axios from 'axios'
import './UserCrud.css'

import Header from '../template/Header'

const baseUrl = "http://localhost:3002/users"
const initialState = { 
  user: { name: '', email: '' },
  list: []
}

export default class UserCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: '', email: '' },
      list: []
    };
  }

  render() {
    return (
      <>
        <Header title="Usuários" 
          subtitle="Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
          icon="users">
        </Header>
        <div className="main">
          <div className="card">
            { this.renderForm() }
            <hr />
            { this.renderTable() }
          </div>
        </div>
      </>
    )
  }

  renderForm() {
    return (
      <form method="POST" className="form">
        <div className="form-inputs">
          <div className="field">
            <label className="field__label">Nome</label>
            <input type="text" 
              name="name"
              className="field__input"
              placeholder="Digite o nome..."
              value={this.state.user.name}
              onChange={e => this.updateField(e)}/>
          </div>
          <div className="field">
            <label className="field__label">E-mail</label>
            <input type="text" 
              name="email"
              className="field__input"
              placeholder="Digite o e-mail..."
              value={this.state.user.email}
              onChange={e => this.updateField(e)}/>
          </div>
        </div>
        <hr/>
        <div className="form-actions">
          <button className="form-actions--blue"
            onClick={e => this.save(e)}>Salvar</button>
          <button className="form-actions--gray"
            onClick={e => this.clear(e)}>Cancelar</button>
        </div>
      </form>
    )
  }

  renderTable() {
    return (
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-head__element">ID</th>
            <th className="table-head__element">Nome</th>
            <th className="table-head__element">E-mail</th>
            <th className="table-head__element">Ações</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(user => {
      return(
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td className="table-actions">
            <button className="table-action table-action--edit"
              onClick={() => this.load(user)}>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button className="table-action table-action--delete"
              onClick={() => this.delete(user)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  componentWillMount() {
    axios(`${baseUrl}`)
      .then(resp => this.setState({ list: resp.data }))
  }

  updateField(e) {
    const user = { ...this.state.user }
    user[e.target.name] = e.target.value
    this.setState({ user })
  }

  save(e) {
    e.preventDefault()

    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

    axios[method](`${url}`, user)
      .then(resp => this.getUpdatedList(resp.data))
      .then(list => this.setState({ user: initialState.user, list}))
  }

  clear(e) {
    e?.preventDefault()

    this.setState({ user: initialState.user })
  }

  load(user) {
    this.setState({ user })
  }

  delete(user) {
    axios.delete(`${baseUrl}/${user.id}`)
      .then(resp => this.getUpdatedList(resp.data, false))
      .then(list => this.setState({ user: initialState.user, list}))
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)

    return list  
  }
}