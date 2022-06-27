$(document).ready(function(){

    $('#table-comprador').on('click', 'button.btn-editar', function(e){
        e.preventDefault()

         //Limpar todas as informações existentes na nossa modal
         $('.modal-title').empty()
         $('.modal-body').empty()
 
         //Incluir novos textos no cabeçalho da minha janela modal
         $('.modal-title').append('Editar registro')
 
         let ID = `ID=${$(this).attr('id')}`

         $('.btn-salvar').removeAttr('data-operation')

         $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: ID,
            url: 'src/comprador/modelo/visualizar-comprador.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/comprador/visao/form-comprador.html', function(){
                        $('#NOME').val(dado.dados.NOME)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-salvar').show()
                    $('#modal-comprador').modal('show')
                }else{
                    Swal.fire({
                        title: 'Gerenciamento de Rifas',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
         })
    })
})