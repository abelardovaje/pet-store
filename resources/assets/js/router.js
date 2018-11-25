import React from 'react';
import {Provider} from 'react-redux';
import HomeComponent from './Home/HomeComponent';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

const Router = (props) =>{    
    return (
        <Provider store={props.store}>
            <BrowserRouter>
                <div>                                      
                    <Switch>
                        <Route path="/"  component={HomeComponent}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default Router;
