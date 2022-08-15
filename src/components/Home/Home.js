import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'react-loaders';
import Logo from '../Home/Logo/Logo';
import AnimatedLettering from '../AnimatedLettering/AnimatedLettering';
import LogoIcon from '../../assets/images/logo-s.png';
import './Home.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'd', 'y', ' ', 'M', 'o', 'h', 'a', 'm', 'e', 'd'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>y,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoIcon} alt="developer" />
            <AnimatedLettering
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLettering
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
          </h1>
          <h2>
            Full Stack Developer / Frontend Developer / Backend Developer /
            Freelancer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
