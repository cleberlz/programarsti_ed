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
            <?php
            $produtos = $data['produtos'];
            foreach ($produtos as $produto) {
                echo '<li><a href="/Dashboard/editarProduto/' . $produto->id . '">' . $produto->nome . '</a></li>';
            }
            ?>
        </ol>
    </body>
</html>