import useUser from '../hooks/useUser';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/Flora&Fable-Logo.svg";

const DashboardPage = () => {
    const {user} = useUser();

    return(
        <>
            <Logo className='logo' width="200px" height="200px"/>
            {user &&<h1 className='title'>Welcome to your dashboard, <br/> {user.email}!</h1>}
                <div className='paragraph'>
                <p>
                    You have successfully accessed your dashboard! You may access the settings button where you'll be able to change the theme of the website as well as update your password!
                </p>
                <Link className='button1' to="/settings">Settings</Link>
                <p>
                    What to add here? possibly a gallery and comment section.
                </p>
                
            </div>
        </>
    );
}

export default DashboardPage;