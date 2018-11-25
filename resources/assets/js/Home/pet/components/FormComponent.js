import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Col,Row,Form, FormGroup, Label, Input, } from 'reactstrap';
import Select from 'react-select'
import {categoryOptions,statusOptions} from './options';
const FormComponent = props => {
    return (
        <Form onSubmit={(e)=>props.submit(e)}>
            <Row>
                <Col md={8}>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input 
                            type="text" 
                            name="name"
                            value={props.data.name}
                            onChange={(e)=>props.inputChange(e)}
                        />
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup>
                        <Label>Category</Label>
                        <Select 
                            value={_.find(categoryOptions,{value:props.data.category})}
                            options={categoryOptions} 
                            defaultValue={categoryOptions[0]}
                            onChange={(e)=>props.selectChange('category',e)}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                <FormGroup>
                    <Label>Photo</Label>
                    <Input 
                        value={props.data.photo}
                        type="text" 
                        name="image" 
                        onChange={(e)=>props.inputChange(e)} 
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label>Tags</Label>
                        <Input 
                            value={props.data.tags}
                            type="text" 
                            name="image" 
                            onChange={(e)=>props.inputChange(e)} 
                        />
                    </FormGroup>
                
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label>Status</Label>
                    <Select 
                        value={_.find(statusOptions,{value:props.data.status})}
                        options={statusOptions} 
                        defaultValue={statusOptions[0]}
                        onChange={(e)=>props.selectChange('status',e)}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Button className="pull-right" color="primary">Submit</Button>
        </Form>
    );
};

FormComponent.propTypes = {
    
};

export default FormComponent;