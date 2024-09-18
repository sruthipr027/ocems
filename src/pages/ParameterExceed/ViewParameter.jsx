import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'; // Import Button
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
import { fetchAllCalibrationExceedValues, deleteCalibrationExceedValue } from '../../redux/features/calibrationExceedValues/calibrationExceedValueSlice';
import FooterM from '../FooterMain/FooterM';
import DashboardSam from '../Dashboard/DashboardSam';
import Hedaer from '../Header/Hedaer';
import HeaderSim from '../Header/HeaderSim';

function ViewParameter() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Redux state to get calibration exceed values
    const { allCalibrationExceedValues, loading, error } = useSelector(state => state.calibrationExceedValue);
    const [localCalibrationValues, setLocalCalibrationValues] = useState([]);

    useEffect(() => {
        dispatch(fetchAllCalibrationExceedValues());
    }, [dispatch]);

    useEffect(() => {
        if (allCalibrationExceedValues) {
            setLocalCalibrationValues(allCalibrationExceedValues);
        }
    }, [allCalibrationExceedValues]);

    const handleParameter = () => {
        navigate('/add-parameter');
    };

    const handleDelete = async (calibrationExceedvalueId) => {
        const shouldDelete = window.confirm('Are you sure you want to delete this Parameter Threshold exceedance Value?');
        if (shouldDelete) {
            try {
                await dispatch(deleteCalibrationExceedValue(calibrationExceedvalueId)).unwrap();
                toast.success('Deleted Successfully');
                dispatch(fetchAllCalibrationExceedValues()); // Refresh the list
            } catch (error) {
                toast.error('Error deleting Parameter Threshold exceedance value');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

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
                            <HeaderSim />
                        </div>
                    </div>
                    <div>
                        {/* Add Parameter Button */}
                        <div className="align-items-center justify-content-center d-flex mt-5 mb-4">
                            <Button onClick={handleParameter} className="p-3 btn parameterbtn align-items-center justify-content-center d-flex" style={{ border: 'none' }}>
                                Add Parameter Threshold exceedance Values
                            </Button>
                        </div>

                        {/* Table for Previous Parameter Threshold Exceedance Values */}
                        <div className="row mb-5">
                            <div className="col-12 col-md-12 grid-margin">
                                <div className="col-12 d-flex justify-content-between align-items-center m-3">
                                    <h1 className="text-center mt-3" style={{ justifyContent: 'center' }}>Previous Parameter Threshold exceedance Values</h1>
                                </div>
                                <div className="card last-trips-card mt-2" style={{ overflowX: 'scroll' }}>
                                    <div className="card-header p-3 pt-4 d-flex align-items-center search-container m-3">
                                        <input type="name" placeholder="username" className="p-2 search-input" style={{ borderRadius: '10px' }} />
                                        <button className="btn btn-outline-primary ms-2 search-button">search</button>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-borderless">
                                            <thead className="m-5">
                                                <tr >
                                                    <th className='custom-width'>Date</th>
                                                    <th className='custom-width'>User ID of Admin</th>
                                                    <th className='custom-width'> Admin Name</th>
                                                    <th className='custom-width'>User ID</th>
                                                    <th className='custom-width'>Product ID</th>
                                                    <th className='custom-width'>Industry Type</th>
                                                    <th>pH - Below</th>
                                                    <th>pH - Above</th>
                                                    <th>TDS</th>
                                                    <th>Turbidity</th>
                                                    <th>Temperature</th>
                                                    <th>BOD</th>
                                                    <th>COD</th>
                                                    <th>TSS</th>
                                                    <th>ORP</th>
                                                    <th>Nitrate</th>
                                                    <th>Ammonical Nitrogen</th>
                                                    <th>DO</th>
                                                    <th>Chloride</th>
                                                    <th>PM</th>
                                                    <th>SO2</th>
                                                    <th>NO2</th>
                                                    <th>Mercury</th>
                                                    <th>PM 10</th>
                                                    <th>PM 2.5</th>
                                                    <th>NOH</th>
                                                    <th>NH3</th>
                                                    <th>Wind Speed</th>
                                                    <th>Wind Direction</th>
                                                    <th>Air Temperature</th>
                                                    <th>Humidity</th>
                                                    <th>Solar Radiation</th>
                                                    <th>DB</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody className="m-5">
                                                {localCalibrationValues && localCalibrationValues.map((value, index) => (
                                                    <tr key={index}>
                                                        <td>{value.date}</td>
                                                        <td>{value.adminUserName}</td>
                                                        <td>{value.adminName}</td>
                                                        <td>{value.userName}</td>
                                                        <td>{value.product_id}</td>
                                                        <td>{value.industryType}</td>
                                                        <td>{value.phBelow}</td>
                                                        <td>{value.phAbove}</td>
                                                        <td>{value.TDS}</td>
                                                        <td>{value.turbidity}</td>
                                                        <td>{value.temperature}</td>
                                                        <td>{value.BOD}</td>
                                                        <td>{value.COD}</td>
                                                        <td>{value.TSS}</td>
                                                        <td>{value.ORP}</td>
                                                        <td>{value.nitrate}</td>
                                                        <td>{value.ammonicalNitrogen}</td>
                                                        <td>{value.DO}</td>
                                                        <td>{value.chloride}</td>
                                                        <td>{value.PM}</td>
                                                        <td>{value.SO2}</td>
                                                        <td>{value.NO2}</td>
                                                        <td>{value.Mercury}</td>
                                                        <td>{value.PM10}</td>
                                                        <td>{value.PM25}</td>
                                                        <td>{value.NOH}</td>
                                                        <td>{value.NH3}</td>
                                                        <td>{value.WindSpeed}</td>
                                                        <td>{value.WindDir}</td>
                                                        <td>{value.AirTemperature}</td>
                                                        <td>{value.Humidity}</td>
                                                        <td>{value.solarRadiation}</td>
                                                        <td>{value.DB}</td>
                                                        <td><Link to={`/edit-parameter/${value.userName}`}><button type="button" className="btn btn-primary mb-2"> Edit </button></Link></td>
                                                        <td><button type="button" className="btn btn-danger mb-2" onClick={() => handleDelete(value._id)}> Delete </button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewParameter;
