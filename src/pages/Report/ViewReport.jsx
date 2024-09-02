import React from 'react';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import Maindashboard from '../Maindashboard/Maindashboard';
import DashboardSam from '../Dashboard/DashboardSam';
import './viewreport.css';

function ViewReport() {
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
                            <Maindashboard />
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-12 grid-margin">
                                <div className="col-12 d-flex justify-content-between align-items-center m-3">
                                    <h1 className='text-center mt-3' style={{ justifyContent: 'center' }}>Report</h1>
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
                                                    <th>Sl No</th>
                                                    <th>From date</th>
                                                    <th>To Date</th>
                                                    <th>Username</th>
                                                    <th className="custom-width">Company Name</th>
                                                    <th className="custom-width">Industry Type</th>
                                                    <th className="custom-width">Engineer Name</th>
                                                    <th>Verified/Declined</th>
                                                    <th>View</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>
                                            <tbody className='m-5'>
                                                {trips.map((trip, index) => (
                                                    <tr key={index} className="align-middle rounded-row">
                                                        <td>
                                                            <span className="badge rounded-pill bg-info text-dark px-3 py-2">
                                                                {trip.members}
                                                            </span>
                                                        </td>
                                                        <td className="fw-bold">11/02/2023</td>
                                                        <td>20/03/2023</td>
                                                        <td>Admin</td>
                                                        <td className="custom-width">Ebhoom Solutions LLP</td>
                                                        <td className="custom-width">Chemical</td>
                                                        <td className="custom-width">Sharath</td>
                                                        <td className='text-primary'>verified</td>
                                                        <td><button className='btn btn-info'>View</button></td>
                                                        <td><button className='btn btn-warning'>Edit </button></td>
                                                        <td><button className='btn btn-danger'>Delete</button></td>
                                                        <td><button className='btn btn-outline-success'>Download</button></td>
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

export default ViewReport;
