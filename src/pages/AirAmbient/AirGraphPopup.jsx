import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Modal, Button } from 'react-bootstrap';
import './Airgraph.css'; // Import the CSS file

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const AirGraphPopup = ({ show, handleClose, parameter }) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            
            {
                label: 'Dataset 2',
                data: [1, 3, 2, 5, 4.5, 5.5],
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.4)'); // Start with blue
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Fade to white
                    return gradient;
                },
                borderColor: '#36A2EB',
                tension: 0.4, // Smooth curves
                pointRadius: 5,
                pointBackgroundColor: '#236a80',
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: true, // Enable tooltips
                callbacks: {
                    label: function (context) {
                        if (context.dataIndex === 2) { // Custom label for March
                            return '3500 Passengers';
                        }
                        return context.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove grid lines on x-axis
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                grid: {
                    display: false, // Remove grid lines on y-axis
                },
                ticks: {
                    beginAtZero: true,
                    max: 7,
                    stepSize: 1,
                    font: {
                        size: 12,
                    },
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{parameter} Graph</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="flight-schedule-chart">
                    <Line data={data} options={options} />
                </div>
            </Modal.Body>
           
        </Modal>
    );
};

export default AirGraphPopup