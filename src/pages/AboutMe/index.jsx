import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faAws,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faBrain, faCloud, faPenNib, faDumbbell, faGuitar } from '@fortawesome/free-solid-svg-icons';

function calculateCurrentAge() {
  const pastDate = new Date(1991, 5, 10);
  const now = new Date();
  let years = now.getFullYear() - pastDate.getFullYear();

  if (
    now.getMonth() < pastDate.getMonth() ||
    (now.getMonth() === pastDate.getMonth() && now.getDate() < pastDate.getDate())
  ) {
    years--;
  }

  return years;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PersonalData() {
  return (
    <section id='personal-data'>
      <img src="/me.jpg" alt="Profile" className="profile-pic" />
      <div className="profile-info">
        <h1>Diogo Rolo</h1>
        <p>🌍 Earth, Orbit 3</p>
        <p>
          Full-stack developer • Instructor • Cloud dabbler ☁️
        </p>
      </div>
    </section>
  );
}

function Highlights() {
  const facts = [
    { icon: faCode, text: 'Full-stack developer', color: '#4ea1ff' }, // tech blue
    { icon: faBrain, text: 'Always learning something new', color: '#ff9f40' }, // orange
    { icon: faCloud, text: 'AWS Certified Cloud Practitioner', color: '#61dafb' }, // AWS/React cyan
    { icon: faDumbbell, text: 'Brazilian Jiu-Jitsu blue belt 🥋', color: '#4ade80' }, // green
    { icon: faPenNib, text: 'Getting back into drawing 🎨', color: '#f472b6' }, // pink
    { icon: faGuitar, text: 'Music addict — check my listening page 🎧', color: '#a78bfa' }, // purple
  ];

  return (
    <section className='profile-section'>
      <h2>Highlights</h2>
      <div className="highlights-grid">
        {facts.map((fact, index) => (
          <div className="highlight-card">
            <FontAwesomeIcon
              icon={fact.icon}
              className="highlight-icon"
              style={{ color: fact.color }}
            />
            <span> {fact.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProfessionalBio() {
  return (
    <section className="profile-section">
      <h2>Who am I?</h2>
      <p>
        A software developer who has mostly been teaching programming bootcamps since 2019.
      </p>
      <p>
        Over these years I've become versed in <strong>Java</strong>, <strong>JavaScript</strong> (browser & Node.js),
        <strong> React</strong>, <strong>HTML/CSS</strong>, and relational databases.
      </p>
      <p>
        Between teaching, I've joined development teams where I tested my full-stack JS skills
        and explored <strong>AWS</strong> and <strong>DevOps</strong>.
      </p>
      <p>
        I guess I enjoy being a jack of all trades! 🃏😉
      </p>
    </section >
  );
}

function Skills() {
  const skills = [
    { name: 'Java', icon: faJava },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'HTML/CSS', icon: faHtml5 },
    { name: 'AWS', icon: faAws },
    { name: 'SQL', icon: faDatabase },
    { name: 'Docker', icon: faDocker },
  ];

  return (
    <motion.section
      className="profile-section"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={fadeIn}
            transition={{ duration: 0.4 }}
          >
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span> {skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function PersonalInterests() {
  return (
    <motion.section
      className="profile-section"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Outside the Code</h2>
      <p>
        When I'm not writing or teaching code, I'm on the mats training
        <strong> Brazilian Jiu-Jitsu</strong> 🥋 — currently a humble blue belt.
      </p>
      <p>
        Lately I've also been trying to get back into <strong>reading</strong> and <strong>drawing</strong> (who knows,
        I might end up adding sections about those hobbies here at some point in the future!)
      </p>
      <p>
        Music is a huge part of my life, too. You can check what I've been listening to on the
        <a href="/music" className="inline-link"> Stuff I Listen To</a> page 🎧.
      </p>
      <p>
        At the end of the day, I'm just trying to keep learning, stay curious, and build things that feel meaningful.
      </p>
    </motion.section>
  );
}

export default function Details() {
  return (
    <>
      <PersonalData />
      <Highlights />
      <ProfessionalBio />
      <Skills />
      <PersonalInterests />
    </>
  );
}
