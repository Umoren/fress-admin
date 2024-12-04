/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

 import React, { Fragment } from 'react';

 import { Router } from 'react-router';
 import GlobalStyle from './global-styles';
 import Routes from './routes/routes';
 import history from './history';

 import 'styles/typography.css';
 import 'styles/colors.css';

 export default function App() {
   return (
     <Fragment>
       <Router history={history}>
         <Routes />
         <GlobalStyle />
       </Router>
     </Fragment>
   );
 }
