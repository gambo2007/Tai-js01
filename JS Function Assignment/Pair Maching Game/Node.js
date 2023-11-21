export class Node {
    constructor() {
        this.element = document.createElement('div');
    }

    appendChild(child) {
        this.element.appendChild(child.getElement());
    }

    getElement() {
        return this.element;
    }
}
