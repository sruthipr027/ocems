import React , { useState }  from 'react'
import Maindashboard from '../Maindashboard/Maindashboard'
import waterDrop from '../../assests/images/windimage.png'
import DashboardSam from '../Dashboard/DashboardSam';
import AirGraphPopup from './AirGraphPopup';
import CalibrationPopup from '../Calibration/CalibrationPopup';




function  Airambient()  {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCalibrationPopup, setShowCalibrationPopup] = useState(false);
 
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
    <div className="container-fluid">
    <div className="row">
        {/* Sidebar (hidden on mobile) */}
        <div className="col-lg-3 d-none d-lg-block ">
            <DashboardSam/>
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
                    
                    
                </div>
                <div className="col-lg-9 col-12 airambient-section w-100">
        <div className="content-wrapper shadow p-5">
          <h3 className="text-center">Southern</h3>
          <div className="row">
            {airParameters.map((item, index) => (
              <div className="col-md-4 col-12 grid-margin" key={index}>
                <div className="card m-3" onClick={() => handleCardClick(item)}>
                  <div className="card-body">
                    <h3 className="mb-3">{item.parameter}</h3>
                    <h6>
                      <strong className="strong-value">N/A</strong>
                      {item.value}
                    </h6>
                    <div className="image-container">
                            <img src={waterDrop} alt="Boeing" className="img-fluid custom-img" />
                        </div>
                  </div>
                </div>
              </div>
            ))}
           
          </div>
          {showPopup && selectedCard && (
                    <AirGraphPopup
                      show={showPopup}
                      handleClose={handleClosePopup}
                      parameter={selectedCard.parameter}  // Pass the parameter name to the modal
                    />
                  )}

                  {/* Calibration Popup */}
                  {showCalibrationPopup && (
                    <CalibrationPopup
                      userName='name'
                      onClose={handleCloseCalibrationPopup}
                    />
                  )}
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

export default  Airambient