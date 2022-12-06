import React from 'react';
//import Shift from 'features/Shift';
import Map from 'features/Map';
import FunFact from 'features/FunFact';
import Qiita from 'features/Qiita';
import Counter from 'features/Counter';
import DashBoard from 'features/Covid/DashBoard';
import ToPass from 'features/ToPass';
import Modal from 'features/Form';
import Menu from 'features/Menu';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/map' exact>
            <Menu>
              <Map />
            </Menu>
          </Route>
          <Route path='/counter' exact>
            <Menu>
              <Counter />
            </Menu>
          </Route>
          <Route path='/funFact' exact>
            <Menu>
              <FunFact />
            </Menu>
          </Route>
          <Route path='/qiita' exact>
            <Menu>
              <Qiita />
            </Menu>
          </Route>
          <Route path='/covid' exact>
            <Menu>
              <DashBoard />
            </Menu>
          </Route>
          <Route path='/toPass' exact>
            <Menu>
              <ToPass />
            </Menu>
          </Route>
          <Route path='/modal' exact>
            <Menu>
              <Modal />
            </Menu>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
