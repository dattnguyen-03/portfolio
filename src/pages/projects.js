export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Claim Management System</h3>
          <div className="project-content">
            <p className="project-description">
              A comprehensive project management platform featuring:
            </p>
            <ul className="project-features">
              <li>📋 Project and task management</li>
              <li>💰 Employee salary and claims processing</li>
              <li>👥 Team collaboration tools</li>
              <li>📊 Real-time project progress tracking</li>
            </ul>
            <div className="project-links">
              <a 
                href="https://claim-website-rho.vercel.app/" 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Demo
              </a>
              <a 
                href="#" 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>        
          <div className="project-content">
            <p className="project-description">
              A comprehensive project management platform featuring:
            </p>
            
            <div className="project-links">
              <a 
                href="#" 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Demo
              </a>
              <a 
                href="#" 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
          </div>
          </div>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </div>
      </div>
    </section>
  );
}
