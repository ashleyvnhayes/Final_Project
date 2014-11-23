$(document).ready(function(){
	
	 $('.flip').click(function(){      

		$(this).find('.card').toggleClass('flipped'); //flips cards  
		var selectedPair = $('.flipped .back img');
		

		if (selectedPair.length === 2){			
			var firstcard = selectedPair[0].src;
        	var secondcard = selectedPair[1].src;
        	
        		if (firstcard !== secondcard){
					console.log('not matched');
					$(selectedPair).parent().parent().removeClass('flipped');
					selectedPair.length = 0;
						
				}
				else{
					console.log('matched');
					
				};
			
				

			
		};	
		
	

		});	

			
														
		//if sources are not the same, flip cards back over
		//otherwise, add them to the matched array and empty the flipped card array

// 
      
  

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


