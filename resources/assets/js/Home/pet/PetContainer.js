'use strict'
import React,{Fragment} from 'react';
import 'react-table/react-table.css';
import {columns} from './shared/columns';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import { NavLink, Switch, Route } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {filterByStatus} from './actions.js';
import Swal from 'sweetalert2';
import PetTable from './components/PetTable.js';
import PetForm from './components/PetForm';
class PetContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status:0,
            loading:false
        }
    }

    componentDidMount(){
        this.setState({
            loading:true
        })
        this.props.filterByStatus('available').then(()=>{
            this.setState({
                loading:false
            })
        });
    }

    handleSelectChange = (name,e) =>{
        this.setState({
          [name]:e.value,
          loading:true
        },()=>{
            this.props.filterByStatus(e.label.toLowerCase()).then(()=>{
                this.setState({
                    loading:false
                })
            });
        });
    }
    render(){
        return(
            <div>   
                <Route
                    path={`${this.props.match.path}/`}
                    exact={true}
                    render={()=>{
                        return(
                            <PetTable 
                                {...this.props}
                                loading={this.state.loading}
                                selectChange={this.handleSelectChange}
                                data={this.state}
                            />       
                        )
                    }}
                />
                <Route path={`${this.props.match.path}/add`} 
                exact={true} render={()=><PetForm type="add" {...this.props}/>}/>
               
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        pets:state.Pets
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        filterByStatus
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PetContainer);