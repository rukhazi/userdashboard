import {Link, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, EmailAuthProvider, reauthenticateWithCredential, updatePassword} from 'firebase/auth';
import {useState} from 'react';

const UpdatePasswordPage = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState("");

    const navigate = useNavigate ();

    const createAccount = async () =>{ //same function as create account, just to verify the new password and confirm password match
        try{
            if (newPassword !== confirmPassword) {
                return setError('Please make sure passwords match.')
            }
            await createUserWithEmailAndPassword(getAuth(), password);
        }   
        catch (e) {
            setError(e.message);
        }
    }

    const handlePasswordChange = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setMessage("No user is logged in.");
      return;
    }

    try {
      // Reauthenticate first
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, newPassword);
      setMessage("Password updated successfully!");
      navigate('/login')
    } catch (error) {
      setMessage(error.message);
    }
    };

  return (
    <>
        <h1 className='title'>Update your password</h1>
        {error && <p className="error">{error}</p>}
        <div>
            <form className='form' onSubmit={handlePasswordChange}>
                <input
                    type="password"
                    placeholder="Current Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                <br/>
                <input 
                    type="password" 
                    placeholder="Your new password" 
                    value={newPassword} 
                    onChange={e => setNewPassword(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder="Repeat new password" 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)}/>
                <button className='loginbutton' onClick={createAccount}>Confirm changes</button>
                <Link to="/settings">Back to settings</Link>
                <p>If you are redirected back to the Log In page, you have successfully changed your password.</p>
            </form>
        </div>
        
            
    </>
  )
}

export default UpdatePasswordPage
