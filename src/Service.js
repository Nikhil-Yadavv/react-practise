import { Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import web from '../src/Images/pic3.jpeg'

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              <div className='col-md-4 col-10 mx-auto'>
              <div class="card" >
                 <img src={web} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="#" class="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
              <div class="card" >
                 <img src={web} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="#" class="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
              <div class="card" >
                 <img src={web} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="#" class="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
              <div class="card" >
                 <img src={web} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="#" class="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
              <div class="card" >
                 <img src={web} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="#" class="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
              <div class="card" >
                 <img src={web} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="#" class="btn btn-primary">Go somewhere</Link>
                 </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;