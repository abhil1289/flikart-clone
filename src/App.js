
import './App.css';
import Men from './stores/components/Men';
import { LandingPage } from './stores/pages/LandingPage';
import { Routes ,Route} from 'react-router-dom';
import MobilePages from './stores/pages/MobilePages';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/abc'  element={<Men/>}/>
      <Route path='Mobiles' element={<MobilePages/>}/>
    </Routes>
    </div>
  );
}

export default App;
