import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Users, Target, GraduationCap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Section3Props {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Section3 = ({ sectionRef }: Section3Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stepper entrance + progress fill
      // Stepper entrance + progress fill
      gsap.fromTo(".step-item", { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stepper",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.fromTo(".stepper-progress", { width: 0 }, {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stepper",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative bg-[var(--vintage-brown-dark)]">
      <div ref={containerRef} className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[var(--vintage-gold)] mb-16 section-title">
          III. Phương hướng và giải pháp chủ yếu
        </h2>

        {/* 5-step stepper */}
        <div className="stepper relative mb-16">
          {/* Progress line */}
          <div className="absolute left-0 right-0 top-6 md:top-8 h-1 bg-[color:rgba(110,107,59,0.25)] rounded-full">
            <div className="stepper-progress h-full bg-gradient-to-r from-[var(--vintage-tan)] via-[var(--vintage-gold)] to-[var(--vintage-olive)] rounded-full" style={{ width: 0 }}></div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 1. Nhận thức */}
            <div className="step-item group relative bg-[color:rgba(59,47,47,0.7)] rounded-xl p-5 backdrop-blur-sm border border-[color:rgba(161,92,56,0.25)] hover:border-[color:rgba(161,92,56,0.45)] transition-all duration-300 card-hover">
              <div className="flex items-center space-x-3 mb-2">
                <CheckCircle className="w-6 h-6 text-[color:rgba(161,92,56,0.95)]" />
                <span className="text-sm font-semibold text-[color:rgba(217,164,138,1)]">Nhận thức</span>
              </div>
              <p className="text-[color:rgba(239,230,213,0.85)] text-xs">Kiên định vai trò lãnh đạo của giai cấp công nhân</p>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 text-[color:rgba(239,230,213,0.9)] text-xs">
                Khẳng định Đảng Cộng sản Việt Nam là đội tiên phong; nâng cao bản lĩnh, ý chí đổi mới của giai cấp công nhân.
              </div>
            </div>

            {/* 2. Liên minh */}
            <div className="step-item group relative bg-[color:rgba(59,47,47,0.7)] rounded-xl p-5 backdrop-blur-sm border border-[color:rgba(201,162,39,0.25)] hover:border-[color:rgba(201,162,39,0.45)] transition-all duration-300 card-hover">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-[var(--vintage-gold)]" />
                <span className="text-sm font-semibold text-[color:rgba(240,212,138,1)]">Liên minh</span>
              </div>
              <p className="text-[color:rgba(239,230,213,0.85)] text-xs">Phối hợp công nhân – nông dân – trí thức</p>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 text-[color:rgba(239,230,213,0.9)] text-xs">
                Tăng cường đại đoàn kết toàn dân tộc; củng cố tổ chức chính trị - xã hội dưới sự lãnh đạo của Đảng; mở rộng hợp tác quốc tế.
              </div>
            </div>

            {/* 3. Công nghiệp hóa */}
            <div className="step-item group relative bg-[color:rgba(59,47,47,0.7)] rounded-xl p-5 backdrop-blur-sm border border-[color:rgba(94,84,63,0.25)] hover:border-[color:rgba(94,84,63,0.45)] transition-all duration-300 card-hover">
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-6 h-6 text-[color:rgba(94,84,63,0.95)]" />
                <span className="text-sm font-semibold text-[color:rgba(240,212,138,1)]">Công nghiệp hóa</span>
              </div>
              <p className="text-[color:rgba(239,230,213,0.85)] text-xs">Thực hiện chiến lược phát triển, tận dụng CMCN 4.0</p>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 text-[color:rgba(239,230,213,0.9)] text-xs">
                Hoàn thiện thể chế kinh tế thị trường định hướng XHCN; hài hòa tăng trưởng với tiến bộ và công bằng xã hội.
              </div>
            </div>

            {/* 4. Đào tạo */}
            <div className="step-item group relative bg-[color:rgba(59,47,47,0.7)] rounded-xl p-5 backdrop-blur-sm border border-[color:rgba(110,107,59,0.25)] hover:border-[color:rgba(110,107,59,0.45)] transition-all duration-300 card-hover">
              <div className="flex items-center space-x-3 mb-2">
                <GraduationCap className="w-6 h-6 text-[var(--vintage-olive)]" />
                <span className="text-sm font-semibold text-[color:rgba(198,197,149,1)]">Đào tạo</span>
              </div>
              <p className="text-[color:rgba(239,230,213,0.85)] text-xs">Nâng cao trình độ, trí thức hóa công nhân trẻ</p>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 text-[color:rgba(239,230,213,0.9)] text-xs">
                Chú trọng kỹ năng số, công nghệ; nâng cao học vấn, chuyên môn; phát triển nguồn nhân lực chất lượng cao.
              </div>
            </div>

            {/* 5. Xây dựng Đảng */}
            <div className="step-item group relative bg-[color:rgba(59,47,47,0.7)] rounded-xl p-5 backdrop-blur-sm border border-[color:rgba(201,162,39,0.25)] hover:border-[color:rgba(201,162,39,0.45)] transition-all duration-300 card-hover">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="w-6 h-6 text-[var(--vintage-gold)]" />
                <span className="text-sm font-semibold text-[color:rgba(240,212,138,1)]">Xây dựng Đảng</span>
              </div>
              <p className="text-[color:rgba(239,230,213,0.85)] text-xs">Xây dựng Đảng, phát triển tổ chức của công nhân</p>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 text-[color:rgba(239,230,213,0.9)] text-xs">
                Xây dựng Đảng trong sạch, vững mạnh về chính trị, tư tưởng, tổ chức, đạo đức; phát triển Công đoàn, Đoàn Thanh niên.
              </div>
            </div>
          </div>
        </div>
        {/* Old cards and map removed as requested */}
      </div>
    </section>
  );
};

export default Section3;
