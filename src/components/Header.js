import React from 'react';
import { BsSun } from "react-icons/bs";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				<BsSun size="15px"/>
			</button>
		</div>
	);
};

export default Header;