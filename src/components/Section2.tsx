import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cog, Building2, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Section2Props {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Section2 = ({ sectionRef }: Section2Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section II Animation - Three subsections with staggered effects
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      .fromTo(".subsection-card", { opacity: 0, y: 100, scale: 0.8 }, { 
        opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: "back.out(1.7)" 
      })
      .fromTo(".parallax-bg", { y: 100, opacity: 0 }, { y: 0, opacity: 0.3, duration: 1.5, stagger: 0.2 }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative bg-[var(--vintage-brown-dark)]">
      {/* Parallax backgrounds */}
      <div className="absolute inset-0 parallax-bg bg-gradient-to-b from-[color:rgba(59,47,47,0.5)] to-[color:rgba(27,20,15,0.6)]"></div>
      <div className="absolute top-1/4 left-0 w-full h-1/2 parallax-bg bg-gradient-to-r from-transparent via-[color:rgba(161,92,56,0.08)] to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-1/2 parallax-bg bg-gradient-to-l from-transparent via-[color:rgba(201,162,39,0.08)] to-transparent"></div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[var(--vintage-gold)] mb-16 section-title">
          II. Nội dung sứ mệnh lịch sử hiện nay
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Economic subsection */}
          <div className="subsection-card bg-[color:rgba(59,47,47,0.7)] rounded-xl p-8 backdrop-blur-sm border border-[color:rgba(161,92,56,0.2)]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[color:rgba(161,92,56,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-[color:rgba(161,92,56,0.9)]" />
              </div>
              <h3 className="text-2xl font-bold text-[color:rgba(217,164,138,1)]">Kinh tế</h3>
            </div>
            <div className="space-y-4 text-[color:rgba(239,230,213,0.85)]">
              <p>• Lực lượng đi đầu trong công nghiệp hóa, hiện đại hóa</p>
              <p>• Nâng cao năng suất lao động, chất lượng sản xuất</p>
              <p>• Xây dựng khối liên minh công – nông – trí thức</p>
              <p>• Phát triển nền kinh tế thị trường định hướng XHCN</p>
            </div>
          </div>

          {/* Political-Social subsection */}
          <div className="subsection-card bg-[color:rgba(59,47,47,0.7)] rounded-xl p-8 backdrop-blur-sm border border-[color:rgba(94,84,63,0.2)]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[color:rgba(94,84,63,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[color:rgba(94,84,63,0.9)]" />
              </div>
              <h3 className="text-2xl font-bold text-[color:rgba(240,212,138,1)]">Chính trị - Xã hội</h3>
            </div>
            <div className="space-y-4 text-[color:rgba(239,230,213,0.85)]">
              <p>• Giữ vững vai trò lãnh đạo của Đảng Cộng sản</p>
              <p>• Phát huy quyền làm chủ của nhân dân</p>
              <p>• Bảo vệ vững chắc chế độ xã hội chủ nghĩa</p>
              <p>• Đấu tranh chống các thế lực thù địch</p>
            </div>
          </div>

          {/* Cultural-Ideological subsection */}
          <div className="subsection-card bg-[color:rgba(59,47,47,0.7)] rounded-xl p-8 backdrop-blur-sm border border-[color:rgba(110,107,59,0.2)]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[color:rgba(110,107,59,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-[var(--vintage-olive)]" />
              </div>
              <h3 className="text-2xl font-bold text-[color:rgba(198,197,149,1)]">Văn hóa - Tư tưởng</h3>
            </div>
            <div className="space-y-4 text-[color:rgba(239,230,213,0.85)]">
              <p>• Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc</p>
              <p>• Bảo vệ sự trong sáng của chủ nghĩa Mác – Lênin</p>
              <p>• Nâng cao bản lĩnh chính trị, trình độ chuyên môn</p>
              <p>• Giáo dục đạo đức cách mạng, lối sống văn minh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
