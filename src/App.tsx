import './App.css';

import AppRoot from './components/AppRoot';
import { Route, Routes } from 'react-router-dom';
import Receipt from './components/Receipt';


function App() {

return <Routes>
    <Route path='/' element={<AppRoot />}/>
    <Route path='/checkout' element={<Receipt/>}/>
  </Routes>
}

export default App;
