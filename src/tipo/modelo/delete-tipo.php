<?php 

//realizar a conexão com o banco de dados
include('../../conexao/conexao.php');

$ID = $_REQUEST['ID'];

$sql = 'DELETE FROM TIPO WHERE ID = $ID';

$resultado = $pdo->query($sql);

if($resultado){
    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Registro excluído com sucesso!'
    );
}else{
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Não foi possível excluir o registro selecionado!'
    );
}

echo json_encode($dados);
?>