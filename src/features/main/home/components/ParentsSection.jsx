export default function ParentsSection() {
  return (
    <section className="parents-section">
      <div className="parents-container">
        <h2 className="parents-title">👨‍👩‍👧 For Parents</h2>
        <p className="parents-subtitle">Monitor your child's learning journey</p>
        
        <div className="parents-benefits">
          <div className="parents-benefit card">
            <span className="parents-benefit__icon">✓</span>
            <p>Track learning progress and achievements</p>
          </div>
          <div className="parents-benefit card">
            <span className="parents-benefit__icon">✓</span>
            <p>Safe, kid-friendly educational platform</p>
          </div>
          <div className="parents-benefit card">
            <span className="parents-benefit__icon">✓</span>
            <p>No ads, no external links, no distractions</p>
          </div>
          <div className="parents-benefit card">
            <span className="parents-benefit__icon">✓</span>
            <p>Teach environmental responsibility</p>
          </div>
        </div>
      </div>
    </section>
  );
}
