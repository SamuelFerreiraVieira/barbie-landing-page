PlayCube - Desafio Front-End (Barbie 2023)

Esse aqui é o PlayCube, um projeto que desenvolvi para um teste técnico de Front-End. O objetivo era criar uma página de detalhes de um filme da Barbie que fosse bonita, organizada e, o mais importante: totalmente responsiva.

🛠️ O que eu usei? (Tech Stack)
Para manter o projeto leve e eficiente, foquei no trio clássico com um toque de bibliotecas externas para o carrossel:

HTML5: Estrutura semântica (usei tags como section, article, main e footer para o Google ler bem o site).

CSS3: Estilização do zero, com Flexbox e Grid para organizar tudo.

JavaScript (jQuery): Usei para dar vida ao menu mobile e configurar o carrossel.

Owl Carousel 2: Biblioteca que usei para fazer aquele slider do elenco que desliza suave.

Google Fonts: Fonte Inter para dar um ar moderno e profissional.

🚀 O que eu fiz:

1. Responsividade 
O site não quebra. Ajustei os Breakpoints para que, no tablet (1024px) e no celular, os elementos se reorganizem. No tablet, centralizei o título e o poster para o visual não ficar "espalhado" demais.

2. Meta tags
Adicionei as Meta Tags de descrição e viewport. Isso garante que, se alguém pesquisar no Google, o PlayCube apareça com as informações certas e o layout não fique "esmagado" no celular.

3. Código Limpo 
Organizei o HTML com comentários claros dividindo cada seção. O CSS está separado por blocos lógicos, facilitando se eu (ou outro dev) precisar mexer depois.

4. Ajuste nas Imagens do Elenco
Garanti via CSS que as fotos dos atores fiquem sempre perfeitamente circulares e com as mesmas dimensões, independentemente do tamanho original da imagem.

📁 Estrutura do Projeto
Bash
├── assets/
│   ├── img/          # Imagens do poster, logo e elenco
├── css/
│   └── style.css     # Toda a mágica do design e media queries
├── js/
│   └── script.js     # Configuração do carrossel e menu
└── index.html        # A estrutura principal do site
