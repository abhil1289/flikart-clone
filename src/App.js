
import './App.css';
import MenPage from'./stores/pages/MenPage';
import { LandingPage } from './stores/pages/LandingPage';
import { Routes ,Route} from 'react-router-dom';
import MobilePages from './stores/pages/MobilePages';
import ComputerPage from './stores/pages/ComputerPage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      
      <Route path='/Mobiles' element={<MobilePages/>}/>
      <Route path='/computers' element={<ComputerPage/>}/>
      <Route path='/men' element={<MenPage/>}/>
      <Route path='/Mobiles/:id' element ={<MobileSingle/>}/>
      <Route path='/cart' element={<UserCart/>}/>
    </Routes>
    </div>
  );
}

export default App;
