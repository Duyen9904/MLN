import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Cog, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import khaithacthanGd1 from '../assets/khaithacthan-gd1.jpg';
import nhamaydetnamdinh from '../assets/nhamaydetnamdinh.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Milestone1Props {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Milestone1 = ({ sectionRef }: Milestone1Props) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [expandedItem, setExpandedItem] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const timelineData = {
    id: 1,
    title: "Thời kỳ thuộc địa Pháp",
    shortDesc: "Giai cấp công nhân xuất hiện trước tư sản dân tộc",
    fullDesc: "Giai cấp công nhân Việt Nam xuất hiện trước giai cấp tư sản dân tộc và trực tiếp đứng lên chống lại thực dân Pháp cùng phong kiến, trong bối cảnh một nước thuộc địa, nửa phong kiến. Mặc dù số lượng ban đầu còn ít ỏi, nhưng giai cấp công nhân Việt Nam đã sớm được tôi luyện trong các phong trào cách mạng.",
    color: "red",
    icon: <BookOpen className="w-6 h-6" />
  };

  const images = [
    {
      id: "khaithacthan-gd1",
      src: khaithacthanGd1,
      alt: "Khai thác than giai đoạn 1 - Thời kỳ thuộc địa Pháp",
      caption: "Khai thác than thời kỳ thuộc địa Pháp",
      imageUrl: "https://baoquangninh.vn/khai-thac-than-thoi-ky-phap-thuoc-3349315.html"
    },
    {
      id: "nhamaydetnamdinh",
      src: nhamaydetnamdinh,
      alt: "Nhà máy dệt Nam Định - Thời kỳ thuộc địa Pháp",
      caption: "Nhà máy dệt Nam Định thời kỳ thuộc địa",
      imageUrl: "https://baotintuc.vn/ho-so/det-nam-dinh-xua-va-nay-20160711163825755.htm"
    }
  ];

  useEffect(() => {
    // Auto-slide functionality
    const autoSlideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [images.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main milestone entrance animation
      gsap.fromTo(sectionRef.current, 
        { 
          opacity: 0, 
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Milestone highlight animation
      const milestoneHighlight = sectionRef.current?.querySelector('.milestone-highlight');
      if (milestoneHighlight) {
        gsap.fromTo(milestoneHighlight,
          { 
            opacity: 0,
            y: 50,
            x: -50
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Content card animation
      const cardHover = sectionRef.current?.querySelector('.card-hover');
      if (cardHover) {
        gsap.fromTo(cardHover,
          { 
            opacity: 0, 
            y: 60,
            x: 30
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Floating elements animation
      gsap.utils.toArray<HTMLElement>(sectionRef.current?.querySelectorAll('.floating-element') || []).forEach((element, elementIndex) => {
        gsap.fromTo(element,
          { 
            opacity: 0, 
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.5 + (elementIndex * 0.1),
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  const toggleExpanded = () => {
    setExpandedItem(!expandedItem);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (imageId: string) => {
    navigate(`/story/${imageId}`);
  };
  
  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center relative bg-[var(--vintage-brown-dark)]">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-element">
        <div className="absolute inset-0 bg-gradient-to-b from-[color:rgba(59,47,47,0.2)] via-[color:rgba(166,124,82,0.2)] to-[color:rgba(110,107,59,0.2)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:rgba(161,92,56,0.1)] blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:rgba(201,162,39,0.1)] blur-3xl rounded-full" />
      </div>

      {/* Timeline Line - Vertical through center */}
      <div className="timeline-line absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[var(--vintage-tan)] via-[var(--vintage-gold)] to-[var(--vintage-olive)] origin-top transform -translate-x-1/2"></div>

      {/* Content Container */}
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Historical Image with Icon Overlay */}
          <div className="lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[color:rgba(161,92,56,0.2)] to-[color:rgba(201,162,39,0.2)] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[color:rgba(27,20,15,0.9)] backdrop-blur-lg rounded-2xl p-4 border border-[color:rgba(161,92,56,0.3)] group-hover:border-[color:rgba(201,162,39,0.5)] transition-all duration-500 shadow-2xl">
                {/* Icon positioned at top-left of image */}
                <div className="absolute -top-7 -left-7 z-20">
                  <div className={`milestone-highlight w-16 h-16 rounded-full bg-[color:rgba(201,162,39,0.2)] flex items-center justify-center border-4 border-[var(--vintage-gold)] shadow-2xl backdrop-blur-sm`}>
                    <div className="text-white text-2xl">
                      {timelineData.icon}
                    </div>
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-[var(--vintage-gold)] rounded-full text-[var(--vintage-brown-dark)] text-xs flex items-center justify-center font-bold shadow-lg`}>
                    {timelineData.id}
                  </div>
                </div>
                
                {/* Image Carousel */}
                <div className="relative overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="relative w-full flex-shrink-0">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-80 object-cover shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => handleImageClick(image.id)}
                        />
                        {image.imageUrl && (
                          <a
                            href={image.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[color:rgba(27,20,15,0.6)] hover:bg-[color:rgba(27,20,15,0.8)] text-[var(--vintage-gold)] shadow-md transition-colors"
                            title="Mở liên kết nguồn"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[color:rgba(27,20,15,0.5)] hover:bg-[color:rgba(27,20,15,0.7)] text-[var(--vintage-cream)] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[color:rgba(27,20,15,0.5)] hover:bg-[color:rgba(27,20,15,0.7)] text-[var(--vintage-cream)] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-[var(--vintage-gold)]' : 'bg-[color:rgba(201,162,39,0.5)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(27,20,15,0.6)] via-transparent to-transparent rounded-xl pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <p className="text-[var(--vintage-cream)] text-sm font-medium bg-[color:rgba(27,20,15,0.5)] backdrop-blur-sm rounded-lg px-3 py-2">
                    {images[currentImageIndex].caption}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 gear-rotate floating-element">
              <Cog className="w-8 h-8 text-red-400/30" />
            </div>
            <div className="absolute bottom-10 left-10 gear-rotate floating-element" style={{ animationDirection: 'reverse' }}>
              <Cog className="w-6 h-6 text-yellow-400/30" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:order-2">
            <div 
              className={`bg-[color:rgba(27,20,15,0.8)] backdrop-blur-lg rounded-2xl p-8 border border-[color:rgba(161,92,56,0.3)] hover:border-[color:rgba(201,162,39,0.5)] transition-all duration-500 cursor-pointer card-hover shadow-2xl`}
              onClick={toggleExpanded}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-4xl font-bold text-[var(--vintage-gold)] mb-4`}>
                  {timelineData.title}
                </h3>
                <div className="text-[color:rgba(239,230,213,0.7)] hover:text-[var(--vintage-cream)] transition-colors">
                  {expandedItem ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </div>
              
              <p className="text-xl text-[color:rgba(239,230,213,0.85)] mb-6 leading-relaxed">
                {timelineData.shortDesc}
              </p>

              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedItem ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-[color:rgba(94,84,63,0.5)] pt-6">
                  <p className="text-lg text-[color:rgba(239,230,213,0.85)] leading-relaxed">
                    {timelineData.fullDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/4 left-10 floating-element">
        <div className={`w-4 h-4 bg-${timelineData.color}-500/20 rounded-full`}></div>
      </div>
      <div className="absolute top-3/4 right-20 floating-element">
        <div className="w-6 h-6 bg-yellow-500/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 floating-element">
        <div className={`w-3 h-3 bg-${timelineData.color}-500/20 rounded-full`}></div>
      </div>
    </section>
  );
};

export default Milestone1;
