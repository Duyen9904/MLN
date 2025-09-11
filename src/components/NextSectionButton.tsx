import React, { useEffect, useState } from 'react';

interface NextSectionButtonProps {
  label?: string;
}

const NextSectionButton: React.FC<NextSectionButtonProps> = ({ label = 'Tiếp theo' }) => {
  const [hide, setHide] = useState(false);

  const computeCurrentIndex = () => {
    const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    if (!sections.length) return { sections, currentIndex: -1 };
    const viewportCenter = window.scrollY + window.innerHeight / 2;
    const currentIndex = sections.findIndex((sec) => {
      const rect = sec.getBoundingClientRect();
      const secCenter = rect.top + window.scrollY + rect.height / 2;
      return Math.abs(secCenter - viewportCenter) < rect.height / 2;
    });
    return { sections, currentIndex };
  };

  const updateVisibility = () => {
    const { sections, currentIndex } = computeCurrentIndex();
    const isLast = currentIndex >= 0 && currentIndex >= sections.length - 1;
    setHide(isLast);
  };

  useEffect(() => {
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  const handleClick = () => {
    const { sections, currentIndex } = computeCurrentIndex();
    const next = sections[(currentIndex >= 0 ? currentIndex + 1 : 0)];
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (hide) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-5 py-3 rounded-full bg-[var(--vintage-gold)] text-[var(--vintage-brown-dark)] shadow-lg hover:bg-[#b89421] transition-colors"
    >
      {label}
    </button>
  );
};

export default NextSectionButton;


