import { useEffect, useMemo, useRef, useState } from 'react';

interface ReviewProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

type QuizItem = {
  question: string;
  options: string[];
  answer: string;
};

const Review = ({ sectionRef }: ReviewProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Load quiz.json via asset URL to avoid TS resolveJsonModule requirements
  useEffect(() => {
    const quizUrl = new URL('../assets/quiz.json', import.meta.url).href;
    fetch(quizUrl)
      .then((res) => res.json())
      .then((data: QuizItem[]) => {
        setQuestions(data);
      })
      .catch(() => {
        setQuestions([]);
      });
  }, []);

  const currentQuestion = questions[currentIndex];
  const progressPercent = useMemo(() => {
    if (!questions.length) return 0;
    return ((currentIndex) / questions.length) * 100;
  }, [currentIndex, questions.length]);

  const handleSelect = (option: string) => {
    if (showAnswer) return;
    setSelectedOption(option);
  };

  const revealAnswer = () => {
    if (showAnswer || selectedOption == null || !currentQuestion) return;
    setShowAnswer(true);
    if (selectedOption === currentQuestion.answer) {
      setScore((s) => s + 1);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setCompleted(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--vintage-brown-dark)] to-[var(--vintage-brown)] relative">
      <div ref={containerRef} className="container mx-auto px-6 py-24 w-full max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--vintage-gold)]">Ôn tập nhanh</h2>

        {/* Progress */}
        <div className="w-full h-2 bg-[color:rgba(59,47,47,0.7)] rounded-full overflow-hidden mb-8 border border-[color:rgba(110,107,59,0.25)]">
          <div
            className="h-full bg-gradient-to-r from-[var(--vintage-gold)] via-[var(--vintage-tan)] to-[var(--vintage-olive)] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {!questions.length ? (
          <div className="p-8 rounded-2xl bg-[color:rgba(59,47,47,0.6)] border border-[color:rgba(94,84,63,0.35)] text-center text-[color:rgba(239,230,213,0.8)]">
            Đang tải câu hỏi...
          </div>
        ) : completed ? (
          <div className="p-8 rounded-2xl bg-[color:rgba(59,47,47,0.6)] border border-[color:rgba(110,107,59,0.25)] text-center">
            <div className="text-3xl font-semibold text-[var(--vintage-olive)] mb-2">Hoàn thành!</div>
            <div className="text-[var(--vintage-cream)] mb-6">Bạn trả lời đúng {score}/{questions.length} câu.</div>
            <button
              onClick={restart}
              className="px-6 py-3 rounded-xl bg-[var(--vintage-gold)] hover:bg-[color:#b89421] text-[var(--vintage-brown-dark)] font-medium transition-colors"
            >
              Làm lại
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8 rounded-2xl bg-[color:rgba(59,47,47,0.6)] border border-[color:rgba(110,107,59,0.25)]">
            <div className="text-sm text-[color:rgba(239,230,213,0.7)] mb-2">
              Câu {currentIndex + 1}/{questions.length}
            </div>
            <div className="text-2xl md:text-3xl text-[var(--vintage-cream)] font-semibold mb-6">
              {currentQuestion.question}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option;
                const isCorrect = showAnswer && option === currentQuestion.answer;
                const isWrong = showAnswer && isSelected && option !== currentQuestion.answer;

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    disabled={showAnswer}
                    className={[
                      'text-left px-5 py-4 rounded-xl border transition-all',
                      'bg-[color:rgba(27,20,15,0.6)] hover:bg-[color:rgba(27,20,15,0.8)]',
                      isSelected && !showAnswer ? 'border-[color:rgba(201,162,39,0.6)]' : 'border-[color:rgba(94,84,63,0.6)]',
                      isCorrect ? 'border-[var(--vintage-olive)] bg-[color:rgba(110,107,59,0.1)]' : '',
                      isWrong ? 'border-[color:rgba(161,92,56,1)] bg-[color:rgba(161,92,56,0.1)]' : ''
                    ].join(' ')}
                  >
                    <span className="text-[var(--vintage-cream)]">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
              <button
                onClick={revealAnswer}
                disabled={showAnswer || selectedOption == null}
                className="px-5 py-3 rounded-xl bg-[var(--vintage-gold)] disabled:bg-[color:rgba(94,84,63,0.6)] disabled:text-[color:rgba(239,230,213,0.6)] hover:bg-[color:#b89421] text-[var(--vintage-brown-dark)] font-medium transition-colors"
              >
                Kiểm tra đáp án
              </button>
              <button
                onClick={goNext}
                disabled={!showAnswer}
                className="px-5 py-3 rounded-xl bg-[color:rgba(59,47,47,0.9)] disabled:opacity-60 hover:bg-[color:rgba(59,47,47,1)] text-[var(--vintage-cream)] font-medium transition-colors"
              >
                Câu tiếp theo
              </button>
              <div className="ml-auto text-[color:rgba(239,230,213,0.9)]">
                Điểm: <span className="text-[var(--vintage-cream)] font-semibold">{score}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-[color:rgba(201,162,39,0.08)] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[color:rgba(166,124,82,0.08)] blur-3xl rounded-full" />
      </div>
    </section>
  );
};

export default Review;


