import React from 'react';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import DashboardSam from '../Dashboard/DashboardSam';
import './viewcalibration.css'
import Hedaer from '../Header/Hedaer';

function ViewCalibration() {
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

  return (
    <div className="container-fluid mb-5">
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
                <div className="row">
                    <div className="col-12 col-md-12 grid-margin">
                        <div className="col-12 d-flex justify-content-between align-items-center m-3">
                            <h1 className='text-center mt-3' style={{ justifyContent: 'center' }}>Previous Calibration Data</h1>
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
                                            <th className="custom-width">Date Of Calibration Added</th>
                                            <th className="custom-width">Time of Calibration Added	</th>
                                            <th className="custom-width">User ID of Admin</th>
                                            <th className="custom-width">Admin Name</th>
                                            <th className="custom-width">Date of Calibration	</th>
                                            <th className="custom-width">User ID</th>
                                            <th className="custom-width">Model Name</th>
                                            <th>Before</th>
                                            <th>After</th>
                                            <th>Technician</th>
                                            <th>Notes</th>


                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody className='m-5'>
                                        {trips.map((trip, index) => (
                                            <tr key={index} className="align-middle rounded-row">
                                                <td>
                                                <td className="fw-bold">11/02/2023</td>

                                                </td>
                                                <td className="fw-bold">11.00pm</td>
                                                <td>Admin-Dev</td>
                                                <td>Fazil</td>
                                                <td className="custom-width">11/02/2023</td>
                                                <td className="custom-width">User001</td>
                                               <td className="custom-width">Model1</td>
                                                <td className=''>Testing </td>
                                                <td>Calibartion </td>
                                                <td >Tech</td>
                                                <td className="custom-width">calibration Test</td>
                                                <td ><button className='btn btn-outline-success'>Edit</button></td>
                                                <td  className="custom-width"><button className='btn btn-danger'> Delete <i class="fa-solid fa-trash"></i></button></td>

                                            </tr>
                                        ))}
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

export default ViewCalibration