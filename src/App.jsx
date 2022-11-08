import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Rotas from './Rotas';
import Sobre from './Sobre';
import NotFound from './NotFound';
import Menu from './Menu';



function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rotas" element={<Rotas />} />
        <Route exact path="/rotas/:id:/:mes" element={<Rotas />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
