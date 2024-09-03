import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setFilteredUsers } from "../../redux/features/userLog/userLogSlice";
import KeralaMap from './KeralaMap';
import { useNavigate } from "react-router-dom";
import './userlog.css';
import DashboardSam from "../Dashboard/DashboardSam";
import Hedaer from "../Header/Hedaer";

const UsersLog = () => {

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
  const handleEdit=()=>{
      navigate('/edit')
  }
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, filteredUsers, loading, error } = useSelector((state) => state.userLog);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = users.filter(user => user.userName.toLowerCase().includes(query));
    dispatch(setFilteredUsers(filtered));
  };

  const handleUserClick = (userName) => {
    navigate('/ambient-air', { state: { userName } });
  };
  

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
          <div className="row mt-4">
            <div className="col-12">
              <h1 className="text-center">Control and Monitor</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title text-center"></h4>
                  <KeralaMap users={users} />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">User List</h5>
                  {loading && <p>Loading...</p>}
                  {error && <p>Error fetching users: {error}</p>}
                  {!loading && !error && (
                    <ul className="list-group">
                      {users.map((user) => (
                        <li key={user._id} className="list-group-item" onClick={() => handleUserClick(user.userName)}>
                          {user.userName}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{overflowX:'hidden'}}>
          <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3" >
                    <h1 className='text-center mt-5'>Manage Users</h1>
                </div>
                <div className="card ">
                    <div className="card-body">
                        <form className='m-2 p-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">User ID</label>
                                        <input id="to-date" placeholder='User ID' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>


                                {/* Select Company */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Company Name </label>
                                        <input id="to-date" placeholder='User ID' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>


                                {/* From Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">First Name </label>
                                        <input id="to-date" placeholder='First Name ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>


                                {/* To Date */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Email  </label>
                                        <input id="to-date" type='email' placeholder='email' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* mobile number */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Mobile Number  </label>
                                        <input id="to-date" type='number' placeholder=' Enter Mobile Number ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                              {/* model name */}
                              <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Model Name  </label>
                                        <input id="to-date" type='email' placeholder='Enter Model name' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* Poduct ID */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Product ID </label>
                                        <input id="to-date" type='email' placeholder='Enter  Poduct ID' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* Password */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Password  </label>
                                        <input id="to-date" type='Password' placeholder='Enter  Password ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                 {/*  Confirm Password */}
                                 <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Confirm Password  </label>
                                        <input id="to-date" type='Password' placeholder='Enter Password ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                 {/* To Date */}
                                 <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="to-date" className="form-label"> Date of subscription</label>
                                        <input id="to-date" className="form-control" type="date" style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />
                                    </div>
                                </div>
                                {/* User Type */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="company" className="form-label">User Type</label>
                                        <select id="company" className="form-control" style={{ width: '100%', padding: '15px', borderRadius: '10px' }}>
                                        <option value="select">Select</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                            {/* Add options for companies */}
                                        </select>
                                    </div>
                                </div>
                                {/* select industry */}
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
                                {/* data interval */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Select Industry</label>
                                        <select id="industry" className="form-control text-start" style={{ width: '100%', padding: '15px', borderRadius: '10px' }}>
                                            <option>select</option>
                                            <option value="admin">!5 sec</option>
                                            <option value="user">less than 1 min </option>
                                            <option value="user">less than 15 min </option>
                                            <option value="user">less than 30 min </option>
                                        </select>
                                    </div>
                                </div>
                                {/* District */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> District  </label>
                                        <input id="to-date" type='email' placeholder='Enter District ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* State */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> State  </label>
                                        <input id="to-date" type='email' placeholder='Enter State ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* address */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> Address  </label>
                                        <input id="to-date" type='email' placeholder='Enter Address ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* Latitude */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label"> latitute  </label>
                                        <input id="to-date" type='email' placeholder='Enter Latitude ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                                {/* Longitude */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Longitude   </label>
                                        <input id="to-date" type='email' placeholder='Enter Longitude ' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                               
                               
                            </div>
                            <button type="submit" className="btn" style={{backgroundColor:'#236a80' , color:'white'}}>Add User</button>
                            <button type="submit" className="btn btn-danger ms-1 " style={{ color:'white'}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>

        <div className="row" style={{overflowX:'hidden'}}>
          <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3" >
                    <h1 className='text-center mt-5'>Delete Users</h1>
                </div>
                <div className="card ">
                    <div className="card-body">
                        <form className='m-2 p-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">User ID</label>
                                        <input id="to-date" placeholder='User ID' className="form-control"  style={{ width: '100%', padding: '15px', borderRadius: '10px' }} />

                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger ms-1 " style={{ color:'white'}}>Delete User</button>
                        </form>
                    </div>
                </div>
            </div>

           
        </div>

        <div className="row" style={{overflowX:'hidden'}}>
          <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3" >
                    <h1 className='text-center mt-5'>Edit Users</h1>
                </div>
                <div className="card ">
                    <div className="card-body">
                        <form className='m-2 p-5'>
                            <div className="row">
                                {/* Select Industry */}
                                <div className="d-flex justify-content-between">
                                  <p>Southern Ispat And Energy Ltd </p>
                                  <button className="btn btn-light" onClick={handleEdit}>Edit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

           
        </div>
        </div>
      </div>
      <footer className="footer mt-5">
        <div className="container-fluid clearfix">
          
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            © <a href="" target="_blank">Ebhoom Solutions LLP</a> 2022
          </span>
        </div>
      </footer>
    </div>
  );
};

export default UsersLog;
