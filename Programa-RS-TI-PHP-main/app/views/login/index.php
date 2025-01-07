<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/css/home-whats-footer.css">
    <link rel="stylesheet" href="/css/pagina-de-login.css">
    <link rel="stylesheet" href="/css/pesquisa-navbar.css">
    <title>Elegance Moda</title>
</head>
<body>
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
                    <li class="nav-icon active"><a href="pagina-de-login.html" id="login"><i class="fas fa-user"></i></a></li>
                    <li class="nav-icon"><a href="carrinho-de-compras.html" id="cart"><i class="fas fa-shopping-bag"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>

    <!-- Contêiner de login -->
    <div class="custom-login-container">
        <h2 class="custom-login-title">Login</h2>
        <form id="custom-login-form" action="/Login/realizaLogin" method="post">
            <div class="custom-input-group">
                <label for="custom-username">E-mail</label>
                <input type="email" id="custom-username" name="custom-username" placeholder="Digite seu e-mail">
                <span id="custom-email-error" class="custom-error-message">E-mail inválido</span>
            </div>
            <div class="custom-input-group">
                <label for="custom-password">Senha</label>
                <input type="password" id="custom-password" name="custom-password" placeholder="Digite sua senha">
            </div>
            <button type="submit" class="custom-login-btn">Login</button>
            <!-- <div class="custom-social-login">
                <p>Ou faça login com:</p>
                <div class="custom-social-btn-container">
                    <button id="custom-facebook-login" class="custom-social-btn">Facebook</button>
                    <button id="custom-google-login" class="custom-social-btn">Google</button>
                </div>
            </div> -->
            
        </form>
    </div>

    <!-- Contêiner de pesquisa -->
    <div id="search-container">
        <input type="text" id="search-input" placeholder="Digite sua pesquisa">
        <button id="search-button"><i class="fas fa-search"></i></button>
    </div>

    <!-- Ícone do WhatsApp -->
    <a href="https://api.whatsapp.com/send?phone=5551995987877" target="_blank" class="whatsapp">
        <img src="assets/whatsapp.png" alt="Ícone do WhatsApp" class="whatsapp-icon">
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
            <a href="https://open.spotify.com" target="_blank"><i class="fab fa-spotify"></i></a>
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

    <script src="/js/cupom-home.js"></script>
    <script src="/js/pesquisa-navbar.js"></script>
    <script src="/js/pagina-de-login.js"></script>
    <script src="/js/footer.js"></script>
    <script src="/js/menu-sanduiche-home.js"></script>
    <script src="/js/logo-navbar.js"></script>
</body>
</html>