import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signOut} from 'firebase/auth';
import useUser from './hooks/useUser';

const NavBar = ()=>{
    const {user} = useUser();
    const navigate = useNavigate();

    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/user-authentication">Home</Link></li>
                </ul>
            </div>
            <div>
                {user
                    ?<button className="login-out"
                        onClick={() =>{
                            signOut(getAuth());
                            navigate('/user-authentication');
                    }}>Log Out</button>

                    :<button className="login-out"
                        onClick={() =>{
                            navigate('/login');
                    }}>Log In</button>
                }
            </div>
        </nav>
    )
}

export default NavBar;