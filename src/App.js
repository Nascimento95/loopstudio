import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <Container fluid='sm' className="App">
      <Home />
    </Container>
  );
}

export default App;
