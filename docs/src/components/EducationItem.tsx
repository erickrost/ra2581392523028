import type { Education } from '../types';

interface Props {
  item: Education;
}

export default function EducationItem({ item }: Props) {
  return (
    <div className="education-item">
      <div className="education-left">
        <span className={`education-badge ${item.type}`}>
          {item.type === 'education' ? 'Formação' : 'Certificação'}
        </span>
      </div>
      <div className="education-right">
        <div className="education-header">
          <span className="education-degree">{item.degree}</span>
          <span className="education-period">{item.period}</span>
        </div>
        <p className="education-institution">{item.institution}</p>
        {item.description && (
          <p className="education-description">{item.description}</p>
        )}
      </div>
    </div>
  );
}
