import React from 'react';
import { Button } from 'react-bootstrap';  // Import Button
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import logo from '../../assests/images/ebhoom.png';  // Import logo
import { useNavigate } from 'react-router-dom';
import FooterM from '../FooterMain/FooterM';

function Download() {
    const navigate = useNavigate();

    const industryType = [
        { category: "Sugar" },
        { category: "Cement" },
        { category: "Distillery" },
        { category: "Petrochemical" },
        { category: "Pulp & Paper" },
        { category: "Fertilizer" },
        { category: "Tannery" },
        { category: "Pesticides" },
        { category: "Thermal Power Station" },
        { category: "Caustic Soda" },
        { category: "Pharmaceuticals" },
        { category: "Chemical" },
        { category: "Dye and Dye Stuff" },
        { category: "Refinery" },
        { category: "Copper Smelter" },
        { category: "Iron and Steel" },
        { category: "Zinc Smelter" },
        { category: "Aluminium" },
        { category: "STP/ETP" },
        { category: "NWMS/SWMS" },
        { category: "Noise" },
        { category: "Chemical" },
        { category: "Other" },
    ];
    const handlehome=()=>{
        navigate('/')
    }

    return (
      <div>
          <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3 p-5" >
                    <img src={logo} alt="" />
                    <h1 className='text-center mt-5'>Download IoT Data</h1>
                    <button className='btn' onClick={handlehome}>home</button>
                </div>
                <div className="card m-5">
                    <div className="card-body">
                        <form className='m-5 p-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Select Industry</label>
                                        <select id="industry" className="form-control text-start" style={{ width: '100%', padding: '15px', borderRadius: '10px' }}>
                                            <option>select</option>
                                            {industryType.map((industry, index) => (
                                                <option key={index} value={industry.category}>{industry.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Select Company */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="company" className="form-label">Select Company</label>
                                        <select id="company" className="form-control" style={{ width: '100%', padding: '15px', borderRadius: '10px' }}>
                                            <option>select</option>
                                            {/* Add options for companies */}
                                        </select>
                                    </div>
                                </div>

                                {/* From Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="from-date" className="form-label">From Date</label>
                                        <input id="from-date" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>

                                {/* To Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="to-date" className="form-label">To Date</label>
                                        <input id="to-date" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>

                                {/* Download Format */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="format" className="form-label">Download Format</label>
                                        <select id="format" className="form-control" style={{ width: '100%', padding: '15px', borderRadius: '10px' }}>
                                            <option>select</option>
                                            <option value="pdf">PDF</option>
                                            <option value="csv">CSV</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn" style={{backgroundColor:'#236a80' , color:'white'}}>Download</button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
           
        </div>
        <FooterM/>
      </div>
    );
}

export default Download;
