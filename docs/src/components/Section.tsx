import type { ReactNode } from 'react';

interface Props {
  id: string;
  label: string;
  children: ReactNode;
}

export default function Section({ id, label, children }: Props) {
  return (
    <section id={id} className="section">
      <p className="section-label">{label}</p>
      {children}
    </section>
  );
}
