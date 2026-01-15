# 📁 Estrutura do Projeto App Motorista

## 🎯 Visão Geral

O **App Motorista** é uma aplicação mobile desenvolvida com **Expo**, **React Native** e **TypeScript**. O projeto está organizado em pastas bem definidas, cada uma com uma responsabilidade específica.

---

## 📂 Estrutura Geral

```
app-motorista/
├── 📄 Arquivos de Configuração
├── 📁 app/                  # Telas e rotas
├── 📁 components/           # Componentes reutilizáveis
├── 📁 constants/            # Constantes (cores, fontes)
├── 📁 hooks/                # React Hooks customizados
├── 📁 assets/               # Imagens e ícones
└── 📁 scripts/              # Scripts auxiliares
```

---

## 📄 Arquivos de Configuração (Raiz)

### **package.json**
- **Para quê**: Gerenciar dependências do projeto e scripts npm
- **Contém**: Lista de pacotes, versões, comandos (npm start, build, etc)
- **Quando mexer**: Adicionar bibliotecas novas ou mudar scripts

### **app.json**
- **Para quê**: Configuração principal do Expo
- **Contém**: Nome do app, versão, ícones, splash screen, configurações Android/iOS/Web
- **Quando mexer**: Mudar nome, ícone, versão ou customizar plataformas

### **tsconfig.json**
- **Para quê**: Configurar TypeScript (linguagem que usamos)
- **Contém**: Opções de compilação, path aliases (@/), regras de tipo
- **Quando mexer**: Adicionar novos aliases ou mudar strictness

### **eslint.config.js**
- **Para quê**: Configurar o linter (verifica qualidade do código)
- **Contém**: Regras de formatação e estilo de código
- **Quando mexer**: Adicionar/remover regras de validação

### **README.md**
- **Para quê**: Documentação inicial
- **Contém**: Como instalar, usar, recursos úteis
- **Quando mexer**: Adicionar info sobre o projeto

---

## 📁 Pasta `/app` - Telas e Rotas da Aplicação

**Para quê**: Armazenar todas as telas do app

**Como funciona**: Cada arquivo .tsx nesta pasta vira uma rota automaticamente (file-based routing)

### Estrutura

```
app/
├── _layout.tsx              # Layout raiz - envolve todas as telas
├── modal.tsx                # Tela modal - aparece sobre outras
└── (tabs)/                  # Abas na parte inferior
    ├── _layout.tsx          # Layout das abas
    ├── index.tsx            # Tela Home
    └── explore.tsx          # Tela Explore
```

### Cada Arquivo

| Arquivo | O que é | Para quê | Rota |
|---------|---------|----------|------|
| `_layout.tsx` | Layout raiz especial | Envolve todas as telas, define tema | - |
| `modal.tsx` | Tela modal | Aparece sobre outras, pode fechar | `/modal` |
| `(tabs)/_layout.tsx` | Layout das abas | Define barra de abas inferior | - |
| `(tabs)/index.tsx` | Tela home | Página inicial do app | `/` |
| `(tabs)/explore.tsx` | Tela explore | Segunda tela/exploração | `/explore` |

---

## 🎨 Pasta `/components` - Componentes Reutilizáveis

**Para quê**: Armazenar componentes React usados em várias telas

**Benefício**: Evita código duplicado, centraliza estilos

### Estrutura

```
components/
├── external-link.tsx        # Link que abre em navegador
├── haptic-tab.tsx           # Botão aba com vibração
├── hello-wave.tsx           # Componente de saudação
├── parallax-scroll-view.tsx # Scroll com efeito visual
├── themed-text.tsx          # Texto com tema (claro/escuro)
├── themed-view.tsx          # Container com tema
└── ui/                      # Componentes UI genéricos
    ├── collapsible.tsx      # Componente expansível
    ├── icon-symbol.tsx      # Renderiza ícones
    └── icon-symbol.ios.tsx  # Ícones otimizados iOS
```

### Cada Componente

| Componente | Para quê |
|-----------|----------|
| `themed-text.tsx` | Texto que muda cor conforme tema (claro/escuro) |
| `themed-view.tsx` | Container que muda cor de fundo conforme tema |
| `haptic-tab.tsx` | Botão de aba que vibra quando clica |
| `parallax-scroll-view.tsx` | ScrollView com efeito visual parallax |
| `external-link.tsx` | Abre URLs em navegador do celular |
| `collapsible.tsx` | Componente que expande/recolhe conteúdo |
| `icon-symbol.tsx` | Renderiza ícones do app |
| `icon-symbol.ios.tsx` | Versão ícones otimizada para iOS |

