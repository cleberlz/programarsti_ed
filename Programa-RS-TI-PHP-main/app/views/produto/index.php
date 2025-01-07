<?php 
// Mostra os dados repassados a View pela Controller
var_dump($data); 
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/css/home-whats-footer.css">
    <link rel="stylesheet" href="/css/pesquisa-navbar.css">
    <link rel="stylesheet" href="/css/link-para-produtos.css">
    <title>Elegance Moda</title>
</head>
<body>
    <!-- Info topo -->
    <div class="info-topo">
        <h1>
            <a href="index.html">Página Inicial</a> / 
            <a href="casacos.html">Casacos</a> / 
            <a class="produto-link"><?php echo $data['produto']->nome; ?></a>
        </h1>
    </div>

    <!-- Hearder fixo no topo -->
    <div class="promo-container">
        <span id="promo-text"></span>
        <i class="material-icons copy-icon" onclick="copyPromoCode()">content_copy</i>
        <i class="material-icons check-icon">check_circle</i>
        <span id="copy-message">Copiado!</span>
    </div>

    <!-- Logo -->
    <div id="logo-container" class="logo-container">
        <img src="/assets/home/logo.png" alt="Logo da empresa">
    </div>

    <!-- Navbar -->
    <div class="navbar">
        <div class="container">
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <nav>
                <ul class="menu">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="novidades.html">NOVIDADES</a></li>
                    <li><a href="feminino.html">FEMININO</a></li>
                    <li><a href="masculino.html">MASCULINO</a></li>
                    <li class="nav-icon"><a href="pagina-de-pesquisa.html" id="search-link"><i class="fas fa-search"></i></a></li>
                    <li class="nav-icon"><a href="pagina-de-login.html" id="login"><i class="fas fa-user"></i></a></li>
                    <li class="nav-icon"><a href="carrinho-de-compras.html" id="cart"><i class="fas fa-shopping-bag"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>

    <!-- Contêiner de pesquisa -->
    <div id="search-container">
        <input type="text" id="search-input" placeholder="Digite sua pesquisa">
        <button id="search-button"><i class="fas fa-search"></i></button>
    </div>

    <!-- Conteudo principal -->
    <div class="product-details-container">
        <div class="product-image">
            <img src="<?php echo $data['produto']->fotos[0]; ?>" alt="<?php echo $data['produto']->nome; ?>">
            <i class="fas fa-search-plus zoom-icon"></i>
        </div>
        <div class="product-info">
            <h1><?php echo $data['produto']->nome; ?></h1>
            <p><strong>Referência:</strong> <?php echo $data['produto']->id; ?></p>
            <p><strong>Cor:</strong> <?php echo $data['produto']->cor; ?></p>
            <div class="size-selector">
                <label for="size">Escolha o tamanho:</label>
                <select id="size">
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                </select>
            </div>
            <p class="price"><?php echo $data['produto']->preco_desconto; ?> à vista no Pix</p>
            <p class="installment"><?php echo $data['produto']->preco; ?> em até 6x <?php echo $data['produto']->preco_parcelado; ?> no cartão de crédito</p>
            <button class="buy-now">COMPRAR AGORA</button>
            <button class="add-to-cart">
                <i class="fas fa-shopping-bag"></i> Adicionar à sacola
            </button>
            <a href="https://api.whatsapp.com/send?phone=5551995987877" target="_blank" class="buy-whatsapp">
                <i class="fab fa-whatsapp"></i> Comprar pelo WhatsApp
            </a>
            <div class="shipping">
                <label for="zip-code">Calcule o FRETE</label>
                <div class="zip-code-container">
                    <input type="text" id="zip-code" placeholder="Insira seu CEP...">
                    <button type="button" class="zip-code-button">OK</button>
                </div>
            </div>
            <p class="composition"><?php echo $data['produto']->descricao; ?></p>
        </div>
    </div>

    <!-- Modal -->
    <div id="imageModal" class="modal">
        <span class="close">&times;</span>
        <div class="modal-content-container">
            <?php
                $fotos = $data['produto']->fotos;
                foreach($fotos as $foto) {
                    echo '<img class="modal-content" src="' . $foto . '">';
                }
            ?>
        </div>
        <div id="caption"></div>
    
        <a class="prev" id="prevBtn">&#10094;</a>
        <a class="next" id="nextBtn">&#10095;</a>
    </div>

    <!-- Ícone do WhatsApp -->
    <a href="https://api.whatsapp.com/send?phone=5551995987877" target="_blank" class="whatsapp">
        <img src="/assets/whatsapp.png" alt="Ícone do WhatsApp" class="whatsapp-icon">
    </a>
    
    <!-- Footer -->
    <div class="footer">
        <p class="newsletter-title">Fique por dentro das nossas novidades</p>
        <form action="#" method="POST">
            <div class="form-group">
                <input type="text" name="nome" id="nome" placeholder="Seu nome" required>
                <div class="input-line"></div> 
            </div>
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Insira seu e-mail..." required>
                <div class="input-line"></div> 
            </div>
            <button type="submit">ENVIAR</button>
        </form>
        <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://open.spotify.com/" target="_blank"><i class="fab fa-spotify"></i></a>
        </div>
        <div class="our-brands">
            <h3>Nossas Marcas</h3>
            <div class="brand-list">
                <div class="brand">
                    <p>Colcci</p>
                    <p>Gucci</p>
                    <p>Prada</p>
                    <p>Chanel</p>
                </div>
            </div>
        </div>
        <div class="contact-info">
            <p class="help"><i class="fas fa-question-circle"></i> Precisa de ajuda?</p>
            <p class="phone"><i class="fas fa-phone"></i> xxxx xxx xxxx</p>
            <p class="email"><i class="far fa-envelope"></i> <a href="mailto:atendimento@elegancemoda.com.br">atendimento@elegancemoda.com.br</a></p>
            <p class="mobile"><i class="fas fa-mobile-alt"></i> xx xxxxx-xxxx</p>
        </div>
        <div class="direitos">
            <p>© 2024 Elegance Moda. Todos os direitos reservados.</p>
        </div>
    </div>

    <!-- Scripts -->
    <script src="/js/cupom-home.js"></script>
    <script src="/js/pesquisa-navbar.js"></script>
    <script src="/js/login-navbar.js"></script>
    <script src="/js/carousel-home.js"></script>
    <script src="/js/footer.js"></script>
    <script src="/js/menu-sanduiche-home.js"></script>
    <script src="/js/carousel-produtos-home.js"></script>
    <script src="/js/franqueado-home.js"></script>
    <script src="/js/logo-navbar.js"></script>
    <script src="/js/modal.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
</body>
</html>