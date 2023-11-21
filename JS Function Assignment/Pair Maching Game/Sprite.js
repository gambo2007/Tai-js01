import Node from './Node.js';

export class Sprite extends Node {
    constructor(imagePath) {
        super('div', 'sprite');
        this.loadImage(imagePath);
    }

    loadImage(imagePath) {
        const image = new Image();
        image.src = imagePath;
        this.element.style.backgroundImage = `url(${image.src})`;
    }
}

