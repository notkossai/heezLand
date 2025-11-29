export default function HeroSection() {
  return (
    <section className="quiz-hero">
      <div className="quiz-hero__content">
        <h1 className="quiz-hero__title">🎯 Quiz Land</h1>
        <p className="quiz-hero__subtitle">
          Test your recycling knowledge and personality! 
          Earn coins with every quiz you complete.
        </p>
      </div>
      <div className="quiz-hero__decoration">
        <div className="quiz-hero__icon quiz-hero__icon--1">📚</div>
        <div className="quiz-hero__icon quiz-hero__icon--2">🎯</div>
        <div className="quiz-hero__icon quiz-hero__icon--3">🌟</div>
      </div>
    </section>
  );
}
