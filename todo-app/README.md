# 📝 Aplicação TODO List - Angular 17

Uma aplicação moderna de lista de tarefas desenvolvida com Angular 17, com interface responsiva e funcionalidades avançadas.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** com título e descrição
- ✅ **Editar tarefas** existentes
- ✅ **Marcar como concluída** com checkbox
- ✅ **Excluir tarefas**
- ✅ **Filtrar tarefas** (Todas, Ativas, Concluídas)
- ✅ **Exportar dados** para arquivo JSON
- ✅ **Importar dados** de arquivo JSON
- ✅ **Persistência local** usando localStorage
- ✅ **Interface responsiva** para mobile e desktop
- ✅ **Design moderno** com gradientes e animações

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue para o diretório do projeto:
```bash
cd todo-app
```

2. Instale as dependências:
```bash
npm install
```

3. Execute a aplicação em modo de desenvolvimento:
```bash
npm start
```

4. Abra seu navegador e acesse `http://localhost:4200`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── todo-list/
│   │       ├── todo-list.component.ts
│   │       ├── todo-list.component.html
│   │       └── todo-list.component.scss
│   ├── models/
│   │   └── todo.model.ts
│   ├── services/
│   │   └── todo.service.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
└── styles.scss
```

## 🛠️ Tecnologias Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS** - Programação reativa
- **LocalStorage** - Persistência de dados

## 📊 Funcionalidades Detalhadas

### Gerenciamento de Tarefas
- **Adicionar**: Digite o título e opcionalmente uma descrição
- **Editar**: Clique no ícone de edição (✏️) para modificar
- **Concluir**: Marque o checkbox para marcar como concluída
- **Excluir**: Clique no ícone de lixeira (🗑️) para remover

### Filtros
- **Todas**: Mostra todas as tarefas
- **Ativas**: Mostra apenas tarefas não concluídas
- **Concluídas**: Mostra apenas tarefas concluídas

### Importação/Exportação
- **Exportar**: Salva todas as tarefas em um arquivo JSON
- **Importar**: Carrega tarefas de um arquivo JSON

### Persistência
- Os dados são automaticamente salvos no localStorage do navegador
- Os dados persistem entre sessões
- Backup e restauração via arquivos JSON

## 🎨 Design e UX

- **Interface moderna** com gradientes e sombras
- **Animações suaves** para melhor experiência do usuário
- **Responsivo** para dispositivos móveis e desktop
- **Acessível** com navegação por teclado
- **Feedback visual** para todas as ações

## 🔧 Comandos Úteis

```bash
# Executar em modo de desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Linting
npm run lint
```

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma issue no repositório.

---

**Desenvolvido com ❤️ usando Angular 17**
