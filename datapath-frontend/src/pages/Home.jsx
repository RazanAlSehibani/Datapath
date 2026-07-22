import "./Home.css";
import heroImage from "../assets/home-hero.jpg";

export default function Home() {
  const benefits = [
    {
      icon: "✦",
      title: "Expert-Led Curriculum",
      description:
        "Learn through structured content designed to build your data skills step by step.",
    },
    {
      icon: "⌘",
      title: "Hands-on Projects",
      description:
        "Apply what you learn through practical exercises and real-world data projects.",
    },
    {
      icon: "↗",
      title: "Career Advancement",
      description:
        "Build valuable skills that prepare you for opportunities in data science and analytics.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discover Your Path",
      description:
        "Explore the roadmap and choose the learning level that matches your current skills.",
    },
    {
      number: "02",
      title: "Learn and Practice",
      description:
        "Complete short lessons, practical exercises, and projects at your own pace.",
    },
    {
      number: "03",
      title: "Build Your Skills",
      description:
        "Track your progress and develop the skills needed for a career in data.",
    },
  ];

  const testimonials = [
    {
      initials: "AJ",
      name: "Alice Johnson",
      role: "Data Science Student",
      text: "DataPath helped me understand data science in a clear and organized way. The roadmap made it easy to know what to learn next.",
    },
    {
      initials: "BW",
      name: "Bob Williams",
      role: "Junior Data Analyst",
      text: "The lessons are simple, practical, and easy to follow. I especially enjoyed applying what I learned through the projects.",
    },
    {
      initials: "CD",
      name: "Carol Davis",
      role: "Machine Learning Student",
      text: "DataPath provides a clear learning journey. It helped me improve my skills and become more confident while working with data.",
    },
  ];

  const goToRoadmap = () => {
    window.location.href = "/roadmap";
  };

  const goToSignup = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-container home-hero-content">
          <div className="home-hero-text">
            <span className="home-label">START YOUR DATA JOURNEY</span>

            <h1>
              Unlock Your Potential
              <br />
              with DataPath
            </h1>

            <p>
              Build your data science and analytics skills through a clear
              roadmap, practical lessons, and hands-on learning.
            </p>

            <div className="home-hero-buttons">
              <button className="home-primary-button" onClick={goToRoadmap}>
                Explore Courses
              </button>

              <button className="home-outline-button" onClick={goToRoadmap}>
                View Roadmap
              </button>
            </div>
          </div>

          <div className="home-hero-image-wrapper">
            <img
              src={heroImage}
              alt="Students learning data science"
              className="home-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-section-heading">
            <span>WHY DATAPATH?</span>
            <h2>Everything You Need to Start Learning</h2>
            <p>
              Learn through a clear and practical experience designed for
              beginners in data science.
            </p>
          </div>

          <div className="home-benefits-grid">
            {benefits.map((benefit, index) => (
              <article className="home-benefit-card" key={index}>
                <div className="home-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section home-how-section">
        <div className="home-container">
          <div className="home-section-heading">
            <span>HOW IT WORKS</span>
            <h2>Your Learning Journey in Three Steps</h2>
            <p>
              Follow a simple path that helps you learn, practice, and improve.
            </p>
          </div>

          <div className="home-steps-grid">
            {steps.map((step, index) => (
              <article className="home-step-card" key={index}>
                <div className="home-step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-section home-testimonials-section">
        <div className="home-container">
          <div className="home-section-heading">
            <span>STUDENT EXPERIENCES</span>
            <h2>What Students Say About DataPath</h2>
            <p>
              See how DataPath helps learners build confidence and improve
              their data skills.
            </p>
          </div>

          <div className="home-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <article className="home-testimonial-card" key={index}>
                <div className="home-stars">★★★★★</div>

                <p className="home-testimonial-text">
                  “{testimonial.text}”
                </p>

                <div className="home-testimonial-user">
                  <div className="home-user-avatar">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-statistics-grid">
            <div className="home-statistic-card">
              <strong>500+</strong>
              <span>Students</span>
            </div>

            <div className="home-statistic-card">
              <strong>30+</strong>
              <span>Lessons</span>
            </div>

            <div className="home-statistic-card">
              <strong>4</strong>
              <span>Learning Levels</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-container">
          <span>START LEARNING TODAY</span>

          <h2>Ready to Transform Your Data Skills?</h2>

          <p>
            Create your account and begin your learning journey with DataPath.
          </p>

          <button className="home-cta-button" onClick={goToSignup}>
            Create Your Free Account
          </button>
        </div>
      </section>


          <footer className="roadmap-footer">
        <div className="roadmap-footer-content">
          <div>
            <h3>DataPath</h3>
            <p>Helping you master data science step by step.</p>
          </div>

          <div className="roadmap-footer-links">
            <span>Home</span>
            <span>Roadmap</span>
            <span>Login</span>
            <span>Sign up</span>
          </div>
        </div>

        <div className="roadmap-footer-bottom">
          © 2026 DataPath. All rights reserved.
        </div>
      </footer>
    </div>
);
}

