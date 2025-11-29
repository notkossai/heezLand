import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import BooksSlider from './components/BooksSlider';
import VideosSlider from './components/VideosSlider';
import Reader from './components/Reader';
import CommentsSection from './components/CommentsSection';
import './learn.css';

export default function LearnPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return (
      <div className="learn-page">
        <Reader book={selectedBook} onBack={() => setSelectedBook(null)} />
      </div>
    );
  }

  return (
    <main className="learn-page">
      <HeroSection />
      <ContentSection />
      <BooksSlider onSelectBook={setSelectedBook} />
      <VideosSlider />
      <CommentsSection />
    </main>
  );
}
