import React from 'react';
export function columns(data){
    return [{
        Header: 'id',
        accessor: 'username' // String-based value accessors!
      }, {
        Header: 'Category',
        accessor: 'email',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        Header: 'Name',
        accessor:'dota_id'
      },{
        Header: 'Photo',
        accessor: 'steam_id'
      },{
        Header: 'Tags',
        accessor: 'coins[0].amount'
      },{
        Header: 'Status',
        accessor: 'coins[1].amount'
      },{
        Header: props => <span>Action</span>, // Custom header components!

        Cell: row => (
          <React.Fragment>
              <button 
                className="btn btn-success btn-action"
                title="Reset reward"
                onClick={()=>data.handleResetReward(row)}
              ><i className="fa fa-redo"></i>
              </button>

              <button className="btn btn-primary btn-action"
                onClick={()=>data.handleBanUser(row)}
              >{!row.original.status ? 'unban':'ban'}
              
              </button>
          </React.Fragment>
       )
      }]
}