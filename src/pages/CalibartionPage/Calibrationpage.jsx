import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import DashboardSam from '../Dashboard/DashboardSam';
import Hedaer from '../Header/Hedaer';

function Calibrationpage() {
  const navigate = useNavigate();

  
  const handlehome=()=>{
      navigate('/')
  }
  return (
    <div className="container-fluid">
    <div className="row">
        {/* Sidebar (hidden on mobile) */}
        <div className="col-lg-3 d-none d-lg-block ">
            <DashboardSam />
        </div>
        {/* Main content */}
        <div className="col-lg-9 col-12 ">
            <div className="row">
                <div className="col-12">
                    <Hedaer />
                </div>
            </div>
            <div>
          <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-center align-items-center m-2 text-center" >
                    
                    <h1 className='text-center mt-5' style={{justifyContent:'center'}}>Calibration Added By</h1>
                    
                </div>
                <div className="card m-1 ">
                    <div className="card-body">
                        <form className='m-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">User ID</label>
                                        <input id="to-date" placeholder='User ID' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>

                                {/* Select Company */}
                              

                                {/* From Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="from-date" className="form-label">Date of calibration added</label>
                                        <input id="from-date" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>

                                {/* To Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="to-date" className="form-label">Time Of Calibration Added</label>
                                        <input id="to-date" placeholder='Time' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">User Name</label>
                                        <input id="to-date" placeholder='Name' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>

                                {/* Download Format */}
                               
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center m-2 text-center" >
                    
                    <h1 className='text-center mt-2' style={{justifyContent:'center'}}>Add Calibration Details</h1>
                    
                </div>
                <div className="card m-1 ">
                    <div className="card-body">
                        <form className='m-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">User ID</label>
                                        <input id="to-date" placeholder='User ID' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>

                                {/* Select Company */}
                              

                                {/* From Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="from-date" className="form-label">Date of calibration added</label>
                                        <input id="from-date" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>

                                {/* To Date */}
                                
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Model Name</label>
                                        <input id="industry" placeholder='Time' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>

                                
                               
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center " >
                    
                    <h1 className='text-center mt-2' style={{justifyContent:'center'}}>Results</h1>
                    
                </div>
                <div className="card m-1">
                    <div className="card-body">
                        <form className='m-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Before</label>
                                        <input id="industry" placeholder='Before' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                           
                                           
                                        
                                    </div>
                                </div>

                                {/* Select Company */}
                              

                                {/* From Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="after" className="form-label">After</label>
                                        <input id="after" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>

                                {/* To Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="to-date" className="form-label">Technician</label>
                                        <input id="to-date" placeholder='Technician' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Notes</label>
                                        <input id="to-date" placeholder='Notes' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>

                                {/* Download Format */}
                               
                            </div>
                            <button type="submit" className="btn" style={{backgroundColor:'#236a80' , color:'white'}}>Add Calibration</button>
                            <button type="submit" className="btn btn-danger ms-1 " style={{ color:'white'}}>Cancel</button>


                        </form>
                        <ToastContainer />
                    </div>
                </div>
                
            </div>
           
        </div>
       
      </div>
        </div>
    </div>
</div>
  )
}

export default Calibrationpage