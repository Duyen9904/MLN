import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Hammer, Star, Globe, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface ConclusionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Conclusion = ({ sectionRef }: ConclusionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Conclusion Animation - Typewriter effect
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
      .to(".typewriter-text", {
        duration: 4,
        text: "Dưới sự lãnh đạo sáng suốt của Đảng, giai cấp công nhân Việt Nam sẽ tiếp tục phát huy vai trò tiên phong, xây dựng thành công CNXH.",
        ease: "none"
      })
      .fromTo(".thank-you", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=1");

    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--vintage-brown)] to-[var(--vintage-brown-dark)] relative">
      <div ref={containerRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--vintage-gold)] section-title">Kết luận</h2>
          
          <div className="relative mb-16">
            <div className="typewriter-text text-2xl md:text-3xl font-light leading-relaxed text-[var(--vintage-cream)] min-h-[200px] flex items-center justify-center p-8 bg-[color:rgba(59,47,47,0.5)] rounded-2xl backdrop-blur-sm border border-[color:rgba(161,92,56,0.2)]">
              {/* Text will be animated in via GSAP */}
            </div>
            
            <div className="absolute -top-4 -left-4">
              <div className="w-3 h-3 bg-[var(--vintage-gold)] rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="thank-you space-y-8">
            <div className="text-xl text-[color:rgba(239,230,213,0.85)]">
              <p>Xin chân thành cảm ơn sự chú ý lắng nghe của thầy cô và các bạn!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="p-6 bg-[color:rgba(59,47,47,0.5)] rounded-lg backdrop-blur-sm border border-[color:rgba(161,92,56,0.2)]">
                <Hammer className="w-8 h-8 text-[color:rgba(161,92,56,0.95)] mx-auto mb-3" />
                <div className="text-sm text-gray-300">Giai cấp công nhân</div>
              </div>
              <div className="p-6 bg-[color:rgba(59,47,47,0.5)] rounded-lg backdrop-blur-sm border border-[color:rgba(201,162,39,0.25)]">
                <Star className="w-8 h-8 text-[var(--vintage-gold)] mx-auto mb-3" />
                <div className="text-sm text-gray-300">Sứ mệnh lịch sử</div>
              </div>
              <div className="p-6 bg-[color:rgba(59,47,47,0.5)] rounded-lg backdrop-blur-sm border border-[color:rgba(110,107,59,0.25)]">
                <Globe className="w-8 h-8 text-[var(--vintage-olive)] mx-auto mb-3" />
                <div className="text-sm text-gray-300">Phát triển bền vững</div>
              </div>
              <div className="p-6 bg-[color:rgba(59,47,47,0.5)] rounded-lg backdrop-blur-sm border border-[color:rgba(94,84,63,0.25)]">
                <Target className="w-8 h-8 text-[color:rgba(94,84,63,0.95)] mx-auto mb-3" />
                <div className="text-sm text-gray-300">Tầm nhìn 2045</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:rgba(161,92,56,0.1)] blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:rgba(201,162,39,0.1)] blur-3xl rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Conclusion;
