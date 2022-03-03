import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Enquiry from './components/Enquiry';
import Home from './components/Home';
import Register from './components/Register';
import Enrollment from './components/Enrollment';
import Transportation from './components/Transportation';
import Calculator from './Calculator';
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path ="/login" component={Login} />
      <Route exact path="/enquiry" component={Enquiry} />
      <Route exact path='/register' component={Register} />
      <Route exact path="/enrollment" component={Enrollment} />
      <Route exact path="/transportation" component ={Transportation} />
      <Route exact path="/cal" component={Calculator} />
    </div>
    </Router>
  );
}

export default App;
