import React from 'react';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import DashboardSam from '../Dashboard/DashboardSam';
import './subscribe.css';
import Hedaer from '../Header/Hedaer';

function Subscibe() {
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
            <div className='d-flex align-items-between justify-content-between m-3 mt-5 ' style={{fontSize:'20px'}}>
                <div><b>SUBSCRIPTION DATA</b></div>
                <div><b>TRANSACTIONS</b></div>
            </div>
            <div>
                <div className="row">
                    <div className="col-12 col-md-12 grid-margin">
                        <div className="col-12 d-flex justify-content-between align-items-center m-3">
                            <h3 className='text-center mt-3' style={{ justifyContent: 'center' }}>Subscription Details of Users</h3>
                        </div>
                        <div className="card last-trips-card mt-2" style={{ overflowX: 'scroll' }}>
                        <div className="card-header p-3 pt-4 d-flex align-items-center search-container m-3">
                        <input type="name" placeholder='username' className='p-2 search-input' style={{ borderRadius: '10px' }} />
                     <button className='btn btn-outline-primary ms-1 search-button'>search</button>
                     </div>
                            <div className="card-body">
                                <table className="table table-borderless">
                                    <thead className='m-5'>
                                        <tr>
                                            <th>Sl No</th>
                                            <th className="custom-width ">User ID</th>
                                            <th className="custom-width">Name</th>
                                            <th className="custom-width">Email</th>
                                            <th className="custom-width">Mobile Number</th>
                                            <th className="custom-width">Model Name </th>
                                            <th className="custom-width">Date </th>
                                            <th className="custom-width"> Subscription End Date</th>
                                            <th className="custom-width">Pay</th>
                                           
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
                                                <td className="fw-bold custom-width">KSPCB001</td>
                                                <td className="custom-width">Vivek Agarwal</td>
                                                <td className="custom-width">sielpkd@gmail.com</td>
                                                <td className="custom-width">9920034567</td>
                                                <td className="custom-width">NIL</td>
                                                <td className="custom-width">2024-07-11</td>
                                                <td className='text-primary custom-width'>2024-08-10</td>
                                                <td className="custom-width"><button className='btn btn-info'>Pay</button></td>
                                               
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

export default Subscibe