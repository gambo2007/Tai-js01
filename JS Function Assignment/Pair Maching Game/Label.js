import Node from './Node.js';

export class Label extends Node {
    constructor(text, fontSize = '24px', color = 'white') {
        super('div', 'label');
        this.setText(text);
        this.element.style.fontSize = fontSize;
        this.element.style.color = color;
    }

    setText(text) {
        this.element.textContent = text;
    }
}
