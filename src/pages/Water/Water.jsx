import React, { useState } from 'react';
import Maindashboard from '../Maindashboard/Maindashboard';
import './water.css';
import waterDrop from '../../assests/images/water.png';
import DashboardSam from '../Dashboard/DashboardSam';
import WaterGraphPopup from './WaterGraphPopup';

function Water() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCalibrationPopup, setShowCalibrationPopup] = useState(false);

  const waterParameters = [
    { parameter: "Ph", value: 'pH', name: 'ph' },
    { parameter: "TDS", value: 'mg/l', name: 'TDS' },
    { parameter: "Turbidity", value: 'NTU', name: 'turbidity' },
    { parameter: "Temperature", value: '℃', name: 'temperature' },
    { parameter: "BOD", value: 'mg/l', name: 'BOD' },
    { parameter: "COD", value: 'mg/l', name: 'COD' },
    { parameter: "TSS", value: 'mg/l', name: 'TSS' },
    { parameter: "ORP", value: 'mV', name: 'ORP' },
    { parameter: "Nitrate", value: 'mg/l', name: 'nitrate' },
    { parameter: "Ammonical Nitrogen", value: 'mg/l', name: 'ammonicalNitrogen' },
    { parameter: "DO", value: 'mg/l', name: 'DO' },
    { parameter: "Chloride", value: 'mmol/l', name: 'chloride' },
    { parameter: "Colour", value: 'color', name: 'color' },
  ];

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

  return (
    <div className="container-fluidwater">
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <DashboardSam />
        </div>
        <div className="col-lg-9 col-12">
          <div>
            <Maindashboard/>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <Maindashboard />
            </div>
          </div> */}
          <div className='d-flex justify-content-between prevnext mt-5 ps-5 pe-5'>
            <div>
              <button className='btn btn-outline-dark'>
                <i className="fa-solid fa-arrow-left me-1"></i>Prev
              </button>
            </div>
            <h1 className='text-center'>Water Dashboard</h1>
            <div>
              <button className='btn btn-outline-dark'>
                Next <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div><h5 className='d-flex justify-content-end me-5 mt-3'><b>Analyser Health :</b> <span className='text-success'>Good</span></h5>
          </div>

          <div className="row " style={{ overflowX: 'hidden' }}>
            <div className="col-12 col-md-12 grid-margin">
              <div className="col-12 d-flex justify-content-between align-items-center m-3"></div>
              <div className="col-lg-9 col-12 airambient-section w-100">
                <div className="content-wrapper shadow p-5">
                  <h3 className="text-center">Southern</h3>
                  
                  <div className="row ">
                    {waterParameters.map((item, index) => (
                      <div className="col-md-4 col-12 grid-margin" key={index}>
                        <div className="card m-3" onClick={() => handleCardClick(item)}>
                          <div className="card-body">
                            <h3 className="mb-3">{item.parameter}</h3>
                            <h6>
                              <strong className="strong-value">N/A</strong>
                              {item.value}
                            </h6>
                            <div className="image-container">
                              <img src={waterDrop} alt="Water Drop" className="img-fluid custom-img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Graph Modal with Tabs */}
                  {showPopup && selectedCard && (
                    <WaterGraphPopup
                      show={showPopup}
                      handleClose={handleClosePopup}
                      parameter={selectedCard.parameter}  // Pass the parameter name to the modal
                    />
                  )}

                  {/* Calibration Popup */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Water;
