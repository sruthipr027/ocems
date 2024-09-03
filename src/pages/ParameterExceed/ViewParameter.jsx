import React from 'react';
import { Button } from 'react-bootstrap';  // Import Button
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import FooterM from '../FooterMain/FooterM';
import Maindashboard from '../Maindashboard/Maindashboard';
import DashboardSam from '../Dashboard/DashboardSam';
import Hedaer from '../Header/Hedaer';
function ViewParameter() {
    const navigate = useNavigate();

   
    const trips = [
        {
            name: "John Doe",
            email: "john@gmail.com",
            flight: "Qatar",
            members: 1,
            price: "$56k",
            avatar: "https://via.placeholder.com/40", // Replace with actual avatar image
        },
        {
            name: "Martin Loiness",
            email: "martin_loi@gmail.com",
            flight: "Emirates",
            members: 2,
            price: "$56k",
            avatar: "https://via.placeholder.com/40", // Replace with actual avatar image
        }
    ];
    const handleParameter=()=>{
        navigate('/add-parameter')
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
        {/*  */}
        <div className='align-items-center justify-content-center d-flex mt-5 mb-4'><Button onClick={handleParameter} className='p-3 btn parameterbtn align-items-center justify-content-center d-flex' style={{ border:'none'}}> Add Parameter Threshold exceedance Values</Button></div>

        <div className="row mb-5">
                            <div className="col-12 col-md-12 grid-margin">
                                <div className="col-12 d-flex justify-content-between align-items-center m-3">
                                    <h1 className='text-center mt-3' style={{ justifyContent: 'center' }}>Previous Parameter Threshold exceedance  Values</h1>
                                </div>
                                <div className="card last-trips-card mt-2" style={{ overflowX: 'scroll' }}>
                                <div className="card-header p-3 pt-4 d-flex align-items-center search-container m-3">
                                <input type="name" placeholder='username' className='p-2 search-input' style={{ borderRadius: '10px' }} />
                             <button className='btn btn-outline-primary ms-2 search-button'>search</button>
                             </div>
                                    <div className="card-body">
                                        <table className="table table-borderless">
                                            <thead className='m-5'>
                                                <tr>
                                                    <th>Date</th>
                                                    <th className="custom-width"> User ID of Admin</th>
                                                    <th className="custom-width">Admin Name</th>
                                                    <th className="custom-width">User ID</th>
                                                    <th className="custom-width">Product ID</th>
                                                    <th className="custom-width">Industry Type</th>
                                                    <th className="custom-width">pH-Below</th>
                                                    <th className="custom-width">pH-Above</th>
                                                    <th>TDS</th>
                                                    <th>Turbidity</th>
                                                    <th>Temperature</th>
                                                    <th>BOD</th>
                                                    <th>COD</th>
                                                    <th>TSS</th>
                                                    <th>ORP</th>
                                                    <th>Nitrate</th>
                                                    <th>Ammonical Nitrogen</th>
v

                                                </tr>
                                            </thead>
                                            <tbody className='m-5'>
                                               
                                            </tbody>
                                        </table>
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

export default ViewParameter