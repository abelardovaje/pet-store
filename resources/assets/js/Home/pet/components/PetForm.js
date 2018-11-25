import React from 'react';
import PropTypes from 'prop-types';
import { Card ,CardHeader, CardBody } from 'reactstrap';
import Swal from 'sweetalert2';
import FormComponent from './FormComponent';
class PetForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      status:0,
      category:0,
      photo:'',
      name:'',
      tags:''
    };
  }
  componentDidMount(){
    // console.log(this.props.location.state);
    
    this.setState(this.props.location.state)
  }
  handleInputChange = (e) => {
    let target = e.target;
    this.setState({
      [target.name]:target.value
    });
  }

  handleSelectChange = (name,e) =>{
    this.setState({
      [name]:e.value
    });
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    let result = await Swal({
      title: `${this.props.type == "add" ? "Add new pet" : "Update pet"}`,
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, add it!`
    });

    if(!result.value) return;
    if(this.props.type == 'add'){
      this._addPet();
    }else{
      this._updateProduct();
    }
  }

  _addPet(){
    this.props.add(this.state).then(()=>{
      Swal(
          "New pet added",
          "",
          'success'
      ).then(()=>{
        this.props.history.push(`${this.props.match.path}/`);
      })
    }).catch(()=>{
      Swal(
          "Failed to add pet",
          "Please try again",
          'error'
      )
    });
  }

  _updateProduct(){
    this.props.update(this.state).then(()=>{
      Swal(
          "Pet updated!",
          "",
          'success'
      ).then(()=>{
        this.props.history.push(`${this.props.match.path}/`);
      })
    }).catch(()=>{
      Swal(
          "Failed to update pet",
          "Please try again",
          'error'
      )
    });
  }

  render(){
    return (
      <Card>
        <CardHeader className=''>{this.props.type=='add' ? 'Add New Pet' : 'Edit pet'}</CardHeader>
        <CardBody>
          <FormComponent 
            inputChange={this.handleInputChange}
            selectChange={this.handleSelectChange}
            submit={this.handleSubmit}
            data={this.state}
          />
        </CardBody>
      </Card>
    );
  }
}

PetForm.propTypes = {
    
};

export default PetForm;