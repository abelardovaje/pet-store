
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import Store from './store';
// // // Styles
// // // CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// // // Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// // // Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// // // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// // // Import Main styles for this application
import '../sass/coreui/style.scss';
import '../sass/app.scss';


ReactDOM.render(
    <Router store={Store}/>,
    document.getElementById('root')
);



