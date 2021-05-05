import React from 'react';
import './AboutUs.css';
import Contact from './Contact';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';

const paraOne = 'A propos :';
const description = "Ceci est la description des membres de l'équipe Oovy ";
const cards = [
  {
    src: 'img/Edouard-LARROCHE.png',
    name: 'Edouard LARROCHE',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link_github: 'https://github.com/Edouard-LARROCHE',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/edouard-larroche-9099a6163/',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/marieanne-duvieu.png',
    name: 'Marie-Anne DUVIEU',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link_github: 'https://github.com/Edouard-LARROCHE',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/edouard-larroche-9099a6163/',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/baptiste-grias.png',
    name: 'Baptiste Grias',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link_github: 'https://github.com/Edouard-LARROCHE',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/edouard-larroche-9099a6163/',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/gregory-bouteville.jpg',
    name: 'Gregory BOUTEVILLE',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link_github: 'https://github.com/Edouard-LARROCHE',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/edouard-larroche-9099a6163/',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/Touyard-Kevin.jpg',
    name: 'Kevin TOUYARD',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link_github: 'https://github.com/Edouard-LARROCHE',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/edouard-larroche-9099a6163/',
    logo_linkedin: 'img/linkedin.png',
  },
];

const AboutUs = () => {
  return (
    <div>
      <Headerallpages />
      <p className="trait_aboutus"></p>
      <h2 className="text1_aboutus">{paraOne}</h2>
      <div className="contains">
        <p className="description">{description}</p>
      </div>

      <div className="card-contact">
        {cards.map((cards, index) => (
          <Contact
            key={index}
            src={cards.src}
            name={cards.name}
            text={cards.text}
            link_github={cards.link_github}
            logo_git={cards.logo_git}
            link_linkedin={cards.link_linkedin}
            logo_linkedin={cards.logo_linkedin}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
