# AppStreamerIonic

Aplicativo em Ionic para consultar um catálogo demonstrativo de filmes, séries e atores. Cada item abre uma tela com informações adicionais, e as listas permitem marcar favoritos.

[![Angular 20](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![Ionic 8](https://img.shields.io/badge/Ionic-8-3880FF?logo=ionic&logoColor=white)](https://ionicframework.com/)
[![TypeScript 5.9](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> O projeto apresenta informações de catálogo; não reproduz filmes ou séries. Os dados estão definidos no próprio código e não são obtidos de uma API.

## Demonstração

O repositório ainda não contém capturas de tela ou uma demonstração pública. As imagens disponíveis em `src/assets/` são recursos da aplicação, não screenshots das telas. Capturas reais podem ser adicionadas futuramente para documentar a interface.

## Funcionalidades

- Navegação entre as seções **Filmes**, **Séries** e **Atores**.
- Exibição de informações de catálogo, como título, data, duração ou temporadas, gêneros e classificação.
- Abertura de uma tela de detalhes para cada item.
- Marcação de filmes, séries e atores como favoritos, com confirmação e mensagem de retorno.
- Exibição de cartazes carregados de URLs do The Movie Database (TMDb).

Os registros são listas estáticas nos componentes. A marcação de favoritos é mantida apenas em memória durante o uso da aplicação: não há persistência em banco de dados ou armazenamento local.

## Tecnologias

| Categoria | Tecnologias |
| --- | --- |
| Interface | Angular 20, Ionic 8, HTML e SCSS |
| Linguagem | TypeScript 5.9 |
| Aplicativo multiplataforma | Capacitor 8 |
| Bibliotecas | RxJS 7, Ionicons 7 |
| Desenvolvimento e testes | Angular CLI, ESLint, Karma e Jasmine |

Não foram identificados serviço de back-end, banco de dados, autenticação ou integração com API. Os cartazes usam endereços de imagem do TMDb; o projeto não consulta uma API do serviço.

## Organização do projeto

- [`src/app/tabs/`](src/app/tabs/) — estrutura de navegação por abas.
- [`src/app/tab1/`](src/app/tab1/) — listagem de filmes.
- [`src/app/tab2/`](src/app/tab2/) — listagem de séries.
- [`src/app/tab3/`](src/app/tab3/) — listagem de atores.
- [`src/app/filme-detalhe/`](src/app/filme-detalhe/), [`src/app/serie-detalhe/`](src/app/serie-detalhe/) e [`src/app/atores-detalhe/`](src/app/atores-detalhe/) — telas de detalhes.
- [`src/app/model/`](src/app/model/) — interfaces TypeScript dos dados de filmes, séries e atores.
- [`src/environments/`](src/environments/) — configuração de ambiente de desenvolvimento e produção.
- [`src/assets/`](src/assets/) — recursos estáticos da aplicação.
- [`angular.json`](angular.json) — configurações de build, execução, testes e lint.
- [`capacitor.config.ts`](capacitor.config.ts) — configuração do Capacitor.

As telas de detalhe recebem o item selecionado por meio do estado de navegação do Angular Router.

## Instalação e execução

### Pré-requisitos

- Node.js e npm em versões compatíveis com Angular 20.
- Git, para clonar o repositório.

### Passos

```bash
git clone https://github.com/DiegoOLiveiraCamargo/AppStreamerIonic.git
cd AppStreamerIonic
npm ci
npm start
```

O servidor de desenvolvimento do Angular estará disponível no endereço informado pelo terminal (normalmente `http://localhost:4200`).

### Build, testes e lint

```bash
npm run build
npm test
npm run lint
```

O build está configurado para gerar os arquivos em `www/`. Não há variáveis de ambiente próprias do projeto identificadas na configuração atual.

## Aspectos técnicos

A aplicação usa módulos e rotas lazy-loaded para organizar as abas e as telas de detalhe. Os modelos tipados descrevem os dados apresentados, que atualmente são definidos diretamente nas páginas; os favoritos alteram esses objetos em memória.

O repositório não documenta desafios técnicos enfrentados nem aprendizados individuais. Por isso, esta seção descreve apenas decisões e características observáveis no código.

## Créditos e colaboração

Não há documentação no repositório que esclareça se o projeto foi desenvolvido individualmente, em equipe ou como atividade acadêmica. A autoria e eventuais contribuições individuais precisam de confirmação.

## Contato

- GitHub: [Diego Oliveira Camargo](https://github.com/DiegoOLiveiraCamargo)
- LinkedIn: [Diego Oliveira Camargo](https://www.linkedin.com/in/diegooliveiracamargo/)
