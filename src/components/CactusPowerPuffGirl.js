import "./PowerPuffGirl.js";
import "./PowerPuffPonyTail.js";


class CactusPowerPuffGirl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
                --width: 225px;
                --height: calc(var(--width) + calc(var(--width) * 0.3));
                --power-puff-color: #63c254;
                --hair-color: #051622;
                --trail-x: 0;

                position: relative;
        }

    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =  /* html */`
        <style>${CactusPowerPuffGirl.styles}</style>
        <div class="container">
            <power-puff-girl class="cactus"></power-puff-girl>
        </div>`;
    }
}

customElements.define("cactus-power-puff-girl", CactusPowerPuffGirl);