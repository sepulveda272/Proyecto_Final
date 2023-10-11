import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import Formulario from './components/Formulario';
import Help from './components/Help';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading.jsx';
import Panel from './components/Panel.jsx';
import Report from './components/Report';
import Presentacion from './components/Presentacion.jsx';
import './css/Presentacion.css';
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

  
  <Router />;
  <Link />;
  <Navigate />;
 

  return (
    <>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Formulario/>} />
          <Route path="/inicio" element={<Presentacion />} />
          <Route path="/loading" element={<Loading />} />
          <Route path='/panel' element={<Panel/>}/>
          <Route path="/Report" element={<Report />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
