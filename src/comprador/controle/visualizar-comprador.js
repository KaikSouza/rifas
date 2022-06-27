$(document).ready(function(){

    $('#table-comprador').on('click', 'button.btn-visualizar', function(e){
        e.preventDefault()

         //Limpar todas as informações existentes na nossa modal
         $('.modal-title').empty()
         $('.modal-body').empty()
 
         //Incluir novos textos no cabeçalho da minha janela modal
         $('.modal-title').append('Visualizar registro')
 
         let ID = `ID=${$(this).attr('id')}`

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
                        $('#CELULAR').val(dado.dados.CELULAR)
                        $('#NOME').attr('readonly', 'true')
                        $('#CELULAR').attr('readonly', 'true')
                    })
                    $('.btn-salvar').hide()
                    $('#modal-tipo').modal('show')
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