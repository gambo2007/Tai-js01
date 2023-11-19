import { Node } from './Node.js';

export class Card extends Node {
    constructor(cardNumber, imagePath, flipCardHandler) {
        super('div', 'card');
        this.element.dataset.index = cardNumber;
        this.element.dataset.initialValue = cardNumber;
        this.element.style.width = '100px';
        this.element.style.height = '100px';
        this.element.style.border = '1px solid blue';
        this.element.style.backgroundSize = 'cover';
        this.element.style.cursor = 'pointer';
        this.element.style.textAlign = 'center';
        this.element.style.lineHeight = '100px';

        this.image = new Image();
        this.image.src = imagePath;

        this.flipCardHandler = flipCardHandler;
        this.element.addEventListener('click', this.flipCardHandler.bind(this));
        console.log('Card initialized.');
    }

    async setBackgroundImage() {
        await this.imageLoaded();
        this.element.style.backgroundImage = `url(${this.image.src})`;
    }

    setInnerHTML(html) {
        this.element.innerHTML = html;
    }

    imageLoaded() {
        return new Promise((resolve, reject) => {
            this.image.onload = resolve;
            this.image.onerror = reject;
        });
    }
}
