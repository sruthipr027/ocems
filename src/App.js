import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './redux/features/user/userSlice';
import './App.css';
import Log from './pages/Login/Log';
import Dashboard from './pages/Dashboard/Dashboard';
import Reset from './pages/Resetpassword/Reset';
import ResetEmail from './pages/Resetpassword/ResetEmail';
import Maindashboard from './pages/Maindashboard/Maindashboard';
import Quality from './pages/Quality/Quality';
import Quantity from './pages/Quantity/Quantity';
import Airambient from './pages/AirAmbient/Airambient';
import Water from './pages/Water/Water';
import Noise from './pages/Noise/Noise';
import Energy from './pages/Energy/Energy';
import Download from './pages/Download/Download';
import Report from './pages/Report/Report';
import Calibrationpage from './pages/CalibartionPage/Calibrationpage';
import ViewReport from './pages/Report/ViewReport';
import ViewCalibration from './pages/CalibartionPage/ViewCalibration';
import Tank from './pages/Tank/Tank';
import DownloadData from './pages/Download/DownloadData';
import ManageUser from './pages/ManageUsers/ManageUser';
import AddParameter from './pages/ParameterExceed/AddParameter';
import ViewParameter from './pages/ParameterExceed/ViewParameter';
import Notification from './pages/Notification/Notification';
import Subscibe from './pages/Subscribe/Subscibe';
import LiveEmmission from './pages/LiveEmmission/LiveEmmission';
import UsersLog from './pages/ManageUsers/Userlog';
import Account from './pages/Account/Account';
import SupportAnalyser from './pages/SupportAnalyser/SupportAnalyser';
import Edit from './pages/ManageUsers/Edit';
import { CalibrationProvider } from './pages/CalibartionPage/CalibrationContext';
import EditCalibration from './pages/CalibartionPage/EditCalibration';
import ReportCheck from './pages/Report/ReportCheck';
import EditReport from './pages/Report/EditReport';
import CalibrationExceeded from './pages/CalibartionPage/CalibrationExceeded';
import { UserProvider } from './pages/ManageUsers/UserContext';
import Viewnotification from './pages/Notification/Viewnotification';
import { NotificationProvider } from './pages/Notification/NotificationContext';
import ViewReportUser from './pages/Report/ViewReportUser';
import EditParameter from './pages/ParameterExceed/EditParameter';
import PublicLayout from './pages/PublicLayout/PublicLayout';
import PrivateLayout from './pages/PrivateLayout/PrivateLayout';
import Hedaer from './pages/Header/Hedaer';
import Layout from './pages/Layout/Layout';
import Transcation from './pages/Transactions/Transcation';
import LoginNew from './pages/Login/LoginNew';
import Mainsam from './pages/Maindashboard/Mainsam';
import Chat from './pages/Chat/Chat';
import LIveLayout from './pages/LiveMapping/LIveLayout';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, loading, userType } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .then((responseData) => {
        if (responseData.status === 401 || !responseData.validUserOne) {
          console.log("User not Valid");
          navigate('/');
        } else {
          console.log("User verified");
        }
      })
      .catch((error) => {
        console.error("Error Validating User:", error);
        navigate('/');
      });
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
    
      <CalibrationProvider>
        <UserProvider>
          <NotificationProvider>
         
            <Routes>
             
                <Route path="/login" element={<Log />} />
                <Route path="/reset-password" element={<Reset />} />
                <Route path="/reset" element={<ResetEmail />} />
                <Route path='/download-data' element={<Download/>}></Route>
                <Route path="/" element={<LoginNew />} />


              {/* Admin Routes */}
             
              {userType === "admin" && (
                           

                <Route path='/' element={<PrivateLayout />}>
                  

                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/layout" element={<Layout />} />

                  <Route path="/dashboard-dash" element={<Maindashboard />} />
                  <Route path="/quality" element={<Quality />} />
                  <Route path="/quantity" element={<Quantity />} />
                  <Route path="/ambient" element={<Airambient />} />
                  <Route path="/water" element={<Water />} />
                  <Route path="/noise" element={<Noise />} />
                  <Route path="/energy" element={<Energy />} />
                  <Route path="/download-data" element={<Download />} />
                  <Route path="/add-calibration" element={<Calibrationpage />} />
                  <Route path="/view-calibration" element={<ViewCalibration />} />
                  <Route path="/edit-calibration/:userName" element={<EditCalibration />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/view-report" element={<ViewReport />} />
                  <Route path="/tank" element={<Tank />} />
                  <Route path="/download" element={<DownloadData />} />
                  <Route path="/add-parameter" element={<AddParameter />} />
                  <Route path="/view-parameter" element={<ViewParameter />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route path="/subscribe" element={<Subscibe />} />
                  <Route path="/live-emmision" element={<LiveEmmission />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/support-analyser" element={<SupportAnalyser />} />
                  <Route path="/check-validate" element={<ReportCheck />} />
                  <Route path="/edit-report/:userName" element={<EditReport />} />
                  <Route path="view-report/:userName" element={<ViewReportUser />} />
                  <Route path="/calibration-exceeded" element={<CalibrationExceeded />} />
                  <Route path="/manage-user" element={<UsersLog />} />
                  <Route path="/edit/:userId" element={<Edit />} />
                  <Route path="/view-notification" element={<Viewnotification />} />
                  <Route path="/edit-parameter/:userName" element={<EditParameter />} />
                  <Route path="/sample" element={<Mainsam />} />
                  <Route path="/live-station" element={<LIveLayout />} />
                  <Route path="/chat" element={<Chat />} />


                </Route>
              )}

              {/* User Routes */}
              {userType === "user" && (
                <Route path="/" element={<PrivateLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/water" element={<Water />} />
                  <Route path="/ambient" element={<Airambient />} />
                  <Route path="/noise" element={<Noise />} />
                  <Route path="/account" element={<Account />} />
                 
                  <Route path="/transactions" element={<Transcation />} /> {/* Assuming transaction-related routes */}
                  <Route path="/view-report" element={<ViewReport />} />
                  <Route path="/edit-report/:userName" element={<EditReport />} />
                  <Route path="/download-IoT-Data" element={<DownloadData />} />
                  <Route path="/quantity" element={<Quantity />} />
                  <Route path="/energy" element={<Energy />} />
                  <Route path="/support-analyser" element={<SupportAnalyser />} />
                  <Route path="/view-report/:userName" element={<ViewReportUser />} />

                  <Route path="/live-station" element={<LIveLayout />} />


                </Route>
              )}
            </Routes>
          </NotificationProvider>
        </UserProvider>
      </CalibrationProvider>
    </div>
  );
}

export default App;
