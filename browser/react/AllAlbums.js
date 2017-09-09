import React from 'react';

const AllAlbums = (props) => {
	const { albums } = props;
		return (			
	      <div className="col-xs-10">
	      	<h3>Albums</h3>
	      	<div className="row">
	        { albums.map(album => {
	        	return (	        		
	        		<div key={ album.id } className="col-xs-4">							
					      <a className="thumbnail" href="#">
					        <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
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
