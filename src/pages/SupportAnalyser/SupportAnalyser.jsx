import React from 'react'
import { Button } from 'react-bootstrap';  // Import Button
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Toastify styles
import { useNavigate } from 'react-router-dom';
import FooterM from '../FooterMain/FooterM';
import Maindashboard from '../Maindashboard/Maindashboard';
import DashboardSam from '../Dashboard/DashboardSam';
import './support.css'

function SupportAnalyser() {
    const navigate = useNavigate();

  
    const handlehome=()=>{
        navigate('/')
    }
  return (
    <div className="container-fluid">
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
          <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-12 col-md-12 grid-margin">
            <div className="row page-title-header">
        <div className="col-12">
        <div className="page-header d-flex justify-content-between align-items-center mt-3">
  <h4 className="page-title">Support Dashboard</h4>
  <div className="quick-link-wrapper">
    <ul className="quick-links d-flex" style={{textDecoration:'none'}}>
      <li><a href="#" style={{textDecoration:'none'}}>Settings</a></li>
      <li><a href="#" style={{textDecoration:'none'}}>Option 1</a></li>
      <li><a href="#" style={{textDecoration:'none'}}>Option 2</a></li>
    </ul>
  </div>
</div>

        </div>
      </div>
     
      <div className="card m-5">
  <div className="card-body">
    <form className=''>
      <div className="row rowback p-3">
        <table className="m-2 table-borderless rowback p-3" style={{ background: 'linear-gradient(-90deg, #8ab9c8,#f2f7f9)' }}>
          <thead className='m-5 p-4'>
            <tr className='p-3'>
              <th style={{ padding: '10px' }}>Sl No</th>
              <th className="custom-width" style={{ padding: '10px' }}>Company Name</th>
              <th className="custom-width" style={{ padding: '10px' }}>Contact Person</th>
              <th className="custom-width" style={{ padding: '10px' }}>Contact No.</th>
            </tr>
          </thead>
          <tbody className='m-5'>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>1</td>
              <td style={{ padding: '10px' }}>M/S Environnement S. A India Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Sardesai</td>
              <td style={{ padding: '10px' }}>9930503658</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>2</td>
              <td style={{ padding: '10px' }}>M/S Chemtrols Industries Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Pankaj Rai</td>
              <td style={{ padding: '10px' }}>9967770255</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>3</td>
              <td style={{ padding: '10px' }}>M/S Forbes Marshall CODEL Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Amarsingh Sandhu</td>
              <td style={{ padding: '10px' }}>9810110794</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>4</td>
              <td style={{ padding: '10px' }}>M/S Horiba India Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Samir Buwa</td>
              <td style={{ padding: '10px' }}>9561089732</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>5</td>
              <td style={{ padding: '10px' }}>M/S Thermo Fisher Scientific India Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Gautam Sakuja</td>
              <td style={{ padding: '10px' }}>9650314545</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>6</td>
              <td style={{ padding: '10px' }}>M/S ABB India Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Tejbir Singh</td>
              <td style={{ padding: '10px' }}>9810260345</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>7</td>
              <td style={{ padding: '10px' }}>M/S Swan Environmental Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Murali</td>
              <td style={{ padding: '10px' }}>9642225234</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>8</td>
              <td style={{ padding: '10px' }}>M/S Yokogawa India Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Abhishek Singh</td>
              <td style={{ padding: '10px' }}>9971457778</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>9</td>
              <td style={{ padding: '10px' }}>M/S Durag India Instrumentation Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Binny Phabian</td>
              <td style={{ padding: '10px' }}>9886395650</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>10</td>
              <td style={{ padding: '10px' }}>M/S Shreetech Instrumentation</td>
              <td style={{ padding: '10px' }}>Sh. Sharad Lohia</td>
              <td style={{ padding: '10px' }}>9821350876</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>11</td>
              <td style={{ padding: '10px' }}>M/S Adage Automation Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. M. K. Roy</td>
              <td style={{ padding: '10px' }}>9910474732</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>12</td>
              <td style={{ padding: '10px' }}>M/S ICE (Asia) Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. Sanjeev Matushte</td>
              <td style={{ padding: '10px' }}>9820231013</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>13</td>
              <td style={{ padding: '10px' }}>M/S Nevco Engineers Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sha Adish Kapoor</td>
              <td style={{ padding: '10px' }}>9873246469</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>14</td>
              <td style={{ padding: '10px' }}>M/S Analyser Instrument Co. Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}>Sh. K. B. Jain</td>
              <td style={{ padding: '10px' }}>9413652925</td>
            </tr>
            <tr>
              <td className="fw-bold" style={{ padding: '10px' }}>15</td>
              <td style={{ padding: '10px' }}>M/S Prima Hi-Tech Equipment Pvt. Ltd.</td>
              <td style={{ padding: '10px' }}></td>
              <td style={{ padding: '10px' }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
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

export default SupportAnalyser