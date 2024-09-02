import React from 'react'
import './Parameter.css'
import { Button } from 'react-bootstrap';  // Import Button
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import FooterM from '../FooterMain/FooterM';
import Maindashboard from '../Maindashboard/Maindashboard';
import DashboardSam from '../Dashboard/DashboardSam';

function AddParameter() {
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
                <div className="col-12 d-flex justify-content-between align-items-center m-3" >
                    <h1 className='text-center mt-5' style={{justifyContent:'center'}}>Parameter Threshold exceedance  Value Added by</h1>
                </div>
                <div className="card m-2">
                    <div className="card-body">
                        <form className='m-2 p-5'>
                            <div className="row">
                                {/* Admin name */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Admin User ID  </label>
                                        <input id="to-date" type='email' placeholder='admin-Developer ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Admin User ID  </label>
                                        <input id="to-date" type='email' placeholder='admin-Developer ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                 {/* From Date */}
                                 <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="from-date" className="form-label">Date of Parameter Threshold exceedance  value Added</label>
                                        <input id="from-date" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>  
        </div>

        <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3" >
                    
                    <h1 className=' mt-2' style={{justifyContent:'center'}}>Add Parameter Threshold exceedance  Values Details</h1>
                    
                </div>
                <div className="card m-2">
                    <div className="card-body">
                        <form className='m-2 p-5'>
                            <div className="row">
                                {/* Admin name */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> User ID  </label>
                                        <input id="to-date" type='email' placeholder=' User ID ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Product ID  </label>
                                        <input id="to-date" type='email' placeholder='Product ID  ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/*  */}
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
                                {/* Download Format */}                             
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>          
        </div>

        <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3" >
                    
                    <h1 className=' mt-2' style={{justifyContent:'center'}}>Values</h1>
                    
                </div>
                <div className="card m-2">
                    <div className="card-body">
                        <form className='m-2 p-5'>
                            <div className="row">
                                {/* Admin name */}
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">pH-Above</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">pH-Below</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">TDS</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Turbidity</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Temprature</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">BOD</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">COD</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">TSS</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">ORP</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Nitrate</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Ammonical Nitrogen</label>
                                </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">DO</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Chloride</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Flow</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">CO</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">NOX</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Pressure</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">PM</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">SO2</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">NO2</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Mercury</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">PM 10</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">PM 2.5</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">NOH</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">NH3</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Wind Speed</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Wind Direction</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Air Temperature</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Humidity</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">Solar Radiation</label>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-1">
                                <div class="input-container">
                                <input type="name" id="name" name="name" placeholder=" " required/>
                                <label for="name">DB</label>
                                </div>
                                </div>


                               
                            </div>
                            <button type="submit" className="btn me-2" style={{backgroundColor:'#236a80' , color:'white'}}>Check and validate</button>
                            <button type="submit" className="btn btn-danger me-2" style={{color:'white'}}>Cancel</button>


                        </form>
                        <ToastContainer />
                    </div>
                </div>

                {/*  */}
                
            </div>
           
        </div>
        <FooterM/>
      </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default AddParameter