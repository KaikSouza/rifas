$(document).ready(function(){
    $('#table-comprador').DataTable({
        "processing": true,
        "serverSide": true,
        "language":{
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        },
        "ajax": {
            "url": "src/tipo/modelo/list-comprador.php",
            "type": "POST"
        },
        "columns": [{
            "data": 'ID',
            "className": 'text-center'
        },
        {
        "data": 'NOME',
        "className": 'text-center'
        },
        {
        "data": 'CELULAR',
        "className": 'text-center'
        },
        {
            "data": 'ID',
            "className": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-success btn-visualizar"><i class="fa-solid fa-eye"></i></button>
                <button id ="${data}" class = "btn btn-info btn-editar"><i class="fa-solid fa-pen"></i></button>
                <button id ="${data}" class = "btn btn-danger btn-excluir"><i class="fa-solid fa-trash-can"></i></button>
                `
            }
        }
    ]
    })
})
