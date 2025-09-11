import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Quote, Calendar, MapPin, Star} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { storyImages} from '../data/storyData';

gsap.registerPlugin(ScrollTrigger);

const StoryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const story = storyImages.find(img => img.id === id);

  useEffect(() => {
    if (!story) {
      navigate('/');
      return;
    }

    setIsLoading(false);
  }, [story, navigate]);

  useEffect(() => {
    if (isLoading || !story) return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set('.story-element', { opacity: 0, y: 50 });
      gsap.set('.story-image', { opacity: 0, scale: 0.8 });
      gsap.set('.story-quote', { opacity: 0, x: -100 });
      gsap.set('.story-details', { opacity: 0, x: 100 });

      // Main timeline
      const tl = gsap.timeline();

      // Hero image entrance
      tl.to('.story-image', {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      })
      .to('.story-element', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.6")
      .to('.story-quote', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.4")
      .to('.story-details', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.6");

      // Floating elements animation
      gsap.utils.toArray<HTMLElement>('.floating-particle').forEach((element, index) => {
        gsap.to(element, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-15, 15),
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      });

      // Quote highlight animation
      gsap.to('.quote-highlight', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading, story]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--vintage-brown-dark)]">
        <div className="text-[var(--vintage-cream)] text-2xl">Loading...</div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--vintage-brown-dark)]">
        <div className="text-[var(--vintage-cream)] text-2xl">Story not found</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[var(--vintage-brown-dark)] text-[var(--vintage-cream)] overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:rgba(161,92,56,0.1)] blur-3xl rounded-full floating-particle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:rgba(201,162,39,0.1)] blur-3xl rounded-full floating-particle" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[color:rgba(166,124,82,0.1)] blur-2xl rounded-full floating-particle" />
      </div>

      {/* Navigation */}
      <div className="relative z-10 p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[color:rgba(239,230,213,0.8)] hover:text-[var(--vintage-cream)] transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-lg font-medium">Quay lại</span>
        </button>
      </div>

      <div className="container mx-auto px-6 pb-6">
        <div className="min-h-[calc(100vh-96px)] grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Main Image */}
          <div className="story-image h-full">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[color:rgba(161,92,56,0.2)] to-[color:rgba(201,162,39,0.2)] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-[color:rgba(27,20,15,0.9)] backdrop-blur-lg rounded-2xl p-4 border border-[color:rgba(161,92,56,0.3)] group-hover:border-[color:rgba(201,162,39,0.5)] transition-all duration-500 shadow-2xl">
                <img 
                  src={story.src} 
                  alt={story.alt}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(27,20,15,0.6)] via-transparent to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[var(--vintage-cream)] text-sm font-medium bg-[color:rgba(27,20,15,0.5)] backdrop-blur-sm rounded-lg px-3 py-2">
                    {story.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 h-full overflow-y-auto overflow-x-hidden pr-1">
            {/* Title */}
            <div className="story-element">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--vintage-tan)] via-[var(--vintage-gold)] to-[var(--vintage-tan)] bg-clip-text text-transparent mb-4">
                {story.title}
              </h1>
            </div>

            {/* Context */}
            <div className="story-element">
              <div className="bg-[color:rgba(27,20,15,0.8)] backdrop-blur-lg rounded-2xl p-6 border border-[color:rgba(94,84,63,0.5)]">
                <h3 className="text-xl font-semibold text-[var(--vintage-gold)] mb-4">Bối cảnh lịch sử</h3>
                <p className="text-[color:rgba(239,230,213,0.85)] leading-relaxed text-lg">
                  {story.context}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="story-quote">
              <div className="bg-gradient-to-r from-[color:rgba(59,47,47,0.4)] to-[color:rgba(166,124,82,0.4)] backdrop-blur-lg rounded-2xl p-6 border border-[color:rgba(161,92,56,0.3)] relative overflow-hidden">
                <div className="absolute top-4 right-4 quote-highlight">
                  <Quote className="w-8 h-8 text-[color:rgba(201,162,39,0.6)]" />
                </div>
                <blockquote className="text-xl italic text-[color:rgba(239,230,213,0.95)] mb-4 leading-relaxed">
                  "{story.quote.text}"
                </blockquote>
                <div className="text-right">
                  <cite className="text-[var(--vintage-gold)] font-semibold">{story.quote.author}</cite>
                  {story.quote.position && (
                    <p className="text-[color:rgba(239,230,213,0.7)] text-sm">{story.quote.position}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="story-details">
              <div className="bg-[color:rgba(27,20,15,0.8)] backdrop-blur-lg rounded-2xl p-6 border border-[color:rgba(94,84,63,0.5)]">
                <h3 className="text-xl font-semibold text-[var(--vintage-gold)] mb-4">Thông tin chi tiết</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-[color:rgba(161,92,56,0.95)]" />
                    <span className="text-[color:rgba(239,230,213,0.85)]">
                      <strong>Thời kỳ:</strong> {story.details.period}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[color:rgba(161,92,56,0.95)]" />
                    <span className="text-[color:rgba(239,230,213,0.85)]">
                      <strong>Địa điểm:</strong> {story.details.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-[color:rgba(161,92,56,0.95)]" />
                    <span className="text-[color:rgba(239,230,213,0.85)]">
                      <strong>Ý nghĩa:</strong> {story.details.significance}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
