import useUser from '../hooks/useUser';
import {Link, useNavigate} from 'react-router-dom';

const DashboardPage = () => {
    const {user} = useUser();

    return(
        <>
            {user &&<h1 className='title'>Welcome to your dashboard, {user.email}!</h1>}
            <div className='paragraph'>
                <p>
                    You have successfully accessed your dashboard! You may access the settings button where you'll be able to change the theme of the website as well as update your password!
                </p>
                <Link className='button1' to="/settings">Settings</Link>
                <p>
                    Nunc gravida lacinia tempus. Quisque in urna nec lacus vestibulum aliquam eu eget tortor. Phasellus tincidunt nisl cursus, consequat urna vitae, rhoncus urna. Fusce dignissim est ut arcu convallis blandit. Fusce dictum nunc in mattis vulputate. Aenean sodales accumsan quam. Donec sed augue dapibus, efficitur turpis non, sagittis dolor. Maecenas sollicitudin fermentum mauris, sit amet accumsan dui luctus quis. Vestibulum sit amet malesuada sapien, id pharetra magna. Suspendisse potenti. Cras ipsum arcu, tempor et ipsum in, malesuada rutrum velit. Donec convallis, lorem vitae accumsan viverra, dui mauris luctus nisl, ac condimentum nunc diam ut enim. In eleifend viverra lectus, lacinia sollicitudin eros efficitur ut.

                    Curabitur mollis massa nec dolor sagittis congue. Ut lobortis volutpat metus at pharetra. Fusce placerat luctus velit a congue. Vivamus interdum ultricies sapien in congue. Morbi augue nisl, ornare id nibh ac, condimentum vehicula neque. Morbi tincidunt, nulla sit amet convallis eleifend, mauris arcu dignissim dolor, quis tristique lacus arcu eu nisl. Sed viverra tincidunt suscipit. Nullam ut ipsum urna. Nam eu ullamcorper nibh, quis pellentesque ligula. Etiam sed leo at leo lobortis rutrum. Mauris consectetur, mauris vel placerat ultricies, ante libero luctus lacus, sit amet dapibus ipsum diam ut enim.

                    Cras non ultrices erat, id placerat sapien. Proin pharetra lacinia quam nec sodales. Phasellus hendrerit, quam vel fermentum consequat, felis metus eleifend ipsum, sit amet venenatis eros tortor eget enim. Nulla felis erat, pellentesque eget lacus ut, porttitor commodo nisi. Phasellus ultricies eget ex sit amet iaculis. Etiam eget auctor nisi. Mauris posuere mauris id interdum molestie. Curabitur semper tincidunt eleifend.

                    Nunc eu lobortis eros, vitae pharetra quam. Nullam nec quam mollis, ullamcorper neque id, tempor mauris. Donec sed elit eget lacus pulvinar vestibulum a vel tortor. Integer fermentum est ac libero rutrum tincidunt. Phasellus suscipit neque quis diam fermentum, quis commodo tellus malesuada. Etiam sit amet pretium erat, eu volutpat est. Cras leo dolor, mattis sit amet metus nec, vehicula mattis velit. Duis a malesuada urna, id iaculis nulla. Sed magna nibh, varius et sapien scelerisque, lacinia iaculis justo. Nullam rhoncus ex pretium nunc aliquet, quis commodo velit finibus.
                </p>
                
            </div>
        </>
    );
}

export default DashboardPage;