import React from 'react';
import 'tachyons';

const Card =(props) =>{
	return(
		<div className='tc bg-lightest-blue  dib br3 pa3 ma2 grow shadow-6'>
		  <img alt='pic' src={`https://robohash.org/${props.id}?size=200x200`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;