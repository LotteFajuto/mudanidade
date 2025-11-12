# 🌱 Muda.nidade

**A mudança que só acontece em comunidade**

Uma plataforma web para conectar voluntários, projetos sociais e organizações que fazem a diferença no Brasil.

---

## 📋 Sobre o Projeto

Muda.nidade é uma plataforma digital dedicada à divulgação de projetos sustentáveis e sociais no Brasil. O objetivo é dar visibilidade a projetos transformadores e conectar pessoas que queiram colaborar com causas que realmente importam.

### Funcionalidades Principais

- 🏠 **Página Inicial**: Feed com posts de projetos, missões diárias e destaques
- 👤 **Perfil de Usuário**: Acompanhamento de conquistas, badges e coleções
- 🏢 **Perfil de Organização**: Informações detalhadas sobre instituições parceiras
- 🗺️ **Mapa de Projetos**: Visualização geográfica de projetos pelo Brasil
- 🤝 **Voluntariado**: Informações e conexões com oportunidades de voluntariado
- 🔍 **Busca e Filtros**: Encontre projetos por tags, localização e categorias

---

## 🚀 Como Usar

### Pré-requisitos

Você precisa apenas de um navegador web moderno (Chrome, Firefox, Safari, Edge) para usar este site.

### Instalação

1. **Baixe ou clone o projeto** para o seu computador

2. **Estrutura de arquivos necessária**:
```
tcc/
├── index.html
├── landing.html
├── perfil.html
├── projetos.html
├── voluntariado.html
├── organizacao.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── imagens/
│   └── background.png
└── README.md
```

### Como Abrir o Site

#### Opção 1: Abrir diretamente no navegador (Mais Simples)

1. Navegue até a pasta do projeto no seu computador
2. Clique duas vezes no arquivo `landing.html` ou `index.html`
3. O site abrirá no seu navegador padrão

#### Opção 2: Usar o Visual Studio Code (Recomendado)

1. Abra o Visual Studio Code
2. Vá em `File → Open Folder` e selecione a pasta do projeto
3. Instale a extensão **"Live Server"** (clique em Extensions no menu lateral esquerdo)
4. Clique com o botão direito em qualquer arquivo HTML
5. Selecione "Open with Live Server"
6. O site abrirá automaticamente no navegador com recarregamento automático

#### Opção 3: Usar Python (se você tem Python instalado)

1. Abra o PowerShell ou Prompt de Comando
2. Navegue até a pasta do projeto:
```bash
cd "C:\Users\annam\OneDrive\Área de Trabalho\tcc"
```
3. Execute um dos comandos:
   - Python 3: `python -m http.server 8000`
   - Python 2: `python -m SimpleHTTPServer 8000`
4. Abra o navegador e acesse: `http://localhost:8000`

---

## 📄 Páginas do Site

### 1. **landing.html** - Página de Entrada
- Hero banner com login
- Apresentação da plataforma
- Estatísticas de impacto
- Depoimentos de usuários

### 2. **index.html** - Página Principal (Dashboard)
- Feed de posts de projetos
- Missões diárias
- Carrossel de voluntários
- Destaques de projetos
- Editor de posts

### 3. **perfil.html** - Perfil do Usuário
- Informações do usuário
- Badges e conquistas
- Missões diárias
- Coleções (favoritos, participei, voluntariado)

### 4. **projetos.html** - Página de Projetos
- Lista de projetos cadastrados
- Mapa interativo do Brasil
- Filtros por categoria e localização
- Busca por tags
- Cards de projetos com informações

### 5. **organizacao.html** - Perfil de Organização
- Exemplo: BEM RECICLAGEM
- Informações institucionais
- Galeria de imagens
- Seção "Sobre Nós"
- Contatos
- Projetos relacionados

### 6. **voluntariado.html** - Página de Voluntariado
- Informações sobre voluntariado
- Instituições parceiras (Atados)
- Tipos de voluntariado disponíveis
- Seção "Sobre a criadora"

---

## 🎨 Personalização

### Cores do Tema

As cores principais estão definidas no arquivo `css/style.css`:

```css
:root {
    --primary-blue: #2c3e50;      /* Azul escuro principal */
    --secondary-blue: #34495e;    /* Azul escuro secundário */
    --orange: #ff8c42;            /* Laranja (cor de destaque) */
    --dark-orange: #e67e22;       /* Laranja escuro */
    --light-gray: #ecf0f1;        /* Cinza claro */
}
```

