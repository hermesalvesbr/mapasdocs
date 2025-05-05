---
title: Painel de Controle | Mapa Cultural
description: Documentação completa sobre o Painel de Controle da plataforma Mapas Culturais. Entenda a navegação, funcionalidades e estrutura da área principal do sistema.
head:
  - - meta
    - name: keywords
      content: painel de controle, mapa cultural, governo.app, agentes culturais, oportunidades, projetos, espaços, eventos
---

# Painel de Controle

O **Painel de Controle** é a página inicial e principal interface de navegação do usuário na plataforma **Mapas Culturais**. Seu objetivo é centralizar o acesso às informações e funcionalidades essenciais, como agentes, oportunidades, eventos, espaços e projetos.

## Estrutura do Painel de Controle

A interface do painel está dividida em três áreas principais:

1. **Menu lateral esquerdo**
2. **Área principal (dashboard)**
3. **Acesso rápido e ações recentes**

### 1. Menu Lateral Esquerdo

O menu lateral oferece navegação rápida por todas as seções da plataforma. Está organizado por categorias funcionais:

#### Menu do painel de controle
- **Painel de Controle**: Acesso à tela principal da plataforma.

#### Editais e oportunidades
- **Minhas oportunidades**: Exibe as oportunidades criadas ou gerenciadas pelo usuário.
- **Minhas inscrições**: Lista todas as inscrições realizadas pelo agente logado.
- **Minhas avaliações**: Acesso às avaliações feitas pelo usuário (quando aplicável).

#### Gerenciamento de entidades
- **Meus Agentes**: Lista e permite a criação ou edição dos agentes culturais vinculados ao usuário.
- **Meus Espaços**: Gerencia espaços culturais registrados.
- **Meus Eventos**: Permite criação, edição e visualização de eventos culturais.
- **Meus Projetos**: Acesso aos projetos culturais vinculados ao usuário.

#### Outras opções
- **Conta e Privacidade**: Configurações para troca de e-mail e senha.
- **Meus aplicativos**: Criação de uma integrações com [API REST](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api).

#### Administração (visível apenas para perfis com permissão)
- **Gestão de selos**: Ferramenta de gestão de selos culturais e certificações.
- **Gestão de usuários**: Administração de usuários da plataforma.
- **Funções de usuários**: Atribuição de papéis e permissões.

#### Finalização
- **Meu Perfil**: Acesso direto ao perfil do agente logado.
- **Sair**: Finaliza a sessão do usuário.

### 2. Área Principal (Dashboard)

Ao centro da tela, o painel principal apresenta um resumo numérico das entidades cadastradas e permite a criação de novos registros de forma rápida. Os blocos disponíveis são:

| Bloco           | Descrição                                                                 | Ação disponível  |
|------------------|---------------------------------------------------------------------------|------------------|
| **Agentes**      | Total de agentes culturais vinculados ao usuário                  | [+ Criar]        |
| **Oportunidades**| Total de oportunidades criadas pelo usuário             | [+ Criar]        |
| **Eventos**      | Total de eventos cadastrados pelo usuário                      | [+ Criar]        |
| **Espaços**      | Total de espaços culturais registrados pelo usuário                                   | [+ Criar]        |
| **Projetos**     | Total de projetos culturais vinculados ao usuário ou ao agente associado | [+ Criar]        |

Cada bloco apresenta o número atual de registros e oferece um botão `+Criar` que direciona diretamente ao formulário de criação do respectivo item, semelhante ao formulário que aparece na página de criação de cada entidade.

### 3. Editados Recentemente

Na parte inferior do painel central, a seção **Editados recentemente** exibe os últimos registros modificados pelo usuário. Cada item mostra:

- **Nome da entidade editada e sua imagem**
- **Data e hora da última modificação**
- **Descrição curta da entidade**
- **Botão "Acessar"**: Direciona à visualização pública ou privada da entidade
- **Botão "Editar"**: Acesso direto ao formulário de edição

### Acesso ao Perfil

No canto superior direito da área principal, há o botão `Acessar meu perfil`, que direciona à visualização e edição do perfil do agente logado.

> Use-o para manter as informações de cadastro do seu agente e dos agentes administrados sempre atualizadas.

## Gerenciando selos

A funcionalidade de **selos** no Mapa Cultural permite a criação e aplicação de identificadores simbólicos ou certificações a agentes, projetos, espaços ou outras entidades culturais.

