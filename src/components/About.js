import aboutone from "../images/aboutone.jpg";
import abouttwo from "../images/abouttwo.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text-container">
                <h1 className="markazi-display-title about-title">Little Lemon</h1>
                <h2 className="markazi-subtitle black-font">Chicago</h2>
                <p className="karla-p-text black-font">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            </div>
            <div className="about-images-container">
                <img src={aboutone} className="about-image btm-img" alt="little lemon brothers"/>
                <img src={abouttwo} className="about-image top-img" alt="little lemon brothers"/>
            </div>
        </div>
    )
}

export default About;