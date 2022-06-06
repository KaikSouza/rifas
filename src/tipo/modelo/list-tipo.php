<?php

//Realizar conexão como banco de dados
include("../../conexao/conexao.php");

//Obter a requisição para a geração da nossa tabela
$requestData = $_REQUEST;

//Obter as colunas que estão sendo requeridas
$colunas = $requestData['colunas'];

//Preparar o comando SQL para obtenção dos registros existentes no banco de dados
$sql = "SELECT ID, NOME FROM TIPO WHERE 1=1 ";

//Obter o total de registros exixstentes na tabela do banco de dados
$resultado = $pdo->query($sql);
$qtddeLinhas = $resultado->rowCount();

//Verificar se existe algum filtro determinado pelo usuário
$filtro = $requestData['search']['value'];