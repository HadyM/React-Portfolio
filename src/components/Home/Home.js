import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-s.png';
import './Home.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hey, <br /> I'm
          <img src={Logo} alt="developer" />
          ady
          <br />
          web developer.
        </h1>
        <h2>
          Full Stack Developer / Frontend Developer / Backend Developer /
          Freelancer
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
