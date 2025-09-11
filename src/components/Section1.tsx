import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Star, Cog, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Section1Props {
  sectionRef: React.RefObject<HTMLElement | null>;
}


interface TimelineItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  icon: React.ReactNode;
}

const Section1 = ({ sectionRef }: Section1Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Thời kỳ thuộc địa Pháp",
      shortDesc: "Giai cấp công nhân xuất hiện trước tư sản dân tộc",
      fullDesc: "Giai cấp công nhân Việt Nam xuất hiện trước giai cấp tư sản dân tộc và trực tiếp đứng lên chống lại thực dân Pháp cùng phong kiến, trong bối cảnh một nước thuộc địa, nửa phong kiến. Mặc dù số lượng ban đầu còn ít ỏi, nhưng giai cấp công nhân Việt Nam đã sớm được tôi luyện trong các phong trào cách mạng.",
      color: "red",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Cách mạng và Đảng ra đời",
      shortDesc: "Được tôi luyện trong phong trào cách mạng",
      fullDesc: "Được tôi luyện trong các phong trào cách mạng, nhanh chóng giác ngộ về ý thức giai cấp và sứ mệnh lịch sử của mình, đặc biệt là từ khi Đảng Cộng sản Việt Nam ra đời. Họ có truyền thống yêu nước sâu sắc, đoàn kết và bất khuất chống xâm lược.",
      color: "yellow",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 3,
      title: "35 năm đổi mới",
      shortDesc: "Tăng nhanh về số lượng và chất lượng",
      fullDesc: "Trong 35 năm thực hiện công cuộc đổi mới, giai cấp công nhân Việt Nam đã có những biến đổi tích cực do tác động của tình hình kinh tế - xã hội trong nước và những tác động của tình hình quốc tế và thế giới, thể hiện ở việc tăng nhanh về số lượng và chất lượng, đa dạng cơ cấu ngành nghề, nâng cao giác ngộ chính trị.",
      color: "green",
      icon: <Cog className="w-6 h-6" />
    }
  ];

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

      // Full screen milestone animations with enhanced reveal effects
      gsap.utils.toArray<HTMLElement>('.timeline-milestone').forEach((item, index) => {
        // Main milestone entrance animation with smooth slide effect
        gsap.fromTo(item, 
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
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth slide animation for milestone highlight
        gsap.fromTo(item.querySelector('.milestone-highlight'),
          { 
            opacity: 0,
            y: 50,
            x: index % 2 === 0 ? -50 : 50
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth icon reveal animation
        gsap.fromTo(item.querySelector('.milestone-highlight .text-white'),
          { 
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth milestone number badge reveal
        gsap.fromTo(item.querySelector('.milestone-highlight + div'),
          { 
            opacity: 0,
            y: -10,
            x: 10
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth slide animation for content card
        gsap.fromTo(item.querySelector('.card-hover'),
          { 
            opacity: 0, 
            y: 60,
            x: index % 2 === 0 ? 30 : -30
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth card title reveal animation
        gsap.fromTo(item.querySelector('.card-hover h3'),
          { 
            opacity: 0, 
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth card description reveal animation
        gsap.fromTo(item.querySelector('.card-hover p'),
          { 
            opacity: 0, 
            y: 15
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.7,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Smooth chevron icon reveal animation
        gsap.fromTo(item.querySelector('.card-hover .text-gray-400'),
          { 
            opacity: 0, 
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.9,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Expanded content reveal animation
        gsap.fromTo(item.querySelector('.card-hover .overflow-hidden'),
          { 
            opacity: 0, 
            y: 20,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 1.8,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Reveal animation for floating elements with staggered bounce effect
        gsap.utils.toArray<HTMLElement>(item.querySelectorAll('.floating-element')).forEach((element, elementIndex) => {
          gsap.fromTo(element,
            { 
              opacity: 0, 
              scale: 0,
              y: 80,
              x: elementIndex % 2 === 0 ? -80 : 80,
              rotation: elementIndex % 2 === 0 ? -180 : 180,
              filter: "blur(10px)"
            },
            {
            opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              rotation: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "elastic.out(1, 0.3)",
              delay: 0.8 + (elementIndex * 0.3),
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

        // Individual milestone parallax effects
        gsap.utils.toArray<HTMLElement>(item.querySelectorAll('.parallax-element')).forEach((element, elementIndex) => {
          gsap.to(element, {
            y: -100 * (elementIndex + 1),
            x: 50 * (elementIndex % 2 === 0 ? 1 : -1),
            rotation: 10 * (elementIndex + 1),
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 2
            }
          });
        });

        // Floating elements animation for each milestone
        gsap.utils.toArray<HTMLElement>(item.querySelectorAll('.floating-element')).forEach((element, elementIndex) => {
          gsap.to(element, {
            y: -30 * (elementIndex + 1),
            x: 20 * (elementIndex % 2 === 0 ? 1 : -1),
            rotation: 15 * (elementIndex + 1),
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          });
        });
      });

      // Continuous gear rotation
      gsap.to(".gear-rotate", {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "none"
      });

      // Timeline line animation with reveal effect
      gsap.fromTo('.timeline-line',
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );

      // Enhanced parallax for the entire section
      gsap.to(sectionRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  const toggleExpanded = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen">
      {/* Section Title - At beginning of section */}
      <div className="relative z-10 text-center py-20 px-6">
        <h2 className="section1-text text-4xl md:text-5xl font-bold text-red-400 mb-6 section-title leading-tight">
            I. Đặc điểm của giai cấp công nhân Việt Nam
          </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hành trình phát triển từ quá khứ đến hiện tại
          </p>
        {/* Decorative line */}
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto"></div>
        </div>

      {/* Full Screen Timeline Items */}
      <div ref={timelineRef} className="timeline-container">
            {timelineData.map((item, index) => (
              <div 
                key={item.id}
            className="timeline-milestone h-screen flex items-center justify-center relative"
            style={{ 
              background: `linear-gradient(135deg, ${item.color === 'red' ? '#7f1d1d' : item.color === 'yellow' ? '#78350f' : '#14532d'}20, ${item.color === 'red' ? '#991b1b' : item.color === 'yellow' ? '#a16207' : '#166534'}10)`
            }}
          >
            {/* Parallax Background for each milestone */}
            <div className="absolute inset-0 parallax-element">
              <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${item.color}-500/10 blur-3xl rounded-full`} />
              <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-${item.color === 'red' ? 'yellow' : item.color === 'yellow' ? 'green' : 'red'}-500/10 blur-3xl rounded-full`} />
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-${item.color}-500/5 blur-2xl rounded-full`} />
            </div>

            {/* Timeline Line - Vertical through center */}
            <div className="timeline-line absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 origin-top transform -translate-x-1/2"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Side - Icon and Timeline Dot */}
                <div className={`flex flex-col items-center ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative mb-8">
                    <div className={`milestone-highlight w-24 h-24 rounded-full bg-${item.color}-500/20 flex items-center justify-center border-4 border-${item.color}-500 shadow-2xl backdrop-blur-sm`}>
                      <div className="text-white text-3xl">
                      {item.icon}
                    </div>
                  </div>
                    <div className={`absolute -top-3 -right-3 w-8 h-8 bg-${item.color}-500 rounded-full text-white text-sm flex items-center justify-center font-bold shadow-lg`}>
                    {item.id}
                  </div>
                </div>

                  {/* Floating Elements for this milestone */}
                  <div className="absolute top-10 right-10 gear-rotate floating-element">
                    <Cog className="w-8 h-8 text-red-400/30" />
                  </div>
                  <div className="absolute bottom-10 left-10 gear-rotate floating-element" style={{ animationDirection: 'reverse' }}>
                    <Cog className="w-6 h-6 text-yellow-400/30" />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div 
                    className={`bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-${item.color}-500/30 hover:border-${item.color}-500/50 transition-all duration-500 cursor-pointer card-hover shadow-2xl`}
                    onClick={() => toggleExpanded(item.id)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className={`text-4xl font-bold text-${item.color}-300 mb-4`}>
                        {item.title}
                      </h3>
                      <div className="text-gray-400 hover:text-white transition-colors">
                        {expandedItem === item.id ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-600 pt-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {item.fullDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>

            {/* Additional Floating Elements for each milestone */}
        <div className="absolute top-1/4 left-10 floating-element">
              <div className={`w-4 h-4 bg-${item.color}-500/20 rounded-full`}></div>
        </div>
        <div className="absolute top-3/4 right-20 floating-element">
              <div className={`w-6 h-6 bg-${item.color === 'red' ? 'yellow' : item.color === 'yellow' ? 'green' : 'red'}-500/20 rounded-full`}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 floating-element">
              <div className={`w-3 h-3 bg-${item.color}-500/20 rounded-full`}></div>
        </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
