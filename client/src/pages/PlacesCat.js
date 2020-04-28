import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Table,  Button, ButtonGroup, FormGroup, Col} from "reactstrap";

import { getPlacesCatQuery} from "../queries/queries";



import "./Items.css";
import { Link } from "react-router-dom";


class PlacesCat extends Component {
  displayPlacesCat(){
    let data = this.props.data;
    if(data.loading){
      return (<div className="text-center">Loading Places Category</div>);
    } else {
      return data.PlacesCat.map(placeCat => {
        return(
          <tr>
          <td>{placeCat.place.name}</td>
          <td>{placeCat.category.name}</td>
          <td>{placeCat.rank}</td>
         
          <ButtonGroup>
               <Link to="/editPlacesCat">
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
        <h2>Places Cat</h2>
        <div className="wrapper">
        <Link to="/AddPlaceCat">
      <Button className="dark" ><span>ADD Places Cat</span></Button>
      </Link>
      </div>            
        </Col>
      </FormGroup>
         

        
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>Place </th>
              <th> Category</th>
              <th>Rank</th>
           
            </tr>
          </thead>
          <tbody sm={2}>
                { this.displayPlacesCat() }
          </tbody>
        </Table>
       

        

      </div>
    );
  }
}

export default graphql(getPlacesCatQuery)(PlacesCat);