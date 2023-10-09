import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Inicio() {
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
    <div>
      hola
    </div>
  );
}

export default Inicio;
