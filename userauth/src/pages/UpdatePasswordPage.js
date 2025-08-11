// import { EmailAuthProvider } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import {useRef} from 'react';
import {updatePassword} from 'firebase/auth';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const UpdatePasswordPage = () => {
    const { currentUser, setAlert, setModal, modal } = useAuth();
    const passwordRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    const [error, setError] = useState('');

    const createAccount = async () =>{ //same function as create account, just to verify the new password and confirm password match
        try{
            if (password !== confirmPassword) {
                return setError('Please make sure passwords match.')
            }
            await updatePassword(currentUser, passwordRef.current.value);
                setModal({ ...modal, isOpen: false });
                setAlert({
                        isAlert: true,
                        severity: 'success',
                        message: 'Your password has been updated',
                        timeout: 8000,
                        location: 'main',

            });
        }
           
        catch (e) {
            setError(e.message);
        }
    }

    // const savePassword = async ()=>{
    //     const creds = EmailAuthProvider.credential(email, password);
    //     await auth().currentUser.reauthenticateWithCredential(creds).then(async()=>{
    //     await auth().currentUser.updatePassword(newPassword);
    //     console.log('password successfully updated');
    // }).catch(error =>{
    //     console.log('Error during reauthentication', error);
    // });
    // }

  return (
    <>
        <h1 className='title'>Update your password</h1>
        {error && <p className="error">{error}</p>}
        <div className='form'>
            <input
                type="email"
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
            <input
                type="password"
                placeholder="Old password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}/>
            <br/>
            <br/>
            <input 
                type="password" 
                placeholder="Your new password" 
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)}/>
            <input 
                type="password" 
                placeholder="Repeat new password" 
                value={newPassword} 
                onChange={e => setConfirmPassword(e.target.value)}/>
            <button className='loginbutton' onClick={createAccount}>Confirm changes</button>
            <Link to="/settings">Back to settings</Link>
        </div>
    </>
  )
}

export default UpdatePasswordPage
