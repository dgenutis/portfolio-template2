/**
 * @copyright 2024 Dainius Genutis
 * @license Apache-2.0
 */


/**
 * Components
 */

import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: "/filmuApp.jpg",
    title: "Movie app",
    tags: ["API", "TMDB", "Development"],
    projectLink: "https://dgenutis-moviesapp.netlify.app/",
  },
  {
    imgSrc: "/wweather.jpg",
    title: "Weather app",
    tags: ["API", "REACT"],
    projectLink: "https://dgenutis.github.io/weatherapp-student/",
  },
  {
    imgSrc: "/skaiciuotuvas.jpg",
    title: "Calculator app",
    tags: ["CALCULATOR", "APP"],
    projectLink: "https://dgenutis.github.io/Skaiciuotuvas/",
  },
  {
    imgSrc: "/google-clone.jpg",
    title: "Google clone website",
    tags: ["Web-design", "clone"],
    projectLink: "https://dgenutis.github.io/Google-clone/",
  },
  {
    imgSrc: "/portfolio1.jpg",
    title: "Portfolio template",
    tags: ["Portfolio", "template"],
    projectLink: "https://dgenutis.github.io/Porfolio_1-sablonas-/#",
  },
  {
    imgSrc: "/nenix.jpg",
    title: "Website from Figma",
    tags: ["Web-design", "Development"],
    projectLink: "https://dgenutis-nenix.netlify.app/",
  },
];


const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
            
            My portfolio highlights

        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
               <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes='reveal-up'
              
               />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
