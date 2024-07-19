import './App.css'
import { Route, Routes } from 'react-router-dom';
import Index from './componentes/Index';
import Imagen from './componentes/Imagen';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/imagen" element={<Imagen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
