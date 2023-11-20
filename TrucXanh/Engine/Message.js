import { Node } from './Node.js';

export class Message extends Node {
    constructor(text, color) {
        super('div', 'message');
        this.element.textContent = text;
        this.element.style.fontSize = '45px';
        this.element.style.fontFamily = 'sans-serif';
        this.element.style.color = color;
        this.element.style.textAlign = 'center';
        this.element.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff';
        console.log('Mess initialized.');
    }

    center() {
        const rect = this.element.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const leftOffset = (windowWidth - rect.width) / 2;
        const topOffset = (windowHeight - rect.height) / 2;

        this.element.style.left = `${leftOffset}px`;
        this.element.style.top = `${topOffset}px`;
    }
}
