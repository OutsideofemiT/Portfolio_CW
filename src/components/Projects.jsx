import PropTypes from 'prop-types';

const Project = ({ title, image, deployedLink, repoLink }) => {
  const isVideo = image.endsWith('.mp4'); // Check if file is a video

  return (
    <div className="project">
      {isVideo ? (
  <video width="300" height="200" autoPlay loop muted playsInline>
    <source src={image} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
) : (
  <img src={image} alt={title} width="300" height="200" />
)}


      <h3>{title}</h3>

      {/* ✅ Wrap the links inside a div */}
      <div className="project-links">
        {deployedLink && (
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          View GitHub Repository
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string, // Made optional
  repoLink: PropTypes.string.isRequired,
};

export default Project;
