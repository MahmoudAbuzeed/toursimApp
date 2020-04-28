import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from 'react-apollo';
import { Table,  Button, ButtonGroup, FormGroup, Col, Container} from "reactstrap";


import { getItemsQuery} from "../queries/queries";

import "./Items.css";

class Items extends Component {
 /* constructor(props){
    super(props);
    
  }*/
  displayItems(){
    let data = this.props.data;
    if(data.loading){
      return (<div className="text-center">Loading Items</div>);
    } else {
      return data.items.map(item => {
        return(
          <tr>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.voiceNote}</td>
          <td>{item.qrImage}</td>
          <td>{item.noOfScans}</td>
          <td>{item.place.name}</td>
          <ButtonGroup>
               <Link to="/editItems">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>    
                  <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
  
        </tr>
        )
      })
    }
  }
  
  render() {
    return (
      <Container className="themed-container" fluid={true}>
      <div className="marginTop col-xs-2" > 

      <FormGroup className="text-center" row>
        <Col >
        <h2 >Items</h2>
        <div className="wrapper">
        <Link to="/AddItem">
      <Button className="dark" ><span>ADD ITEM</span></Button>
      </Link>
      </div>       
        </Col>
      </FormGroup>
        <Table borderless> 
          <thead sm={2}>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Voice Note</th>
              <th> Qr.Img</th>
              <th>Nom.Of.Scans</th>
              <th>Place </th>
            </tr>
          </thead>
          <tbody sm={2}>
                { this.displayItems() }
          </tbody>
        </Table>

      </div>
      </Container>
    );
  }
}

export default graphql(getItemsQuery)(Items);


