import React from 'react'
import {Link, useNavigate} from 'react-router-dom';


const SettingsPage = () => {
  return (
    <>
        <h1 className='title'>Settings page!</h1>
        <div className='form'>
            <Link className='button1' to="/dashboard">Back</Link>
            <Link className='button1' to="/updatepass">Update your Password</Link>
            <p>Turn on dark theme -checkbox function</p>
        </div>
    </>
  )
}

export default SettingsPage
