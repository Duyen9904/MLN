import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [showAudioPanel, setShowAudioPanel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      const audio = audioRef.current;
      
      audio.addEventListener('loadedmetadata', () => {
        setIsAudioLoaded(true);
        setDuration(audio.duration);
      });
      
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      
      audio.addEventListener('play', () => {
        setIsPlaying(true);
      });
      
      audio.addEventListener('pause', () => {
        setIsPlaying(false);
      });
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      // Set initial volume
      audio.volume = volume;
    }
  }, [volume]);


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return duration > 0 ? (currentTime / duration) * 100 : 0;
  };

  const handleAudioHover = () => {
    setShowAudioPanel(true);
  };

  const handleAudioLeave = () => {
    setShowAudioPanel(false);
  };

  const handlePanelHover = () => {
    setShowAudioPanel(true);
  };

  const handlePanelLeave = () => {
    setShowAudioPanel(false);
  };

  const handleAudioClick = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Error playing audio:', error);
        alert('Không thể phát âm thanh. Vui lòng kiểm tra cài đặt âm thanh của trình duyệt.');
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[color:rgba(27,20,15,0.9)] backdrop-blur-md border-b border-[color:rgba(166,124,82,0.25)]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-[var(--vintage-cream)]">
                Lịch Sử Giai Cấp Công Nhân Việt Nam
              </h1>
            </div>
            
            <div className="relative">
              <button
                onClick={handleAudioClick}
                onMouseEnter={handleAudioHover}
                onMouseLeave={handleAudioLeave}
                className={`relative p-4 rounded-full transition-all duration-300 group transform hover:scale-110 ${
                  isPlaying 
                    ? 'bg-gradient-to-r from-[var(--vintage-gold)] to-[var(--vintage-tan)] shadow-xl shadow-[rgba(201,162,39,0.3)] animate-pulse' 
                    : 'bg-gradient-to-r from-[rgba(59,47,47,0.9)] to-[rgba(107,79,58,0.9)] hover:from-[rgba(107,79,58,0.9)] hover:to-[rgba(166,124,82,0.9)] shadow-lg hover:shadow-xl'
                }`}
                aria-label={isPlaying ? "Pause podcast" : "Play podcast"}
                disabled={!isAudioLoaded}
              >
                {/* Ripple effect for playing state */}
                {isPlaying && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-[color:rgba(201,162,39,0.5)] opacity-30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-[color:rgba(201,162,39,0.35)] opacity-20 animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </>
                )}
                
                {/* Attractive signals when NOT playing */}
                {!isPlaying && (
                  <>
                    {/* Pulsing glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(166,124,82,0.2)] to-[rgba(201,162,39,0.2)] animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(166,124,82,0.3)] to-[rgba(201,162,39,0.3)] animate-ping" style={{animationDelay: '1s'}}></div>
                    
                    {/* Subtle breathing effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-[color:rgba(201,162,39,0.35)] animate-ping" style={{animationDelay: '2s'}}></div>
                  </>
                )}
                
                {/* Sound waves animation */}
                {isPlaying && (
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <div className="w-1 bg-[var(--vintage-gold)] rounded-full animate-bounce" style={{height: '8px', animationDelay: '0s'}}></div>
                    <div className="w-1 bg-[var(--vintage-gold)] rounded-full animate-bounce" style={{height: '12px', animationDelay: '0.1s'}}></div>
                    <div className="w-1 bg-[var(--vintage-gold)] rounded-full animate-bounce" style={{height: '6px', animationDelay: '0.2s'}}></div>
                    <div className="w-1 bg-[var(--vintage-gold)] rounded-full animate-bounce" style={{height: '10px', animationDelay: '0.3s'}}></div>
                  </div>
                )}

                {isPlaying ? (
                  <svg 
                    className="w-7 h-7 text-white transition-all duration-300 animate-spin" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <>
                    <svg 
                      className="w-7 h-7 text-[var(--vintage-cream)] group-hover:text-[var(--vintage-gold)] transition-all duration-300 transform group-hover:scale-110 relative z-10" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    {/* "Click to Play" indicator */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[color:rgba(239,230,213,0.7)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      🎧 Click to Play
                    </div>
                  </>
                )}
              </button>

              {/* Interactive Audio Panel */}
              {showAudioPanel && (
                <div 
                  className="absolute right-0 top-full mt-3 w-96 bg-gradient-to-br from-[rgba(59,47,47,0.95)] via-[rgba(27,20,15,0.95)] to-[rgba(107,79,58,0.95)] text-[var(--vintage-cream)] p-6 rounded-2xl shadow-2xl border border-[color:rgba(166,124,82,0.35)] animate-slideInUp backdrop-blur-lg z-50"
                  onMouseEnter={handlePanelHover}
                  onMouseLeave={handlePanelLeave}
                >
                  {/* Podcast Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--vintage-gold)] to-[var(--vintage-tan)] flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      {isPlaying && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--vintage-olive)] rounded-full animate-pulse flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-1 bg-[color:rgba(161,92,56,0.9)] text-xs font-bold rounded-full uppercase tracking-wide">
                          🎙️ PODCAST
                        </span>
                        <span className={`px-2 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${
                          isPlaying ? 'bg-[var(--vintage-olive)] text-white animate-pulse' : 'bg-[color:rgba(166,124,82,0.35)] text-[color:rgba(239,230,213,0.8)]'
                        }`}>
                          {isPlaying ? '🔴 LIVE' : '⏸️ PAUSED'}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[var(--vintage-gold)] to-[var(--vintage-tan)]">
                        Chương 2 - Sứ mệnh lịch sử của giai cấp công nhân
                      </h3>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div 
                      className="w-full h-2 bg-[color:rgba(166,124,82,0.35)] rounded-full cursor-pointer overflow-hidden group"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-[var(--vintage-gold)] to-[var(--vintage-tan)] rounded-full transition-all duration-150 relative"
                        style={{ width: `${getProgressPercentage()}%` }}
                      >
                        <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full transform -translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-[color:rgba(239,230,213,0.7)] mt-2">
                      <span className="font-mono">{formatTime(currentTime)}</span>
                      <span className="font-mono">{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center space-x-3 mb-4">
                    <svg className="w-4 h-4 text-[color:rgba(239,230,213,0.7)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="flex-1 h-1 bg-[color:rgba(166,124,82,0.35)] rounded-full appearance-none cursor-pointer slider"
                    />
                    <span className="text-xs text-[color:rgba(239,230,213,0.7)] font-mono w-8">{Math.round(volume * 100)}%</span>
                  </div>

                  {/* Description */}
                  <div className="border-t border-[color:rgba(166,124,82,0.35)] pt-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--vintage-tan)] to-[var(--vintage-gold)] rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-[var(--vintage-cream)]">Trải nghiệm podcast tuyệt vời!</h4>
                        <p className="text-xs text-[color:rgba(239,230,213,0.75)] leading-relaxed">
                          Khám phá lịch sử giai cấp công nhân Việt Nam qua nội dung âm thanh chất lượng cao. 
                          Bật âm thanh để có trải nghiệm học tập tốt nhất! 🎧
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        preload="metadata"
        className="hidden"
      >
        <source src="/src/components/videoplayback.mp4" type="audio/mp4" />
        <source src="/src/components/videoplayback.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ phát âm thanh.
      </audio>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }
      `}</style>
    </>
  );
};

export default Header;