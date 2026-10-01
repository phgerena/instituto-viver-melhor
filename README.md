# Instituto Viver Melhor

Projeto front-end desenvolvido para a disciplina de Desenvolvimento Front-End.

O Instituto Viver Melhor é uma organização fictícia voltada para projetos sociais nas áreas de esportes, educação, meio ambiente e alimentação.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- SweetAlert2
- LocalStorage

## Funcionalidades

- Navegação entre as páginas por meio de uma SPA.
- Exibição dinâmica dos projetos sociais.
- Formulário para cadastro de voluntários.
- Validação dos campos do formulário.
- Armazenamento dos dados no LocalStorage.
- Mensagem de confirmação utilizando SweetAlert2.
- Melhorias de acessibilidade para formulários e navegação por teclado.

## Acessibilidade

Foram implementadas melhorias de acessibilidade, incluindo:

- Uso de elementos semânticos do HTML.
- Associação entre `label` e campos de formulário.
- Organização dos campos com `fieldset` e `legend`.
- Uso de `aria-label` na navegação principal.
- Uso de `aria-describedby` para fornecer instruções adicionais nos campos de CPF, telefone e CEP.
- Uso de `:focus-visible` para facilitar a identificação do elemento selecionado durante a navegação por teclado.
- Texto alternativo em imagens.

## Estrutura do projeto

```text
Projeto ONG/
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   ├── ong.jpg
│   └── ong.png
├── js/
│   ├── formulario.js
│   ├── projetos.js
│   └── script.js
├── .gitignore
└── README.md
```

## Como executar o projeto localmente

1. Instale o Visual Studio Code.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server.
4. Abra o arquivo `html/index.html`.
5. Clique em **Go Live** no Visual Studio Code.
6. O projeto será aberto no navegador através de um servidor local.

Não é necessário instalar dependências com npm, pois o projeto utiliza HTML, CSS e JavaScript diretamente no navegador.

## Controle de versão

O projeto utiliza Git e GitHub para controle de versões.

O fluxo de desenvolvimento foi organizado utilizando:

- `main`: versão estável do projeto.
- `develop`: integração das alterações antes da versão estável.
- `feature/*`: desenvolvimento isolado de novas funcionalidades e melhorias.

As alterações são registradas por meio de commits semânticos. Também são utilizados Issues, Milestones e Pull Requests para organizar e acompanhar o desenvolvimento.

## Versionamento

O projeto utiliza versionamento semântico no formato:

`MAJOR.MINOR.PATCH`

A versão `v1.0.0` representa a primeira versão estável registrada do projeto.

## Manutenção

Para realizar uma nova alteração:

1. Atualize a branch `develop`.
2. Crie uma nova branch `feature/*` a partir da `develop`.
3. Desenvolva e teste a alteração.
4. Registre a alteração com um commit semântico.
5. Envie a branch para o GitHub.
6. Abra um Pull Request para a `develop`.
7. Revise e integre a alteração após os testes.