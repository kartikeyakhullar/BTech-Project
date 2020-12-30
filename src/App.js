import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Report from './pages/Report';
import Team from './pages/Team';
import Presentation from './pages/Presentation';
import Dataset from './pages/Dataset';
import bg from './images/bg.png';

function App() {
  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/dataset" component={Dataset} />
        </Switch>
      </Router>
  );
}

export default App;
