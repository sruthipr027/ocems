import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardSam from '../Dashboard/DashboardSam';
import HeaderSim from '../Header/HeaderSim';
import axios from 'axios';
import { API_URL } from '../../utils/apiConfig';
import './viewreport.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../Layout/Layout';

const ViewReport = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  // Fetch all reports and user type on component mount
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('userdatatoken');
        const userResponse = await axios.get(`${API_URL}/api/validuser`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });
        const userData = userResponse.data;

        if (userData.status === 401 || !userData.validUserOne) {
          navigate('/');
        } else {
          setUserType(userData.validUserOne.userType);

          // Fetch all reports for admin or individual user reports
          if (userData.validUserOne.userType === 'admin') {
            const response = await axios.get(`${API_URL}/api/get-all-report`);
            setReports(response.data.report);
            setFilteredReports(response.data.report);
          } else {
            const response = await axios.get(`${API_URL}/api/get-a-report/${userData.validUserOne.userName}`);
            setReports(response.data.reports || []);
            setFilteredReports(response.data.reports || []);
          }
        }
      } catch (error) {
        console.error('Error fetching reports or validating user:', error);
        navigate('/');
      }
    };

    fetchReports();
  }, [navigate]);

  // Search functionality
  const handleSearch = () => {
    const filtered = reports.filter((report) =>
      report.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReports(filtered);
  };

  // Delete report functionality
  const handleDelete = async (reportId) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      try {
        await axios.delete(`${API_URL}/api/delete-report/${reportId}`);
        setReports(reports.filter((report) => report._id !== reportId));
        setFilteredReports(filteredReports.filter((report) => report._id !== reportId));
        toast.success('Report deleted successfully');
      } catch (error) {
        console.error('Error deleting report:', error);
        toast.error('Error deleting report');
      }
    }
  };

  // Download report functionality
  const handleDownload = async (reportId, format) => {
    try {
      const response = await axios.get(`${API_URL}/api/report-download/${format}/${reportId}`, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `report.${format}`;
      link.click();
    } catch (error) {
      console.error(`Error downloading report as ${format}:`, error);
      toast.error(`Error downloading report as ${format}`);
    }
  };

  // Edit report functionality
  const handleEdit = (report) => {
    navigate(`/edit-report/${report._id}`, { state: { report } });
  };

  // View report functionality
  const handleView = (report) => {
    navigate(`/view-report/${report._id}`);
  };

  return (

    <div>
<div className="container-fluid">
    <div className="row" style={{ backgroundColor: 'white' }}>
      {/* Sidebar (hidden on mobile) */}
    
      {/* Main content */}
      <div className="col-lg-12 col-12 ">
        <div className="row">
          <div className="col-12">
          <Layout/>
          </div>
        </div>

    
      </div>
      

    </div>
  </div>

  <div className="container-fluid">
      <div className="row">
       
        <div className="col-lg-3 d-none d-lg-block">
         
        </div>
     
        <div className="col-lg-9 col-12">
          <div className="row">
            <div className="col-12">
              
            </div>
          </div>
          
      
 <div className="container-fluid water">
 <div className="row">
              <div className="col-12 col-md-12 grid-margin">
                <div className="col-12 d-flex justify-content-between align-items-center m-3">
                  <h1 className="text-center mt-3">Report</h1>
                </div>
                <div className="card last-trips-card mt-2" style={{ overflowX: 'scroll' }}>
                  <div className="card-header p-3 pt-4 d-flex align-items-center search-container m-3">
                    <input
                      type="text"
                      placeholder="Username"
                      className="p-2 search-input"
                      style={{ borderRadius: '10px' }}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-outline-primary ms-2 search-button" onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                  <div className="card-body">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>Sl No</th>
                          <th>From Date</th>
                          <th>To Date</th>
                          <th>Username</th>
                          <th className="custom-width">Company Name</th>
                          <th className="custom-width">Industry Type</th>
                          <th className="custom-width">Engineer Name</th>
                          <th>Verified/Declined</th>
                          <th>View</th>
                          {userType === 'admin' && <th>Edit</th>}
                          {userType === 'admin' && <th>Delete</th>}
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredReports && filteredReports.length > 0 ? (
                          filteredReports.map((report, index) => (
                            <tr key={index}>
                              <td className="customwidth">{index + 1}</td>
                              <td className="fw-bold custom-width">{report.fromDate}</td>
                              <td className="custom-width">{report.toDate}</td>
                              <td className="custom-width">{report.userName}</td>
                              <td className="custom-width">{report.companyName}</td>
                              <td className="custom-width">{report.industryType}</td>
                              <td className="custom-width">{report.engineerName}</td>
                              <td className={report.reportApproved ? 'text-success' : 'text-danger'}>
                                {report.reportApproved ? 'Verified' : 'Declined'}
                              </td>
                              <td className="customwidth">
                            
                               <td><Link to={`/view-report/${report.userName}`}><button type="button" className="btn btn-primary mb-2"> View </button></Link></td>

                              </td>
                              {userType === 'admin' && (
                                <td className="customwidth">
                                 
                             <td><Link to={`/edit-report/${report.userName}`}><button type="button" className="btn btn-warning mb-2"> Edit </button></Link></td>

                                </td>
                              )}
                              {userType === 'admin' && (
                                <td className="customwidth">
                                  <button className="btn btn-danger" onClick={() => handleDelete(report._id)}>
                                    Delete
                                  </button>
                                </td>
                              )}
                              <td className="customwidth">
                                <select
                                  className="btn btn-outline-success"
                                  onChange={(e) => handleDownload(report._id, e.target.value)}
                                >
                                  <option>Download</option>
                                  <option value="pdf">PDF</option>
                                  <option value="csv">CSV</option>
                                </select>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="12" className="text-center">
                              No reports available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> 

      <footer className="footer">
        <div className="container-fluid clearfix">
          <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
            Ebhoom Control and Monitor System
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            {" "}
            ©{" "}
            <a href="" target="_blank">
              Ebhoom Solutions LLP
            </a>{" "}
            2023
          </span>
        </div>
      </footer>
    </div>

        </div>
      </div>
    </div>
    </div>
    


    
     
     

   
  );
};

export default ViewReport;
