import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EmployeersPage from './pages/EmployeersPage';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <div className='ui container'>
        <MenuBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/employees' component={EmployeersPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
