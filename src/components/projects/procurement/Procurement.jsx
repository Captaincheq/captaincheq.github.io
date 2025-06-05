import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Procurement() {
  const navigate = useNavigate();

  const backToProjects = () => {
    navigate('/'); // navigate to home route
    // Wait a tick then scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="procurement-page">
      <button onClick={backToProjects} className="back-button">
        ← Back to Projects
      </button>
      <h1>Procurement Project</h1>
      {/* Your content */}
    </div>
  );
}
