import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Enquiry from './components/Enquiry';
import Home from './components/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path ="/login" component={Login} />
      <Route exact path="/enquiry" component={Enquiry} />
    </div>
    </Router>
  );
}

export default App;
