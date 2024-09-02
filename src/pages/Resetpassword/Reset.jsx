import React from 'react'
import logo from '../../assests/images/ebhoom.png'
import { Button } from 'react-bootstrap'

function Reset() {
  return (
    <div>
         <div className='login-page'>
      <div className='bg-light back rounded position-relative shadow w-100' style={{ maxWidth: '500px', padding: '20px' }}>
        <div className="d-flex align-items-center" style={{ height: "100%" }}>
          <img className='mt-2 ms-2' src={logo} alt="" style={{ height: '30px', width: 'auto', position: 'absolute', top: '10px', left: '10px' }} />
          
          <div className="row w-100" style={{ paddingTop: "60px" }}>
          <h6 style={{color:'#236a80'}}>RESET YOUR PASSWORD</h6>
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "auto" }}>
              <form className='w-100' style={{ maxWidth: '400px' }}>
               
               
                <div className='mb-4' style={{ borderRadius: '10px' }}>
                  <input
                    type='password'
                   
                    name="password"
                    id="password"
                    placeholder="Enter Your password"
                    autoComplete="current-password"
                    className='w-100 border border-solid shadow-lg p-3 input-box'
                  />
                </div>
                <div className='mb-4' style={{ borderRadius: '10px' }}>
                  <input
                    type='password'
                   
                    name="password"
                    id="password"
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                    className='w-100 border border-solid shadow-lg p-3 input-box'
                  />
                </div>
              
              
                <div className='mb-4'>
                  <Button style={{ borderRadius: '20px' , backgroundColor:'#236a80'}} className='btn  w-100'
                    type="submit"
                   >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Reset