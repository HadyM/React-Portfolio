import React, { useState, useEffect } from 'react';
import { Loader } from 'react-loaders';
import AnimatedLettering from '../AnimatedLettering/AnimatedLettering';
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eigth,
  nineth,
  tenth,
  eleventh,
} from '../../assets/images';
import './Projects.scss';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [images, setImages] = useState([
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eigth,
    nineth,
    tenth,
    eleventh,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1 className="title">
            <AnimatedLettering
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="projectOne">
          <h2 className="titleTwo">ChefStack.dev Recipe App</h2>
          <h2 className="titleTwo">Features:</h2>
          <h3 className="titleThree">
            <ul>
              <li>
                A recipe app designed using React, JavaScript, SaSS, BootStrap,
                Material UI, Express.js, Cors, Dotenv, PostgreSQL, & Adaptable.
              </li>
              <li>
                Developed full CRUD web app, connected to PostgreSQL backend
                hosted on Adaptable, which allows users search, view, create,
                update, and delete recipes.
              </li>
              <li>
                Implemented test driven development to manage component
                hierarchy structure.
              </li>
              <li>
                Implemented different style library packages such as Google
                Fonts, Font Awesome Icons, and Material UI.
              </li>
              <li>
                Developed a search bar to filter through the recipes and returns
                recipes based on user input.
              </li>
              <li>
                Developed a categories component that allows the users to see
                recipes based on all the different cooking styles.
              </li>
            </ul>
          </h3>
          <div className="slideshow">
            <img
              className="slideshow-images"
              src={images[currentIndex]}
              alt="Slideshow"
            />
          </div>
          <div className="titleFour">
            <h1>
              <a
                href={'https://recipe-app-frontend.netlify.app/'}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </h1>
            <h1>
              <a
                href={'https://github.com/HadyM/accelerator-fe'}
                target="_blank"
                rel="noreferrer"
              >
                Frontend Code
              </a>
            </h1>
            <h1>
              <a
                href={'https://github.com/HadyM/accelerator-be'}
                target="_blank"
                rel="noreferrer"
              >
                Backend Code
              </a>
            </h1>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
