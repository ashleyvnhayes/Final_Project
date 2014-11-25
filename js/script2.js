$(document).ready(function(){
	
	 $('.flip').click(function(){      

		
		$(this).find('.card').toggleClass('flipped') //flips cards  
		
		var selectedPair = $('.flipped .back img');
		var healthyPair = $('.flipped .back .matched img');

		if (selectedPair.length === 2){			//checks cards when there are two cards in the array
			var firstCard = selectedPair[0].src;
        	var secondCard = selectedPair[1].src;
        	
        		if (firstCard !== secondCard){
					console.log('not matched');
					$(selectedPair).parent().parent().removeClass('flipped'); //if sources are not the same, flip cards back over
					
						
				}
				else{
					console.log('matched');
					$(selectedPair).parent().parent().addClass('matched');	//
					healthyPair.push('.matched');
				};			
							
			
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


