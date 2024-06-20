export default class Media {
	constructor(amount, image, name, category, collection, id) {
		this._amount = amount;
		this._image = image;
		this._name = name;
		this._category = category;
		this._collection = collection;
		this._id = id;
	}
	get htmlString() {
		return `<section class="content">
				<article>
							<img src="https://media-l.pockethost.io/api/files/${this._collection}/${this._id}/${this._image}" alt="" />
                            <h3>${this._name}</h3>
                            <button class="voeg-toe-btn" data-name="${this._name}">VOEG TOE</button>
					</article>
			</section>`;
	}

	get image() {
		return this._image;
	}
}
