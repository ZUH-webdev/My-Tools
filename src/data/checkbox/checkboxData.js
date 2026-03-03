export const checkboxDesigns = [
  {
    id: "checkbox-1",
    name: "Filled #1",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-filled-1 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-filled-1 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-filled-1 .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
        box-sizing: border-box;
      }
      .checkbox-filled-1 input:checked + .checkmark {
        background: ${primary};
        border-color: ${primary};
      }
      .checkbox-filled-1 .checkmark:after {
        content: "";
        position: absolute;
        left: 7px;
        top: 3px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s;
        box-sizing: border-box;
      }
      .checkbox-filled-1 input:checked + .checkmark:after {
        opacity: 1;
      }
    `,
    html: `<label class="checkbox-filled-1"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-2",
    name: "Filled #2",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-filled-2 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-filled-2 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-filled-2 .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 50%;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
        box-sizing: border-box;
      }
      .checkbox-filled-2 input:checked + .checkmark {
        background: ${primary};
        border-color: ${primary};
      }
      .checkbox-filled-2 .checkmark:after {
        content: "";
        position: absolute;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s;
        box-sizing: border-box;
      }
      .checkbox-filled-2 input:checked + .checkmark:after {
        opacity: 1;
      }
    `,
    html: `<label class="checkbox-filled-2"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-3",
    name: "Filled #3",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-filled-3 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-filled-3 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-filled-3 .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid ${primary};
        border-radius: 4px;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: transparent;
      }
      .checkbox-filled-3 input:checked + .checkmark {
        background: ${primary};
      }
      .checkbox-filled-3 .checkmark:after {
        content: "";
        position: absolute;
        left: 7px;
        top: 3px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s;
      }
      .checkbox-filled-3 input:checked + .checkmark:after {
        opacity: 1;
      }
    `,
    html: `<label class="checkbox-filled-3"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
  id: "checkbox-4",
  name: "Filled (Ripple)",
  category: "Checkboxes",
  getCss: (primary) => `
    .checkbox-ripple {
      width: 24px;
      height: 24px;
      position: relative;
      cursor: pointer;
      display: inline-block;
    }
    .checkbox-ripple input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
      margin: 0;
      z-index: 2;
    }
    .checkbox-ripple .checkmark {
      width: 100%;
      height: 100%;
      border: 2px solid #ddd;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      transition: border-color 0.3s;
      display: block;
      background: white;
      box-sizing: border-box;
    }
    .checkbox-ripple input:checked + .checkmark {
      border-color: ${primary};
      background: ${primary};
    }
    .checkbox-ripple .ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: ${primary};
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s, opacity 0.6s;
      opacity: 0.5;
    }
    .checkbox-ripple input:checked + .checkmark .ripple {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
    .checkbox-ripple .check {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: bold;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.3s 0.2s;
      z-index: 1;
      pointer-events: none;
    }
    .checkbox-ripple input:checked + .checkmark .check {
      opacity: 1;
    }
    .checkbox-ripple:hover .checkmark {
      border-color: ${primary};
    }
  `,
  html: `<label class="checkbox-ripple"><input type="checkbox"><span class="checkmark"><span class="ripple"></span><span class="check">✓</span></span></label>`,
},
  {
    id: "checkbox-5",
    name: "Filled (Jelly)",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-jelly {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-jelly input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-jelly .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        background: white;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        display: block;
      }
      .checkbox-jelly input:checked + .checkmark {
        background: ${primary};
        border-color: ${primary};
        transform: scale(1.1);
      }
      .checkbox-jelly .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg) scale(0);
        width: 8px;
        height: 12px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .checkbox-jelly input:checked + .checkmark .check {
        transform: translate(-50%, -50%) rotate(45deg) scale(1);
      }
      @keyframes jelly {
        0%, 100% { transform: scale(1, 1); }
        25% { transform: scale(0.9, 1.1); }
        50% { transform: scale(1.1, 0.9); }
        75% { transform: scale(0.95, 1.05); }
      }
      .checkbox-jelly input:checked + .checkmark {
        animation: jelly 0.6s;
      }
      .checkbox-jelly:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-jelly"><input type="checkbox"><span class="checkmark"><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-6",
    name: "Filled (Flip)",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-flip {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        perspective: 100px;
        display: inline-block;
      }
      .checkbox-flip input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-flip .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s;
        display: block;
      }
      .checkbox-flip .front, .checkbox-flip .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 4px;
        border: 2px solid #ddd;
      }
      .checkbox-flip .front {
        background: white;
      }
      .checkbox-flip .back {
        background: ${primary};
        border-color: ${primary};
        transform: rotateY(180deg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      }
      .checkbox-flip input:checked + .checkmark {
        transform: rotateY(180deg);
      }
    `,
    html: `<label class="checkbox-flip"><input type="checkbox"><span class="checkmark"><span class="front"></span><span class="back">✓</span></span></label>`,
  },
  {
    id: "checkbox-7",
    name: "Thick to Thin",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-thick {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-thick input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-thick .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-thick .checkmark:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 8px solid #ddd;
        border-radius: 4px;
        transition: all 0.4s;
        box-sizing: border-box;
      }
      .checkbox-thick input:checked + .checkmark:before {
        border-width: 2px;
        border-color: ${primary};
      }
      .checkbox-thick .checkmark:after {
        content: "";
        position: absolute;
        left: 5px;
        top: 1px;
        width: 7px;
        height: 11px;
        border: solid ${primary};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s 0.1s;
        box-sizing: border-box;
      }
      .checkbox-thick input:checked + .checkmark:after {
        opacity: 1;
      }
    `,
    html: `<label class="checkbox-thick"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-8",
    name: "Thick (Ripple)",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-thick-ripple {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-thick-ripple input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-thick-ripple .checkmark {
        width: 100%;
        height: 100%;
        border: 4px solid #ddd;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
        display: block;
        background: white;
      }
      .checkbox-thick-ripple input:checked + .checkmark {
        border-color: ${primary};
      }
      .checkbox-thick-ripple .ripple {
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 4px solid ${primary};
        border-radius: 8px;
        transform: scale(0);
        transition: transform 0.6s;
      }
      .checkbox-thick-ripple input:checked + .checkmark .ripple {
        transform: scale(1);
        opacity: 0;
      }
      .checkbox-thick-ripple .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${primary};
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1;
      }
      .checkbox-thick-ripple input:checked + .checkmark .check {
        opacity: 1;
      }
      .checkbox-thick-ripple:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-thick-ripple"><input type="checkbox"><span class="checkmark"><span class="ripple"></span><span class="check">✓</span></span></label>`,
  },
  {
    id: "checkbox-9",
    name: "Thick (Snake)",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-snake {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-snake input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-snake .checkmark {
        width: 100%;
        height: 100%;
        border: 4px solid transparent;
        border-radius: 4px;
        position: relative;
        display: block;
        background: white;
      }
      .checkbox-snake .border {
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 4px solid #ddd;
        border-radius: 8px;
      }
      .checkbox-snake .snake {
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 4px solid transparent;
        border-radius: 8px;
        border-top-color: ${primary};
        border-right-color: ${primary};
        transform: rotate(0deg);
        animation: snake-rotate 2s linear infinite;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .checkbox-snake input:checked + .checkmark .snake {
        opacity: 1;
      }
      .checkbox-snake .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 8px;
        height: 12px;
        border-bottom: 3px solid ${primary};
        border-right: 3px solid ${primary};
        opacity: 0;
        transition: opacity 0.3s;
      }
      .checkbox-snake input:checked + .checkmark .check {
        opacity: 1;
      }
      @keyframes snake-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .checkbox-snake:hover .border {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-snake"><input type="checkbox"><span class="checkmark"><span class="border"></span><span class="snake"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-10",
    name: "Solid",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-solid {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-solid input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-solid .checkmark {
        width: 100%;
        height: 100%;
        background: #ddd;
        border-radius: 4px;
        position: relative;
        transition: all 0.3s;
        display: block;
      }
      .checkbox-solid input:checked + .checkmark {
        background: ${primary};
      }
      .checkbox-solid .checkmark:after {
        content: "";
        position: absolute;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s;
      }
      .checkbox-solid input:checked + .checkmark:after {
        opacity: 1;
      }
      .checkbox-solid:hover .checkmark {
        background: ${primary}40;
      }
    `,
    html: `<label class="checkbox-solid"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-11",
    name: "Cross",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-cross {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-cross input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-cross .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
      }
      .checkbox-cross input:checked + .checkmark {
        border-color: ${primary};
        background: ${primary};
      }
      .checkbox-cross .checkmark:before, .checkbox-cross .checkmark:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 2px;
        background: white;
        transform-origin: center;
        opacity: 0;
        transition: all 0.3s;
      }
      .checkbox-cross .checkmark:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      .checkbox-cross .checkmark:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      .checkbox-cross input:checked + .checkmark:before,
      .checkbox-cross input:checked + .checkmark:after {
        opacity: 1;
      }
      .checkbox-cross:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-cross"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-12",
    name: "Occupy",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-occupy {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-occupy input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-occupy .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        display: block;
        background: white;
      }
      .checkbox-occupy .fill {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: ${primary};
        transition: width 0.4s ease;
      }
      .checkbox-occupy input:checked + .checkmark .fill {
        width: 100%;
      }
      .checkbox-occupy .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1;
      }
      .checkbox-occupy input:checked + .checkmark .check {
        opacity: 1;
      }
      .checkbox-occupy:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-occupy"><input type="checkbox"><span class="checkmark"><span class="fill"></span><span class="check">✓</span></span></label>`,
  },
 {
    id: "checkbox-13",
    name: "Handwritten #1",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-handwritten-1 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-handwritten-1 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-handwritten-1 .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-handwritten-1 .box {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        box-sizing: border-box;
        transition: border-color 0.3s;
      }
      .checkbox-handwritten-1 input:checked + .checkmark .box {
        border-color: ${primary};
      }
      .checkbox-handwritten-1 .check {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 10px;
        transform: translate(-50%, -60%) rotate(-10deg);
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1;
      }
      .checkbox-handwritten-1 .check:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          linear-gradient(to bottom right, 
            transparent 45%, 
            ${primary} 45%, 
            ${primary} 55%, 
            transparent 55%
          ),
          linear-gradient(to bottom right, 
            transparent 45%, 
            ${primary} 45%, 
            ${primary} 55%, 
            transparent 55%
          );
        background-size: 60% 30%, 40% 60%;
        background-position: 0% 60%, 60% 100%;
        background-repeat: no-repeat;
        filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
      }
      .checkbox-handwritten-1 input:checked + .checkmark .check {
        opacity: 1;
        animation: handwritten-draw 0.6s ease forwards;
      }
      @keyframes handwritten-draw {
        0% {
          clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
        50% {
          clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%);
        }
        100% {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }
    `,
    html: `<label class="checkbox-handwritten-1"><input type="checkbox"><span class="checkmark"><span class="box"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-14",
    name: "Handwritten #2",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-handwritten-2 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-handwritten-2 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-handwritten-2 .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-handwritten-2 .box {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        box-sizing: border-box;
        transition: border-color 0.3s;
      }
      .checkbox-handwritten-2 input:checked + .checkmark .box {
        border-color: ${primary};
      }
      .checkbox-handwritten-2 .check {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 14px;
        height: 8px;
        transform: translate(-50%, -50%) rotate(-5deg);
        opacity: 0;
        z-index: 1;
      }
      .checkbox-handwritten-2 .check-path {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .checkbox-handwritten-2 .check-path:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: ${primary};
        border-radius: 2px;
        transform: rotate(30deg);
        transform-origin: left bottom;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
      }
      .checkbox-handwritten-2 .check-path:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 3px;
        height: 0;
        background: ${primary};
        border-radius: 2px;
        transform: rotate(30deg);
        transform-origin: left top;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
      }
      .checkbox-handwritten-2 input:checked + .checkmark .check-path:before {
        animation: draw-line-1 0.4s ease forwards 0.1s;
      }
      .checkbox-handwritten-2 input:checked + .checkmark .check-path:after {
        animation: draw-line-2 0.4s ease forwards 0.3s;
      }
      @keyframes draw-line-1 {
        0% { width: 0; }
        100% { width: 10px; }
      }
      @keyframes draw-line-2 {
        0% { height: 0; }
        100% { height: 6px; }
      }
    `,
    html: `<label class="checkbox-handwritten-2"><input type="checkbox"><span class="checkmark"><span class="box"></span><span class="check"><span class="check-path"></span></span></span></label>`,
  },
  {
    id: "checkbox-15",
    name: "Handwritten #3",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-handwritten-3 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-handwritten-3 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-handwritten-3 .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-handwritten-3 .box {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        box-sizing: border-box;
        transition: border-color 0.3s;
      }
      .checkbox-handwritten-3 input:checked + .checkmark .box {
        border-color: ${primary};
      }
      .checkbox-handwritten-3 .check {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 10px;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: 1;
      }
      .checkbox-handwritten-3 .check-line {
        position: absolute;
        background: ${primary};
        border-radius: 1px;
        filter: drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.2));
      }
      .checkbox-handwritten-3 .line-1 {
        width: 0;
        height: 2px;
        top: 0;
        left: 0;
        transform: rotate(40deg);
        transform-origin: left center;
        animation: sketch-line-1 0.5s ease forwards;
      }
      .checkbox-handwritten-3 .line-2 {
        width: 2px;
        height: 0;
        bottom: 0;
        right: 0;
        transform-origin: center bottom;
        animation: sketch-line-2 0.5s ease forwards 0.3s;
      }
      .checkbox-handwritten-3 input:checked + .checkmark .check {
        opacity: 1;
      }
      .checkbox-handwritten-3 input:checked + .checkmark .line-1 {
        animation: sketch-line-1 0.5s ease forwards 0.1s;
      }
      .checkbox-handwritten-3 input:checked + .checkmark .line-2 {
        animation: sketch-line-2 0.5s ease forwards 0.4s;
      }
      @keyframes sketch-line-1 {
        0% { width: 0; }
        30% { width: 8px; height: 2px; }
        60% { width: 12px; height: 2.5px; }
        100% { width: 16px; height: 2px; }
      }
      @keyframes sketch-line-2 {
        0% { height: 0; }
        30% { height: 4px; width: 2px; }
        60% { height: 7px; width: 2.5px; }
        100% { height: 10px; width: 2px; }
      }
    `,
    html: `<label class="checkbox-handwritten-3"><input type="checkbox"><span class="checkmark"><span class="box"></span><span class="check"><span class="check-line line-1"></span><span class="check-line line-2"></span></span></span></label>`,
  },
  {
    id: "checkbox-16",
    name: "Sketch Style",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-sketch {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-sketch input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-sketch .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-sketch .box {
        width: 100%;
        height: 100%;
        border: 2px dashed #ddd;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        box-sizing: border-box;
        transition: all 0.3s;
      }
      .checkbox-sketch input:checked + .checkmark .box {
        border-color: ${primary};
        border-style: solid;
        animation: box-sketch 0.5s ease;
      }
      @keyframes box-sketch {
        0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
        25% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%); }
        50% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        75% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
      }
      .checkbox-sketch .check {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 14px;
        height: 8px;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: 1;
      }
      .checkbox-sketch .check:before,
      .checkbox-sketch .check:after {
        content: "";
        position: absolute;
        background: ${primary};
        border-radius: 1px;
        opacity: 0;
      }
      .checkbox-sketch .check:before {
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        transform: rotate(40deg);
        transform-origin: left center;
        animation: check-sketch-1 0.3s ease forwards 0.3s;
      }
      .checkbox-sketch .check:after {
        bottom: 0;
        right: 0;
        width: 2px;
        height: 0;
        transform-origin: center bottom;
        animation: check-sketch-2 0.3s ease forwards 0.5s;
      }
      .checkbox-sketch input:checked + .checkmark .check {
        opacity: 1;
      }
      @keyframes check-sketch-1 {
        0% { width: 0; opacity: 0; }
        50% { width: 8px; opacity: 1; }
        100% { width: 14px; opacity: 1; }
      }
      @keyframes check-sketch-2 {
        0% { height: 0; opacity: 0; }
        50% { height: 4px; opacity: 1; }
        100% { height: 8px; opacity: 1; }
      }
    `,
    html: `<label class="checkbox-sketch"><input type="checkbox"><span class="checkmark"><span class="box"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-17",
    name: "Transformation #1",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-transform-1 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-transform-1 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-transform-1 .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-transform-1 .shape {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 50%;
        position: absolute;
        transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: white;
      }
      .checkbox-transform-1 .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 12px;
        height: 6px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .checkbox-transform-1 input:checked + .checkmark .shape {
        border-radius: 4px;
        background: ${primary};
        border-color: ${primary};
        transform: rotate(180deg);
      }
      .checkbox-transform-1 input:checked + .checkmark .check {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
      }
      .checkbox-transform-1:hover .shape {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-transform-1"><input type="checkbox"><span class="checkmark"><span class="shape"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-18",
    name: "Transformation #2",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-transform-2 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-transform-2 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-transform-2 .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-transform-2 .shape {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        position: absolute;
        transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: white;
      }
      .checkbox-transform-2 .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 12px;
        height: 6px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .checkbox-transform-2 input:checked + .checkmark .shape {
        border-radius: 50%;
        background: ${primary};
        border-color: ${primary};
        transform: rotate(180deg);
      }
      .checkbox-transform-2 input:checked + .checkmark .check {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
      }
      .checkbox-transform-2:hover .shape {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-transform-2"><input type="checkbox"><span class="checkmark"><span class="shape"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-19",
    name: "Transformation #3",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-transform-3 {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-transform-3 input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-transform-3 .checkmark {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .checkbox-transform-3 .shape {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        position: absolute;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
        background: white;
      }
      .checkbox-transform-3 .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 12px;
        height: 6px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
      }
      .checkbox-transform-3 input:checked + .checkmark .shape {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        border-radius: 4px;
        background: ${primary};
        border-color: ${primary};
        transform: rotate(360deg);
      }
      .checkbox-transform-3 input:checked + .checkmark .check {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
      }
      .checkbox-transform-3:hover .shape {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-transform-3"><input type="checkbox"><span class="checkmark"><span class="shape"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-20",
    name: "To Do",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-todo {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-todo input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-todo .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 50%;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
      }
      .checkbox-todo input:checked + .checkmark {
        border-color: ${primary};
        background: ${primary};
      }
      .checkbox-todo .checkmark:after {
        content: "";
        position: absolute;
        left: 7px;
        top: 3px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s;
      }
      .checkbox-todo input:checked + .checkmark:after {
        opacity: 1;
      }
      .checkbox-todo .line {
        position: absolute;
        top: 50%;
        left: -2px;
        width: 0;
        height: 2px;
        background: ${primary};
        transform: translateY(-50%);
        transition: width 0.3s 0.1s;
        pointer-events: none;
      }
      .checkbox-todo input:checked ~ .line {
        width: 28px;
      }
      .checkbox-todo:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-todo"><input type="checkbox"><span class="checkmark"></span><span class="line"></span></label>`,
  },
  {
    id: "checkbox-21",
    name: "Long Tail",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-longtail {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-longtail input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-longtail .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
        display: block;
        background: white;
      }
      .checkbox-longtail input:checked + .checkmark {
        border-color: ${primary};
      }
      .checkbox-longtail .tail {
        position: absolute;
        top: 50%;
        left: -20px;
        width: 20px;
        height: 2px;
        background: ${primary};
        transform: translateY(-50%);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .checkbox-longtail .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 8px;
        height: 12px;
        border-bottom: 2px solid ${primary};
        border-right: 2px solid ${primary};
        opacity: 0;
        transition: all 0.3s 0.2s;
      }
      .checkbox-longtail input:checked + .checkmark .tail {
        left: 50%;
        width: 0;
      }
      .checkbox-longtail input:checked + .checkmark .check {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
      }
      .checkbox-longtail:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-longtail"><input type="checkbox"><span class="checkmark"><span class="tail"></span><span class="check"></span></span></label>`,
  },
  {
    id: "checkbox-22",
    name: "Thick Border",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-solid-thick {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-solid-thick input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-solid-thick .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        transition: all 0.4s;
        display: block;
        background: white;
        box-sizing: border-box;
      }
      .checkbox-solid-thick input:checked + .checkmark {
        border-width: 8px;
        border-color: ${primary};
        background: ${primary};
      }
      .checkbox-solid-thick .checkmark:after {
        content: "";
        position: absolute;
        left: 5px;
        top: 1px;
        width: 7px;
        height: 11px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s 0.1s;
        box-sizing: border-box;
      }
      .checkbox-solid-thick input:checked + .checkmark:after {
        opacity: 1;
      }
    `,
    html: `<label class="checkbox-solid-thick"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-23",
    name: "Chip",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-chip {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-chip input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-chip .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 12px;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
      }
      .checkbox-chip input:checked + .checkmark {
        background: ${primary};
        border-color: ${primary};
        transform: scale(1.1);
      }
      .checkbox-chip .checkmark:after {
        content: "✓";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .checkbox-chip input:checked + .checkmark:after {
        opacity: 1;
      }
      .checkbox-chip:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-chip"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
   {
    id: "checkbox-24",
    name: "Thin Line",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-thinline {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-thinline input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 2;
      }
      .checkbox-thinline .checkmark {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
        box-sizing: border-box;
      }
      .checkbox-thinline input:checked + .checkmark {
        border-color: ${primary};
        box-shadow: 0 0 0 1px ${primary} inset;
      }
      .checkbox-thinline .checkmark:after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 10px;
        border: solid ${primary};
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: all 0.3s;
        box-sizing: border-box;
      }
      .checkbox-thinline input:checked + .checkmark:after {
        opacity: 1;
      }
    `,
    html: `<label class="checkbox-thinline"><input type="checkbox"><span class="checkmark"></span></label>`,
  },
  {
    id: "checkbox-25",
    name: "Rotating X",
    category: "Checkboxes",
    getCss: (primary) => `
      .checkbox-rotating-x {
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }
      .checkbox-rotating-x input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;
      }
      .checkbox-rotating-x .checkmark {
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 4px;
        position: relative;
        transition: all 0.3s;
        display: block;
        background: white;
      }
      .checkbox-rotating-x input:checked + .checkmark {
        border-color: ${primary};
        transform: rotate(45deg);
      }
      .checkbox-rotating-x .checkmark:before,
      .checkbox-rotating-x .checkmark:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 2px;
        background: ${primary};
        transform-origin: center;
        opacity: 0;
        transition: all 0.3s;
      }
      .checkbox-rotating-x .checkmark:before {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      .checkbox-rotating-x .checkmark:after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
      .checkbox-rotating-x input:checked + .checkmark:before,
      .checkbox-rotating-x input:checked + .checkmark:after {
        opacity: 1;
      }
      .checkbox-rotating-x:hover .checkmark {
        border-color: ${primary};
      }
    `,
    html: `<label class="checkbox-rotating-x"><input type="checkbox"><span class="checkmark"></span></label>`,
  }
];