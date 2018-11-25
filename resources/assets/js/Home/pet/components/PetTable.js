import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import {Button,Row,Col} from 'reactstrap';
import {columns} from './columns';
import ReactTable from "react-table";
import Select from 'react-select'
import {categoryOptions,statusOptions} from './options';
const PetTable = (props) =>(
    <Fragment>
        <div>
            <Row>
                <Col lg={2}>
                    <Select 
                        value={_.find(statusOptions,{value:props.data.status})}
                        options={statusOptions} 
                        defaultValue={statusOptions[0]}
                        onChange={(e)=>props.selectChange('status',e)}
                    />
                </Col>
            </Row>
        </div>
        <br/>
        <ReactTable
            data={props.pets}
            loading={props.loading}
            columns={columns(this)}
            defaultPageSize={10}
        />
    </Fragment> 
)

export default PetTable;