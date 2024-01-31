import React from 'react';
import '../css/App.css';
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
import { WatchesPage } from './screens/WatchesPage';
import { SuitsPage } from './screens/SuitsPage';
import { BootsPage } from './screens/BootsPage';

function App() {
  return (
    <div>
       <Router>
      <div>
        <nav>
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
                
              <li>  
                <Link to="/suits">SuitsPage</Link>
              </li>
              
              <li>
                <Link to="/boots">BootsPage</Link>
              </li>

              <li>
                <Link to="/watches">WatchesPage</Link>
              </li>

          </ul>
        </nav>
          
          <Switch>
            
            <Route path="/watches"> 
              <WatchesPage />
            </Route>

            <Route path="/boots"> 
              <BootsPage />
            </Route>

            <Route path="/suits">
              <SuitsPage /> 
            </Route>
            
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

            <Route path="/">              
                <HomePage />             
            </Route>
            
          </Switch> 
        </div>  
      </Router>
    </div>
  );
}

export default App;


function HomePage() {
  return <h2>HomePage</h2>;
}

