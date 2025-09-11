import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Section1TitleProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Section1Title = ({ sectionRef }: Section1TitleProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main section title entrance with slide from left and reveal effect
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      })
      .fromTo(".section1-text", 
        { 
          opacity: 0, 
          x: -150, 
          y: 30,
          scale: 0.8,
          rotation: -5
        }, 
        { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          scale: 1,
          rotation: 0,
          duration: 1.2, 
          stagger: 0.3, 
          ease: "power2.out" 
        }
      )
      .fromTo(".section1-text + p", 
        { 
          opacity: 0, 
          x: -100, 
          y: 20 
        }, 
        { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out" 
        }, "-=0.6")
      .fromTo(".section1-text + p + div", 
        { 
          opacity: 0, 
          scaleX: 0, 
          x: -50 
        }, 
        { 
          opacity: 1, 
          scaleX: 1, 
          x: 0, 
          duration: 0.6, 
          ease: "power2.out" 
        }, "-=0.4");

    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="relative z-10 text-center py-20 px-6 min-h-screen flex items-center justify-center">
      <div ref={containerRef}>
        <h2 className="section1-text text-4xl md:text-5xl font-bold text-red-400 mb-6 section-title leading-tight">
          I. Đặc điểm của giai cấp công nhân Việt Nam
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Hành trình phát triển từ quá khứ đến hiện tại
        </p>
        {/* Decorative line */}
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto"></div>
      </div>
    </section>
  );
};

export default Section1Title;
