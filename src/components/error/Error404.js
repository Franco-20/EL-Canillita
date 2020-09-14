import React from 'react';
import Img from './imgError/error404.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='text-center error404'>
            <img src={Img} alt='1'  className=' w-100'></img>
             <h5>
                 Disculpa, Al parecer el artículo que buscas ya no este disponible,
             </h5>
             <h5> 
                  o la dirección ingresada no es correcta.
             </h5>
             <Link to='/' className='btn btn-primary  my-3 '>
                 Ir a página de inicio ? 
             </Link>
        </div>
    );
};

export default Error404;