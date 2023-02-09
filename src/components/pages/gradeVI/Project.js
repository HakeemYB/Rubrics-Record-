import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState({ name: '', description: '' });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    setProjects([...projects, project]);
    setProject({ name: '', description: '' });
  };

  const deleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <div>

      <table>
        <tbody>
          <tr>
            <td>Project Name</td>
            <td>Description</td>
          </tr>
          
             
        {projects.map((project, index) => (
          <tr key={project.name}>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td><button onClick={() => deleteProject(index)}>Delete</button></td> 
            
            <td><Link to="/ClassVI">View Details</Link></td>
         </tr>
        ))}
    
      
          
        </tbody>
      </table>
      <input
        type="text"
        placeholder="Enter project name"
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter project description"
        value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
      />
      <button onClick={addProject}>Add Project</button>
    
    </div>
  );
}

function ProjectDetails({ match, projects }) {
  const project = projects[match.params.index];

  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default Project;