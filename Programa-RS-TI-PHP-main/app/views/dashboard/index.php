<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Elegance Moda</title>
    </head>
    <body>
        <!-- Exibe "Olá, admin@localhost" para o usuário -->
        <p>Olá, <?php echo $_SESSION['login']; ?>.</p>
        <ol>
            <li><a href="/Dashboard/cadastrarProduto">Cadastrar produto</a></li>
            <li><a href="/Dashboard/listarProdutos">Editar produtos</a></li>
        </ol>
    </body>
</html>