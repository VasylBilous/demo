import React, { Component } from 'react'

export default class AddPerson extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone: ""
  }

  addPerson = (e) => {
    e.preventDefault();
    this.props.onAddPerson(this.state);
    this.setState({ name: '', address: '', email: '', phone: '' });
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  }

  onChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  }

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <form>
        <input type="text" onChange={(e) => this.onChangeName(e)} name="name" value={this.state.name} className="form-control mb-4" />
        <input type="text" onChange={(e) => this.onChangeAddress(e)} name="address" value={this.state.address} className="form-control mb-4" />
        <input type="text" onChange={(e) => this.onChangePhone(e)} name="phone" value={this.state.phone} className="form-control mb-4" />
        <input type="text" onChange={(e) => this.onChangeEmail(e)} name="email" value={this.state.email} className="form-control mb-4" />
        <button className="btn btn-info" type="submit" onClick={this.addPerson}>Add Person</button>
        </form>
      </div>
    )
  }
}
