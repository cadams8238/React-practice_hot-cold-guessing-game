import React from 'react';

export default function Form() {
	return (
		<section className="game">
			<h2>Make your Guess!</h2>
			<form>
				<input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autocomplete="off" placeholder="Enter your guess" required/>
				<input type="submit" id="guessButton" className="button" name="submit" value="Guess" style={{opacity: 1}}/>
			</form>
		
			<p>
				Guess # <span id="count">0</span>!
			</p>
			
			<ul id="guessList" className="guessBox clearfix">
			</ul>
		</section>
	);
}