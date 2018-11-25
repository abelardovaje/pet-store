import React from 'react';
import DashBoardContainer from '../dashboard/DashboardContainer';
import HomeComponent  from '../HomeComponent.js';
import PetContainer from '../pet/PetContainer';

const routes = [
    {
        path:'/',
        exact:true,
        name:'Home',
        component:HomeComponent
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component:DashBoardContainer
    },
    {
        path:'/pets',
        name:'Pets',
        component:PetContainer
    }
]

export default routes;