import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import "../../pages/Items.css";

import {addCategoryMutation , getCategoryQuery} from "../../queries/queries"

class AddCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: ''
        
    };
  }

  submitForm(e){
    e.preventDefault()
    // use the addBookMutation
    
    this.props.addCategoryMutation({
        variables: {
            name: this.state.name,
        },
        refetchQueries: [{ query: getCategoryQuery }]
        
        
    });
    this.props.history.push('/Category');
}
 
  render(){
  return (
    <div>
      <Container>
        <Form onSubmit={ this.submitForm.bind(this) }>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          placeholder="Enter Category Name"
          onChange={ (e) => this.setState({ name: e.target.value }) } 
        />
      </FormGroup>
      
      <Button color="primary">ADD Category</Button>
      
          
      </Form>
      
          
          </Container>
    </div>
  );
}
}
export default compose(
  graphql(getCategoryQuery, { name: "getCategoryQuery" }),
  graphql(addCategoryMutation, { name: "addCategoryMutation" })
)(AddCategory);