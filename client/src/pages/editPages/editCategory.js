import React, {  } from 'react';
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {Link} from 'react-router-dom';


const EditCategory = (props) => {


  return (
    <div>
      <Container>
        <Form>
      <FormGroup>
        <Label for="id"><h5>ID</h5></Label>
        <Input
          type="text"
          name="id"
          id="id"
          placeholder="Enter ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Name</h5></Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Category Name"
        />
      </FormGroup>
      </Form>
      <Link to='Category'>
          <Button color="success" >UPDATE</Button>{' '}
          <Button color="danger" >CANCEL</Button>
          </Link>
          </Container>
        
    </div>
  );
}

export  {EditCategory};