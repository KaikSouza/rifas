<?php 

//CARREGAR AS CREDENCIAIS DO BANCO DE DADOS

$hostname = "sql102.epizy.com";
$database = "epiz_31478113_sistemarifas";
$username = "epiz_31478113";
$password = "5Bp4bR0QfI";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Conexão com o banco de dados '.$database. 'foi realizada com sucesso!';
}
catch(PDOException $e){
    echo 'Erro: '.$e->getMessage();
}

?>