import logo from './SARS-CoV-2.png';
import './App.css'; 
import {Navbar, Nav, Button, Form, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar bg="primary" variant="dark" >
    <Navbar.Brand href="#home"><img src={logo} style={{width:"4vw"}}></img> COVID-19 Analysis</Navbar.Brand>
    <h2 className="text-white">IGT Project</h2>
    <Nav className="ml-auto">
      <Nav.Link href="/cases" className="text-white links">Analysis of Cases</Nav.Link>
      <Nav.Link href="/vaccination" className="text-white links">Analysis of Vaccinations</Nav.Link>
    </Nav>

  </Navbar>
    </div>
    <Switch>
      <Route path="/cases"><iframe width="100%" frameborder="0" height="768px"src="https://www.arcgis.com/apps/dashboards/470dc9708d434f09909f412d4eb2f237"  className="frame"></iframe></Route>
    </Switch>
    </Router>
  );
}

export default App;
