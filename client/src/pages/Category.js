import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Table,  Button, ButtonGroup, FormGroup, Col, Form,  } from "reactstrap";
import * as compose from 'lodash.flowright';



import "./Items.css";
import { Link } from "react-router-dom";
import { getCategoryQuery , deleteCatMutation} from "../queries/queries";

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
       id: ''
        
    };
  }

  deleteCat(e){
    e.preventDefault()
    // use the deleteCatMutation
    this.props.deleteCatMutation({

      variables: {
        id: this.state.id
      },

      refetchQueries: [{ query: getCategoryQuery }]
     
        
    });
} 




  



  displayCategories(){
    let data = this.props.getCategoryQuery;
    if(data.loading){
      return (<div className="text-center">Loading Categories</div>);
    } else {
      return data.Categories.map(category => {
        return(
          <tr>
          <td>{category.name}</td>
          
          <ButtonGroup>
               <Link to="/editCategory">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>  
                 <Form onSubmit={ this.deleteCat.bind(this) } >
                  <Button  className="dark"><span>Delete</span></Button>
                  </Form>  
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
        <h2>Categories</h2>
        <div className="wrapper">
        <Link to="/AddCategory">
      <Button className="dark" ><span>ADD CATEGORY</span></Button>
      </Link>
      </div>       
        </Col>
      </FormGroup>
        

        
        <Table borderless>
          <thead sm={2}> 
            <tr>
              <th>Category Name </th>
            </tr>
          </thead>
          <tbody sm={2}>
                { this.displayCategories() }
          </tbody>
        </Table>
       

        

      </div>
    );
  }
}

export default compose(
  graphql(getCategoryQuery, { name: "getCategoryQuery" }),
  graphql(deleteCatMutation, { name: "deleteCatMutation" })
)(Category);




