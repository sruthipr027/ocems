import React from 'react'
import { Button } from 'react-bootstrap';  // Import Button
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import FooterM from '../FooterMain/FooterM';
import Maindashboard from '../Maindashboard/Maindashboard';
import DashboardSam from '../Dashboard/DashboardSam';


function Notification() {
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
                    <Maindashboard />
                </div>
            </div>
            <div>
          <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-center align-items-center m-2 text-center" >
                    
                    <h1 className='text-center mt-5' style={{justifyContent:'center'}}>Notification Added By</h1>
                    
                </div>
                <div className="card m-5">
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
                    
                    <h1 className='text-center mt-2' style={{justifyContent:'center'}}>Add Notification Details</h1>
                    
                </div>
                <div className="card m-5">
                    <div className="card-body">
                        <form className='m-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Add Notification Message</label>
                                        <input id="to-date" placeholder='Message...' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                

                                

                              
                               
                            </div>
                            <button type="submit" className="btn" style={{backgroundColor:'#236a80' , color:'white'}}>Add Notification</button>
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

export default Notification