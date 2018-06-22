// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {
//     console.log('I did it! I linked jQuery and this js file!')
//   };

const $container = $('#container');
console.log($container);
const $h1 = $('<h1></h1>');
console.log($h1);
$h1.text("Hogwarts");
$container.append($h1);

const $h2 = $('<h2/>');
$h2.text('Timo');
$container.append($h2);
const $h3 = $('<h2/>');
$container.append($h3);
$h3.text('Ravenclaw')
const $h4 = $('<h2/>');

$container.append($('<h4/>').attr('class', 'cat').text('Sims'));
$container.append($h4.text('Holly Wand with Unicorn Hair Core'));
console.log($h4)
