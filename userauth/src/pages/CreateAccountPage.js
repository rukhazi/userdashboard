import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const CreateAccountPage = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    const [error, setError] = useState('');

    const navigate = useNavigate ();

    const createAccount = async () =>{
        try{
            if (password !== confirmPassword) {
                return setError('Password" and "Confirm Password" do not match.')
            }
            await createUserWithEmailAndPassword(getAuth(), email, password); //makes new account into firebase
            navigate('/login')
        }   
        catch (e) {
            setError(e.message);
        }
    }
    
        return(
            <>
                <h1 className='title'>Create Account</h1>
                {error && <p className="error">{error}</p>}
                <div className='form'>
                    <input
                        type="email"
                        placeholder="Email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}/>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}/>
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)}/>
                    <button className='loginbutton' onClick={createAccount}>Create Account</button>
                    <Link to="/login">Already have an account? Log in here</Link>
                </div>
            </>
        );
}

export default CreateAccountPage;