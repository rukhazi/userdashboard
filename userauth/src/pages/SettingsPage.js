import {Link} from 'react-router-dom';
import DarkMode from '../component/DarkMode';


const SettingsPage = () => {
  return (
    <>
        <h1 className='title'>Settings page!</h1>
        <div className='form'>
            <Link className='button1' to="/dashboard"> &larr; Back</Link>
            <Link className='button1' to="/updatepass">Update your Password</Link>
            <DarkMode/>
        </div>
    </>
  )
}

export default SettingsPage
