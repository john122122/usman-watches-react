import React, { useState } from 'react';
import '../css/App.css';
import "../css/navbar.css";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ShopsPage } from './screens/ShopsPage';
import { CommunityPage } from './screens/CommunityPage';
import { OrdersPage } from './screens/OrdersPage';
import { HelpPage } from './screens/HelpPage';
import { MemberPage } from './screens/MemberPage';
import { LoginPage } from './screens/LoginPage';
import { NavbarHome } from './components/header';
import { NavbarShops } from './components/header/shops';
import { NavbarOthers } from './components/header/others';
import { SignupPage } from './screens/SignupPage';

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  
  return (
    <Router>
      {main_path == "/" ? (
          <NavbarHome setPath={setPath} />
        ) : main_path.includes("/shop") ? (
          <NavbarShops setPath={setPath} />
        ) : (
          <NavbarOthers setPath={setPath} />  
        )}
        
        {/* <nav>
            <ul>
              
              <li>
                <Link to="/">HomePage</Link> 
              </li>

              <li>
                <Link to="/login">LoginPage</Link> 
              </li>

              <li>
                <Link to="/help">HelpPage</Link> 
              </li>

              <li>
                <Link to="/member-page">MemberPage</Link> 
              </li>

              <li>
                <Link to="/orders">OrdersPage</Link> 
              </li>

              <li>
                <Link to="/community">CommunityPage</Link> 
              </li>
              
              <li>  
                <Link to="/shops">ShopsPage</Link>
              </li>
          
          </ul>
        </nav> */}
          
          <Switch>
            
            <Route path="/shops">
              <ShopsPage /> 
            </Route>

            <Route path="/community"> 
              <CommunityPage />
            </Route>

            <Route path="/orders"> 
              <OrdersPage />
            </Route>

            <Route path="/member-page"> 
              <MemberPage />
            </Route>

            <Route path="/help"> 
              <HelpPage />
            </Route>

            <Route path="/login"> 
              <LoginPage />
            </Route>
            
            <Route path="/sign-up"> 
              <SignupPage />
            </Route>

            <Route path="/">              
                <HomePage/>             
            </Route>  
      </Switch> 
    </Router>
  );
}

export default App;


function HomePage() {
  return <h2>HomePage</h2>;
}

