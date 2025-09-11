import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cog, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import giaidoan3 from '../assets/giaidoan3.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Milestone3Props {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Milestone3 = ({ sectionRef }: Milestone3Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [expandedItem, setExpandedItem] = useState<boolean>(false);

  const timelineData = {
    id: 3,
    title: "35 năm đổi mới",
    shortDesc: "Tăng nhanh về số lượng và chất lượng",
    fullDesc: "Trong 35 năm thực hiện công cuộc đổi mới, giai cấp công nhân Việt Nam đã có những biến đổi tích cực do tác động của tình hình kinh tế - xã hội trong nước và những tác động của tình hình quốc tế và thế giới, thể hiện ở việc tăng nhanh về số lượng và chất lượng, đa dạng cơ cấu ngành nghề, nâng cao giác ngộ chính trị.",
    color: "green",
    icon: <Cog className="w-6 h-6" />
  };

  // const images = [
  //   {
  //     id: "giaidoan3",
  //     src: giaidoan3,
  //     alt: "Giai đoạn 3 - 35 năm đổi mới",
  //     caption: "Công cuộc đổi mới và phát triển",
  //     imageUrl: "https://www.phunuonline.com.vn/khi-nha-may-theo-cong-nhan-ve-tinh-a1459797.html"
  //   }
  // ];

  
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

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center relative bg-[var(--vintage-brown-dark)]">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-element">
        <div className="absolute inset-0 bg-gradient-to-b from-[color:rgba(110,107,59,0.2)] via-[color:rgba(59,47,47,0.2)] to-[color:rgba(201,162,39,0.2)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:rgba(110,107,59,0.1)] blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:rgba(161,92,56,0.1)] blur-3xl rounded-full" />
      </div>

      {/* Timeline Line - Vertical through center */}
      <div className="timeline-line absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[var(--vintage-tan)] via-[var(--vintage-gold)] to-[var(--vintage-olive)] origin-top transform -translate-x-1/2"></div>

      {/* Content Container */}
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Historical Image with Icon Overlay */}
          <div className="lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[color:rgba(110,107,59,0.2)] to-[color:rgba(161,92,56,0.2)] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[color:rgba(27,20,15,0.9)] backdrop-blur-lg rounded-2xl p-4 border border-[color:rgba(110,107,59,0.3)] group-hover:border-[color:rgba(110,107,59,0.5)] transition-all duration-500 shadow-2xl">
                {/* Icon positioned at top-left of image */}
                <div className="absolute -top-7 -left-7 z-20">
                  <div className={`milestone-highlight w-16 h-16 rounded-full bg-${timelineData.color}-500/20 flex items-center justify-center border-4 border-${timelineData.color}-500 shadow-2xl backdrop-blur-sm`}>
                    <div className="text-white text-2xl">
                      {timelineData.icon}
                    </div>
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-${timelineData.color}-500 rounded-full text-white text-xs flex items-center justify-center font-bold shadow-lg`}>
                    {timelineData.id}
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl h-80">
                  <img 
                    src={giaidoan3} 
                    alt="Giai đoạn 3 - 35 năm đổi mới"
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <a
                    href="https://www.phunuonline.com.vn/khi-nha-may-theo-cong-nhan-ve-tinh-a1459797.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[color:rgba(27,20,15,0.6)] hover:bg-[color:rgba(27,20,15,0.8)] text-[var(--vintage-gold)] shadow-md transition-colors"
                    title="Mở liên kết nguồn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {/* Overlays inside the clipped container */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(27,20,15,0.6)] via-transparent to-transparent pointer-events-none rounded-xl"></div>
                  <div className="absolute bottom-2 left-4 right-4 pointer-events-none">
                    <p className="text-[var(--vintage-cream)] text-sm font-medium bg-[color:rgba(27,20,15,0.5)] backdrop-blur-sm rounded-lg px-3 py-2">
                      Công cuộc đổi mới và phát triển
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 gear-rotate floating-element">
              <Cog className="w-8 h-8 text-green-400/30" />
            </div>
            <div className="absolute bottom-10 left-10 gear-rotate floating-element" style={{ animationDirection: 'reverse' }}>
              <Cog className="w-6 h-6 text-red-400/30" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:order-2">
            <div 
              className={`bg-[color:rgba(27,20,15,0.8)] backdrop-blur-lg rounded-2xl p-8 border border-[color:rgba(110,107,59,0.3)] hover:border-[color:rgba(110,107,59,0.5)] transition-all duration-500 cursor-pointer card-hover shadow-2xl`}
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
        <div className="w-6 h-6 bg-red-500/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 floating-element">
        <div className={`w-3 h-3 bg-${timelineData.color}-500/20 rounded-full`}></div>
      </div>
    </section>
  );
};

export default Milestone3;
