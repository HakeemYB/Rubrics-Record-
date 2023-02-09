import React, { useState, useEffect } from 'react';


const Project = () =>{
  const [project, setProject] = useState({ name: '', description: '' });
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

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
    setProjects({ name: '', description: '' });
  };

  const deleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
    setSelectedProject({});
  };

  const selectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      
      <h1>this is the summary of grade VI</h1>
       <table  align='center'>
      <tbody>
        <tr>
        <th>Name</th>
        <th>description </th>
      <th>Delete</th>
<th>View</th>
        </tr>
      
      
        {projects.map((project, index) => (
          
            
          <tr key={project.name}>
          <td>{project.name}</td>
         
          <td> {project.description}</td>
            <td><ul onClick={() => deleteProject(index)}>🗑️</ul></td>
            <td><button onClick={() => selectProject(project)}>View Profile</button></td>
            
          </tr>
        ))}
        </tbody>
      </table>
      {selectedProject.name ? (
        <ProjectProfile project={selectedProject} />
      ) : (
        <div>No Project selected</div>
      )}
      <input
        type="text"
        placeholder="Enter Project name"
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

function ProjectProfile({ project }) {
  return (
    <div>
      <h3>{project.name}'s Profile:</h3>
      
      <p>Course: {project.description}</p>
    </div>
  );
}

export default Project;