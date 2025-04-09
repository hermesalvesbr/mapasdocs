# Documentação do Mapa Cultural - Governo.app

Bem-vindo à documentação do projeto Mapa Cultural da Governo.app! Este projeto utiliza o VitePress para criar uma documentação completa e otimizada para SEO da plataforma de gestão cultural.

## Sobre o Projeto

O Mapa Cultural é uma plataforma colaborativa para gestão cultural que conecta artistas, gestores e público à cultura local. Permite o mapeamento de agentes culturais, espaços, eventos e a gestão de editais de forma integrada e transparente.

## Como Executar o Projeto

Para iniciar o desenvolvimento local:

```bash
# Instalar dependências
npm install # ou bun install

# Iniciar servidor de desenvolvimento
npm run docs:dev # ou bun run docs:dev

# Gerar build de produção
npm run docs:build # ou bun run docs:build

# Pré-visualizar a build
npm run docs:preview # ou bun run docs:preview
```

## Estrutura do Projeto

```
mapasdocs/
├── vitepress/            # Diretório principal da documentação
│   ├── .vitepress/       # Configurações do VitePress
│   ├── public/           # Arquivos estáticos (imagens, etc.)
│   ├── index.md          # Página inicial
│   ├── guia-de-usuario.md
│   ├── agentes-culturais.md
│   ├── espacos-culturais.md
│   └── ...               # Outras páginas de documentação
├── package.json
└── README.md             # Este arquivo
```

## VitePress: Visão Geral

O VitePress é um gerador de sites estáticos otimizado para criar documentação técnica, com suporte para Markdown e componentes Vue. É rápido, leve e altamente configurável.

## Configuração de SEO

O projeto utiliza configurações avançadas de SEO para melhorar o posicionamento nos mecanismos de busca.

### Configuração Global de SEO

Configurações gerais de SEO são definidas no arquivo `.vitepress/config.mjs`:

```javascript
export default defineConfig({
  title: 'Mapa Cultural',
  titleTemplate: ':title | Governo.app', // Adiciona "| Governo.app" a todos os títulos
  description: 'Plataforma Colaborativa de Gestão Cultural',
  lang: 'pt-BR',
  head: [
    ['meta', { name: 'author', content: 'Governo.app' }],
    ['meta', { name: 'keywords', content: 'mapa cultural, gestão cultural, governo digital' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // Mais meta tags...
  ],
})
```

### SEO por Página

Para otimizar o SEO de cada página individualmente, use o frontmatter no início dos arquivos Markdown:

```markdown
---
title: Título Otimizado da Página
description: Descrição detalhada com palavras-chave relevantes (150-160 caracteres)
head:
  - - meta
    - name: keywords
      content: palavra-chave1, palavra-chave2, palavra-chave3
  - - meta
    - property: og:title
      content: Título para Compartilhamento nas Redes Sociais
  - - meta
    - property: og:description
      content: Descrição para compartilhamento em redes sociais
---
```

## Guia de Conteúdo

### Como Adicionar Imagens

1. **Coloque a imagem na pasta correta**:
   - Coloque imagens na pasta `vitepress/public/`, por exemplo:
     ```
     /vitepress/public/minha-imagem.png
     ```

2. **Referencie a imagem no Markdown**:
   - Use caminho absoluto para imagens na pasta `public`:
     ```markdown
     ![Descrição da Imagem](/minha-imagem.png)
     ```

   - Para imagens em subpastas:
     ```markdown
     ![Descrição da Imagem](/subpasta/imagem.png)
     ```

**Dica**: Imagens menores que 4kb são automaticamente convertidas para base64 na build de produção.

### Como Adicionar Vídeos

1. **Salve o vídeo na pasta pública**:
   - Coloque vídeos na pasta `vitepress/public/`, por exemplo:
     ```
     /vitepress/public/meu-video.mp4
     ```

2. **Insira o vídeo na página**:
   - Use a tag HTML `<video>` dentro do arquivo Markdown:
     ```html
     <video controls width="100%">
       <source src="/meu-video.mp4" type="video/mp4">
       Seu navegador não suporta reprodução de vídeo.
     </video>
     ```

3. **Para vídeos do YouTube**:
   ```html
   <iframe
     width="560"
     height="315"
     src="https://www.youtube.com/embed/CÓDIGO_DO_VÍDEO"
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen>
   </iframe>
   ```

### Como Criar Novas Páginas na Documentação

1. **Crie um arquivo Markdown**:
   - Adicione um novo arquivo `.md` na pasta `vitepress/`. Por exemplo:
     ```
     /vitepress/nova-pagina.md
     ```

2. **Inclua frontmatter com SEO**:
   - Comece o arquivo com frontmatter para otimização de SEO:
     ```markdown
     ---
     outline: deep
     title: Título da Página | Governo.app
     description: Descrição detalhada para SEO com palavras-chave relevantes
     head:
       - - meta
         - name: keywords
           content: palavra-chave1, palavra-chave2, palavra-chave3
     ---

     # Título Principal da Página

     Conteúdo da página...
     ```

3. **Atualize a navegação**:
   - Edite o arquivo `.vitepress/config.mjs` para incluir a página na barra lateral:
     ```javascript
     sidebar: [
       {
         text: 'Categoria',
         items: [
           { text: 'Página Existente', link: '/pagina-existente' },
           { text: 'Nova Página', link: '/nova-pagina' }
         ]
       }
     ]
     ```

---

## Dicas Adicionais

- **Base URL**: Se o site for implantado em um subdiretório, configure a opção `base` no arquivo `.vitepress/config.mjs`:
  ```javascript
  export default defineConfig({
    base: '/mapa-cultural/',
    // outras configurações...
  })
  ```

- **Arquivos Estáticos**: Arquivos como `robots.txt`, favicon e imagens gerais devem ser colocados na pasta `vitepress/public/`.

- **Melhorias de SEO Adicionais**:
  - Adicione um `sitemap.xml` na pasta `public` para melhorar a indexação pelos mecanismos de busca
  - Considere incluir meta tags específicas para redes sociais em páginas importantes
  - Mantenha títulos e descrições únicos e relevantes para cada página

- **Imagens Dinâmicas**: Para imagens cujo caminho depende de configurações, use o helper `withBase`:
  ```vue
  <script setup>
  import { withBase } from 'vitepress'
  </script>

  <template>
    <img :src="withBase('/governo.app.png')">
  </template>
  ```

---

Com este guia, sua equipe terá todas as informações necessárias para continuar desenvolvendo e expandindo a documentação do Mapa Cultural, mantendo sempre a presença da marca "Governo.app" e as melhores práticas de SEO em todas as páginas!
