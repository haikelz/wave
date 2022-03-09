import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
    <section className='text-center'>
       <div className="jumbotron">
           <img src="images/megumi.jpg" className='rounded-circle img-thumbnail' width={"200px"} alt="Megumi-chan" />
           <h2 className="display-4 fs-1 mt-2">Katou Megumi</h2>
           <p className="lead fs-6">Front End Developer | Devops Engineer</p> 
           <Link to="about"><button className="btn btn-primary mt-2">Learn More</button></Link>
       </div>
    </section>
    )
}

export default Hero;
