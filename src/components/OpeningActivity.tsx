import { useEffect, useState } from 'react';

type OpeningActivityProps = {
  sectionRef?: React.MutableRefObject<HTMLElement | null>;
};

type ChoiceKey = 'A' | 'B' | 'C';

const STORAGE_KEY = 'opening-activity-choice';

// Giả sử đáp án đúng là C
const correctAnswer: ChoiceKey = 'C';

const choices: { key: ChoiceKey; label: string; text: string }[] = [
  { key: 'A', label: 'A', text: 'Vẫn là lực lượng trung tâm quyết định tiến bộ xã hội' },
  { key: 'B', label: 'B', text: 'Sẽ bị thay thế dần bởi máy móc và AI' },
  { key: 'C', label: 'C', text: 'Vẫn giữ vai trò quan trọng nhưng theo cách mới, gắn với công nghệ và tri thức' },
];

const OpeningActivity = ({ sectionRef }: OpeningActivityProps) => {
  const [selected, setSelected] = useState<ChoiceKey | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ChoiceKey | null;
    if (saved === 'A' || saved === 'B' || saved === 'C') {
      setSelected(saved);
    }
  }, []);

  const handleSelect = (key: ChoiceKey) => {
    setSelected(key);
    window.localStorage.setItem(STORAGE_KEY, key);
  };

  const handleReset = () => {
    setSelected(null);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <section ref={sectionRef} className="relative py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto bg-[rgba(27,20,15,0.6)] border border-[color:rgba(166,124,82,0.35)] rounded-2xl shadow-xl p-8 md:p-10">
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[color:rgba(161,92,56,0.35)] text-[var(--vintage-cream)] border border-[color:rgba(166,124,82,0.35)]">
            🔹 Hoạt động mở đầu
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg md:text-xl text-[var(--vintage-cream)] font-semibold">
            👉 "Trong kỷ nguyên trí tuệ nhân tạo và công nghiệp 4.0, bạn nghĩ giai cấp công nhân sẽ giữ vai trò nào trong sự phát triển xã hội?"
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {choices.map(({ key, label, text }) => {
            const isSelected = selected === key;
            const isCorrect = key === correctAnswer;
            const isWrongSelection = isSelected && key !== correctAnswer;

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={!!selected} // khóa sau khi chọn
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 focus:outline-none
                  ${isCorrect && selected
                    ? 'bg-green-800/30 border-green-500 shadow-lg'
                    : isWrongSelection
                      ? 'bg-red-800/30 border-red-500'
                      : isSelected
                        ? 'bg-gradient-to-r from-[rgba(201,162,39,0.15)] to-[rgba(166,124,82,0.15)] border-[var(--vintage-gold)] shadow-lg'
                        : 'bg-[rgba(59,47,47,0.5)] border-[color:rgba(166,124,82,0.35)] hover:border-[var(--vintage-gold)] hover:bg-[rgba(59,47,47,0.65)]'}
                `}
                aria-pressed={isSelected}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg text-base font-bold 
                    ${isSelected ? 'bg-[var(--vintage-gold)] text-black' : 'bg-[color:rgba(166,124,82,0.35)] text-[var(--vintage-cream)]'}`}
                  >
                    {label}
                  </div>
                  <div className="flex-1">
                    <p className="text-[color:rgba(239,230,213,0.95)] leading-relaxed">{text}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col space-y-2">
          <div className="text-sm text-[color:rgba(239,230,213,0.85)]">
            {selected ? (
              selected === correctAnswer ? (
                <span>✅ Chính xác! Đáp án đúng là <span className="text-green-400 font-semibold">{correctAnswer}</span>.</span>
              ) : (
                <span>❌ Bạn đã chọn <span className="text-red-400 font-semibold">{selected}</span>. Đáp án đúng là <span className="text-green-400 font-semibold">{correctAnswer}</span>.</span>
              )
            ) : (
              <span>Hãy chọn một phương án để bắt đầu.</span>
            )}
          </div>
          <button
            onClick={handleReset}
            className="self-end px-4 py-2 text-sm rounded-lg border border-[color:rgba(166,124,82,0.45)] text-[var(--vintage-cream)] hover:text-[var(--vintage-gold)] hover:border-[var(--vintage-gold)] transition-colors"
          >
            Đặt lại lựa chọn
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpeningActivity;
