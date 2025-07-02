import cdwImage from "../assets/images/cdw.jpg";

const AboutMe = () => {
  return (
    <section className="about-section">
      <img src={cdwImage} alt="Developer Avatar" className="profile-image" />
      <div className="introduction">
      <p>Hi, I’m Carmen Wheeler—a full-stack web developer with a passion for blending creativity, structure, and strategy into digital experiences that connect. I work across the stack with equal enthusiasm, building thoughtful user interfaces, scalable backends, and intentional systems that support both users and teams.</p>

     <p>My background in customer service management sharpened my instincts for empathy, clarity, and collaborative problem-solving—skills I now channel into every piece of code, every brand touchpoint, and every client interaction.</p>

     <p>I’m also a strong believer in the power of good design and better workflows. Whether I’m crafting digital/AI art, fine-tuning performance, or developing branding systems that tell stories, I bring a unique mix of logic, intuition, and a deep respect for meaningful work.</p>

     <p>Let’s build something intentional, impactful, and a little bit bold.</p>
      </div>
    </section>
  );
};

export default AboutMe;



