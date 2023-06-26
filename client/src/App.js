import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/Newnavbaar/Newnav';
import Maincomponent from './components/home/Maincomponent';
import Footer from './components/footer/Footer';
import Sign_in from './components/singup_sign/Sign_in';
import SignUp from './components/singup_sign/SignUp';
import {Routes,Route} from "react-router-dom";
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
function App() {
  return (
<>
<Newnav />
<Navbaar />
<Routes>
  <Route path='/' element ={<Maincomponent/>} />
  <Route path='/login' element ={<Sign_in/>} />
  <Route path='/register' element ={<SignUp/>} />
  <Route path='/getproductsone/:id' element ={<Cart/>} />
  <Route path='/buynow' element ={<Buynow/>} />
</Routes>
<Footer />
</>
  );
}

export default App;
