export default class Workshops {
	constructor(image, title, content, collection, id, lab) {
		this._image = image;
		this._title = title;
		this._content = content;
		this._collection = collection;
		this._id = id;
		this._lab = lab;
	}

	get image() {
		return this._image;
	}

	get htmlString() {
		return `<div class="workshop-card" data-lab="${this._lab}">
					<a href="reserveer.html">
						<div
							class="workshop-image"
							style="background-image: url('https://media-l.pockethost.io/api/files/${this._collection}/${this._id}/${this._image}')"
						></div>
						<div class="card-content">
							<h2>${this._title}</h2>
							<p>${this._content}</p>
							<img src="images/card-arrow.png" class="arrow-icon" alt="arrow" />
						</div>
					</a>
				</div>`;
	}
}
