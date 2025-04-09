# Guia de Documentação com VitePress

Bem-vindo ao guia de documentação do seu projeto utilizando o VitePress! Este guia foi criado para ajudar técnicos de informática iniciantes a adicionar imagens, vídeos e criar novas páginas de documentação de forma simples e prática.

---

## O que é o VitePress?

O VitePress é uma ferramenta leve e poderosa para criar sites de documentação estáticos. Ele utiliza Markdown para facilitar a escrita e permite personalizações avançadas com Vue.js.

---

## Como Adicionar Imagens

### Passo 1: Coloque a imagem no local correto
- Se a imagem for usada diretamente no Markdown, coloque-a na pasta `docs/public`. Por exemplo:
  ```
  /docs/public/minha-imagem.png
  ```

### Passo 2: Referencie a imagem no Markdown
- Use o caminho absoluto para imagens na pasta `public`:
  ```markdown
  ![Descrição da Imagem](/minha-imagem.png)
  ```

- Para imagens dentro da estrutura do projeto, use caminhos relativos:
  ```markdown
  ![Descrição da Imagem](./assets/imagem.png)
  ```

### Dica:
- Imagens menores que 4kb serão automaticamente convertidas para base64 no build de produção.

---

## Como Adicionar Vídeos

### Passo 1: Coloque o vídeo na pasta `public`
- Assim como as imagens, vídeos devem ser colocados na pasta `docs/public`. Por exemplo:
  ```
  /docs/public/meu-video.mp4
  ```

### Passo 2: Referencie o vídeo no Markdown
- Use a tag HTML `<video>` para exibir o vídeo:
  ```html
  <video controls>
    <source src="/meu-video.mp4" type="video/mp4">
    Seu navegador não suporta vídeos.
  </video>
  ```

---

## Como Criar Novas Páginas de Documentação

### Passo 1: Crie um arquivo Markdown
- Adicione um novo arquivo `.md` na pasta `docs`. Por exemplo:
  ```
  /docs/nova-pagina.md
  ```

### Passo 2: Adicione conteúdo no arquivo
- Escreva o conteúdo da página usando Markdown. Exemplo:
  ```markdown
  # Minha Nova Página

  Bem-vindo à nova página de documentação!
  ```

### Passo 3: Atualize a navegação
- Edite o arquivo de configuração `docs/.vitepress/config.js` para adicionar a nova página ao menu:
  ```javascript
  // filepath: /home/hermes/Projetos-linux/docs/.vitepress/config.js
  export default {
    themeConfig: {
      sidebar: [
        { text: 'Introdução', link: '/' },
        { text: 'Nova Página', link: '/nova-pagina' }
      ]
    }
  }
  ```

---

## Dicas Adicionais

- **Base URL**: Se o site for implantado em um subdiretório, configure a opção `base` no arquivo `docs/.vitepress/config.js`:
  ```javascript
  export default {
    base: '/meu-projeto/'
  }
  ```

- **Arquivos Estáticos**: Para arquivos como `robots.txt` ou ícones, coloque-os na pasta `public` e use caminhos absolutos.

- **Imagens Dinâmicas**: Para imagens cujo caminho depende de configurações, use o helper `withBase`:
  ```vue
  <script setup>
  import { withBase } from 'vitepress'
  </script>

  <template>
    <img :src="withBase('/logo.png')" />
  </template>
  ```

---

Com este guia, você está pronto para criar uma documentação incrível com o VitePress. Explore as possibilidades e aproveite a simplicidade desta ferramenta!
