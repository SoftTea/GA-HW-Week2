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

const $ul = $('<ul/>');
$ul.attr('storage', 'trunk');
$container.append($ul);

const $li = $('<li/>');
$li.text('butter beer');
$ul.append($li);

const $li1 = $('<li/>');
$li1.text('invisibility cloak');
$li1.attr('class','secrective');
$ul.append($li1);

const $li2 = $('<li/>');
$li2.text('magic map');
$li2.attr('class','secrective');
$ul.append($li2);

const $li3 = $('<li/>');
$li3.text('time turner');
$li3.attr('class','secrective');
$ul.append($li3);

const $li4 = $('<li/>');
$li4.text('leash');
$li4.attr('class','cat');
$ul.append($li4);

const $li5 = $('<li/>');
$li5.text('Bertie Botts Every Flavor Jelly Beans.');
$ul.append($li5);

