import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { addPlaceImagesMutation, getPlacesImagesQuery, getPlacesQuery } from '../../queries/queries';


import "../../pages/Items.css";

class AddPlaceImages extends Component {

  constructor(props){
    super(props);
    this.state = {
        image1: '', 
        altr1: '',
        image2: '', 
        altr2: '',
        image3: '', 
        altr3: '',
        placeId: '',

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
  submitForm(e){
    e.preventDefault()
    // use the addBookMutation
    this.props.addPlaceImagesMutation({
        variables: {
            image1: this.state.image1,
            altr1: this.state.altr1,
            image2: this.state.image2,
            altr2: this.state.altr2,
            image3: this.state.image3,
            altr3: this.state.altr3,
            placeId: this.state.placeId,

        },
        refetchQueries: [{ query: getPlacesImagesQuery }]
    });
    this.props.history.push('/PlaceImages');
}
 
  render(){

  return (
    <div>
      
      <Container>
        <Form onSubmit={ this.submitForm.bind(this) }>
        
        <FormGroup>
        <Label for="name">Place</Label>
        <Input
          type="select"
          onChange={ (e) => this.setState({ placeId: e.target.value }) } 
        >
             <option>Select Place</option>
          { this.displayPlaces() } 
        </Input>
        </FormGroup>
        <FormGroup>
        <Label for="name">Image1</Label>
        <Input type="text" 
         onChange={ (e) => this.setState({ image1: e.target.value }) } 
        />
       
        </FormGroup>
        <FormGroup>
        <Label for="name">Alt1r</Label>
        <Input
          type="text"
          placeholder="Enter Altr1"
          onChange={ (e) => this.setState({ altr1: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Image2</Label>
        <Input type="text"  
         onChange={ (e) => this.setState({ image2: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Altr2</Label>
        <Input
          type="text"
          placeholder="Enter Altr2"
          onChange={ (e) => this.setState({ altr2: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Image3</Label>
        <Input type="text" 
         onChange={ (e) => this.setState({ image3: e.target.value }) } 
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Altr3</Label>
        <Input
          type="text"
          placeholder="Enter Altr3"
          onChange={ (e) => this.setState({ altr3: e.target.value }) } 
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
  graphql(addPlaceImagesMutation, { name: "addPlaceImagesMutation" })
)(AddPlaceImages);