// import Section from "../../../backend/models/section";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";
import Play from "./elements/Play";
import Section from "./elements/Section";

function Playvideo(props){
    return(
        <>
        <Navbar username={props.username} id={props.id} />
        <Play/>
        <Section heading="Similar" />
        <Footer/>
        </>
    )
}

export default Playvideo;