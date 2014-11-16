var cards = ['img/beach.jpg','img/luna.jpg','img/onsen.jpg','img/potter.jpg','img/ramen.jpg','img/red_velvet.jpg','img/venus.jpg','img/winery.jpg','img/beach.jpg','img/luna.jpg','img/onsen.jpg','img/potter.jpg','img/ramen.jpg','img/red_velvet.jpg','img/venus.jpg','img/winery.jpg'];

$(document).ready(function(){
	$('button').on('click', function(){
		
    	var board = $("#board");
	    var pics = board.children();
	    for (i = 0; i < pics.length; i++){
		board.append($('td')).append(pics.splice(Math.floor(Math.random() * pics.length), 1)[0]);
    	
		};
		
		
	});

});	



//first milestone: show the grid, show each cell having an image and having pair image elsewhere. upon reloading show different order 

// assignImagesToCards();
// -- for each card
// -- -- if this card has already been assigned, skip this card
// -- -- pick a random pair card (that hasn't been assigned yet)
// -- -- pick a random element from the images list
// -- -- assign the image to both cards


// morsels of things that work:
// $('button').on('click', function(){
// $('<img src="' + cards[Math.floor(Math.random() * cards.length)] + '">').appendTo('#board')}); pics from array appear with click of button

// for (i = 0; i < table.length; i++){
// 	$('td').append()



// 	$('button').on('click', function(){
// 		$('img').remove();
// 		for (i = 0; i < cards.length; i++){
// 			$('<img src="' + cards[Math.floor(Math.random() * cards.length)] + '">').css({"width": "180px", "height": "160px", "float": "left"}).appendTo('tbody');
// 			$('tbody').css({"max-width": "720px"});

// 		};
// 	});

// }