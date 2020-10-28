import React, { Component } from 'react';
import Card from '../card/card';
import { Link, withRouter } from 'react-router-dom';

 class PersonCollection extends Component {
  render() {
    const { onDelete, arr,  onEdit, onFavorite } = this.props;
    return (
      <div className="row">
        {
          arr.map(item => {
            return <>
              <Link className='' to={`all/${item.id}`}>
                <Card key={item.id} person={item} onDelete={onDelete} onEdit={onEdit} onFavorite={onFavorite} />
              </Link>
            </>
          })}
      </div>
    )
  }
}

export default withRouter(PersonCollection)