import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import phapthuoc from '/phapthuoc.jpg';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Word-by-word typewriter effect
const typeWords = (
  element: HTMLElement | null,
  fullText: string,
  options?: { wordDelay?: number; initialDelay?: number }
) => {
  if (!element) return;
  const wordDelay = options?.wordDelay ?? 0.15; // seconds between words
  const initialDelay = options?.initialDelay ?? 0;
  const words = fullText.split(/\s+/);
  // Ensure we start empty
  element.textContent = '';
  const tl = gsap.timeline({ delay: initialDelay });
  words.forEach((_, index) => {
    tl.call(() => {
      element.textContent = words.slice(0, index + 1).join(' ');
    }, undefined, index * wordDelay);
  });
  return tl;
};

const Hero = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const chapterRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.hero-bg-particle', { scale: 0, opacity: 0 });
      gsap.set('.hero-main-text', { y: 150, opacity: 0, scale: 0.8 });
      gsap.set('.hero-subtitle-text', { y: 80, opacity: 0, scale: 0.9 });
      gsap.set('.hero-chapter', { y: -80, opacity: 0, scale: 0.8 });
      gsap.set('.hero-description', { y: 60, opacity: 0 });
      gsap.set('.hero-indicator', { scale: 0, opacity: 0 });

      const masterTL = gsap.timeline();

      // Background entrance
      masterTL.to('.hero-bg-main', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      })
      .to('.hero-bg-particle', {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=1.2");

      // Chapter number entrance with word-by-word typing
      masterTL.to('.hero-chapter', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        onComplete: () => {
          typeWords(chapterRef.current, 'CHƯƠNG 02', { wordDelay: 0.18, initialDelay: 0.05 });
        }
      }, "-=0.8");

      // Main title entrance with word-by-word typing
      masterTL.to('.hero-main-text', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "back.out(1.7)",
        onComplete: () => {
          const target = titleRef.current?.querySelector('span') as HTMLElement | null;
          typeWords(target, 'SỨ MỆNH LỊCH SỬ', { wordDelay: 0.22, initialDelay: 0 });
        }
      }, "-=0.4")
      .to('.hero-subtitle-text', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        onComplete: () => {
          typeWords(subtitleRef.current, 'GIAI CẤP CÔNG NHÂN VIỆT NAM', { wordDelay: 0.16, initialDelay: 0.05 });
        }
      }, "-=0.8")
      .to('.hero-description', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.6")
      .to('.hero-indicator', {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Enhanced text breathing animation
      gsap.to('.hero-main-text', {
        scale: 1.02,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtitle subtle floating animation
      gsap.to('.hero-subtitle-text', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Chapter number pulsing effect
      gsap.to('.hero-chapter', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Description text shimmer effect
      gsap.to('.hero-description', {
        opacity: 0.8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Text glow effect
      gsap.to('.hero-title', {
        textShadow: "0 0 30px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 69, 0, 0.3)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtitle text shadow animation
      gsap.to('.hero-subtitle', {
        textShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Chapter number glow effect
      gsap.to('.hero-chapter', {
        textShadow: "0 0 15px rgba(255, 193, 7, 0.6), 0 0 30px rgba(255, 193, 7, 0.3)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Particle floating effect
      gsap.utils.toArray<HTMLElement>('.hero-bg-particle').forEach((el, i) => {
        gsap.to(el, {
          y: gsap.utils.random(-40, 40),
          x: gsap.utils.random(-40, 40),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5
        });
      });

      // Mouse parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth) * 100;
        const yPos = (clientY / window.innerHeight) * 100;

        gsap.to('.hero-parallax-1', {
          x: (xPos - 50) * 0.5,
          y: (yPos - 50) * 0.3,
          duration: 1,
          ease: "power2.out"
        });

        gsap.to('.hero-parallax-2', {
          x: (xPos - 50) * -0.3,
          y: (yPos - 50) * -0.2,
          duration: 1.2,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, rootRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--vintage-brown-dark)]">
      {/* Background Image with heavy blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${phapthuoc})`,
          filter: 'blur(8px)'
        }}
      />
      
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 hero-bg-main opacity-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:rgba(59,47,47,0.6)] via-[color:rgba(166,124,82,0.5)] to-[color:rgba(201,162,39,0.6)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:rgba(161,92,56,0.7)] blur-3xl rounded-full hero-parallax-1" />
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-[color:rgba(166,124,82,0.6)] blur-3xl rounded-full hero-parallax-2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[color:rgba(201,162,39,0.5)] blur-2xl rounded-full hero-parallax-1" />
        
        {/* Background particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[color:rgba(201,162,39,0.9)] rounded-full hero-bg-particle" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-[color:rgba(161,92,56,0.9)] rounded-full hero-bg-particle" />
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-[color:rgba(166,124,82,0.9)] rounded-full hero-bg-particle" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-[color:rgba(201,162,39,0.9)] rounded-full hero-bg-particle" />
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-[color:rgba(161,92,56,0.9)] rounded-full hero-bg-particle" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-[color:rgba(166,124,82,0.9)] rounded-full hero-bg-particle" />
      </div>

      <div ref={rootRef} className="container mx-auto px-6 text-center z-10 relative">

        <div className="space-y-6">
          {/* Chapter Number */}
          <div className="hero-chapter">
            <div 
              ref={chapterRef}
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] text-[color:rgba(201,162,39,0.95)] font-mono drop-shadow-2xl"
            >
              CHƯƠNG 02
            </div>
          </div>

          {/* Main Title */}
          <div className="hero-main-text space-y-4">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none hero-title"
            >
              <span className="bg-gradient-to-r from-[var(--vintage-tan)] via-[var(--vintage-gold)] to-[var(--vintage-tan)] bg-clip-text text-transparent gradient-text-vietnam drop-shadow-2xl">
                SỨ MỆNH LỊCH SỬ
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle-text">
            <h2 
              ref={subtitleRef}
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide text-[var(--vintage-cream)] drop-shadow-2xl hero-subtitle"
            >
              GIAI CẤP CÔNG NHÂN VIỆT NAM
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto pt-8 hero-description">
            <p className="text-lg md:text-xl lg:text-2xl text-[color:rgba(239,230,213,0.95)] leading-relaxed font-light tracking-wide drop-shadow-2xl">
              Khám phá vai trò và sứ mệnh lịch sử của giai cấp công nhân Việt Nam trong sự nghiệp xây dựng chủ nghĩa xã hội
              <span className="text-[color:rgba(201,162,39,0.95)] font-medium"> — tiên phong, đoàn kết, phát triển</span>
            </p>
          </div>

          {/* Enhanced animated indicator */}
          <div className="pt-12 hero-indicator">
            <div className="w-1 h-16 bg-gradient-to-b from-[color:rgba(201,162,39,0.9)] via-[color:rgba(201,162,39,0.8)] to-transparent mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};

export default Hero;