import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MostrarCategorias } from './components/MostrarCategorias';
import { AgregarCategoria } from './components/AgregarCategoria';
import { EditCategoria } from './components/EditCategoria';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<MostrarCategorias />} />
        <Route path='/Agregar' element={<AgregarCategoria />} />
        <Route path='/Editar/:id' element={<EditCategoria />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
