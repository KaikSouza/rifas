$(document).ready(function(){

    $('#table-comprador').on('click', 'button.btn-excluir', function(e){
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Gerenciamento de Rifas',
            text: 'Você tem certeza que deseja excluir este registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result)=>{
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    assync: true,
                    data: ID,
                    url: 'src/comprador/modelo/delete-comprador.php',
                    success: function(dados){
                            Swal.fire({
                                title: 'Gerenciamento de Rifas',
                                text: dados.mensagem,
                                icon: dados.tipo,
                                confirmButtonText: 'OK'
                            })
                            $('#table-comprador').DataTable().ajax.reload()
                        }
                 })
            }
        })
    })
})