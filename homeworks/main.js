$(document).ready(function() {

    // Step 1: Dynamic resize
    $(window).bind('resize', function() {
        var windowSize = $(window).width()
        if (windowSize <= 500) {
            $('#frame').removeClass('big');
            $('#frame').addClass('small')
        } else if (windowSize > 500) {
            $('#frame').removeClass('small');
            $('#frame').addClass('big')
        }
    })

    // Step 2: Checkbox genre filters
    //   $('input:checkbox').on('change', function() {
    //     if($('input#cb-action').prop("checked")){
    //         $('.action').show();           
    //     } else {
    //         $('.action').hide();
    //     }
    //     if($('input#cb-animation').prop("checked")){
    //         $('.animation').show();
    //     } else {
    //         $('.animation').hide();
    //     }
    //     if($('input#cb-drama').prop("checked")){
    //         $('.drama').show();
    //     } else {
    //         $('.drama').hide();
    //     }
    // });

    // Step 3: Text box year filter
    $('form').submit(function(event) { event.preventDefault(); })

    // $( "input#year" ).on('keyup', function() {
    //     var userYear = $('input#year').val();
    //     var year = parseInt(userYear)
    //     if (isNaN(year)) {
    //         alert("Please enter a 4-digit Year.");
    //         return
    //     } 
    //     $('div.movie').each(function () {

    //     var movieYear = parseInt( $(this).find('dd.year').html() )
    //     // comparison:
    //     if(movieYear > year) {
    //       $(this).show();
    //     } else {
    //       $(this).hide();
    //     }

    // })
    // });

    // Step 4: Both filters together

    $('input#year').bind('keyup change', function(event) {

        var userYear = parseInt($('input#year').val());
        if (isNaN(userYear)) {
            alert("Please enter a 4-digit Year.");
            return
        }
        $('div.movie').each(function() {

            var movieYear = parseInt($(this).find('dd.year').html());
            var movieGenre = $(this).find('dd.genre').html();
            var checked = $('input#cb-' + movieGenre).prop('checked');
            // comparison:
            if (movieYear > userYear && checked === true) {
                $(this).show();
            } else {
                $(this).hide();
            }

        })
    })
})

$('#submit').on('click', function() {
            var title = $('#ue-title').val();
            var genre = $('#ue-genre').val();
            var desc = $('#ue-description').val();
            var relDate = parseInt($('#ue-year').val());
            var act1 = $('#ue-actor1').val();
            var act2 = $('#ue-actor2').val();
            var act3 = $('#ue-actor3').val();
            var newEntry;

            if (isNaN(relDate)) {
                alert("Please enter a number");
                return;
            }

            newEntry = '<div id="' + genre + '">' +
                '<div class="movie' + genre + '">' +
                '<h1 class="name">' + title + '</h1>' +
                '<dl>' +
                '<dt class="year">' + 'Release date:' + '</dt>' +
                '<dd class="year">' + relDate + '</dd>' +
                '<dt class="genre">' + 'Genre:' + '</dt>' +
                '<dd class="genre">' + genre + '</dd>' +
                '</dl>' +
                '<div class="cast">' + 'Starring:' +
                '<ul>' +
                '<li>' + act1 + '</li>' +
                '<li>' + act2 + '</li>' +
                '<li>' + act3 + '</li>' +
                '</ul>' +
                '</div>' +
                '<p class="description">' +
                desc +
                '</p>' +
                '</div>'

            $('div#frame').append(newEntry);

});

