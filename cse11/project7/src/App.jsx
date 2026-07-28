import "./App.css";

const departments = [
  {
    name: "Computer Science & Engineering",
    description: "Focuses on programming, software engineering, AI, and data systems.",
    highlights: ["AI & ML Lab", "Full Stack Development", "Cloud Computing"],
  },
  {
    name: "Electronics & Communication",
    description: "Covers embedded systems, communication networks, and VLSI design.",
    highlights: ["IoT Projects", "Digital Systems", "Signal Processing"],
  },
  {
    name: "Mechanical Engineering",
    description: "Builds strong foundations in design, manufacturing, and thermal systems.",
    highlights: ["CAD/CAM Lab", "Robotics", "Heat Transfer"],
  },
  {
    name: "Civil Engineering",
    description: "Prepares students for structural design, surveying, and infrastructure planning.",
    highlights: ["Survey Lab", "Structural Analysis", "Smart Cities"],
  },
];

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Greenfield Institute of Technology</p>
        <h1>Department Information Portal</h1>
        <p className="hero-text">
          Welcome to our institute website. Explore academic departments,
          learning focus areas, and the facilities that support student growth.
        </p>

        <div className="hero-stats" aria-label="Institute highlights">
          <article>
            <strong>4</strong>
            <span>Core Departments</span>
          </article>
          <article>
            <strong>30+</strong>
            <span>Faculty Members</span>
          </article>
          <article>
            <strong>15</strong>
            <span>Specialized Labs</span>
          </article>
        </div>
      </section>

      <section className="content-grid" aria-labelledby="dept-heading">
        <div className="section-heading">
          <p className="eyebrow">Departments</p>
          <h2 id="dept-heading">Academic divisions at a glance</h2>
        </div>

        <div className="department-list">
          {departments.map((department) => (
            <article className="department-card" key={department.name}>
              <h3>{department.name}</h3>
              <p>{department.description}</p>
              <ul>
                {department.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div>
          <p className="eyebrow">Admissions & Enquiry</p>
          <h2>Shape your future with us</h2>
        </div>
        <p>
          Contact the institute office for course details, department wise
          intake, and campus visit information.
        </p>
      </section>
    </main>
  );
}