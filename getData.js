
$.getJSON('astro.json', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroData').append(d['name'] + ' - ' + d['craft'] + '<br>') 
    });
});