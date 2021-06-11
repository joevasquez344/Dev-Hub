import React, {useState} from 'react';
import './App.css';
import routes from './routes';
import {Switch, Route} from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="app">
        <Sidebar />
        <div className="center-container">
          <Switch>
            {routes.map((route) => (
              <Route
                id={route.id}
                exact={route.exact}
                path={route.path}
                name={route.name}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
        <div>Right</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  },
};

export default App;
