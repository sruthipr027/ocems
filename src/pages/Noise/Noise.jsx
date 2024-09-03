import React from 'react';
import DashboardSam from '../Dashboard/DashboardSam';
import Hedaer from '../Header/Hedaer';

function Noise() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar (hidden on mobile) */}
        <div className="col-lg-3 d-none d-lg-block">
          <DashboardSam />
        </div>
        {/* Main content */}
        <div className="col-lg-9 col-12">
          <div className="row">
            <div className="col-12">
              <Hedaer />
            </div>
          </div>
          <div className='d-flex justify-content-between prevnext mt-5 ps-5 pe-5'>
            <div>
              <button className='btn btn-outline-dark'>
                <i className="fa-solid fa-arrow-left me-1"></i>Prev
              </button>
            </div>
            <h2 className='text-center'>NOISE DASHBOARD</h2>
            <div>
              <button className='btn btn-outline-dark'>
                Next <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="row" style={{ overflowX: 'hidden' }}>
              <div className="col-12 col-md-12 grid-margin">
                <div>
                  <h5 className='d-flex justify-content-end me-3 mt-3'>
                    Analyser Health: <span className='text-success'>Good</span>
                  </h5>
                </div>
                <div className="card  my-5 justify-content-start" style={{ maxWidth: '400px' }}>
                  <div className="card-body">
                    <form className='m-4 p-4'>
                      <div className="row">
                        <div>
                          <h3 className='text-center'><b>Limits in DB</b></h3>
                        </div>
                        <h4 className='text-center'>N/AdB</h4>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noise;
