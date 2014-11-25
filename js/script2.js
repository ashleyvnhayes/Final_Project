// $(document).ready(function(){
	
	var selectedPair = [];

	 $('.flip').click(function(){      
	 	
		
		$(this).find('.card').toggleClass('flipped'); //flips cards  
		
		selectedPair.push($(this));


		var firstCard = $(selectedPair[0]).find('.back').find('img').attr('src');
        var secondCard = $(selectedPair[1]).find('.back').find('img').attr('src'); 
			
        	if (selectedPair.length === 2){
				
				if (firstCard !== secondCard){
					setTimeout(unflip(selectedPair) ,2000);

				}
					else {
						console.log('MATCH!');
					};
				selectedPair.pop();		
				selectedPair.pop();


				};	



	 });
			
		var unflip = function(selectedPairElements){
			$(selectedPairElements[0]).children('.flipped').removeClass('flipped'); //set timeout function around remove class actions
			$(selectedPairElements[1]).children('.flipped').removeClass('flipped');

		}												
		
		
      
  

	$('button').on('click', function(){
		
    	var board = $("#board");
	    var pics = board.children();
	    for (i = 0; i < pics.length; i++){
		board.append($('td')).append(pics.splice(Math.floor(Math.random() * pics.length), 1)[0]); //shuffles pictures (reset)
		$('.card').removeClass('flipped');
		};	
		
	});
	 
// });	



//first milestone: show the grid, show each cell having an image and having pair image elsewhere. upon reloading show different order 

// assignImagesToCards();
// -- for each card
// -- -- if this card has already been assigned, skip this card
// -- -- pick a random pair card (that hasn't been assigned yet)
// -- -- pick a random element from the images list
// -- -- assign the image to both cards


