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

        :host(.bubbles) .hair {
            width: 100%;
            height: 40%;
            background: 
                radial-gradient(ellipse 175px 150px at 15% -25%, #fcdb04 50%, transparent 51%),
                radial-gradient(ellipse 175px 150px at 85% -25%, #fcdb04 50%, transparent 51%),
                radial-gradient(ellipse 175px 150px at 15% -25%, #000 52%, transparent 53%),
                radial-gradient(ellipse 175px 150px at 85% -25%, #000 52%, transparent 53%);
            /* box-shadow: 0 3px 0 #000; */
            position: absolute;
            z-index: 10;   
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
            width: 36%;
            height: 40%;
            border-radius: 20px;
            border: var(--border-size) solid #000;
            border-radius: 20px 20px 40px 40px;
            background: var(--skin-color);
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
            z-index: 2;
        
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
            z-index: 5;
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
                <div class="hair"></div>
                <div class="eyes">
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