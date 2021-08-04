import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './components/Home';
import Header from './components/Header';
import Services from './components/Services';
import Prices  from './components/Prices';
import {Switch,Route,Redirect} from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
  <>

           <Navbar/> 
           <Header/>   
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/prices" component={Prices}/>
                <Route exact path="/contact" component={Form}/>
                <Redirect to="/"/>
            </Switch> 
   </>
  );
}

export default App;
