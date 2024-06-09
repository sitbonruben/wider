import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faEdit, faCopy, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import '../css/Projects.css';

const Projects = () => {
  const [view, setView] = useState('grid');
  const [projects, setProjects] = useState([
    { id: 1, type: 'Creative', name: 'Creative Project 1', description: 'This is a creative project' },
    { id: 2, type: 'Website', name: 'Website Project 1', description: 'This is a website project' },
    { id: 3, type: 'Email', name: 'Email Project 1', description: 'This is an email project' },
    { id: 4, type: 'Social Post', name: 'Social Post Project 1', description: 'This is a social post project' },
    { id: 5, type: 'Video', name: 'Video Project 1', description: 'This is a video project' },
    // Add more projects as needed
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProject, setNewProject] = useState({ type: '', name: '', description: '' });

  const handleToggleView = () => {
    setView(view === 'grid' ? 'table' : 'grid');
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log('Edit project:', id);
  };

  const handleDuplicate = (id) => {
    // Implement duplicate functionality
    console.log('Duplicate project:', id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log('Delete project:', id);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCreateProject = () => {
    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    setNewProject({ type: '', name: '', description: '' });
    closeModal();
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        <div className="projects-actions">
          <button onClick={openModal} className="create-project-button">
            <FontAwesomeIcon icon={faPlus} /> New Project
          </button>
          <button onClick={handleToggleView} className="toggle-view-button">
            Toggle to {view === 'grid' ? 'Table' : 'Grid'} View
          </button>
        </div>
      </div>
      {view === 'grid' ? (
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <h3>{project.name}</h3>
                <div className="dropdown">
                  <button className="dropdown-toggle">
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                  <div className="dropdown-menu">
                    <button onClick={() => handleEdit(project.id)}>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button onClick={() => handleDuplicate(project.id)}>
                      <FontAwesomeIcon icon={faCopy} /> Duplicate
                    </button>
                    <button onClick={() => handleDelete(project.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                </div>
              </div>
              <p>Type: {project.type}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className="projects-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.type}</td>
                <td>{project.description}</td>
                <td>
                  <div className="dropdown">
                    <button className="dropdown-toggle">
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </button>
                    <div className="dropdown-menu">
                      <button onClick={() => handleEdit(project.id)}>
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                      <button onClick={() => handleDuplicate(project.id)}>
                        <FontAwesomeIcon icon={faCopy} /> Duplicate
                      </button>
                      <button onClick={() => handleDelete(project.id)}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Create Project">
        <h2>Create New Project</h2>
        <form className="create-project-form">
          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              value={newProject.type}
              onChange={(e) => setNewProject({ ...newProject, type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Creative">Creative</option>
              <option value="Website">Website</option>
              <option value="Email">Email</option>
              <option value="Social Post">Social Post</option>
              <option value="Video">Video</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              id="projectName"
              type="text"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription">Description</label>
            <textarea
              id="projectDescription"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
          </div>
          <button type="button" onClick={handleCreateProject} className="save-project-button">
            Save Project
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Projects;
