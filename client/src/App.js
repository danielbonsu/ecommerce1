import './App.css';
import SignIN from './components/SignInOrRegister/signIN/SignIN';
import Register from './components/SignInOrRegister/Register/Register';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import ProductPreview from './components/products/productsContainer/ProductPreview';
import CartScreen from './components/cart/CartScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/register' component={Register} />
          <Route path='/signIN' component={SignIN} />
          <Route
            path='/products/:id'
            component={ProductPreview}
          />
          <Route path='/signIN' component={CartScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
