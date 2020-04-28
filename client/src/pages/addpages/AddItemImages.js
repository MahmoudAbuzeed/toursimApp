import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import "../../pages/Items.css";
import { addItemImagesMutation, getItemsImagesQuery } from '../../queries/queries';



class AddItemImages extends Component {

  constructor(props){
    super(props);
    this.state = {
        itemId: '',
        image1: '',
        altr1:  '',
        image2: '',
        altr2:  '',
        image3:  '',
        altr3:  '',
        image4:  '',
        altr4:  '',
        image5: '', 
        altr5:  ''
    };
}
 
submitForm(e){
  e.preventDefault()
  // use the addMutation
  this.props.addItemImagesMutation({
      variables: {
        itemId: this.state.itemId ,
        image1: this.state.image1 ,
        altr1: this.state.altr1  ,
        image2: this.state.image2 ,
        altr2:  this.state.altr2 ,
        image3: this.state.image3 ,
        altr3:  this.state.altr3 ,
        image4: this.state.image4 ,
        altr4:  this.state.altr4 ,
        image5: this.state.image5 , 
        altr5:  this.state.altr5 
    
      },
      refetchQueries: [{ query: getItemsImagesQuery }]
  });
  this.props.history.push('/ItemImages');
}
  render(){

  return (
    <div>
      <Container>
        <Form onSubmit={ this.submitForm.bind(this) }>
        
        <FormGroup>
        <Label for="name">Item ID</Label>
        <Input
          type="text"
          placeholder="Enter Item ID"
          onChange={ (e) => this.setState({ itemId: e.target.value }) }
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Image1</Label>
          <Input type="text"
          onChange={ (e) => this.setState({ image1: e.target.value }) }
          
          />
        </FormGroup>
        <FormGroup>
        <Label for="name">Altr1</Label>
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
        <FormGroup>
        <Label for="name">Image4</Label>
          <Input type="text" 
          onChange={ (e) => this.setState({ image4: e.target.value }) }
          />
        </FormGroup>
        <FormGroup>
        <Label for="name">Altr4</Label>
        <Input
          type="text"
          placeholder="Enter Altr4"
          onChange={ (e) => this.setState({ altr4: e.target.value }) }
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Image5</Label>
          <Input type="text"
          onChange={ (e) => this.setState({ image5: e.target.value }) }
            />

        </FormGroup>
        <FormGroup>
        <Label for="name">Altr5</Label>
        <Input
          type="text"
          placeholder="Enter Altr5"
          onChange={ (e) => this.setState({ altr5: e.target.value }) }
        />
        </FormGroup>
        
        <Button color="primary" >ADD Image</Button>

      </Form>
      </Container>
        
        
    </div>
  );
}
}
export default compose(
  graphql(getItemsImagesQuery, { name: "getItemsImagesQuery" }),
  graphql(addItemImagesMutation, { name: "addItemImagesMutation" })
)(AddItemImages);