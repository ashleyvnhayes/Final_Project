$(document).ready(function(){
	//1. Shuffle pictures on page load
			$('.card').removeClass('flipped');
	var randomizeCards = function(){
		var board = $("#board");
		    var pics = board.children();
		    for (i = 0; i < pics.length; i++){
			board.append($('td')).append(pics.splice(Math.floor(Math.random() * pics.length), 1)[0]); 
			};	

	};
	randomizeCards(); 
	

	//2. Check to see whether to selcted cards match
	var selectedPair = [];

	 $('.flip').click(function(){      
		$(this).find('.card').toggleClass('flipped'); //flips cards  
		selectedPair.push($(this));

		var firstCard = $(selectedPair[0]).find('.back').find('img').attr('src');
        var secondCard = $(selectedPair[1]).find('.back').find('img').attr('src'); 
        
        var unflip = function(){
			$(selectedPair[0]).children('.flipped').removeClass('flipped'); //timeout function for remove class method
			$(selectedPair[1]).children('.flipped').removeClass('flipped');
		};
			
        	if (selectedPair.length === 2){
				
				if (firstCard !== secondCard){
					setTimeout(unflip,1000);
					}
					else {
						console.log('MATCH!');
					};
				
				setTimeout(function(){	 //timeout function for emptying array
					selectedPair.pop();		
					selectedPair.pop();
					}, 1500);	
				


				};	



	 });
			
//3. Start over														
$('button').on('click', randomizeCards());
	 
});	



//first milestone: show the grid, show each cell having an image and having pair image elsewhere. upon reloading show different order 

// assignImagesToCards();
// -- for each card
// -- -- if this card has already been assigned, skip this card
// -- -- pick a random pair card (that hasn't been assigned yet)
// -- -- pick a random element from the images list
// -- -- assign the image to both cards


