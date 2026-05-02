import "./Roadmap.css";

export default function Roadmap() {
  const levels = [
    {
      level: "Level 1",
      title: "Python Libraries",
      items: [
        ["NumPy", "Work with numerical data and arrays."],
        ["Pandas", "Organize, clean, and analyze data using data frames."],
        ["Matplotlib", "Create basic charts and visualizations."],
        ["Seaborn", "Build clearer statistical visualizations."],
      ],
    },
    {
      level: "Level 2",
      title: "R Basics",
      items: [["R Basics", "Learn basic syntax and simple data operations in R."]],
    },
    {
      level: "Level 3",
      title: "Tidyverse & dplyr",
      items: [
        ["Tidyverse Basics", "Use R tools for data cleaning and analysis."],
        ["dplyr Basics", "Filter, arrange, select, and summarize data."],
      ],
    },
    {
      level: "Level 4",
      title: "R Visualization",
      items: [["ggplot2 Basics", "Create charts and graphs using R."]],
    },
  ];

  return (
    <div className="roadmap-page">
      <section className="hero">
        <div className="hero-text">
          <h1>Your Journey to Data Science Mastery Starts Here</h1>
          <p>Unlock your potential with a structured learning roadmap.</p>
          <button>Enroll Now</button>
        </div>

        <div className="hero-box"></div>
      </section>

      <h2 className="roadmap-title">COURSE ROADMAP</h2>

      <div className="timeline">
        {levels.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="card">
              <p className="level">{item.level}</p>
              <h3>{item.title}</h3>

              <div className="lesson-list">
                {item.items.map((lesson, i) => (
                  <div className="lesson-item" key={i}>
                    <h4>{lesson[0]}</h4>
                    <p>{lesson[1]}</p>
                  </div>
                ))}
              </div>

              <button>Start Level</button>
              <button className="secondary">Take Skill Test</button>
            </div>
          </div>
        ))}
      </div>
           <section className="roadmap-end">
        <h2>Ready to Start Your Data Journey?</h2>
        <p>Choose your level and begin learning step by step with DataPath.</p>
        <button>Start Now</button>
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