import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Section1Title from './components/Section1Title';
import Milestone1 from './components/Milestone1';
import Milestone2 from './components/Milestone2';
import Milestone3 from './components/Milestone3';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Conclusion from './components/Conclusion';
import Review from './components/Review';
import Footer from './components/Footer';
import StoryDetail from './components/StoryDetail';
import AIUsage from './components/AIUsage';
import OpeningActivity from './components/OpeningActivity';
//tessst
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const section1TitleRef = useRef<HTMLElement | null>(null);
  const openingRef = useRef<HTMLElement | null>(null);
  const milestone1Ref = useRef<HTMLElement | null>(null);
  const milestone2Ref = useRef<HTMLElement | null>(null);
  const milestone3Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const conclusionRef = useRef<HTMLElement | null>(null);
  const reviewRef = useRef<HTMLElement | null>(null);
  const aiUsageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Add a small delay to ensure refs are set
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Smooth scrolling setup
        gsap.set("html", { scrollBehavior: "smooth" });

        // Global parallax effects for all sections
        const sections = [section1TitleRef.current, openingRef.current, milestone1Ref.current, milestone2Ref.current, milestone3Ref.current, section2Ref.current, section3Ref.current, conclusionRef.current, reviewRef.current, aiUsageRef.current];
        
        sections.forEach((section, sectionIndex) => {
          if (section) {
            // Section entrance animation with parallax
            gsap.fromTo(section, 
              { 
                y: 100, 
                opacity: 0.8,
                // Avoid scaling the whole section to prevent visual height shrink
              },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
                  end: "bottom 10%",
                  // Keep the section state after it has expanded
                  toggleActions: "play none none none",
                  once: true
                }
              }
            );

            // Enhanced parallax scrolling effect for each section
            gsap.to(section, {
              y: -80 * (sectionIndex + 1),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
              }
            });

            // Background parallax layers
            const bgLayers = section.querySelectorAll('.parallax-bg, .parallax-element');
            bgLayers.forEach((layer, layerIndex) => {
              gsap.to(layer, {
                y: -150 * (layerIndex + 1),
                x: 30 * (layerIndex % 2 === 0 ? 1 : -1),
                rotation: 5 * (layerIndex + 1),
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2
                }
              });
            });
          }
        });

        // Global scroll progress indicator
        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true
          }
        });

        // Smooth section transitions - enhanced for full screen sections
        gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
          gsap.fromTo(section,
            { 
              opacity: 0,
              y: 150
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                // Do not reverse to avoid any collapse effect
                toggleActions: "play none none none",
                once: true
              }
            }
          );
        });

        // Enhanced floating elements parallax
        gsap.utils.toArray<HTMLElement>('.floating-element').forEach((element, index) => {
          gsap.to(element, {
            y: -50 * (index + 1),
            x: 20 * (index % 2 === 0 ? 1 : -1),
            rotation: 10 * (index + 1),
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          });
        });

      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const HomePage = () => {
    const location = useLocation();
    useEffect(() => {
      const state = location.state as { scrollY?: number } | null;
      if (state && typeof state.scrollY === 'number') {
        // Restore after a tick to ensure layout is ready
        setTimeout(() => {
          window.scrollTo({ top: state.scrollY, left: 0, behavior: 'instant' as ScrollBehavior });
        }, 0);
      }
    }, [location.state]);

    return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-[var(--vintage-brown-dark)] via-[var(--vintage-brown)] to-[var(--vintage-brown-dark)] text-[var(--vintage-cream)] overflow-x-hidden relative">
      {/* Header */}
      <Header />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[color:rgba(107,79,58,0.5)] z-40">
        <div className="scroll-progress h-full bg-gradient-to-r from-[var(--vintage-tan)] via-[var(--vintage-gold)] to-[var(--vintage-olive)] origin-left scale-x-0"></div>
      </div>

      {/* Global Parallax Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:rgba(161,92,56,0.08)] blur-3xl rounded-full parallax-bg"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[color:rgba(201,162,39,0.08)] blur-3xl rounded-full parallax-bg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[color:rgba(110,107,59,0.08)] blur-3xl rounded-full parallax-bg"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[color:rgba(94, 84, 63, 0.08)] blur-3xl rounded-full parallax-bg"></div>
      </div>
      <div className="pt-20">
        <Hero />
        <OpeningActivity sectionRef={openingRef} />
        <Section1Title sectionRef={section1TitleRef} />
        <Milestone1 sectionRef={milestone1Ref} />
        <Milestone2 sectionRef={milestone2Ref} />
        <Milestone3 sectionRef={milestone3Ref} />
        <Section2 sectionRef={section2Ref} />
        <Section3 sectionRef={section3Ref} />
        <Conclusion sectionRef={conclusionRef

        } />
        
        <Review sectionRef={reviewRef} />
        <AIUsage sectionRef={aiUsageRef} />
        
        <Footer />
        {/* <NextSectionButton /> */}
      </div>
    </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;