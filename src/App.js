import logo from './SARS-CoV-2.png';
import vaccine from './vaccine.jpg';
import './App.css'; 
import {Navbar, Nav, Container, Row, Col} from "react-bootstrap";
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
       <Navbar bg="danger" variant="dark" >
    <Navbar.Brand href="/"><img src={logo} style={{width:"4vw"}}></img> COVID-19 Analysis</Navbar.Brand>
    <h2 className="text-white">IGT Project</h2>
    <Nav className="ml-auto">
      <Nav.Link href="/cases" className="text-white links">Analysis of Cases</Nav.Link>
      <Nav.Link href="/vaccination" className="text-white links">Analysis of Vaccinations</Nav.Link>
    </Nav>

  </Navbar>
    </div>
    <Switch>
      <Route exact path="/">
        <Container fluid className="homepage">
          <Row className="rowspacing">
            <Col md={{span:8,order:"first",offset:1}} className="columnspacing">
            Coronavirus disease 2019 (COVID-19) is defined as illness caused by a novel coronavirus called severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2; formerly called 2019-nCoV), which was first identified amid an outbreak of respiratory illness cases in Wuhan City, Hubei Province, China. [1] It was initially reported to the World Health Organization (WHO) on December 31, 2019. On January 30, 2020, the WHO declared the COVID-19 outbreak a global health emergency.
            </Col>
            <Col md={{span:2,order:"last",offset:1}}></Col>
          </Row>
          <Row className="rowspacing">
            <Col md={{span:8,order:"first",offset:1}} className="columnspacing">
         
The world is in the midst of a COVID-19 pandemic. As WHO and partners work together on the response -- tracking the pandemic, advising on critical interventions, distributing vital medical supplies to those in need--- they are racing to develop and deploy safe and effective vaccines. 

Vaccines save millions of lives each year. Vaccines work by training and preparing the body’s natural defences – the immune system – to recognize and fight off the viruses and bacteria they target. After vaccination, if the body is later exposed to those disease-causing germs, the body is immediately ready to destroy them, preventing illness.
            </Col>
            <Col md={{span:2,order:"last",offset:1}} ></Col>
          </Row>
          <Row className="rowspacing">
            <Col md={{span:8,order:"first",offset:1}} className="columnspacing">
            These COVID-19 dashboards present official daily counts of COVID-19 cases, deaths and vaccine utilisation reported by countries, territories and areas. Through this dashboard, we aim to provide a frequently updated data visualization, data dissemination and data exploration resource, while linking users to other useful and informative resources.
            </Col>
            <Col md={{span:2,order:"last",offset:1}}></Col>
          </Row>
        </Container>

      </Route>
      <Route exact path="/cases"><iframe width="100%" frameborder="0" height="768px"src="https://www.arcgis.com/apps/dashboards/470dc9708d434f09909f412d4eb2f237"  className="frame"></iframe></Route>
      <Route exact path="/vaccination"><iframe width="100%" frameborder="0" height="768px"src="https://www.arcgis.com/apps/dashboards/ebba1ed75ed341beaf2d70168e3d99cb"  className="frame"></iframe></Route>
    </Switch>
    </Router>
  );
}

export default App;
