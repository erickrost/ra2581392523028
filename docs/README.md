# Portfolio — Erick Rodrigues

Portfólio pessoal com React + TypeScript + Vite.
Design minimalista dark, sidebar fixa, responsivo.

---

## Rodar localmente

```bash
npm install
npm run dev
```
Acesse: http://localhost:5173

---

## Personalizar conteúdo

**Todo o conteúdo está em um único arquivo:**

```
src/data/content.ts
```

Campos disponíveis: `name`, `title`, `shortDesc`, `about[]`, `experiences[]`, `projects[]`, `contact[]`, `github`, `linkedin`, `email`.

Os campos `description` das experiências e projetos suportam HTML inline (ex: `<strong>`).

---

## Estrutura de pastas

```
src/
├── components/
│   ├── Sidebar.tsx         sidebar fixa com nav e links sociais
│   ├── Section.tsx         wrapper de seção com label
│   ├── ExperienceItem.tsx  card de experiência
│   └── ProjectItem.tsx     card de projeto
├── data/
│   └── content.ts          ← EDITE AQUI
├── types/
│   └── index.ts            tipos TypeScript
├── App.tsx                 layout + scroll spy
├── main.tsx                entry point
└── index.css               estilos globais com CSS variables
```

---

## Deploy no GitHub Pages

### Automático (GitHub Actions)

O arquivo `.github/workflows/deploy.yml` já está configurado.
Cada push na branch `main` gera um deploy automático.

```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

No GitHub: **Settings → Pages → Branch: gh-pages**

URL: `https://SEU-USUARIO.github.io/SEU-REPO/`

### Manual

```bash
npm install --save-dev gh-pages
npm run deploy
```

### Domínio customizado

Crie `public/CNAME` com seu domínio:
```
seusite.dev
```

---

## Build

```bash
npm run build   # gera dist/
npm run preview # preview do build
```
