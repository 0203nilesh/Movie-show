// eslint-disable-next-line
import Carousel from "./elements/Carousel";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";
import Section from "./elements/Section";

function Home(props){
    return(
        <>
        <Navbar username={props.username}/>
        <Carousel/>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <Footer/>
        </>
    )
}

export default Home;