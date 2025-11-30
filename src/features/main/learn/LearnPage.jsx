import { useState, useEffect } from 'react';
import { useCoin } from '../../../../contexts/coins/CoinContext';
import { mockBooks } from './components/mockBooks';
import { mockVideos } from './components/mockVideos';
import HeroSection from './components/HeroSection';
import BooksSlider from './components/BooksSlider';
import VideosSlider from './components/VideosSlider';
import { BookPreview, BookReader, VideoPlayer } from './components/Reader';
import './learn.css';

export default function LearnPage() {
  const { earnCoins, coins, spendCoins } = useCoin();
  const [currentView, setCurrentView] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [bookFilter, setBookFilter] = useState('all');
  const [videoFilter, setVideoFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [dismissedNewBadges, setDismissedNewBadges] = useState(() =>
    JSON.parse(localStorage.getItem('dismissedNewBadges')) || []
  );
  const [completedReads, setCompletedReads] = useState(() =>
    JSON.parse(localStorage.getItem('completedReads')) || []
  );
  const [purchasedBooks, setPurchasedBooks] = useState(() =>
    JSON.parse(localStorage.getItem('purchasedBooks')) || []
  );
  const [comments, setComments] = useState(() =>
    JSON.parse(localStorage.getItem('comments')) || {}
  );
  const [bookScroll, setBookScroll] = useState(0);
  const [videoScroll, setVideoScroll] = useState(0);

  useEffect(() => {
    localStorage.setItem('dismissedNewBadges', JSON.stringify(dismissedNewBadges));
  }, [dismissedNewBadges]);

  useEffect(() => {
    localStorage.setItem('completedReads', JSON.stringify(completedReads));
  }, [completedReads]);

  useEffect(() => {
    localStorage.setItem('purchasedBooks', JSON.stringify(purchasedBooks));
  }, [purchasedBooks]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const dismissNewBadge = (id, type) => {
    setDismissedNewBadges([...dismissedNewBadges, `${type}-${id}`]);
  };

  const getFilteredBooks = () => {
    let filtered = [...mockBooks];
    
    if (bookFilter === 'new') {
      filtered = filtered.filter(b => b.isNew && !dismissedNewBadges.includes(`book-${b.id}`));
    } else if (bookFilter === 'locked') {
      filtered = filtered.filter(b => b.locked && !purchasedBooks.includes(b.id));
    } else if (bookFilter === 'unlocked') {
      filtered = filtered.filter(b => !b.locked || purchasedBooks.includes(b.id));
    }
    
    if (bookFilter === 'newest') {
      filtered.sort((a, b) => b.createdAt - a.createdAt);
    } else if (bookFilter === 'oldest') {
      filtered.sort((a, b) => a.createdAt - b.createdAt);
    }
    
    return filtered;
  };

  const getFilteredVideos = () => {
    let filtered = [...mockVideos];
    
    if (videoFilter === 'new') {
      filtered = filtered.filter(v => v.isNew && !dismissedNewBadges.includes(`video-${v.id}`));
    }
    
    if (videoFilter === 'newest') {
      filtered.sort((a, b) => b.createdAt - a.createdAt);
    } else if (videoFilter === 'oldest') {
      filtered.sort((a, b) => a.createdAt - b.createdAt);
    }
    
    return filtered;
  };

  const selectBook = (book) => {
    setSelectedBook(book);
    setCurrentPage(0);
    if (!comments[`book-${book.id}`]) {
      setComments({
        ...comments,
        [`book-${book.id}`]: []
      });
    }
    const isUnlocked = !book.locked || purchasedBooks.includes(book.id);
    setCurrentView(isUnlocked ? 'reading' : 'preview');
  };

  const selectVideo = (video) => {
    setCurrentView('watching');
    setSelectedVideo(video);
    if (!comments[`video-${video.id}`]) {
      setComments({
        ...comments,
        [`video-${video.id}`]: []
      });
    }
  };

  const buyBook = (book) => {
    if (coins >= book.coins) {
      spendCoins(book.coins, `Purchased "${book.title}"`);
      setPurchasedBooks([...purchasedBooks, book.id]);
      setCurrentView('reading');
    }
  };

  const addComment = (text, type) => {
    const key = type === 'book' ? `book-${selectedBook.id}` : `video-${selectedVideo.id}`;
    const newComments = {
      ...comments,
      [key]: [...(comments[key] || []), {
        author: 'You',
        text,
        date: 'Just now'
      }]
    };
    setComments(newComments);
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedBook(null);
    setSelectedVideo(null);
    setCurrentPage(0);
  };

  const scrollSlider = (direction, type) => {
    const offset = 320;
    if (type === 'books') {
      setBookScroll(bookScroll + (direction === 'left' ? offset : -offset));
    } else {
      setVideoScroll(videoScroll + (direction === 'left' ? offset : -offset));
    }
  };

  if (currentView === 'preview' && selectedBook) {
    return (
      <BookPreview 
        book={selectedBook}
        onBack={goHome}
        coins={coins}
        onBuy={() => buyBook(selectedBook)}
        isLocked={selectedBook.locked && !purchasedBooks.includes(selectedBook.id)}
        onRead={() => {
          if (!selectedBook.locked || purchasedBooks.includes(selectedBook.id)) {
            setCurrentView('reading');
          }
        }}
      />
    );
  }

  if (currentView === 'reading' && selectedBook) {
    return (
      <BookReader 
        book={selectedBook}
        onBack={goHome}
        coins={coins}
        comments={comments[`book-${selectedBook.id}`] || []}
        onAddComment={(text) => addComment(text, 'book')}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  }

  if (currentView === 'watching' && selectedVideo) {
    return (
      <VideoPlayer 
        video={selectedVideo}
        onBack={goHome}
        coins={coins}
        comments={comments[`video-${selectedVideo.id}`] || []}
        onAddComment={(text) => addComment(text, 'video')}
      />
    );
  }

  return (
    <div className="learn-page">
      <HeroSection />
      
      <BooksSlider 
        books={getFilteredBooks()}
        bookFilter={bookFilter}
        onFilterChange={setBookFilter}
        onSelectBook={selectBook}
        dismissedNewBadges={dismissedNewBadges}
        onDismissNewBadge={dismissNewBadge}
        scroll={bookScroll}
        onScroll={(dir) => scrollSlider(dir, 'books')}
        purchasedBooks={purchasedBooks}
      />
      
      <VideosSlider 
        videos={getFilteredVideos()}
        videoFilter={videoFilter}
        onFilterChange={setVideoFilter}
        onSelectVideo={selectVideo}
        dismissedNewBadges={dismissedNewBadges}
        onDismissNewBadge={dismissNewBadge}
        scroll={videoScroll}
        onScroll={(dir) => scrollSlider(dir, 'videos')}
      />
    </div>
  );
}