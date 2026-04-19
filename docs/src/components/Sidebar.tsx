interface SidebarProps {
  name: string;
  title: string;
  shortDesc: string;
  github: string;
  linkedin: string;
  email: string;
  activeSection: string;
  onNav: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'education', label: 'Educação' },
  { id: 'contact', label: 'Contato' },
];

export default function Sidebar({
  name, title, shortDesc, github, linkedin, email, activeSection, onNav,
}: SidebarProps) {

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
 <div className="sidebar-avatar">
  <img src={`${import.meta.env.BASE_URL}foto.jpg`} alt={name} />
</div>

        <p className="sidebar-name">{name}</p>
        <p className="sidebar-title">{title}</p>
        <p className="sidebar-desc">{shortDesc}</p>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <a href={github} target="_blank" rel="noopener noreferrer" className="sidebar-link" title="GitHub">
          <GithubIcon /> GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="sidebar-link" title="LinkedIn">
          <LinkedinIcon /> LinkedIn
        </a>
        <a href={email} className="sidebar-link" title="Email">
          <EmailIcon /> Email
        </a>
      </div>
    </aside>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
