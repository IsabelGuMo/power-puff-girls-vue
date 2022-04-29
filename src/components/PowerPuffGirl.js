import "./PowerPuffEye.js";
import "./PowerPuffLeg.js";

class PowerPuffGirl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
                --skin-color: #f4cfb4;
                --border-size: 3px;
                
                position: relative;
        }

        

        .container {
            width: var(--width);
            height: var(--height);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .head {
           width: 100%; 
           height: 65%;
           border: var(--border-size) solid #000;
           border-radius: 50%;
           overflow: hidden;
           background: var(--skin-color);
           display: flex;
           flex-direction: column;
           align-items: center;
            position: relative;
            box-shadow: 0px 3px 0 0 #0005;
            z-index: 5;
        }

        .hair-container {
          width: 100%;
          height: 40%;  
          position: absolute;
          z-index: 10;
            filter:
                drop-shadow(0 0 1px #000)
                drop-shadow(0 3px #000);
        }

        

        :host(.bubbles) .hair {
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(ellipse 175px 150px at 15% -25%, var(--hair-color) 50%, transparent 51%),
                radial-gradient(ellipse 175px 150px at 85% -25%, var(--hair-color) 50%, transparent 51%);
                
           }

        :host(.blossom) .hair {
            width: 100%;
            height: 70%;
            background: var(--hair-color);
            border-radius: 0% 0% 50% 50% / 0% 0% 30% 30%;
            clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 85% 100%, 75% 60%, 75% 100%, 60% 100%, 50% 45%, 40% 100%, 25% 100%, 25% 60%, 15% 100%);
        }

        :host(.cactus) .hair {
            width: 100%;
            height: 60%;
            background: var(--hair-color);
            border-radius: 0% 0% 50% 50% / 0% 0% 20% 20%;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 53% 100%, 50% 45%, 47% 100%, 0 100%)
           }

        :host(.cactus)::after {
            content: "";
            display: block;
            width: calc(var(--width) * 0.2);
            height: calc(var(--width) * 0.2);
            background: #000;
            position: absolute;
            top: 0;
            clip-path: polygon(20% 100%, 10% 30%, 35% 45%, 46% 10%, 90% 100%);
            transform: translate(290%, -75%) rotate(10deg);
          }

        .eyes {
            --gap: 10%;
            
            display: flex;
            justify-content: space-between;
            gap: 0 var(--gap);
            with: calc(var(--width) * 1.2);
            height: calc(var(--width) * 0.6);
            transform: translateY(10%);
        }

        .eyelid {
            display: none;
        }

        :host(.cactus) .eyelid {
            display: block;
            width: 50%;
            height: 20%;
            background: var(--skin-color);
            position: absolute;
            border-bottom: 2px solid #000;
        }

        :host(.cactus) .left.eyelid {
            transform: translate(5%, 50%) rotate(30deg);
            z-index: 5;
        }

        :host(.cactus) .left.eyelid::after,
        :host(.cactus) .right.eyelid::after {
            content: "";
            display: block;
            width: 1.5%;
            height: 40%;
            background: #000;
            position: absolute;
            bottom: -2px;
            right: 2px;
            transform: rotate(-35deg);
        }

        :host(.cactus) .right.eyelid::after {
            left: 2px;
            transform: rotate(35deg);
        }

        :host(.cactus) .right.eyelid {
            transform: translate(95%, 50%) rotate(-30deg);
            z-index: 5;
        }

        .mouth {
          width: 6%;
          height: 8%;
          border: var(--border-size) solid #000;
          border-radius: 50%;
          clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
        }

        .arms {
            --arm-height: calc(var(--height) * 0.23);

            position: absolute;
            width: var(--width);
            height: var(--arm-height);
            transform: translateY(calc(2 * var(--arm-height)));
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
        }

        .arm {
            --rotate: 7deg;

            width: 36%;
            height: 40%;
            border: var(--border-size) solid #000;
            border-radius: 20px 20px 40px 40px;
            background: var(--skin-color);
        }

        :host(.bubbles) .arm {
            transform: rotate(var(--rotate));
        }

        :host(.bubbles) .arm.right {
            transform: rotate(calc(-1 * var(--rotate)))
        }

        :host(.blossom) .arm {
            --rotate: -20deg;

            transform: rotate(var(--rotate));
        }

        :host(.blossom) .arm.right {
            --rotate: -80deg;
            
            transform: translate(20%, -500%) rotate(var(--rotate));
        }

        :host(.cactus) .arm {
            --rotate: -55deg;

            transform: rotate(var(--rotate));
        }

        :host(.cactus) .arm.right {
            transform: rotate(calc(-1 * var(--rotate)))
        }

        .body-container {
            width: 30%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            filter: 
                drop-shadow(2px 0 0 #000)
                drop-shadow(-2px 0 0 #000)
                drop-shadow(0 -2px 0 #000)
                drop-shadow(0 2px 0 #000);
            transform: translateY(-15%);
            position: relative;
        }

        .body-container .body {
            width: 100%;
            height: 80%;
            clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);
            background: 
            linear-gradient(
                to bottom,
                var(--power-puff-color) 0 27%, 
                #000 28%, 71%, 
                var(--power-puff-color) 72% 100%
                );
        }

        .legs {
            display: flex;
            position: relative;
        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =  /* html */`
        <style>${PowerPuffGirl.styles}</style>
        <div class="container">    
            <div class="head">
                <div class="hair-container">
                    <div class="hair"></div>
                </div>
                <div class="eyes">
                    <div class="left eyelid"></div>
                    <div class="right eyelid"></div>
                    <power-puff-eye class="left"></power-puff-eye>
                    <power-puff-eye class="right"></power-puff-eye>
                </div>    
                <div class="mouth"></div>
            </div>
            <div class="arms">
                <div class="left arm"></div>
                <div class="right arm"></div>
            </div>
            <div class="body-container">
                <div class="body"></div>
            </div>
            <div class="legs">
                <power-puff-leg class="left"></power-puff-leg>
                <power-puff-leg class="right up"></power-puff-leg>
            </div>
        </div>`;
    }
}

customElements.define("power-puff-girl", PowerPuffGirl);