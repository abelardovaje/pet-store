import React from 'react';
export function columns(data){
    return [{
        Header: 'id',
        accessor: 'id' // String-based value accessors!
      }, {
        Header: 'Category',
        accessor: 'category.name',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        Header: 'Name',
        accessor:'name'
      },{
        Header: 'Photo',
        accessor: 'photoUrls[0]'
      },{
        Header: 'Tags',
        accessor: 'tags[0].name'
      },{
        Header: 'Status',
        accessor: 'status'
      }
      ]
}