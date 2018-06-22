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

const $h5 = $('<h5/>');
$h5.text("Spring 2017");
$container.append($h5);

const $table = $('<table/>');
$container.append($table);

const $tr = $('<tr/>');
$table.append($tr);

const $th = $('<th/>');
$th.text('Day');
$tr.append($th);

const $th1 = $('<th/>');
$th1.text('Classes');
$tr.append($th1);

const $tr1 = $('<tr/>');
$table.append($tr1);

const $th2 = $('<th/>');
$th2.text('Monday');
$tr1.append($th2);

const $th3 = $('<th/>');
$th3.text('Charms, Quidditch practice, History of Magic');
$tr1.append($th3);


const $tr2 = $('<tr/>');
$table.append($tr2);

const $th4 = $('<th/>');
$th4.text('Tuesday');
$tr2.append($th4);

const $th5 = $('<th/>');
$th5.text('Divination, History of Magic');
$tr2.append($th5);


const $tr3 = $('<tr/>');
$table.append($tr3);

const $th6 = $('<th/>');
$th6.text('Wednesday');
$tr3.append($th6);

const $th7 = $('<th/>');
$th7.text('History of Magic');
$tr3.append($th7);


const $tr4 = $('<tr/>');
$table.append($tr4);

const $th8 = $('<th/>');
$th8.text('Thursday');
$tr4.append($th8);

const $th9 = $('<th/>');
$th9.text('Charms');
$tr4.append($th9);


const $tr5 = $('<tr/>');
$table.append($tr5);

const $th10 = $('<th/>');
$th10.text('Friday');
$tr5.append($th10);

const $th11 = $('<th/>');
$th11.text(' Quidditch practice');
$tr5.append($th11);

$('#container h2:nth-child(5)').remove();

$('ul li:nth-child(1)').remove();

$('#container h4:nth-child(4)').after($('<h2>New Wand</h2>').css('color', 'indigo'));

$('#container h4:nth-child(4)').remove();

$('ul').before($('<h4/>').attr('class', 'cat').text('Sims'));