---

## 🎯 Pasta `/constants` - Constantes e Valores Fixos

**Para quê**: Armazenar valores que não mudam (cores, fontes, etc)

**Benefício**: Centralizar valores, fácil mudar em um único lugar

### Estrutura

```
constants/
└── theme.ts                 # Todas as cores e fontes
```

### O que contém

| Arquivo | Para quê |
|---------|----------|
| `theme.ts` | Define todas as **cores** do app (modo claro e escuro) e **fontes** por plataforma |

**Exemplo**: Se quer mudar cor de fundo, muda aqui. Todas as telas usam essa cor automaticamente.

---

## 🪝 Pasta `/hooks` - React Hooks Customizados

**Para quê**: Armazenar lógica reutilizável em forma de hooks

**Benefício**: Lógica isolada, fácil de reutilizar em vários componentes

### Estrutura

```
hooks/
├── use-color-scheme.ts      # Detecta tema claro ou escuro
├── use-color-scheme.web.ts  # Versão para web
└── use-theme-color.ts       # Retorna cor para o tema atual
```

### Cada Hook

| Hook | Para quê |
|------|----------|
| `use-color-scheme.ts` | Detecta se está em modo claro ou escuro (do sistema) |
| `use-color-scheme.web.ts` | Mesma coisa, mas otimizado para web |
| `use-theme-color.ts` | Retorna a cor correta baseado no tema atual |

---

## 🖼️ Pasta `/assets` - Imagens e Ícones

**Para quê**: Armazenar todos os recursos visuais

### Estrutura

```
assets/
└── images/                  
    ├── icon.png             # Ícone principal do app
    ├── favicon.png          # Ícone na aba (web)
    ├── android-icon-foreground.png    # Ícone Android - elemento principal
    ├── android-icon-background.png    # Ícone Android - fundo
    ├── android-icon-monochrome.png    # Ícone Android - versão simples
    └── splash-icon.png      # Ícone da tela de carregamento
```

### Cada Imagem

| Arquivo | Para quê |
|---------|----------|
| `icon.png` | Ícone na home screen do celular |
| `favicon.png` | Ícone na aba do navegador (versão web) |
| `android-icon-foreground.png` | Ícone Android - cores/elementos principais |
| `android-icon-background.png` | Ícone Android - fundo |
| `android-icon-monochrome.png` | Ícone Android - versão preto e branco |
| `splash-icon.png` | Imagem que aparece enquanto carrega |

---

## 🛠️ Pasta `/scripts` - Scripts Auxiliares

**Para quê**: Armazenar scripts Node.js para tarefas automatizadas

### Estrutura

```
scripts/
└── reset-project.js         # Script de reset
```

### O que contém

| Script | Para quê |
|--------|----------|
| `reset-project.js` | Move código de exemplo e cria pasta `app/` vazia para começar do zero |

**Usar com**: `npm run reset-project`

**Quando usar**: Depois de estudar o exemplo, ou quer começar do zero

---

## 📊 Tabela Rápida - O Que Mexer Quando

| Quero fazer... | Mexo em... |
|---|---|
| Adicionar nova tela | `/app/` (criar arquivo .tsx) |
| Criar componente reutilizável | `/components/` (criar arquivo .tsx) |
| Mudar cores ou fontes | `/constants/theme.ts` |
| Adicionar lógica reutilizável | `/hooks/` (criar arquivo .ts com hook) |
| Adicionar imagem/ícone | `/assets/images/` |
| Mudar nome/versão do app | `app.json` |
| Instalar pacote novo | `package.json` (depois `npm install`) |
| Mudar regras TypeScript | `tsconfig.json` |
| Mudar regras de código | `eslint.config.js` |

---

## ✨ Resumo Rápido

| Pasta | Contém | Para quê |
|-------|--------|----------|
| `/app/` | Telas (.tsx) | Criar/editar telas e rotas |
| `/components/` | Componentes React | Componentes reutilizáveis |
| `/constants/` | Valores fixos | Cores, fontes, constantes |
| `/hooks/` | React Hooks | Lógica reutilizável |
| `/assets/` | Imagens, ícones | Recursos visuais |
| `/scripts/` | Scripts Node.js | Tarefas automatizadas |

---