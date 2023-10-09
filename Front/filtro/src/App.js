import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading.jsx';
import Panel from './components/Panel.jsx';
import Presentacion from './components/Presentacion.jsx';
import './css/Login.css';
import './css/Panel.css';
import './css/Loading.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="App">
          
        <Routes>
          <Route  path="/" element={<Formulario/>} />
          <Route path="/inicio" element={<Presentacion />} />
          <Route path="/loading" element={<Loading />} />
          <Route path='/panel' element={<Panel/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
