// app/page.js
'use client';

import { useEffect, useRef } from 'react';
import AboutMe from './components/AboutMe';
import Contributions from './components/Contributions';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import { Plane, Navigation, Gauge, Radio, MapPin, Compass } from 'lucide-react';

// Aviation-themed floating elements component
const AviationFloatingElements = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const elements = elementsRef.current;
    elements.forEach((el, index) => {
      if (el) {
        const delay = index * 0.5;
        const duration = 15 + Math.random() * 10;
        el.style.animationDelay = `${delay}s`;
        el.style.animationDuration = `${duration}s`;
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating aviation elements */}
      <div 
        ref={el => elementsRef.current[0] = el}
        className="absolute top-20 left-10 text-primary/10 animate-float-slow"
      >
        <Plane className="h-8 w-8 rotate-45" />
      </div>
      <div 
        ref={el => elementsRef.current[1] = el}
        className="absolute top-40 right-20 text-primary/10 animate-float-slow"
      >
        <Navigation className="h-6 w-6" />
      </div>
      <div 
        ref={el => elementsRef.current[2] = el}
        className="absolute top-60 left-1/4 text-primary/10 animate-float-slow"
      >
        <Compass className="h-7 w-7" />
      </div>
      <div 
        ref={el => elementsRef.current[3] = el}
        className="absolute bottom-40 right-10 text-primary/10 animate-float-slow"
      >
        <Gauge className="h-6 w-6" />
      </div>
      <div 
        ref={el => elementsRef.current[4] = el}
        className="absolute bottom-60 left-16 text-primary/10 animate-float-slow"
      >
        <Radio className="h-5 w-5" />
      </div>
      <div 
        ref={el => elementsRef.current[5] = el}
        className="absolute top-1/3 right-1/4 text-primary/10 animate-float-slow"
      >
        <MapPin className="h-6 w-6" />
      </div>
    </div>
  );
};

// Aviation-themed section divider
const AviationDivider = ({ direction = "right" }) => (
  <div className="relative py-8 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
    <div className={`relative flex justify-center ${direction === "left" ? "animate-fly-left" : "animate-fly-right"}`}>
      <div className="bg-background px-4">
        <Plane className={`h-6 w-6 text-primary/60 ${direction === "left" ? "rotate-[-45deg]" : "rotate-45"}`} />
      </div>
    </div>
  </div>
);

// Modern gradient background component
const ModernBackground = () => (
  <div className="fixed inset-0 -z-10">
    {/* Primary gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
    
    {/* Animated gradient orbs */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
    
    {/* Aviation-themed grid pattern */}
    <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_currentColor_1px,_transparent_0)] bg-[length:24px_24px]"></div>
  </div>
);

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Modern animated background */}
      <ModernBackground />
      
      {/* Floating aviation elements */}
      <AviationFloatingElements />
      
      {/* Main content with improved spacing and modern styling */}
      <div className="relative z-10">
        {/* Hero section with enhanced styling */}
        <div className="relative">
          <Hero />
          {/* Aviation-themed bottom border for hero */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        {/* About section with aviation divider */}
        <AviationDivider direction="right" />
        <div className="relative backdrop-blur-sm">
          <AboutMe />
        </div>
        
        {/* Experience section */}
        <AviationDivider direction="left" />
        <div className="relative">
          <Experience />
        </div>
        
        {/* Work Experience section with enhanced styling */}
        <AviationDivider direction="right" />
        <div className="relative bg-gradient-to-b from-background to-muted/10 py-8">
          <WorkExperience />
        </div>
        
        {/* Contributions section */}
        <AviationDivider direction="left" />
        <div className="relative">
          <Contributions />
        </div>
        
        {/* Optional Gallery section */}
        {/* <AviationDivider direction="right" />
        <div className="relative">
          <Gallery />
        </div> */}
        
        {/* Aviation-themed footer accent */}
        <div className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
          <div className="relative flex justify-center">
            <div className="flex items-center gap-4 text-muted-foreground/50">
              <div className="h-px w-16 bg-current"></div>
              <Plane className="h-5 w-5 rotate-45" />
              <div className="h-px w-16 bg-current"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