Para mudar as cores, edite esses valores no arquivo `css/style.css`.

### Adicionar Suas Próprias Imagens

1. Adicione suas imagens na pasta `imagens/`
2. Substitua `background.png` ou adicione novas imagens
3. Nos arquivos HTML, substitua os caminhos:
   ```html
   <img src="imagens/sua-imagem.jpg" alt="Descrição">
   ```

---

## 💡 Funcionalidades JavaScript

O arquivo `js/script.js` inclui várias funcionalidades interativas:

- **Busca de projetos**: Função `searchProjects()`
- **Curtir posts**: Função `likePost(button)`
- **Completar missões**: Função `completeMission(checkbox)`
- **Filtros de projetos**: Função `filterProjects(filter)`
- **Notificações**: Sistema de notificações em tempo real
- **Scroll suave**: Navegação suave entre seções
- **LocalStorage**: Salvar preferências do usuário

### Exemplos de Uso

```javascript
// Mostrar uma notificação
addNotification('Projeto salvo com sucesso!', 'success');

// Compartilhar nas redes sociais
shareOnSocialMedia('facebook', 'https://exemplo.com', 'Título do Post');

// Copiar link
copyToClipboard('https://exemplo.com/projeto');
```

---

## 🔧 Próximos Passos (Para Desenvolvimento Futuro)

Este é um protótipo em HTML/CSS/JavaScript. Para uma versão completa, você precisará:

### 1. Backend (Servidor)
- Node.js com Express
- Python com Django/Flask
- PHP com Laravel

### 2. Banco de Dados
- MySQL, PostgreSQL ou MongoDB
- Para armazenar:
  - Usuários
  - Projetos
  - Posts
  - Comentários
  - Curtidas

### 3. Autenticação
- Sistema de login/registro
- JWT (JSON Web Tokens)
- OAuth (Google, Facebook)

### 4. API de Mapas
- Google Maps API
- Leaflet.js (open source)
- Para o mapa interativo de projetos

### 5. Hospedagem
- Vercel, Netlify (para frontend estático)
- Heroku, DigitalOcean (para aplicação completa)
- AWS, Google Cloud (empresarial)

---

## 📱 Responsividade

O site já possui CSS responsivo e funciona em:
- 💻 Desktop (1920px+)
- 💻 Laptop (1366px - 1920px)
- 📱 Tablet (768px - 1366px)
- 📱 Mobile (320px - 768px)

---

## 🐛 Resolução de Problemas

### O site não abre
- Verifique se todos os arquivos estão nas pastas corretas
- Certifique-se de que o arquivo `background.png` existe na pasta `imagens/`
- Tente abrir com outro navegador

### Estilos não aparecem
- Verifique se o arquivo `css/style.css` existe
- Veja no console do navegador (F12) se há erros de carregamento
- Verifique os caminhos dos arquivos nos `<link>` dos HTMLs

### JavaScript não funciona
- Abra o console do navegador (F12) e veja se há erros
- Verifique se o arquivo `js/script.js` está sendo carregado
- Certifique-se de que o caminho no `<script>` está correto

### Imagens não aparecem
- Verifique se a pasta `imagens/` existe
- Adicione a imagem `background.png` ou substitua por outra
- Verifique os caminhos nos atributos `src` das tags `<img>`

---

## 📞 Contato

Este projeto foi desenvolvido como parte de um Trabalho de Conclusão de Curso em Design.

**Criadora**: Anna Mathias  
**Objetivo**: Dar visibilidade a projetos sociais e sustentáveis no Brasil

---

## 📝 Licença

Este projeto é um protótipo acadêmico. Sinta-se livre para usar e modificar para fins educacionais.

---

## 🙏 Agradecimentos

- Instituições parceiras que inspiraram este projeto
- Projetos sociais brasileiros que fazem a diferença
- Voluntários que dedicam seu tempo para causas nobres

---

## 🌟 Contribuir

Se você é um desenvolvedor e quer ajudar a tornar este projeto realidade:

1. Adicione funcionalidades backend
2. Implemente banco de dados
3. Crie APIs para integração
4. Melhore o design e UX
5. Adicione testes automatizados

---

**Feito com ❤️ para fazer a diferença! 🌱**













