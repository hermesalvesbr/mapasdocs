import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mapa Cultural',
  titleTemplate: ':title | Governo.app',
  description: 'Plataforma Colaborativa de Gestão Cultural para municípios e estados brasileiros',
  lang: 'pt-BR',
  head: [
    ['meta', { name: 'author', content: 'Governo.app' }],
    ['meta', { name: 'keywords', content: 'mapa cultural, gestão cultural, governo digital, cultura, eventos culturais' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Mapa Cultural | Governo.app' }],
    ['meta', { property: 'og:description', content: 'Plataforma Colaborativa de Gestão Cultural para municípios e estados brasileiros' }],
    ['meta', { property: 'og:image', content: '/governo.app.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Mapa Cultural | Governo.app' }],
    ['meta', { name: 'twitter:description', content: 'Plataforma Colaborativa de Gestão Cultural para municípios e estados brasileiros' }],
    ['meta', { name: 'twitter:image', content: '/governo.app.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página',
    },
    outlineTitle: 'Nesta página',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guia do Usuário', link: '/guia-de-usuario' },
      { text: 'Oportunidades', link: '/oportunidades' },
      { text: 'Governo.App', link: '/governo-app' },
    ],

    sidebar: [
      {
        text: 'Guia do Usuário',
        items: [
          { text: 'Introdução', link: '/guia-de-usuario' },
          { text: 'Agentes Culturais', link: '/agentes-culturais' },
          { text: 'Espaços Culturais', link: '/espacos-culturais' },
          { text: 'Eventos', link: '/eventos' },
          { text: 'Projetos', link: '/projetos' },
          {
            text: 'Oportunidades',
            items: [
              { text: 'Geral', link: '/oportunidades' },
              { text: 'PNAB', link: '/oportunidade-pnab' }
            ]
          },
          { text: 'Painel de controle', link: '/painel-de-controle' },
        ],
      },
      {
        text: 'Sobre',
        items: [
          { text: 'Governo.App', link: '/governo-app' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mapasculturais/mapasculturais' },
    ],
  },
})
