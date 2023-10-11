import React, { useState, useEffect, Fragment } from 'react';
import Loading from './Loading';
import Nav from './Nav';
import Report from './Report';
import ElementoPanel from './ElementoPanel';

const Panel = () => {
  const [loading, setLoading] = useState(true);
  const [showReport, setShowReport] = useState(false);

  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleReport = () => {
    setShowReport(!showReport);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Nav />
      

      {showReport ? (
        <Report />
      ) : (
        <ElementoPanel />
      )}

      <button onClick={toggleReport}>Mostrar Informe</button>
    </Fragment>
  );
};

export default Panel;
