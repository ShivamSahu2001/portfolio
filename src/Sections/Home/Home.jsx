import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section id="Home" className="home_section">
      <p className="home_greet">Hi, my name is</p>

      <h1 className="home_heading_1">Shivam Sahu</h1>

      <h1 className="home_heading_2">A Frontend Developer</h1>

      <p className="home_desc">
      A dynamic professional with  Web Development, Project management, Java & Python Programming Languages. 
      Developed Sudoku Puzzle, Online Flipkart Store, LinkedIn Feedpage & many more using HTML, CSS & Javascript.
       Also built 'Simple Reddit Bot' using Python. Along with these skills, I've achieved 7th rank in Global 
       Olympiad Federation at state level. 
       I'm highly motivated & determined person & demonstrating high level of work ethic to achieve my 
       predicted goals. Now wants to obtain a challenging position in software Engineering.
      </p>

      <a href="#Work">
        <button className="home_btn">Check out my work</button>
      </a>
    </section>
  );
};

export default Home;
