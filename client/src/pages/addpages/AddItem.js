import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";

import { addItemMutation, getItemsQuery, getPlacesQuery } from "../../queries/queries";

import "../../pages/Items.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      voiceNote: '',
      qrImage: '',
      noOfScans: '',
      placeId: ''
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

  submitForm(e) {
    e.preventDefault();
    // use the addItemMutation
    this.props.addItemMutation({
      variables: {
        name: this.state.name,
        description: this.state.description,
        voiceNote: this.state.voiceNote,
        qrImage: this.state.qrImage,
        noOfScans: this.state.noOfScans,
        placeId: this.state.placeId
      },
      refetchQueries: [{ query: getItemsQuery }]
    });
    this.props.history.push('/Items');
  }

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.submitForm.bind(this)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                placeholder="Enter Category Name"
                onChange={e => this.setState({ name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Description</Label>
              <Input
                type="textarea"
                placeholder="Enter Description"
                onChange={e => this.setState({ description: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Voice Note</Label>
              <Input
                type="text"
                onChange={e => this.setState({ voiceNote: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Qr Image</Label>
              <Input
                type="text"
                onChange={e => this.setState({ qrImage: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">No. Of Scans</Label>
              <Input
                type="number"
                placeholder="Enter No. Of Scans"
                onChange={e => this.setState({ noOfScans: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Place </Label>
              <Input type="select" name="select" id="exampleSelect"
               onChange={e => this.setState({ placeId: e.target.value })}>
              <option>Select Place</option>
              { this.displayPlaces() }
           
              </Input>
            </FormGroup>
            <Button color="primary">ADD ITEM</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(getPlacesQuery, { name: "getPlacesQuery" }),
  graphql(addItemMutation, { name: "addItemMutation" })
)(AddItem);
