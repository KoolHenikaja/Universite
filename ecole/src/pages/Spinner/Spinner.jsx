import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner as BootstrapSpinner} from 'react-bootstrap'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}>
      <BootstrapSpinner animation="border" variant='danger' role="status">
        <span className='sr-only'>LOADING</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner
