import cdwImage from "../assets/images/cdw.jpg";

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={cdwImage} alt="Developer Avatar" className="profile-image" />
      <div className="introduction">
        <p>
          Hello! I'm Carmen Wheeler, a dedicated full-stack web developer in training, currently honing my skills at SMU University Software Development Bootcamp. My journey into web development has been fueled by a passion for creating dynamic and user-friendly applications. 
          
          Through various class projects, I've gained hands-on experience with technologies such as React, JavaScript, and Node.js.
        </p>

        <p>
          Before diving into the world of coding, I built a solid foundation in customer service management. This experience has equipped me with essential soft skills like communication, problem-solving, and teamwork, which I seamlessly integrate into my development process. I believe that a great developer not only understands technology but also empathizes with users' needs and expectations.
        </p>

        <p>
          In addition to web development, I have a passion for digital/AI art. This creative outlet allows me to explore new ideas and bring a unique artistic perspective to my projects.
        </p>

        <p>Thank you for visiting my portfolio. I look forward to connecting and collaborating on exciting opportunities!</p>
      </div>
    </section>
  );
};

export default AboutMe;


