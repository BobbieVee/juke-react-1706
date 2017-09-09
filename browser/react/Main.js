import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';


export default class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			say: 'hi',
			people: ['bob','kaz', 'prof'],
			bob: 'Bob'
		}
	}
	render() {
		const { say, people } = this.state;
		return (
			<div id="main" className="container-fluid">
	      <div className="col-xs-2">
	      <Sidebar />
	      </div>

	      <div className="col-xs-10">
	        Why, hello there! My name is Juke!
	        Right now, I am but a static HTML page.
	        But with your help, I can...react to changes!
	      </div>
	      <Footer />

	      
  		</div> 	
		)
	}
}

