import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class DataTable extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ReactTable {...this.props}/>
        )
    }
}

export default DataTable;
