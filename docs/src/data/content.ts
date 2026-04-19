import type { SiteData } from '../types';

const data: SiteData = {
  name: 'Erick Rost',
  title: 'Software Developer · Business & Technology',
  shortDesc:
    'Construindo sistemas na interseção entre operação, dados e produto.',

  about: [
  `Atuo na interseção entre <strong>negócio e tecnologia</strong>, com foco em entender problemas reais e traduzi-los em soluções estruturadas. Minha base em processos fiscais e ERP me trouxe uma visão prática de como sistemas impactam diretamente operação, custos e tomada de decisão.`,

  `Tenho forte familiaridade com <strong>regras de negócio complexas</strong>, análise de dados e investigação de problemas. Isso se reflete na minha forma de trabalhar: priorizo clareza, consistência de dados e entendimento profundo antes de propor qualquer solução técnica.`,

  `Do ponto de vista técnico, trabalho com SQL (SQL Server e SAP HANA), integrações entre sistemas, análise de dados e estou evoluindo no desenvolvimento backend com Node.js e TypeScript, construindo APIs e aplicações orientadas a dados.`,

  `Meu interesse está em resolver problemas que não são apenas técnicos, mas que têm impacto real no negócio. Busco evoluir na construção de sistemas, integrações e soluções que reduzam complexidade operacional e aumentem confiabilidade.`,

  `<strong>Mais do que tecnologia, me interessa entender como e por que as coisas funcionam, mas como podem funcionar melhor.</strong>`
],

  interests: [
    {
      label: 'Stack',
      items: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'SAP HANA', 'Docker', 'REST APIs', 'SQL'],
    },
    {
      label: 'Explorando',
      items: ['.NET', 'Azure'],
    },
    {
      label: 'Interesses',
      items: ['Arquitetura de Microsserviços', 'Integração de Sistemas', 'Cloud Computing', 'DevOps'],
    },
  ],

  experiences: [
    {
      role: 'Analista de Sustentação SAP Business One',
      company: 'SPS Group · São José dos Campos, SP',
      period: 'Mar 2026 — Presente',
      description: `Atuação na sustentação de sistemas ERP com foco em SAP Business One, realizando análise de incidentes, troubleshooting e investigação de causa raiz em ambiente produtivo. Trabalho diretamente com consultas SQL em SQL Server e SAP HANA para validação e correção de dados, além de apoiar integrações entre sistemas utilizando JSON e APIs. A função exige forte entendimento de regras de negócio, especialmente em cenários fiscais e operacionais, garantindo consistência de dados e continuidade dos processos.`,
      tags: ['SAP Business One', 'JavaScript', 'API', 'SQL Server', 'SAP HANA', 'Troubleshooting', 'Integrações', 'JSON']
    },
    {
      role: 'Desenvolvedor Voluntário',
      company: 'Instituto Travessia · Remoto',
      period: 'Jan 2026 — Presente',
      description: `Atuo voluntariamente como desenvolvedor front-end, realizando manutenção, evolução e criação de aplicações web utilizando React.js, Next.js e TypeScript. Trabalho na construção e atualização de componentes com Styled-Components, além de documentar e versionar interfaces com Storybook, garantindo consistência, reutilização e qualidade do código.`,
      tags: ['React.js', 'Next.js', 'TypeScript', 'Styled-Components', 'API', 'JavaScript']
    },
    {
      role: 'Analista Fiscal Pleno',
      company: 'DGA Group · Remoto',
      period: 'Ago 2025 — Mar 2026',
      description: `Alocado no Grupo Sany, com foco na apuração de tributos e entrega de obrigações acessórias. Trabalho com SAP ECC e TaxOne, realizando parametrizações, conferências e análises de dados fiscais para garantir conformidade e eficiência nos processos. Aplicando conhecimentos em automação, análise de dados e integração de sistemas, contribuo para a otimização de rotinas fiscais e apoio na tomada de decisão estratégica. O desafio é lidar com a complexidade das regras fiscais, garantindo precisão e consistência em um ambiente de alta demanda e mudanças constantes.`,
      tags: ['SAP ECC', 'Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados', 'Python']
    },
    {
      role: 'Analista Fiscal Júnior',
      company: 'STS Consulting · São José dos Campos, SP',
      period: 'Jan 2025 — Ago 2025',
      description: `Responsável pela apuração de tributos nos regimes Lucro Real, Lucro Presumido e Simples Nacional, abrangendo PIS, COFINS, ICMS, ICMS-ST, IPI, DIFAL e DAS. Atuei na escrituração e conferência de documentos fiscais, análise de retenções na fonte (ISS, IRRF, CSRF e INSS) e emissão de guias de recolhimento. Realizei a entrega das obrigações acessórias SPED Fiscal, SPED Contribuições, EFD-Reinf e DCTFWeb, além de prestar consultorias pontuais a clientes sobre legislação, parametrizações e conformidade fiscal. Trabalhei com sistemas ERP como TOTVS Protheus, SAP B1, SAGE e K2, atuando na conferência de integrações e suporte a rotinas operacionais.`,
      tags: ['SAP Business One', 'TOTVS Protheus', 'SAGE', 'K2', 'Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados'] 
    },
        {
      role: 'Assistente Fiscal',
      company: 'STS Consulting · São José dos Campos, SP',
      period: 'Fev 2024 — Jan 2025',
      description: `Atuei na apuração de impostos nos regimes Lucro Presumido e Simples Nacional, compreendendo PIS, COFINS, ICMS, DIFAL e DAS, além da importação e conferência de lançamentos fiscais. Realizei a escrituração de documentos fiscais e faturas como NF-e, NFS e CT-e, bem como a análise de impostos retidos na fonte (ISS, IRRF, CSRF e INSS) e a emissão de guias e DARFs para pagamento. Fui responsável pela entrega das obrigações acessórias EFD-Reinf, SPED Fiscal, SPED Contribuições, DCTFWeb e DIRF, utilizando sistemas ERP como TOTVS Protheus, SAP B1, SAGE e K2.`,
      tags: ['SAP Business One', 'TOTVS Protheus', 'SAGE', 'Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados']
    },
        {
      role: 'Estagiário Fiscal',
      company: 'STS Consulting · São José dos Campos, SP',
      period: 'Jul 2023 — Fev 2024',
      description: `Realizei a escrituração de documentos fiscais e faturas, incluindo NF-e, NFS e CT-e, além da apuração de impostos retidos na fonte como ISS, IRRF, CSRF e INSS. Fui responsável pela emissão de guias de ISS e DARFs e pelo lançamento dos eventos R-2000 e R-4000 no EFD-Reinf.`,
      tags: ['Fiscal', 'Regras de Negócio', 'ERP', 'Análise de Dados', 'TOTVS Protheus']  
    }
  ],

  projects: [
    {
      name: 'INPE - AgriRS Lab',
      description: `O projeto ABP (Aprendizagem Baseada em Projeto) desenvolvido como atividade do 1° semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec Jacareí, tem como objetivo criar um website para o Laboratório de Sensoriamento Remoto Agrícola do INPE (AgriRS Lab). Contribuindo para manter as atividades e descobertas científicas atualizadas para a comunidade e promove a divulgação do laboratório para interessados em conhecer ou colaborar com o trabalho desenvolvido.`,
      tags: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Node.js', 'Express', 'REST API'],
      link: { label: 'GitHub', url: 'https://github.com/erickrost/AgriRS-Lab/tree/main' },
    },
    {
      name: 'Bancos de Dados em SIG: Análise Crítica de Práticas, Desafios e Potencial de Estudo',
      description: `Realizei uma revisão bibliográfica sistemática (2018–2024) em bases como IEEE, Scopus e ScienceDirect para analisar a eficácia da integração entre bancos de dados e Sistemas de Informações Geográficas (SIG). O estudo investigou desempenho, desafios técnicos e aplicabilidade em áreas como planejamento urbano, gestão ambiental e logística territorial. Os resultados destacaram a crescente demanda por soluções otimizadas de gerenciamento de dados espaciais e a necessidade de mais pesquisas aplicadas, especialmente no cenário brasileiro.`,
      tags: ['Pesquisa Acadêmica', 'Bancos de Dados', 'Sistemas de Informações Geográficas', 'Análise de Dados', 'Revisão Bibliográfica'],
      link: { label: 'Artigo', url: 'https://www.even3.com.br/anais/xviiienfocuninter/1234789-bancos-de-dados-em-sig--analise-critica-de-praticas-desafios-e-potencial-de-estudo/' },
    },
  ],
 
    education: [
    {
      type: 'education' as const,
      degree: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
      institution: 'Faculdade de Tecnologia de Jacareí (Fatec Jacareí)',
      period: 'Jul 2025 — Jul 2028',
    },
    {
      type: 'education' as const,
      degree: 'Tecnólogo em Gestão Financeira',
      institution: 'Unifatecie',
      period: 'Jan 2025 — Dez 2026',
    },
    {
      type: 'certification' as const,
      degree: 'English Certificate B2 - Upper Intermediate',
      institution: 'EF SET',
      period: 'Jan 2026',
    },
    {
      type: 'certification' as const,
      degree: 'IT Essentials',
      institution: 'Cisco Networking Academy',
      period: 'Dez 2025',
    },
  ],

  contact: [
    {
      label: 'Email',
      value: 'erickrosts@gmail.com',
      href: 'mailto:erickrosts@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/erick-rost',
      href: 'https://linkedin.com/in/erick-rost',
    },
    {
      label: 'GitHub',
      value: 'github.com/erickrost',
      href: 'https://github.com/erickrost',
    },
  ],

  github: 'https://github.com/erickrost',
  linkedin: 'https://linkedin.com/in/erick-rost',
  email: 'mailto:erickrosts@gmail.com',
};

export default data;
