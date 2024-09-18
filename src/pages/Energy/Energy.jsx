import React, { useEffect, useState } from 'react';
import DashboardSam from '../Dashboard/DashboardSam';
import { Chart, registerables } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIotDataByUserName } from "../../redux/features/iotData/iotDataSlice";

import { fetchAverageDataByUserName, fetchDifferenceDataByUserName } from "../../redux/features/iotData/iotDataSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';

import Hedaer from '../Header/Hedaer';

Chart.register(...registerables);

function Energy() {
  const dispatch = useDispatch();
  const outletContext = useOutletContext() || {};

  const { userId } = useSelector((state) => state.selectedUser); 
  const { searchTerm = '', searchStatus = '', handleSearch = () => {}, isSearchTriggered = false } = outletContext
  const { userData, userType } = useSelector((state) => state.user);
  const { averageData, differenceData } = useSelector((state) => state.iotData);
  const [interval, setInterval] = useState("year");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState("");
  const [currentUserName, setCurrentUserName] = useState("KSPCB001");
  const [companyName, setCompanyName] = useState("");

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
    if (userId) {
      dispatch(fetchIotDataByUserName(userId));
    }
  }, [userId, dispatch]);
  useEffect(() => {
    // Use selected userId from Redux or default to the current one
    if (userId) {
      fetchData(userId);
    } else {
      fetchData(currentUserName);
    }
  }, [userId, currentUserName, dispatch]);
  useEffect(() => {
    if (searchTerm) {
      fetchData(searchTerm);
    } else {
      fetchData(currentUserName);
    }
  }, [searchTerm, currentUserName, dispatch]);
  useEffect(() => {
    const fetchData = async () => {
      if (!userData || userType !== 'user') return;

      try {
        await dispatch(fetchAverageDataByUserName({ userName: userData.validUserOne.userName, interval })).unwrap();
      } catch (error) {
        toast.error(`Average Data for ${interval} is not found`);
      }

      try {
        await dispatch(fetchDifferenceDataByUserName(userData.validUserOne.userName)).unwrap();
      } catch (error) {
        toast.error("Difference data is not found");
      }
    };

    fetchData();
  }, [userData, userType, interval, dispatch]);

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
  };

  useEffect(() => {
    const ctx = document.getElementById('quantityChart').getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: averageData.map(data => new Date(data.timestamp).toLocaleDateString()),
        datasets: [{
          label: 'FL - STP Incomer Energy Consumption, kWh',
          data: averageData.map(data => data.energy),
          backgroundColor: '#236a80',
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#e0e0e0',
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            enabled: true,
          }
        }
      }
    });

    return () => {
      newChart.destroy();
    };
  }, [averageData]);

  return (
    <div className="container-fluid">
     {/*  <DashboardSam /> */}
      <Hedaer/>
      <h2 className='text-center'>Energy Dashboard</h2>
      <ToastContainer />

      <div className="row" style={{ overflowX: 'hidden' }}>
        {/* Table Card */}
        <div className="col-12 col-md-12 grid-margin">
          <div className="cardgraph mb-3 mt-5" style={{ padding: '20px', backgroundColor: '#f9fafc', borderRadius: '10px' }}>
            <div className="card-body " style={{ borderRadius: '10px' }}>
              <h5 className="card-title">Parameter Data</h5>
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-bordered" style={{ background: '#f7fafc', margin: '0', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <thead style={{ background: 'linear-gradient(-90deg, #8ab9c8,#f2f7f9)' }}>
                    <tr>
                      <th>Parameter</th>
                      {averageData.map((data, index) => (
                        <th key={index}>{new Date(data.timestamp).toLocaleDateString()}</th>
                      ))}
                      <th>Initial Energy</th>
                      <th>Final Energy</th>
                      <th>Energy Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {differenceData.map((data, index) => (
                      <tr key={index}>
                        <td>FL-Inlet raw sewage, KLD</td>
                        {averageData.map((avg, avgIndex) => (
                          <td key={avgIndex}>{avg.energy}</td>
                        ))}
                        <td>{data.initialEnergy}</td>
                        <td>{data.finalEnergy}</td>
                        <td>{data.energyDifference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Graph Card */}
        <div className="col-12 col-md-12 grid-margin">
          <div className="cardgraph mb-3" style={{ padding: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Total FL Sewage Graph</h5>
              <canvas id="quantityChart" width="400" height="200"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Energy;
