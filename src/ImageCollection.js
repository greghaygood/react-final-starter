import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// "/image/" + image.id

// `/image/${image.id}`

class ImageCollection extends Component {
	render() {
		const { images } = this.props;
		return (
			<div className="gallery">
			{images.map( image => (
				<div key={image.id} className="gallery__image">
					<Link to={`/image/${image.id}`}>
					{image.title}
					</Link>
				</div>
				)
			)}
			</div>
		)
	}
}

export default ImageCollection;
