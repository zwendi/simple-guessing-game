
		var color_array = ["blue","black","green","purple","red"];
		var randomColorIndex = Math.floor(Math.random()*color_array.length);
		console.log("color_array:"+color_array);
       
	    function guessColor(){
	    	var user_guess = prompt("Please guess a name of a color for following list:"+ color_array.toString());
	    	var guess_index = color_array.indexOf(user_guess);
	        console.log("user_guess:"+guess_index);
            if(guess_index == -1)
            {
                 alert("Please enter a valid color from the color list");
                 guessColor();
            }
            else if(guess_index<randomColorIndex)
            {
            	  alert("The true color is alphabetically greater than your guess:"+user_guess);
                 guessColor();
            }
            else if(guess_index>randomColorIndex)
            {
            	  alert("The true color is alphabetically smaller than your guess:"+user_guess);
                 guessColor();
            }
            else{
            	  alert("Congratulation! You have guessed a right color, now look at the magic happens.");
                 document.body.style.backgroundColor= user_guess;
            }


	    }


