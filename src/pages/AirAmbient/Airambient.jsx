import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchIotDataByUserName, fetchLatestIotData } from "../../redux/features/iotData/iotDataSlice";
import DashboardSam from '../Dashboard/DashboardSam';
import AirGraphPopup from './AirGraphPopup';
import CalibrationPopup from "../Calibration/CalibrationPopup";
import CalibrationExceeded from "../CalibartionPage/CalibrationExceeded";
import waterDrop from '../../assests/images/windimage.png'; 
import { Oval } from 'react-loader-spinner';
import Hedaer from "../Header/Hedaer";
import { useOutletContext } from 'react-router-dom';
import HeaderSim from "../Header/HeaderSim";

function Airambient() {
  const dispatch = useDispatch();

  // Get selected userId from Redux and searchTerm from outlet context
  const { userId } = useSelector((state) => state.selectedUser);
  const { searchTerm } = useOutletContext() || {};
  const selectedUserId = useSelector((state) => state.selectedUser.userId);

  const { userData } = useSelector((state) => state.user);
  const { latestData, error } = useSelector((state) => state.iotData);

  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCalibrationPopup, setShowCalibrationPopup] = useState(false);
  const [currentUserName, setCurrentUserName] = useState("KSPCB001");
  const [companyName, setCompanyName] = useState("");

  // Fetch data by userName (similar to Water component)
  useEffect(() => {
    if (userId) {
      dispatch(fetchIotDataByUserName(userId));
    }
  }, [userId, dispatch]);
  const fetchData = async (userName) => {
    setLoading(true);
    try {
      const result = await dispatch(fetchIotDataByUserName(userName)).unwrap();
      setSearchResult(result);
      setCompanyName(result?.companyName || "Unknown Company");
      setSearchError("");
    } catch (err) {
      setSearchResult(null);
      setCompanyName("Unknown Company");
      setSearchError(err.message || 'No Result found for this userID');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // Use selected userId from Redux or default to the current one
    if (userId) {
      fetchData(userId);
    } else {
      fetchData(currentUserName);
    }
  }, [userId, currentUserName, dispatch]);
  // Fetch data when component loads, based on searchTerm or selected userId
  useEffect(() => {
    const userName = searchTerm || userId || currentUserName;
    fetchData(userName);
  }, [searchTerm, userId, currentUserName, dispatch]);

  // Handle card clicks to display graphs
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  const handleOpenCalibrationPopup = () => {
    setShowCalibrationPopup(true);
  };

  const handleCloseCalibrationPopup = () => {
    setShowCalibrationPopup(false);
  };

  // Pagination logic to navigate through users
  const handleNextUser = () => {
    const userIdNumber = parseInt(currentUserName.replace(/[^\d]/g, ''), 10);
    if (!isNaN(userIdNumber)) {
      const newUserId = `KSPCB${String(userIdNumber + 1).padStart(3, '0')}`;
      setCurrentUserName(newUserId);
    }
  };

  const handlePrevUser = () => {
    const userIdNumber = parseInt(currentUserName.replace(/[^\d]/g, ''), 10);
    if (!isNaN(userIdNumber) && userIdNumber > 1) {
      const newUserId = `KSPCB${String(userIdNumber - 1).padStart(3, '0')}`;
      setCurrentUserName(newUserId);
    }
  };

  const airParameters = [
    { parameter: "Flow", value: 'm/s', name: "Flow" },
    { parameter: "CO", value: 'µg/Nm³', name: "CO" },
    { parameter: "NOX", value: 'µg/Nm³', name: "NOX" },
    { parameter: "Pressure", value: 'Pa', name: "Pressure" },
    { parameter: "PM", value: 'µg/m³', name: "PM" },
    { parameter: "SO2", value: 'µg/m³', name: "SO2" },
    { parameter: "NO2", value: 'µg/m³', name: "NO2" },
    { parameter: "Mercury", value: 'µg/m³', name: "Mercury" },
    { parameter: "PM 10", value: 'µg/m³', name: "PM10" },
    { parameter: "PM 2.5", value: 'µg/m³', name: "PM25" },
    { parameter: "NOH", value: 'µg/m³', name: "NOH" },
    { parameter: "NH3", value: 'µg/m³', name: "NH3" },
    { parameter: "Windspeed", value: 'm/s', name: "Windspeed" },
    { parameter: "Wind Dir", value: 'deg', name: "WindDir" },
    { parameter: "Temperature", value: '℃', name: "AirTemperature" },
    { parameter: "Humidity", value: '%', name: "Humidity" },
    { parameter: "Solar Radiation", value: 'w/m²', name: "solarRadiation" }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
         
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <div className="col-12">
            
            </div>
          </div>
          <div>
          <h3>Selected User ID: {selectedUserId}</h3>
    </div>
          <div className='d-flex justify-content-between prevnext mt-5 ps-5 pe-5'>
            <div>
              <button 
                className='btn btn-outline-dark' 
                onClick={handlePrevUser} 
                disabled={loading || currentUserName === "KSPCB001"}
              >
                <i className="fa-solid fa-arrow-left me-1"></i>Prev
              </button>
            </div>
            <h1 className='text-center'>Air Dashboard</h1>
            <div>
              <button 
                className='btn btn-outline-dark' 
                onClick={handleNextUser} 
                disabled={loading}
              >
                Next <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
            <div className="quick-links ml-auto">
              {userData?.validUserOne && userData.validUserOne.userType === 'user' && (
                <h5>Data Interval: <span className="span-class">{userData.validUserOne.dataInteval}</span></h5>
              )}
            </div>
            
            <div className="quick-links ml-auto">
              {latestData && (
                <>
                  <h5>Analyser Health: </h5>
                  {searchResult?.validationStatus ? (
                    <h5 style={{ color: "green" }}>Good</h5>
                  ) : (
                    <h5 style={{ color: "red" }}>Problem</h5>
                  )}
                </>
              )}
            </div>
            
            {userData?.validUserOne && userData.validUserOne.userType === 'user' && (
              <div className="quick-links ml-auto">
                <button 
                  type="button" 
                  onClick={handleOpenCalibrationPopup} 
                  className="btn btn-primary mb-2 mt-2"
                  disabled={loading}
                > 
                  Calibration 
                </button>
              </div>
            )}
          </div>

          {searchError && (
            <div className="card mb-4">
              <div className="card-body">
                <h1>{error.message || 'An error occurred'}</h1>
              </div>
            </div>
          )}
             <div className="p-2"></div>
             <div className="p-2"></div>

          <div className="row" >
            <div className="col-12 col-md-12 grid-margin">
              <div className="col-lg-9 col-12 airambient-section w-100">
                <div className="content-wrapper shadow p-5">
                  <h3 className="text-center">{companyName}</h3>
                  
                  {loading ? (
                    <div className="spinner-container d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                      <Oval
                        height={60}
                        width={60}
                        color="#236A80"
                        ariaLabel="Fetching details"
                        secondaryColor="#e0e0e0"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    </div>
                  ) : (
                    <div className="row">
                      {!loading && airParameters.map((item, index) => (
                        <div className="col-md-4 col-12 grid-margin" key={index}>
                          <div className="card m-3" onClick={() => handleCardClick({ parameter: item.parameter })} >
                            <div className="card-body">
                              <h3 className="mb-3">{item.parameter}</h3>
                              <h6>
                                <strong className="strong-value">
                                  {searchResult ? searchResult[item.name] || 'N/A' : 'No Result found for this userID'}
                                </strong> 
                                {item.value}
                              </h6>
                              <div className="image-container">
                                <img src={waterDrop} alt="Icon" className="img-fluid custom-img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {showPopup && selectedCard && (
            <AirGraphPopup
              isOpen={showPopup}
              onRequestClose={handleClosePopup}
              parameter={selectedCard.parameter}
              userName={currentUserName}
            />
          )}

          {showCalibrationPopup && (
            <CalibrationPopup
              userName={userData?.validUserOne?.userName}
              onClose={handleCloseCalibrationPopup}
            />
          )}

          <CalibrationExceeded />
        </div>
      </div>
    </div>
  );
}

export default Airambient;
