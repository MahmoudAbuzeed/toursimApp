import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container  } from 'reactstrap';

import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { addPlaceMutation, getPlacesQuery } from '../../queries/queries';


import "../../pages/Items.css";

class AddPlaces extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        address: '', 
        dates: '',
        fees: '',
        image: '',
        map: ''
    };
}
submitForm(e){
  e.preventDefault()
  // use the addPlaceMutation
  this.props.addPlaceMutation({
      variables: {
          name: this.state.name,
          address: this.state.address,
          dates: this.state.dates,
          fees: this.state.fees,
          image: this.state.image,
          map: this.state.map,
      },
      refetchQueries: [{ query: getPlacesQuery }]
  });
  this.props.history.push('/Places');
}
 
  render(){

  return (
    <div>
     
     <Container>
        <Form  onSubmit={ this.submitForm.bind(this) }>
        
        <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          placeholder="Enter Category Name"
          onChange={ (e) => this.setState({ name: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Adress</Label>
        <Input
          type="text"
          placeholder="Enter Adress"
          onChange={ (e) => this.setState({ address: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="exampleDate">Dates</Label>
        <Input
          type="text"
          placeholder="Enter Date"
          onChange={ (e) => this.setState({ dates: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Fees</Label>
        <Input
          type="text"
          placeholder="Enter Fees"
          onChange={ (e) => this.setState({ fees: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Image</Label>
        <Input
          type="text"
          placeholder="Enter Image"
          onChange={ (e) => this.setState({ image: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Map</Label>
        <Input
          type="text"
          placeholder="Enter Map"
          onChange={ (e) => this.setState({ map: e.target.value }) } 
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
  graphql(getPlacesQuery, { name: "getPlacesQuery" }),
  graphql(addPlaceMutation, { name: "addPlaceMutation" })
)(AddPlaces);