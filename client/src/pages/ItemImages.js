import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Link } from "react-router-dom";


import { Table,  Button,ButtonGroup, FormGroup, Col } from "reactstrap";
import { getItemsImagesQuery } from '../queries/queries';

import "./Items.css";

class ItemImages extends Component {
  displayItemImages(){
    let data = this.props.data;
    if(data.loading){
      return (<div className="text-center">Loading Item Images....</div>);
    } else {
      return data.itemsImages.map(itemImage => {
        return(
          <tr>
          <td>{itemImage.image1}</td>
          <td>{itemImage.altr1}</td>
          <td>{itemImage.image2}</td>
          <td>{itemImage.altr2}</td>
          <td>{itemImage.image3}</td>
          <td>{itemImage.altr3}</td>
          <td>{itemImage.image4}</td>
          <td>{itemImage.altr4}</td>
          <td>{itemImage.image5}</td>
          <td>{itemImage.altr5}</td>
          <ButtonGroup>
               <Link to="/editItemImages">
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
        <h2>Items Images</h2>
        <div className="wrapper">
        <Link to="/AddItemImages">
      <Button className="dark" ><span>ADD ITEM IMAGES</span></Button>
      </Link>
      </div>          
        </Col>
      </FormGroup>
        

        
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>Image1</th>
              <th>Altr1 </th>
              <th>Image2</th>
              <th>Altr2</th>
              <th>Image3</th>
              <th>Altr3 </th>
              <th>Image4</th>
              <th>Altr4 </th>
              <th>Image5</th>
              <th>Altr5</th>
             
            </tr>
          </thead>
          <tbody sm={2}>
          
                { this.displayItemImages() }
          </tbody>
           
        </Table>
       

       

      </div>
    );
  }
}

export default graphql(getItemsImagesQuery)(ItemImages);
