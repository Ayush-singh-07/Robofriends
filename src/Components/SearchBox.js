import React from 'react';

const SearchBox =({SearchChange}) =>{
	return (
		<div>
		<input className='pa3 ma3 ba b--green bg-lightest-blue'
		type='Search' 
		placeholder='Search robots here'
		onChange={SearchChange}
		/>
		</div> 
		);
}



export default SearchBox;