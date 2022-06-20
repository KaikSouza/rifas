$(document).ready(function(){
    $('#table-tipo').DataTable({
        "processing": true,
        "serverSide": true,
        "language":{
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        },
        "ajax": {
            "url": "src/tipo/modelo/list-tipo.php",
            "type": "POST"
        },
        "columns": [{
            "data": 'ID',
            "classname": 'text-center'
        },
        {
        "data": 'NOME',
        "classname": 'text-center'
        },
        {
            "data": 'ID',
            "classname": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-success btn-view"><i class="fa-solid fa-eye"></i></button>
                <button id ="${data}" class = "btn btn-info btn-view"><i class="fa-solid fa-pen"></i></button>
                <button id ="${data}" class = "btn btn-danger btn-view"><i class="fa-solid fa-trash-can"></i></button>
                `
            }
        }
    ]
    })
})
