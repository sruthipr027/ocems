import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      
      <Routes>
       
        <Route path='/' element={<Log/>}></Route>
        <Route path='/users-log' element={<Dashboard/>}></Route>
        <Route path='/reset-password' element={<Reset/>}></Route>
        <Route path='/reset' element={<ResetEmail/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard-dash' element={<Maindashboard/>}></Route>
        <Route path='/quality' element={<Quality/>}></Route>
        <Route path='/quantity' element={<Quantity/>}></Route>
        <Route path='/ambient' element={<Airambient/>}></Route>
        <Route path='/water' element={<Water/>}></Route>
        <Route path='/noise' element={<Noise/>}></Route>
        <Route path='/energy' element={<Energy/>}></Route>
        <Route path='/download-data' element={<Download/>}></Route>
        <Route path='/add-calibartion' element={<Calibrationpage/>}></Route>
        <Route path='/view-calibartion' element={<ViewCalibration/>}></Route>
        <Route path='/report' element={<Report/>}></Route>
        <Route path='/view-report' element={<ViewReport/>}></Route>
        <Route path='/tank' element={<Tank/>}></Route>
        <Route path='/download' element={<DownloadData/>}></Route>
        <Route path='/add-parameter' element={<AddParameter/>}></Route>
        <Route path='/view-parameter' element={<ViewParameter/>}></Route>
        <Route path='/notification' element={<Notification/>}></Route>
        <Route path='/subscribe' element={<Subscibe/>}></Route>
        <Route path='/live-emmision' element={<LiveEmmission/>}></Route>
        <Route path='/manage-user' element={<UsersLog/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>

        <Route path='/account' element={<Account/>}></Route>
        <Route path='/support-analyser' element={<SupportAnalyser/>}></Route>








        









      

      

      </Routes>
     
    </div>
  );
}

export default App;
