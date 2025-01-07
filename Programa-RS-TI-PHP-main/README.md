# Programa-RS-TI-PHP

Exemplo de criação de aplicativo PHP usando MVC.

Este programa requer a configuração das seguintes variáveis de ambiente referentes ao banco de dados:

* DB_HOST
* DB_PORT
* DB_DATABASE
* DB_USER
* DB_PASSWORD

## GitHub Workspaces

### Secrets

Acesse o seu repositório, clique em **Settings** e, na barra lateral esquerda, clique em **Secrets and variables** > **Codespaces**. Clique em [**New repository secret**] e adicione as variáveis de ambiente necessárias.

### Instalação do PDO-MySQL

Abra o **Terminal** do GitHub Codespaces e execute os comandos:

```
cd
VERSION=$(php -r 'echo phpversion();')
wget https://www.php.net/distributions/php-$VERSION.tar.gz
tar xf php-$VERSION.tar.gz 
cd php-$VERSION/ext/pdo_mysql
phpize
./configure
make
make test
make install
sed -i 's/;extension=pdo_mysql/extension=pdo_mysql/' /opt/php/$VERSION/ini/php.ini
php -i | grep drivers
```

### Instalação do PHP-intl

```
cd
VERSION=$(php -r 'echo phpversion();')
wget https://www.php.net/distributions/php-$VERSION.tar.gz
tar xf php-$VERSION.tar.gz 
cd php-$VERSION/ext/intl
phpize
./configure
make
make install
sed -i 's/;extension=intl/extension=intl/' /opt/php/$VERSION/ini/php.ini
```

## VSCode (Desktop)

Instale o [XAMPP](https://www.apachefriends.org/pt_br/index.html) e [adicione o PHP as variáveis de ambiente do sistema](https://www.youtube.com/watch?v=51IlfNzZVGo).

Instale a extensão "PHP" da DEVSENSE disponível na loja de extensões do Visual Studio. Para executar a aplicação, clique em **Executar e depurar** e, na lista suspensa, selecione **Launch built-in server and Debug** e clique no ícone de Play.

Edite o arquivo ``.vscode/launch.json`` do projeto e adicione a seção de configuração "**Launch built-in server and Debug**" as variáveis de ambiente:

```
"env": {
    "DB_HOST": "localhost",
    "DB_PORT": "3306",
    "DB_DATABASE": "programarsti",
    "DB_USER": "root",
    "DB_PASSWORD": ""
}
```

Caso necessário, edite o arquivo ``.vscode/launch.json`` e adicione a *flag* ``-t public/`` ao comando de execução do PHP para iniciar o servidor interno através do diretório "public/".

## Apache

Em servidores de produção, edite o arquivo "**.htaccess**" dentro do diretório "public/" e adicione as variáveis necessárias:

```
# Environment variables
SetEnv DB_HOST "localhost"
SetEnv DB_DATABASE "programarsti"
SetEnv DB_PORT "3306"
SetEnv DB_USER "root"
SetEnv DB_PASSWORD ""
```

## XAMPP

### Instalação do PHP-intl

No XAMPP, clique no botão "**Config**" em "Apache" e selecione "**php.ini**".

Remova ";" (comentário) na frente da linha "**;extension=intl**".

## Referências 

1. https://github.com/orgs/community/discussions/45444