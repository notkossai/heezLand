
import "./learn.css";

export default function LearnPage(){
    return(
        <main className="learn-page">
            <h1>Learn Land</h1>
            <p>You can learn here everything about recycling 
               by reading, watching 
            </p>

            <div className="vdContainer">
                <h2 className="title">Videos</h2>
            </div>
            <div className="booksContainer">
                <h2 className="title">Books</h2>
            </div>
        </main>
    );
}