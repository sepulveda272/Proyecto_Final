import React, { useState, useEffect } from 'react';
import Loading from './Loading';


const Loging = () => {
    
    const [loading, setLoading] = useState(true);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    
      if (loading) {
        return <Loading />;
      }

    return (
        <div>
            Loging
        </div>
    );
};

export default Loging;