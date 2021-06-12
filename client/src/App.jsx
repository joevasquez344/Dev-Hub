import React, {useState} from 'react';
import './App.css';
import routes from './routes';
import {Switch, Route} from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import {Grid} from 'semantic-ui-react';
import {useLocation} from 'react-router-dom';

function App() {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  return (
    <Grid style={styles.container}>
      <Grid.Column width={3}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column width={location.pathname === '/home' && 13}>
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
      </Grid.Column>
      {location.pathname === '/home' ? null : (
        <Grid.Column width={4}>
          <h1>Right</h1>
        </Grid.Column>
      )}
    </Grid>
  );
}

const styles = {
  container: {
    background: '#f0f2f5',
    padding: '30px',
  },
};

export default App;
