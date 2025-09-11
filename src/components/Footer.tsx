import { BookOpen, Users, Globe, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[var(--vintage-brown-dark)] text-center text-[color:rgba(239,230,213,0.75)] border-t border-[color:rgba(166,124,82,0.35)]">
      <div className="container mx-auto px-6">
        <p className="text-sm mb-4 text-[var(--vintage-cream)]">Nội dung giáo dục - Chương 2: Sứ mệnh lịch sử của giai cấp công nhân</p>
        <div className="flex justify-center space-x-6 text-[var(--vintage-gold)]">
          <BookOpen className="w-5 h-5" />
          <Users className="w-5 h-5" />
          <Globe className="w-5 h-5" />
          <Star className="w-5 h-5" />
        </div>
        <div className="mt-6">
          <a href="#ai-usage" className="inline-block px-4 py-2 border border-[color:rgba(166,124,82,0.45)] rounded-lg text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] hover:border-[var(--vintage-gold)] transition-colors">
            Xem phụ lục: Sử dụng AI
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
