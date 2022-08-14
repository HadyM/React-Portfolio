import { useState, useEffect } from 'react';
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
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLettering
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm very ambitious Full-stack web developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies and on challenging and diverse projects.
        </p>
        <p align="LEFT">
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father to be, a anime fanatic, gaming enthusiast, and
          tech-obsessed!!!
        </p>
      </div>
    </div>
  );
};

export default About;
