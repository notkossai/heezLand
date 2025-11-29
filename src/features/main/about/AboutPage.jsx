import './about.css';

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-hero">
        <h1>🌍 About Heez Land</h1>
        <p>Teaching Kids to Recycle and Save Our Planet</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Heez Land, we believe that education is the key to environmental change. 
            We create fun, interactive experiences for kids to learn about recycling, 
            sustainability, and how they can make a positive impact on our planet.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <ul className="about-list">
            <li>📚 Provide educational content about recycling and sustainability</li>
            <li>🎮 Create engaging games that teach eco-friendly practices</li>
            <li>🪙 Reward learning with coins and achievements</li>
            <li>🌱 Inspire kids to take action in their communities</li>
            <li>🌍 Build a global community of young environmental advocates</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Recycling Matters</h2>
          <p>
            Every year, millions of tons of waste end up in landfills, polluting our 
            soil and water. By recycling, we:
          </p>
          <ul className="about-list">
            <li>Save natural resources</li>
            <li>Reduce energy consumption</li>
            <li>Decrease pollution</li>
            <li>Create jobs in the recycling industry</li>
            <li>Protect habitats for wildlife</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <div className="about-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Learn</h3>
              <p>Read articles and watch videos about recycling</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Practice</h3>
              <p>Play games and complete challenges</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Earn</h3>
              <p>Collect coins and unlock achievements</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Share</h3>
              <p>Inspire others in your community</p>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>Join Our Community</h2>
          <p>Start your recycling journey today and help save our planet!</p>
          <button className="about-cta__button">Get Started 🌱</button>
        </section>
      </div>
    </main>
  );
}
