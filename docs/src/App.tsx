import { useState, useEffect } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ProjectItem from './components/ProjectItem';
import EducationItem from './components/EducationItem';
import ScrollToTop from './components/ScrollToTop';
import data from './data/content';

const SECTIONS = ['about', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [expExpanded, setExpExpanded] = useState(false);

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

  const visibleExperiences = data.experiences.slice(0, 2);
  const hiddenExperiences = data.experiences.slice(2);

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
            <div className="about-layout">
              {/* Texto sobre */}
              <div className="about-text">
                {data.about.map((paragraph, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>

              {/* Interesses ao lado */}
              <div className="interests">
                {data.interests.map((group) => (
                  <div key={group.label} className="interest-group">
                    <p className="interest-label">{group.label}</p>
                    <div className="tech-tags">
                      {group.items.map((item) => (
                        <span key={item} className="tech-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="experience" label="Experiência">
            {visibleExperiences.map((exp, i) => (
              <ExperienceItem key={i} experience={exp} />
            ))}
            {hiddenExperiences.length > 0 && (
              <div className={`exp-hidden ${expExpanded ? 'expanded' : ''}`}>
                {hiddenExperiences.map((exp, i) => (
                  <ExperienceItem key={i} experience={exp} />
                ))}
              </div>
            )}
            {hiddenExperiences.length > 0 && (
              <button
                className="exp-toggle"
                onClick={() => setExpExpanded(!expExpanded)}
              >
                {expExpanded ? <><ChevronUp /> Ver menos</> : <><ChevronDown /> Ver mais experiências</>}
              </button>
            )}
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
      <ScrollToTop />
    </div>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}