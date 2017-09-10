import React from 'react';

const AllAlbums = (props) => {
	const { albums, handleClick } = props;
	
		return (			
	      <div className="col-xs-10">
	      	<h3>Albums</h3>
	      	<div className="row">
	        { albums.map(album => {
	        	return (	        		
	        		<div key={ album.id } className="col-xs-4">							
					      <a className="thumbnail" href="#" onClick={ () => handleClick(album) }>
					        <img src={ album.imageUrl } />
					        <div className="caption">
					          <h5>
					            <span>{ album.name }</span>
					          </h5>
					          <small>{ album.songs.length }</small>
					        </div>
					      </a>
					    </div>
					  )
	        })}	        
	       </div>	      
	     	</div>
	     
		)
}

export default AllAlbums;
