// eslint-disable-next-line
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Login from './elements/Login';
import Register from './elements/Register';

function Contact (props){
    return(
        <>
        <Navbar username={props.username} />
        {/* <Login /> */}
        {/* < Register/> */}
        <h1>Hello World</h1>
        <p>This is how we would react in this world</p>
        <Footer />
        </>
    )
}

export default Contact;