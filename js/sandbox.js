$(document).ready(function(){
	
	 $('.flip').click(function(){ 
	 	
		var matched = [];
		
        $(this).find('.card').toggleClass('flipped'); //flips cards, adds them to flippedCard array       
		var flippedElements = $('.flipped .back img');
     	

        if (flippedElements.length === 2){	
        		var firstElement = flippedElements[0];
        		var secondElement = flippedElements[1];

        			console.log($(firstElement).attr('src'));
        				//checks cards when there are two cards in the array
        	if ($(firstElement).attr('src') === $(secondElement).attr('src')){
    			$('.flipped ').removeClass('flipped');    //if sources are not the same, flip cards back over
    		}
    		// else{
    			// matched.push(flippedCard);				//otherwise, add them to the matched array and empty the flipped card array
    			// flippedCard = [];
    		
        };

      
    });

	$('button').on('click', function(){
		
    	var board = $("#board");
	    var pics = board.children();
	    for (i = 0; i < pics.length; i++){
		board.append($('td')).append(pics.splice(Math.floor(Math.random() * pics.length), 1)[0]); //shuffles pictures (reset)
		$('.card').removeClass('flipped');

    	
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


