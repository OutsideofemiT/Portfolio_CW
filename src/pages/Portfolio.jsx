import Project from '../components/Projects';

const projects = [
  {
    title: 'Employee Tracker',
    image: './assets/Employee_Tracker.gif',
    repoLink: 'https://github.com/OutsideofemiT/empTrack_10.git',
  },
  {
    title: 'MooLah Budget Calculator',
    image: './assets/images/MooLah_Budget_Calculator.gif',
    deployedLink: 'https://jimmykotter.github.io/MooLah/',
    repoLink: 'https://github.com/Jimmykotter/MooLah.git',
  },
  {
  title: 'Vehicle Builder',
  image: './assets/images/Vehicle_Builder.gif',
  repoLink: 'https://github.com/OutsideofemiT/Vehicle-Builder.git',
},

];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

