import { useState, useEffect } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ProjectItem from './components/ProjectItem';
import EducationItem from './components/EducationItem';
import data from './data/content';

const SECTIONS = ['about', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout">
      <Sidebar
        name={data.name}
        title={data.title}
        shortDesc={data.shortDesc}
        github={data.github}
        linkedin={data.linkedin}
        email={data.email}
        activeSection={activeSection}
        onNav={scrollTo}
      />

      <main className="main">
        <div className="content">

          <Section id="about" label="Sobre">
            <div className="about-text">
              {data.about.map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </Section>

          <Section id="experience" label="Experiência">
            {data.experiences.map((exp, i) => (
              <ExperienceItem key={i} experience={exp} />
            ))}
          </Section>

          <Section id="projects" label="Projetos">
            <div className="projects-grid">
              {data.projects.map((project, i) => (
                <ProjectItem key={i} project={project} />
              ))}
            </div>
          </Section>

          <Section id="education" label="Educação & Certificações">
            <div className="education-list">
              {data.education.map((item, i) => (
                <EducationItem key={i} item={item} />
              ))}
            </div>
          </Section>

          <Section id="contact" label="Contato">
            <p className="contact-intro">
              Disponível para conversas sobre oportunidades, projetos ou colaborações.
              Prefiro direto ao ponto — me manda uma mensagem.
            </p>
            <div className="contact-links">
              {data.contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </a>
              ))}
            </div>
          </Section>

        </div>
      </main>
    </div>
  );
}
