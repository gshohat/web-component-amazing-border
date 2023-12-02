import {template} from './template';

export class AmazingBorder extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this._svg = this._shadowRoot.querySelector('#svg_wrapper');
    }

    set options(value) {
        if (value.borderColor) {
            const shapeElement = this._shadowRoot.querySelector('.shape');
            shapeElement.style.stroke = value.borderColor;
        }
    }
}

