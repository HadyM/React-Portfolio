import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';
import ProfilePic from '../../assets/images/hady.jpeg';
import AnimatedLettering from '../AnimatedLettering/AnimatedLettering';
import './About.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="Image">
          <img
            className="Profile-Picture grow"
            id="profile-picture"
            src={ProfilePic}
            alt="profilepicture"
          />
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLettering
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Full-stack web developer looking for a role in
            an established IT company with the opportunity to work with the
            latest technologies and on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I am always trying
            to learn something new and I do this in two ways: I made it a habit
            to practice my DSA (Data Structure Algorithms) daily, and to
            continuously be working on a new project or improving upon an
            existing project.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father to be, an anime fanatic, gaming enthusiast, and
            tech-obsessed!!! Please check my projects section for examples of my
            work.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC8E42" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
