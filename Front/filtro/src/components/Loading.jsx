import React from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Loading() {
    return (
        <>
        <div className='fondo_black'>
            <div className='divPadre'>
                <div className='divHijo'>
                    <Spinner color='primary'/>
                </div>
            </div>
        </div>
        
        
        </>
    );
}

export default Loading;