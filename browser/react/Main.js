import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AllAlbums from './AllAlbums';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';

export default class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			albums: [],
			selectedAlbum: {}
		}
	}

	componentDidMount(){
    axios.get("/api/albums")
    .then(result => {
    	console.log(result.data)
    	this.setState({ albums: result.data });
    })
  }

  handleCick(album){
  	console.log("clicked")
  	// this.setState({ albums: result.data });

  }

	render() {
		return(
			<div id="main" className="container-fluid">
	      <div className="col-xs-2">
	      	<Sidebar />
	      </div>

				<AllAlbums albums={ this.state.albums } handleClick={ this.handleClick }/>
				<SingleAlbum selectedAlbum={ this.state.selectedAlbum } />

				<Footer />
	    </div>
		)
		
	}
}

