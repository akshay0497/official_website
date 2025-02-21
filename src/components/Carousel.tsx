import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: {
    id: number;
    image?: string;
    title: string;
    content: string;
    name?: string;
    role?: string;
  }[];
  type: 'projects' | 'testimonials' | 'services' | 'team';
  autoplayInterval?: number;
}

export default function Carousel({ items, type, autoplayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % items.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [items.length, autoplayInterval]);

  const next = () => setCurrentIndex((current) => (current + 1) % items.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + items.length) % items.length);

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 p-8"
          >
            {item.image && (
              <div className="mb-6 h-64 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.content}</p>
              
              {type === 'testimonials' && (
                <div className="mt-6">
                  <p className="font-semibold text-blue-600">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}