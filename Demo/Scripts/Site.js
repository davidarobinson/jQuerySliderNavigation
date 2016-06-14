$(function () {

    // A slider with a step of 1
    $("#slider").slider({
        value: 1,
        min: 1,
        max: 5,
        step: 1,
        change: function (event, ui) {
            //var val = $('#slider').slider("option", "value");
            $('#detailsDIV').load("/home/step" + ui.value);
        }
    })
   .each(function () {

       // Add labels to slider whose values
       // are specified by min, max

       // Get the options for this slider (specified above)
       var opt = $(this).data().uiSlider.options;

       // Calcualte the number of possible values
       var vals = opt.max - opt.min;

       // Position the labels
       for (var i = 0; i <= vals; i++) {

           // Create a new element and position it with percentages
           var el = $('<label >' + (i + opt.min) + '</label>').css('left', (i / vals * 100) + '%');

           // Add the element inside #slider
           $("#slider").append(el);
       }
   });

    /*
                $('.js-reload-details').on('click', function (evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
    
                    var url = $(this).data('url');
                    $('#detailsDIV').load(url);
                });
    */
    $('#detailsDIV').load("/home/step1");
});

