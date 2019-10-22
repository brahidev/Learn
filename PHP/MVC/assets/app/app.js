$(document).ready(function () {
    $('#inpCloseSession').on('click', function (e) {
        e.preventDefault();

        $('#spinner').html('<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>');

        $.ajax({
           type: 'POST',
           url: '?c=login&m=destroySession',
            data: '',
        }).done(function (response) {
            $('#spinner').html('');

            window.location.replace("http://localhost/SextoSemestre/PHP/MVC/" + response);
        });
    });

    $('#formAddUser').on('submit', function(e) {
       e.preventDefault();
       let data = $( this ).serialize().split('&');

        $('#spinner').html('<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>');

       $.ajax({
          type: 'POST',
          url: '?c=index&m=insert',
           data: {
             "userName": data[0],
             "userMail": data[1],
             "userPass": data[2]
           }
       }).done(function (response) {
           $('#spinner').html('');

           window.location.replace("http://localhost/SextoSemestre/PHP/MVC/" + response);
       });
    });
});