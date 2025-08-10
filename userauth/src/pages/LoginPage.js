import {use, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState('');

    const navigate = useNavigate ();

    const logIn = async () => {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/dashboard');
        } catch (e) {
            setError (e.message);
        }
    }

    return(
        <>
            <h1 className='title'>Log In!</h1>
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
                <button className='loginbutton' onClick={logIn}>Log In</button>
                <Link to="/create-account">Don't have an account? Create one here</Link>
            </div>
        </>
    );
}

export default LoginPage;