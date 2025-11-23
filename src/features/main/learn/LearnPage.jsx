
import "./learn.css";
import HeroSection from "./components/HeroSection";
import BooksSlider from "./components/BooksSlider";
import VideosSlider from "./components/VideosSlider";
import books from "./components/mockBooks";
import videos from "./components/mockVideos";


export default function LearnPage(){
    return(
        <main className="learn-page">
             <HeroSection />
               <div className="books-container">
               <BooksSlider books={books}/>
            </div>

            <div className="videos-container">
                <VideosSlider videos={videos} />
            </div>
          
        </main>
    );
}