import React, { Component } from 'react'
import './edit-modal.css'

export default class EditModal extends Component {
  state = {
    id: '',
    name: '',
    address: '',
    phone: '',
    email: ''
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

  onOpen = () => {
    const { person } = this.props;
    this.setState({ id: person.id, name: person.name, address: person.address, phone: person.phone, email: person.email })
  }

  onSave = () => {
    this.props.onEdit(this.state);
  }

  render() {
    const { person } = this.props;
    const id = 'modal' + person.id;
    return <>
      <div className="card-footer text-tight">
        <i className="far fa-edit" onClick={this.onOpen} data-toggle="modal" data-target={`#${id}`}></i>
      </div>
      <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">New Person</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <input type="text" onChange={(e) => this.onChangeName(e)} name="name" value={this.state.name} className="form-control mb-4" />
                <input type="text" onChange={(e) => this.onChangeAddress(e)} name="address" value={this.state.address} className="form-control mb-4" />
                <input type="text" onChange={(e) => this.onChangePhone(e)} name="phone" value={this.state.phone} className="form-control mb-4" />
                <input type="text" onChange={(e) => this.onChangeEmail(e)} name="email" value={this.state.email} className="form-control mb-4" />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.onSave}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  }
}