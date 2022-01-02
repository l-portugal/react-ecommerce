import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderApp } from './components/HeaderApp';
import { FooterApp } from './components/FooterApp';
import { HomeView } from './views/HomeView';
import { CartView } from './views/CartView';
import { ProductView } from './views/ProductView';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={ { paddingBottom:'200px' } }>
      <HeaderApp/>
        <Switch>
          <Route path='/' exact component={ HomeView } />
          <Route path='/cart' exact component={ CartView } />
          <Route path='/product/:id' exact component={ ProductView } />
          <Route render={ () => <> <h1>404 No Encontrado</h1> <Link to="/">Ir a página principal</Link> </>} />
        </Switch>
      <FooterApp/>
    </div>
  );
}

export default App;
