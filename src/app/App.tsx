import React from 'react';
import '../css/App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/users";
import Suits from "./components/suits";
import Boots from "./components/boots";
import Watches from "./components/watches";

function App() {
  return (
    <div>
       <Router>
      <div>
        <nav>
            <ul>
              
              <li>
                <Link to="/">Home</Link> 
              </li>

              <li>  
                <Link to="/users">Users</Link>
              </li>
                
              <li>  
                <Link to="/suits">Suits</Link>
              </li>
              
              <li>
                <Link to="/boots">Boots</Link>
              </li>

              <li>
                <Link to="/watches">Watches</Link>
              </li>

          </ul>
        </nav>
          
          <Switch>
            
            <Route path="/watches"> 
              <Watches />
            </Route>

            <Route path="/boots"> 
              <Boots />
            </Route>

            <Route path="/suits">
              <Suits /> 
            </Route>
            
            <Route path="/users">
              <Users /> 
            </Route>
            
            <Route path="/">
              <Container>
                <Home />
              </Container>
            </Route>
            
          </Switch> 
        </div>  
      </Router>
    </div>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

