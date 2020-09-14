import React from 'react';
// import Img from './imgError/error404.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='text-center'>
            {/* <img src={Img} alt='1'  className=' w-100'></img> */}
           <Link to='/' className='btn btn-primary  my-3'>
               Volver a Inicio?
          </Link>
        </div>
    );
};

export default Error404;