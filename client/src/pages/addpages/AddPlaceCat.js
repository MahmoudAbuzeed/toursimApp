import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import { addPlaceCatMutation, getPlacesCatQuery, getPlacesQuery, getCategoryQuery  } from '../../queries/queries';


import "../../pages/Items.css";


class AddPlaceCat extends Component {

  constructor(props){
    super(props);
    this.state = {
        rank: '',
        placeId: '', 
        catId: ''
    };
}

displayPlaces(){ 
  var data = this.props.getPlacesQuery;
  if(data.loading){
      return( <option disabled>Loading Places</option> );
  } else {
      return data.places.map(place => {
          return( <option key={ place.id } value={place.id}>{ place.name }</option> );
      });
  }
}

displayCategories(){
  var data = this.props.getCategoryQuery;
  if(data.loading){
      return( <option disabled>Loading Categories</option> );
  } else {
      return data.Categories.map(category => {
          return( <option key={ category.id } value={category.id}>{ category.name }</option> );
      });
  }
}




submitForm(e){
  e.preventDefault()
  // use the addBookMutation
  this.props.addPlaceCatMutation({
      variables: {
          rank: this.state.rank,
          placeId: this.state.placeId,
          catId: this.state.catId
      },
      refetchQueries: [{ query: getPlacesCatQuery }]
  });
  this.props.history.push('/PlacesCat');
}
 
  render(){

  return (
    <div>
      <Container>
        <Form  onSubmit={ this.submitForm.bind(this) }>
        <FormGroup>
        <Label for="id">Places</Label>
        <Input
          type="select"
          onChange={ (e) => this.setState({ placeId: e.target.value }) } 
        > 
        <option>Select Place</option>
        { this.displayPlaces() }
        </Input>
        </FormGroup>
        <FormGroup>
        <Label for="name">Categroreis</Label>
        <Input
          type="select"
          onChange={ (e) => this.setState({ catId: e.target.value }) } 
          > 
        <option>Select Category</option>
          { this.displayCategories() }
          </Input>
        </FormGroup>
        <FormGroup>
        <Label for="name">Rank</Label>
        <Input
          type="text"
          placeholder="Enter Rank"
          onChange={ (e) => this.setState({ rank: e.target.value }) } 
        /> 
        </FormGroup>
        <Button color="primary" >ADD PLACE</Button>
         
        </Form>
        </Container>
         
        
    </div>
  );
}
}
export default compose(
  graphql(getPlacesCatQuery, { name: "getPlacesCatQuery" }),
  graphql(addPlaceCatMutation, { name: "addPlaceCatMutation" }),
  graphql(getPlacesQuery, { name: "getPlacesQuery" }),
  graphql(getCategoryQuery, { name: "getCategoryQuery" })
)(AddPlaceCat);