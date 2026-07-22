import { useState } from "react";
import "./Lesson.css";

export default function Lesson() {
  const [activeSection, setActiveSection] = useState(2);
  const [activeTab, setActiveTab] = useState("Overview");

  const courseSections = [
    {
      title: "Introduction to DataPath",
      duration: "15 min",
      completed: true,
    },
    {
      title: "Setting Up Your Environment",
      duration: "20 min",
      completed: true,
    },
    {
      title: "Data Integration Fundamentals",
      duration: "12 min",
      description:
        'Brief description of "Data Integration Fundamentals". Covering essential concepts for data integration and transformation.',
    },
    {
      title: "Data Transformation Techniques",
      duration: "18 min",
    },
    {
      title: "Building Your First Data Pipeline",
      duration: "25 min",
      locked: true,
    },
    {
      title: "Monitoring and Optimization",
      duration: "10 min",
      locked: true,
    },
  ];

  const tabs = ["Overview", "Notes", "Resources", "Practice Mini Tasks"];

  return (
    <div className="lesson-page">
      {/* Header */}
      <header className="lesson-header">
        <div className="header-left">
  <div className="lesson-heading">
    <p>Mastering Data Engineering</p>
    <h1>Lesson 3: Data Integration Fundamentals</h1>
  </div>
</div>

        <div className="header-actions">
          <button className="header-button secondary-button">
            <span>←</span>
            Previous Lesson
          </button>

          <button className="header-button complete-button">
            Mark as Complete
            <span>✓</span>
          </button>

          <button className="header-button secondary-button">
            Next Lesson
            <span>→</span>
          </button>

          <div className="small-progress">
            <span />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="lesson-main">
        <section className="lesson-content">
          {/* Video */}
          <div className="video-card">
            <div className="video-screen">
              <div className="network-decoration">
                <span className="network-dot dot-one" />
                <span className="network-dot dot-two" />
                <span className="network-dot dot-three" />
                <span className="network-dot dot-four" />
                <span className="network-dot dot-five" />
              </div>

              <h2>
                Data Integration Fundamentals: Unlocking Data
                <br />
                Insights
              </h2>
            </div>

            <div className="video-controls">
              <div className="control-buttons">
                <button aria-label="Play">▷</button>
                <button aria-label="Previous">◁◁</button>
                <button aria-label="Next">▷▷</button>
                <button aria-label="Volume">♩</button>

                <div className="volume-slider">
                  <span />
                </div>
              </div>

              <div className="video-time">0:30 / 12:45</div>

              <div className="video-progress">
                <div className="video-progress-filled" />
                <div className="video-progress-circle" />
              </div>

              <div className="video-options">
                <button aria-label="Settings">⚙</button>
                <button aria-label="Full screen">⛶</button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav className="lesson-tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                className={activeTab === tab ? "active-tab" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Tab content */}
          <div className="lesson-information">
            {activeTab === "Overview" && (
              <>
                <h2>Lesson: Data Warehousing Fundamentals</h2>

                <p>
                  This lesson introduces the core concepts of data warehousing,
                  distinguishing it from traditional databases. You will learn
                  about the architecture, key components, and the benefits of
                  implementing a data warehouse for business intelligence.
                </p>

                <h3>Learning Objectives:</h3>

                <ul>
                  <li>
                    Understand the definition and purpose of a data warehouse.
                  </li>
                  <li>
                    Identify the main architectural components of a data
                    warehouse.
                  </li>
                  <li>Differentiate between OLTP and OLAP systems.</li>
                  <li>
                    Explain the characteristics of data in a data warehouse
                    (subject-oriented, integrated, time-variant, non-volatile).
                  </li>
                </ul>
              </>
            )}

            {activeTab === "Notes" && (
              <div className="empty-tab-content">
                <h2>Lesson Notes</h2>
                <textarea placeholder="Write your notes about this lesson..." />
                <button className="save-notes-button">Save Notes</button>
              </div>
            )}

            {activeTab === "Resources" && (
              <div className="empty-tab-content">
                <h2>Lesson Resources</h2>
                <p>Download the lesson slides and additional learning files.</p>

                <button className="resource-button">
                  Download Lesson Slides
                </button>
              </div>
            )}

            {activeTab === "Practice Mini Tasks" && (
              <div className="empty-tab-content">
                <h2>Practice Mini Tasks</h2>
                <p>
                  Complete short exercises to practice the concepts covered in
                  this lesson.
                </p>

                <button className="resource-button">Start Practice</button>
              </div>
            )}
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="lesson-sidebar">
          <div className="outline-section">
            <h2>Course Outline</h2>

            <div className="course-outline">
              {courseSections.map((section, index) => (
                <div
                  className={`outline-item ${
                    activeSection === index ? "active-outline-item" : ""
                  }`}
                  key={section.title}
                >
                  <button
                    type="button"
                    className="outline-header"
                    onClick={() =>
                      setActiveSection(
                        activeSection === index ? null : index
                      )
                    }
                  >
                    <div className="outline-title">
                      {section.completed && (
                        <span className="completed-icon">✓</span>
                      )}

                      <span>{section.title}</span>
                    </div>

                    <div className="outline-details">
                      <span>{section.duration}</span>

                      {section.locked && (
                        <span className="lock-icon">♙</span>
                      )}

                      <span className="arrow-icon">
                        {activeSection === index ? "⌃" : "⌄"}
                      </span>
                    </div>
                  </button>

                  {activeSection === index && section.description && (
                    <div className="outline-body">
                      <p>{section.description}</p>

                      <button className="continue-button">
                        Continue Lesson
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress card */}
          <div className="progress-card">
            <h2>Overall Course Progress</h2>

            <div className="course-progress-bar">
              <span />
            </div>

            <p>60% Complete</p>
          </div>

          {/* Help card */}
          <div className="help-card">
            <h2>Need Help?</h2>

            <p>
              Our instructors are here to guide you. Feel free to reach out
              with any questions or issues you encounter.
            </p>

            <button>Contact Instructor</button>
            <button>Visit Support Forum</button>
          </div>
        </aside>
      </main>
    </div>
  );
}