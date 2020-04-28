import React, { Component } from "react";
import { graphql } from 'react-apollo';

import { Table,  Button, ButtonGroup, FormGroup, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { getPlacesQuery} from "../queries/queries";



import "./Items.css";
class Places extends Component {

  displayPlaces(){
    let data = this.props.data;
    if(data.loading){
      return (<div className="text-center">Loading Places</div>);
    } else {
      return data.places.map(place => {
        return(
          <tr>
          <td>{place.name}</td>
          <td>{place.address}</td>
          <td>{place.dates}</td>
          <td>{place.fees}</td>
          <td>{place.image}</td>
          <td>{place.map}</td>
          <ButtonGroup>
               <Link to="/editPlaces">
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
      <div className="marginTop col-xs-2" >
        <FormGroup className="text-center" row>
        <Col >
        <h2>Places</h2>
        <div className="wrapper">
        <Link to="/AddPlaces">
      <Button className="dark" ><span>ADD PLACE</span></Button>
      </Link>
      </div>       
        </Col>
      </FormGroup>
       
        
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>Place Name</th>
              <th>Address</th>
              <th>Dates</th>
              <th> Fees</th>
              <th> image</th>
              <th>Map</th>
              
            </tr>
          </thead>
          <tbody sm={2}>
                { this.displayPlaces() }
          </tbody>
        </Table>
       

        

      </div>
    );
  }
}

export default graphql(getPlacesQuery)(Places);
