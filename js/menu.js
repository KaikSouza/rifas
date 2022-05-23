$(document).ready(function() {

    $('.nav-link').click(function(e) {
        e.preventDefault()

        let url = $(this).after('href')

        $('#content').empty()

        $('#content').load(url)
    })

})