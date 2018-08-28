const cities = ["NYC", "SF", "LA", "ATX", "SYD"]; // City Array

cities.forEach(function(city) { // For every element in the Array
  $('#city-type').append("<option>" + city +"</option>"); // Append html
  //     event.preventDefault(); // Prevents browser default behavior
})

$('#city-type').change(function() { // Target tag and 'change()' Function

    event.preventDefault(); // Prevents browser default behavior
    let cityOption = $('#city-type option:selected').val(); // Gets value from input and save it in a variable
    if (cityOption === 'NYC') { // checks if user submits NYC
      $('body').removeClass().addClass('nyc'); //changes background photo
    } else if (cityOption === 'SF') { // checks if user submits SF
      $('body').removeClass().addClass('sf'); //changes background photo
    } else if (cityOption === 'LA') { // checks if user submits LA
      $('body').removeClass().addClass('la'); //changes background photo
    } else if (cityOption === 'ATX') { // checks if user submits ATX
      $('body').removeClass().addClass('austin'); //changes background photo
    } else if (cityOption === 'SYD') { // checks if user submits SYD
      $('body').removeClass().addClass('sydney'); //changes background photo
    } else {
    $('body').removeClass().addClass('citipix'); //default background photo
    }

});