Um selo é um reconhecimento oficial atribuído a entidades no Mapa Cultural. Cada página de entidade possui um filtro para exibir apenas aquelas oficialmente reconhecidas.

### Acesso à seção "Meus Selos"

Para acessar:

- Menu lateral → Administração → Gestão de Selos

Na tela `Meus selos`, o usuário poderá visualizar, criar e gerenciar todos os selos cadastrados por ele ou atribuídos ao seu perfil administrativo.

### Interface principal

A interface está organizada em cinco abas:

- **Publicados**: Selos já visíveis e aplicáveis.
- **Em rascunho**: Selos ainda não publicados.
- **Com permissão**: Selos gerenciados por outros usuários, mas acessíveis ao atual.
- **Arquivados**: Selos desativados ou descontinuados.
- **Lixeira**: Selos excluídos (recuperáveis dentro de um período configurado).

A busca por selos pode ser feita por palavras-chave. Os resultados podem ser ordenados por data de modificação ou outros critérios disponíveis.

### Criar um novo selo

1. Clique no botão `+ Criar selo`.
2. Preencha os campos obrigatórios:
   - **Nome** do selo
   - **Descrição curta** (até 400 caracteres)
3. Habilitar selo com validade` é opcional, apenas se o selo possuir data de expiração ou validade temporal, sendo necessário definir os meses.
4. Escolha entre:
   - **Criar e publicar**: o selo será imediatamente disponibilizado.
   - **Criar em rascunho**: o selo será salvo, mas não visível publicamente.
5. Clique em **Confirmar** para finalizar.

Uma vez criado, o selo poderá ser editado ou aplicado a entidades específicas (dependendo da permissão do usuário).

## Gerenciando usuários

A seção de **Gestão de Usuários** permite aos administradores do sistema visualizar, editar e gerenciar os usuários cadastrados na instância do Mapa Cultural. É voltada exclusivamente a perfis com permissão administrativa, como `saasSuperAdmin`, `Administrador` ou equivalentes definidos na instância.

### Acesso à seção

> Menu lateral → Administração → Gestão de Usuários

### Funcionalidades disponíveis

Na aba **Publicados**, são listados todos os usuários ativos no sistema. Cada entrada exibe:

- Nome e e-mail do usuário
- ID do sistema
- Funções atribuídas
- Botões de ação: **Excluir**, **Acessar perfil** e **Logar como usuário**

### Ações disponíveis por usuário

- **Adicionar função**: Permite atribuir uma função (papel) ao usuário. Clique em “Adicionar função”, selecione no menu suspenso a função desejada e confirme.
- **Excluir**: Remove o usuário do sistema (movendo para a lixeira, se ativada).
- **Logar como usuário**: Permite que o administrador atue temporariamente com a identidade do usuário, útil para suporte técnico ou auditoria.
- **Acessar**: Abre o perfil do usuário em modo de visualização administrativa.

### Filtro e ordenação

- **Buscar por palavras-chave**: Pesquisa por nome ou e-mail.
- **Filtrar por função**: Permite refinar a listagem com base em funções atribuídas.
- **Ordenar por**: Data de modificação, nome ou outro critério.

## Gerenciando funções de usuários

A seção **Funções de Usuários** permite a criação, edição e exclusão de papéis personalizados dentro da plataforma. Cada função define um conjunto de **permissões** que determinam o que o usuário pode visualizar, criar, editar, publicar ou excluir.

### Acesso à seção

> Menu lateral → Administração → Funções de usuários

### Visualização das funções existentes

A tela principal exibe:

- Nome da função
- ID e SLUG interno da função
- Botão para expandir e visualizar permissões associadas
- Ações disponíveis: **Editar**, **Excluir**

### Criar uma nova função de usuário

1. Clique em **“+ Criar nova função de usuário”**.
2. Preencha o campo **Nome** da função (ex: “Avaliador”, “Gestor de Projetos”, etc.).
3. Selecione as permissões desejadas, divididas por grupos:
   - **Usuários**: controle de contas, dados privados, alteração de senha, etc.
   - **Agentes**: criação, edição, aplicação de selos, visualização de dados, etc.
   - **Espaços**: controle sobre registros de espaços culturais.
   - Outros módulos (Eventos, Projetos, Oportunidades) podem