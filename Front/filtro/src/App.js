import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import Panel from './components/Panel.jsx';
import './css/Login.css';
import './css/Panel.css';

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
    <div className="App">

      <Formulario/>

      <Routes>
          <Route path='/panel' component={<Panel/>}/>
      </Routes>
    </div>
  );
}

export default App;
