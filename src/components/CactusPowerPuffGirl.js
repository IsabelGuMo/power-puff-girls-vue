import "./PowerPuffGirl.js";
import "./PowerPuffTrail";


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
                --hair-color: #000;
                --trail-x: 0;

                position: relative;
        }

        .hairbuns {
            width: 150%; 
            height: 39%;
            display: flex;
            justify-content: space-between;
            transform: translate(-16%, 44%);
            position: absolute;
        }

        .hairbun {
            width: 50%; 
            height: 100%;
            border-radius: 0 0 50% 50% / 0 0 100% 100%;
            background: #000;
            transform: translate(10%) rotate(10deg);
        }
        
        .hairbun.right {
            transform: translate(-10%) rotate(-10deg);
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
        <div class="hairbuns">
            <div class="left hairbun"></div>
            <div class="right hairbun"></div>
        </div>
            <power-puff-girl class="cactus"></power-puff-girl>
            <power-puff-trail></power-puff-trail>
        </div>`;
    }
}

customElements.define("cactus-power-puff-girl", CactusPowerPuffGirl);