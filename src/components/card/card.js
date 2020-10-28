import React from 'react';
import './card.css';
import EditModal from '../edit-modal'
import { withRouter } from 'react-router-dom';

class Card extends React.Component {

  state = {
    selected: false,
    disabled: false,
    starIconFavorite: false,
    starIcon: false
  }

  onSelected() {
    let { selected } = this.state
    this.setState({ selected: !selected })
  }
  onDoubleClick = (id) => {
    this.props.history.push(`/all/${id}`);
  }
  onIconClick = (id) => {
    this.props.onFavorite(id);
    let { starIconFavorite } = this.state;
    this.setState({ starIconFavorite: !starIconFavorite })
  }

  render() {

    const { id, name, address, phone, email } = this.props.person;
    const src = `https://robohash.org/${name}.png?set=set2&size=700x700`;
    const { selected, disabled, starIcon, starIconFavorite } = this.state;

    let className = "card flex-row flex-wrap";
    let iconClass = "fas fa-star mr-1";

    if (selected)
      className += ' selected';
    if (disabled)
      className += ' disabled';

    if (starIconFavorite)
      iconClass += ' starIconFavorite';
    if (starIcon)
      iconClass += ' starIcon';


    return (
      <>
        <div className={className} onClick={this.onSelected.bind(this)} onDoubleClick={() => this.onDoubleClick(id)}>
          <div className="card-header border-0">
            <img id="cardImg" src={src} alt="Card cap" />
          </div>
          <div className="card-block px-2">
            <h4 className="card-title">{name}</h4>
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-map-marker-alt"></i>
              <p className="card-text ml-1">{address}</p>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-phone-square-alt"></i>
              <p className="card-text ml-1">{phone}</p>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-envelope"></i>
              <p className="card-text ml-1">{email}</p>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <div onClick={() => this.props.onFavorite(id)} className={iconClass} ></div>
              <EditModal person={this.props.person} onEdit={this.props.onEdit} />
              <i className="fas fa-trash-alt mr-1" onClick={() => this.props.onDelete(id)}></i>
              <a href="http://facebook.com" target="_blank"><i class="fab fa-facebook-square mr-1"></i></a>
              <a href="http://instagram.com" target="_blank"><i class="fab fa-instagram-square mr-1"></i></a>
            </div>
          </div>
    
        </div>
      </>
    )
  }
}

export default withRouter(Card)