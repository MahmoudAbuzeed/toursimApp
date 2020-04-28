import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import { Container } from 'reactstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Home, Login} from './pages'; 
import { 
  EditItems,
  EditItemImages,
  EditCategory,
  EditPlacesCat,
  EditPlaces,
  EditPLaceImages
      } from './pages/editPages';


import  AddItem from './pages/addpages/AddItem';
import  AddCategory from './pages/addpages/AddCategory';
import  AddItemImages from './pages/addpages/AddItemImages';
import  AddPlaceCat from './pages/addpages/AddPlaceCat';
import  AddPlaces from './pages/addpages/AddPlaces';
import  AddPlaceImages from './pages/addpages/AddPlaceImages';

  

import { NavBar, ControlBar} from './components';

import  Items from './pages/Items';
import  ItemImages from './pages/ItemImages';
import  Category from './pages/Category';
import  PlacesCat from './pages/PlacesCat';
import  Places from './pages/Places';
import  PlaceImages from './pages/PlaceImages';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});




function App() {
  return (
    <div>
      <ApolloProvider client={client}>
      <NavBar />
      
      <ControlBar />
       
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/Items" component={Items} exact />
      <Route path="/ItemImages" component={ItemImages} exact />
      <Route path="/PlaceImages" component={PlaceImages} exact />
      <Route path="/Category" component={Category} exact />
      <Route path="/Places" component={Places} exact />
      <Route path="/PlacesCat" component={PlacesCat} exact />

      <Route path="/editItems" component={EditItems} exact />
      <Route path="/editItemImages" component={EditItemImages} exact />
      <Route path="/editCategory" component={EditCategory} exact />
      <Route path="/editPlacesCat" component={EditPlacesCat} exact />
      <Route path="/editPlaces" component={EditPlaces} exact />
      <Route path="/editPlaceImages" component={EditPLaceImages} exact />

      <Route path="/AddItem" component={AddItem} exact />
      <Route path="/AddCategory" component={AddCategory} exact />
      <Route path="/AddItemImages" component={AddItemImages} exact />
      <Route path="/AddPlaces" component={AddPlaces} exact />
      <Route path="/AddPlaceCat" component={AddPlaceCat} exact />
      <Route path="/AddPlaceImages" component={AddPlaceImages} exact />

    


     
      </Switch>
     
      </ApolloProvider>
    </div>
  );
}

export default App;
