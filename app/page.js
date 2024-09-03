// app/page.js

import AboutMe from './components/AboutMe';
import Contributions from './components/Contributions';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe/>
      <Experience/> 
      <WorkExperience/>
      <Contributions/>
      {/* <Gallery/> */}
      {/* You can add more sections like About, Projects, etc. */}
    </main>
  );
}
