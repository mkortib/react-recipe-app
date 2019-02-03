import React, { Component } from 'react';
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		recipe: recipe,
	// 		url: `https://www.food2fork.com/api/get?key=b82f1334907adcbc31703afe907c78c2&rId=${this.props.id}`
	// 	}
	// }

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //         recipe: jsonData.recipe
  //     });
  //   } catch(err) {
  //     console.log(err);
  //   } 
	// }
	
	state = {
		recipe: recipe
	}

	async componentDidMount() {
		const id = this.props.id;
		const url = `https://www.food2fork.com/api/get?key=3794c64de626219d1c43230587f99c5d&rId=${id}`;
		try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState((state, props) => {
				return { recipe: jsonData.recipe }
			}, () => {});
    } catch(err) {
      console.log(err);
    } 

	}

	
	render() {

		const {
			image_url,
			publisher,
			publisher_url,
			source_url,
			title,
			ingredients
		} = this.state.recipe;
		
		const { handleIndex } = this.props;

		// console.log(this.state.recipe);

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 my-3">
							<button type="button" onClick={() => handleIndex(1)} className="btn btn-warning mb-5 text-capitalize">back to recipe list</button>
							<img src={image_url} className="d-block w-100" alt="recipe"/>
						</div>
						{/* Details */}
						<div className="col-10 mx-auto col-md-6 my-3">
							<h6 className="text-uppercase">{title}</h6>
							<h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
							<a href={publisher_url} target="_blank" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
							<a href={source_url} target="_blank" className="btn btn-success mx-3 mt-2 text-capitalize">recipe url</a>
							<ul className="list-group mt-4">
								<h2 className="mt-3 mb-4">Ingredients</h2>
								{
									ingredients.map((item, index) => {
										return(
											<li className="list-group-item text-slanted" key={index}>{item}</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>	
		)
	}
}
