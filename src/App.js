import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderApp } from './components/HeaderApp';
import { FooterApp } from './components/FooterApp';
import { ListProducts } from './components/ListProducts';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <HeaderApp></HeaderApp>
      <Container>
        <ListProducts />
      </Container>
      <FooterApp></FooterApp>
    </div>
  );
}

export default App;
