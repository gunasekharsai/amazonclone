import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/Newnavbaar/Newnav';
import Maincomponent from './components/home/Maincomponent';
import Footer from './components/footer/Footer';
import Sign_in from './components/singup_sign/Sign_in';
import SignUp from './components/singup_sign/SignUp';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
<>
<Newnav />
<Navbaar />
<Routes>
  <Route path='/' element ={<Maincomponent/>} />
  <Route path='/login' element ={<Sign_in/>} />
  <Route path='/register' element ={<SignUp/>} />
</Routes>
<Footer />
</>
  );
}

export default App;
