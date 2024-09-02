import React from 'react'
import DashboardSam from '../Dashboard/DashboardSam'
import Maindashboard from '../Maindashboard/Maindashboard'

function Account() {
  return (
<div className="container-fluid">
    <div className="row" style={{backgroundColor:'white'}}>
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
                <div className="col-12 d-flex justify-content-center align-items-center m-2 text-center" >
                    
                    <h1 className='text-center mt-5' style={{justifyContent:'center'}}> Account</h1>
                    
                </div>
                <div className="card m-5">
                    <div className="card-body">
                        <form className='m-5'>
                            <div className="row">
                               <div>
                                <p>User ID : Admin developer</p>
                                <p>Company Name : Ebhoom Solutions</p>
                                <p>Model Name :NIL</p>
                                <p>Name : Fazil</p>
                                <p>Email ID : fazilmm860@gmail.com</p>
                                <p>Password : ************ <button className='btn text-light' style={{backgroundColor:'#236a80'}}>Change Password</button></p>
                                <p>Subcription Date : 2024-06-05</p>
                                <p>Industry Type : Admin</p>


                               </div>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
       
      </div>
        </div>
    </div>
</div>  )
}

export default Account