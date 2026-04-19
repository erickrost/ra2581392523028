import type { Experience } from '../types';

interface Props {
  experience: Experience;
}

export default function ExperienceItem({ experience }: Props) {
  return (
    <div className="experience-item">
      <div className="exp-header">
        <span className="exp-role">{experience.role}</span>
        <span className="exp-period">{experience.period}</span>
      </div>
      <p className="exp-company">{experience.company}</p>
      <p
        className="exp-description"
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
      <div className="tech-tags">
        {experience.tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
