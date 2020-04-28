import React, { Component } from "react";
import { graphql } from 'react-apollo';

import { Table,  Button, ButtonGroup, FormGroup, Col } from "reactstrap";
import { getPlacesImagesQuery} from "../queries/queries";

import "./Items.css";
import { Link } from "react-router-dom";

class PlaceImages extends Component {
  displayPlaceImages(){
    let data = this.props.data; 
    if(data.loading){
      return (<div className="text-center">Loading Places Images</div>);
    } else {
      return data.placesImages.map(placesImage => {
        return(
          <tr>
          <td>{placesImage.place.name}</td>
          <td>{placesImage.image1}</td>
          <td>{placesImage.altr1}</td>
          <td>{placesImage.image2}</td>
          <td>{placesImage.altr2}</td>
          <td>{placesImage.image3}</td>
          <td>{placesImage.altr3}</td>
          <ButtonGroup>
               <Link to="/editPlaceImages">
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
        <h2>Place Images</h2>
        <div className="wrapper">
        <Link to="/AddPlaceImages">
      <Button className="dark" ><span>ADD PLACE IMAGES</span></Button>
      </Link>
      </div>             
        </Col>
      </FormGroup>


        
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th> Place </th>
              <th>Image1</th>
              <th>Altr1 </th>
              <th>Image2</th>
              <th>Altr2</th>
              <th>Image3</th>
              <th>Altr3 </th>
              
              
            </tr>
          </thead>
          <tbody sm={2}>
                { this.displayPlaceImages() }
          </tbody>
        </Table>
       

        

      </div>
    );
  }
}

export default graphql(getPlacesImagesQuery)(PlaceImages);