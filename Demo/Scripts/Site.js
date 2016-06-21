$(function () {

    // A slider containing 5 steps with an increment of 1
    $("#navSlider").slider({
        value: 1,
        min: 1,
        max: 5,
        step: 1,
        change: function (event, ui) {
            $('#contentDIV').load("/home/step" + ui.value);
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

           // Add the element inside #navSlider
           $("#navSlider").append(el);
       }
   });
   
    $('#contentDIV').load("/home/step1");
});
