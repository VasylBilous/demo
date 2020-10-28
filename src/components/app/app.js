import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from '../header';
import SearchBar from '../search-bar';
import PersonCollection from '../person-collection';
import Main from '../main';
import Card from '../card';
import AddPerson from '../add-person';

export default class App extends Component {
  state = {
    arr: [
      { id: 1, name: "Man 1", address: "Address 1", phone: "123", email: "1@gmail.com" },
      { id: 2, name: "Man 2", address: "Address 2", phone: "345", email: "2@gmail.com" },
      { id: 3, name: "Woman 1", address: "Address 3", phone: "678", email: "3@gmail.com" },
      { id: 4, name: "Woman 2", address: "Address 4", phone: "901", email: "4@gmail.com" }
    ],
    search: "",
    favorites: []
  }

  search = (pattern) => {
    this.setState({ search: pattern })
  }

  deletePerson = (id) => {
    const { arr } = this.state;
    let index = arr.findIndex(x => x.id === id);
    let before = arr.splice(0, index);
    let after = arr.slice(index + 1);
    this.setState({ arr: [...before, ...after] })
  }

  max = 1000;
  addPerson = (obj) => {
    const { arr } = this.state;
    let newObj = {
      id: this.max++,
      name: obj.name,
      address: obj.address,
      email: obj.email,
      phone: obj.phone
    };
    this.setState({ arr: [...arr, newObj] });
  }

  addFavorite = (id) => {
    const { arr, favorites } = this.state;
    let index = favorites.findIndex(x => x.id === id);
    if (index !== -1) {
      let before = favorites.splice(0, index);
      let after = favorites.slice(index + 1);
      this.setState({ favorites: [...before, ...after] })
      return;
    }
    let find = arr.find(x => x.id === id);
    this.setState({ favorites: [...favorites, find] });
  }

  edit = (obj) => {
    console.log(obj);
  }

  render() {

    const { arr, search, favorites } = this.state;
    let filtered = [];
    if (search === '')
      filtered = arr;
    else
      filtered = arr.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
      <div className="container-fluid p-0">
        <Router>
          <Header text="Person List" color='olive' />
          <SearchBar onSearch={this.search} />
          <Switch>
            <Route exact path='/' exact component={Main} />
            <div className="container">

              <Route exact path='/all' render={() =>
                <PersonCollection onDelete={this.deletePerson} arr={filtered} onEdit={this.edit} onFavorite={this.addFavorite} />} />

              <Route exact path='/favorites' render={() =>
                <PersonCollection onDelete={this.deletePerson} arr={favorites} onEdit={this.edit} onFavorite={this.addFavorite} />} />

              <Route path='/all/:id' render={({ match }) => {              
                const item = arr.find(x => x.id == match.params.id)
                console.log(item)
                return <Card key={item.id} person={item} onDelete={this.deletePerson} onEdit={this.edit} onFavorite={this.addFavorite} ></Card>
              }} />

              <Route exact path='/add'>
                <AddPerson onAddPerson={this.addPerson} />
              </Route>

              <Route path="/old-way">
                <Redirect to='/new-way' />
              </Route>

            </div>
            <Route render={() => <h1>Nothing was found</h1>} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </div>
    )
  }

}