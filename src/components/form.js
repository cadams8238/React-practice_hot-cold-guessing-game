import React from 'react';
import GuessCount from './guessCount';
import GuessList from './guessList'

export default class Form extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section className="game">
				<h2>Make your Guess!</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autocomplete="off" placeholder="Enter your guess" required/>
					<input type="submit" id="guessButton" className="button" name="submit" value="Guess" style={{opacity: 1}}/>
				</form>
				<GuessCount />
				<GuessList />
			</section>
		);
	}
}