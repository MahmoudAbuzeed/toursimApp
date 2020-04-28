import React, {  } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import "../Items.css";
import { Link } from 'react-router-dom';

const EditPLaceImages = (props) => {
  

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
        <Label for="name"><h5>Place ID</h5></Label>
        <Input
          type="text"
          name="placeId"
          id="placeId"
          placeholder="Enter Place ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Image</h5></Label>
        <Input type="file" name="image" id="exampleFile" />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Altr</h5></Label>
        <Input
          type="text"
          name="altr"
          id="altr"
          placeholder="Enter Altr"
        />
        </FormGroup>
       
        </Form>
         <Link to='PlaceImages'>
          <Button color="success" >UPDATE</Button>{' '}
          <Button color="danger" >CANCEL</Button>
          </Link>
          </Container>
        
    </div>
  );
}

export  {EditPLaceImages};