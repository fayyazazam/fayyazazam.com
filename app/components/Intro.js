import React from 'react';

const Intro = () => {
  const linkedIn = 'https://www.linkedin.com/in/7ayyaz/';
  const github = 'https://github.com/fayyazazam/fayyazazam.github.io';
  const email = 'mailto:FayyazAzam@gmail.com';
  const resume = 'https://drive.google.com/uc?authuser=0&id=0ByuQxy0LS6eBS2JZc3p4VG0wVU0&export=download';

  // Get the current time of the user to determine appropriate greeting
  function getTimeofDay() {
    const now = new Date();
    const hour = now.getHours();

    // 24-hour hour format
    if (hour > 3 && hour < 12) {
      return 'Morning';
    }
    if (hour >= 12 && hour < 17) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }

  return (
    <p className="pull-left">
      Good {getTimeofDay()}
      <br /><br />
      I'm Fayyaz, a software developer <br />
      currently residing in Vancouver, BC <br />
      and working at Rise People.
      <br /><br />
      Motivation and drive comes <br />
      from building || producing <br />
      unique products and experiences <br />
      that consumers will love to enjoy.
      <br /><br />
      <span className="links">
        <a href={resume} target="_blank">Resume</a>
        <a href={github} target="_blank">GitHub</a>
        <a href={linkedIn} target="_blank">LinkedIn</a>
        <a href={email}>Email</a>
      </span>
    </p>
  );
};

export default Intro;
