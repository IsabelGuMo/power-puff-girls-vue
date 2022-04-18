import "./PowerPuffGirl.js";
import "./PowerPuffPonyTail.js";


class BlossomPowerPuffGirl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
                --width: 225px;
                --height: calc(var(--width) + calc(var(--width) * 0.3));
                --power-puff-color: #ec64ae;
                --hair-color: #ec64ae;
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
        <style>${BlossomPowerPuffGirl.styles}</style>
        <div class="container">
            <power-puff-girl class="blossom"></power-puff-girl>
        </div>`;
    }
}

customElements.define("blossom-power-puff-girl", BlossomPowerPuffGirl);