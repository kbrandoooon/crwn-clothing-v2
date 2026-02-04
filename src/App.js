import Home from './routes/home/home.component.jsx';
import {Routes,Route} from 'react-router-dom';
import Navigation from './routes/home/navigation/navigation.component.jsx';
import Authentication from './routes/home/authentication/authentication.component.jsx';

const Shop = () => {
  return(
    <h1>I am the shop page</h1>
  );
}

const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/auth' element={<Authentication/>}/>
    </Route>
  </Routes>
  );
};

export default App;
