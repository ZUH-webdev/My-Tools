const dotLoaders = [
  {
    id: "dots-l1",
    name: "Progress Dots",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l1 {
        width: ${size}px;
        aspect-ratio: 4;
        background: radial-gradient(circle closest-side, ${primary} 90%, ${secondary}) 0/calc(100%/3) 100% space;
        clip-path: inset(0 100% 0 0);
        animation: dots-l1-anim ${speed} steps(4) infinite;
      }
      @keyframes dots-l1-anim {to{clip-path: inset(0 -34% 0 0)}}
    `,
    html: '<div class="loader-dots-l1"></div>',
  },
  {
    id: "dots-l2",
    name: "Moving Dots",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l2 {
        width: ${size}px;
        aspect-ratio: 4;
        background: radial-gradient(circle closest-side, ${primary} 90%, ${secondary}) 0/calc(100%/3) 100% no-repeat;
        animation: dots-l2-anim ${speed} steps(3) infinite;
      }
      @keyframes dots-l2-anim {to{background-position: 150%}}
    `,
    html: '<div class="loader-dots-l2"></div>',
  },
  {
    id: "dots-l3",
    name: "Jumping Dots",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l3 {
        width: ${size}px;
        aspect-ratio: 2;
        --_g: no-repeat radial-gradient(circle closest-side, ${primary} 90%, ${secondary});
        background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
        background-size: calc(100%/3) 50%;
        animation: dots-l3-anim ${speed} infinite linear;
      }
      @keyframes dots-l3-anim {
        20%{background-position:0% 0%, 50% 50%,100% 50%}
        40%{background-position:0% 100%, 50% 0%,100% 50%}
        60%{background-position:0% 50%, 50% 100%,100% 0%}
        80%{background-position:0% 50%, 50% 50%,100% 100%}
      }
    `,
    html: '<div class="loader-dots-l3"></div>',
  },
  {
    id: "dots-l4",
    name: "Morphing Triple",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l4 {
        width: ${size}px;
        aspect-ratio: 4;
        --c:${primary} 90%,${secondary};
        background: 
          radial-gradient(circle closest-side at left  6px top 50%,var(--c)),
          radial-gradient(circle closest-side,var(--c)),
          radial-gradient(circle closest-side at right 6px top 50%,var(--c));
        background-size: 100% 100%;
        background-repeat: no-repeat;
        animation: dots-l4-anim ${speed} infinite alternate;
      }
      @keyframes dots-l4-anim {
        to{width:${size/2.4}px;aspect-ratio: 1}
      }
    `,
    html: '<div class="loader-dots-l4"></div>',
  },
  {
    id: "dots-l5",
    name: "Bouncing Pair",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l5 {
        width: ${size/4}px;
        aspect-ratio: 1;
        border-radius: 50%;
        animation: dots-l5-anim ${speed} infinite linear alternate;
      }
      @keyframes dots-l5-anim {
        0%  {box-shadow: 20px 0 ${primary}, -20px 0 ${primary}33;background: ${primary}}
        33% {box-shadow: 20px 0 ${primary}, -20px 0 ${primary}33;background: ${primary}33}
        66% {box-shadow: 20px 0 ${primary}33,-20px 0 ${primary}; background: ${primary}33}
        100%{box-shadow: 20px 0 ${primary}33,-20px 0 ${primary}; background: ${primary}}
      }
    `,
    html: '<div class="loader-dots-l5"></div>',
  },
  {
    id: "dots-l6",
    name: "Shifting Dot",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l6 {
        width: ${size/4}px;
        aspect-ratio: 1;
        background: ${primary};
        border-radius: 50%;
        animation: dots-l6-anim ${speed} infinite linear alternate;
      }
      @keyframes dots-l6-anim {
        0%  {box-shadow: 15px 0,-25px 0}
        50% {box-shadow: 15px 0,-15px 0}
        100%{box-shadow: 25px 0,-15px 0}
      }
    `,
    html: '<div class="loader-dots-l6"></div>',
  },
  {
    id: "dots-l7",
    name: "Vertical Dots",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l7 {
        width: ${size}px;
        aspect-ratio: 4;
        --_g: no-repeat radial-gradient(circle closest-side,${primary} 90%,${secondary});
        background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
        background-size: calc(100%/3) 100%;
        animation: dots-l7-anim ${speed} infinite linear;
      }
      @keyframes dots-l7-anim {
        33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
        50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
        66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
      }
    `,
    html: '<div class="loader-dots-l7"></div>',
  },
  {
    id: "dots-l8",
    name: "Orbiting Dots",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l8 {
        width: ${size/4}px;
        aspect-ratio: 1;
        position: relative;
      }
      .loader-dots-l8::before,
      .loader-dots-l8::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: ${primary};
      }
      .loader-dots-l8::before {
        box-shadow: -25px 0;
        animation: dots-l8-1-anim ${speed} infinite linear;
      }
      .loader-dots-l8::after {
        transform: rotate(0deg) translateX(25px);
        animation: dots-l8-2-anim ${speed} infinite linear;
      }
      @keyframes dots-l8-1-anim {100%{transform: translateX(25px)}}
      @keyframes dots-l8-2-anim {100%{transform: rotate(-180deg) translateX(25px)}}
    `,
    html: '<div class="loader-dots-l8"></div>',
  },
  {
    id: "dots-l9",
    name: "Mirror Orbit",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l9 {
        width: ${size/4}px;
        aspect-ratio: 1;
        position: relative;
        animation: dots-l9-0-anim ${parseFloat(speed)*1.5}s infinite steps(2);
      }
      .loader-dots-l9::before,
      .loader-dots-l9::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: ${primary};
      }
      .loader-dots-l9::before {
        box-shadow: 26px 0;
        transform: translateX(-26px);
        animation: dots-l9-1-anim ${parseFloat(speed)*0.75}s infinite linear alternate;
      }
      .loader-dots-l9::after {
        transform: translateX(13px) rotate(0deg) translateX(13px);
        animation: dots-l9-2-anim ${parseFloat(speed)*0.75}s infinite linear alternate;
      }
      @keyframes dots-l9-0-anim {0%,49.9%{transform:scale(1)}50%,100%{transform:scale(-1)}}
      @keyframes dots-l9-1-anim {100%{box-shadow:52px 0}}
      @keyframes dots-l9-2-anim {100%{transform:translateX(13px) rotate(-180deg) translateX(13px)}}
    `,
    html: '<div class="loader-dots-l9"></div>',
  },
  {
    id: "dots-l10",
    name: "Dual Orbit",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l10 {
        width: ${size/4}px;
        aspect-ratio: 1;
        position: relative;
      }
      .loader-dots-l10::before,
      .loader-dots-l10::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: ${primary};
      }
      .loader-dots-l10::before {
        box-shadow: -26px 0;
        animation: dots-l10-1-anim ${parseFloat(speed)*1.5}s infinite linear;
      }
      .loader-dots-l10::after {
        transform: rotate(0deg) translateX(26px);
        animation: dots-l10-2-anim ${parseFloat(speed)*1.5}s infinite linear;
      }
      @keyframes dots-l10-1-anim {50%{transform:translateX(26px)}}
      @keyframes dots-l10-2-anim {100%{transform:rotate(-360deg) translateX(26px)}}
    `,
    html: '<div class="loader-dots-l10"></div>',
  },
  {
    id: "dots-l11",
    name: "Triangle Dots",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l11 {
        width: ${size*0.58}px;
        aspect-ratio: 1;
        --_g: no-repeat radial-gradient(circle closest-side,${primary} 90%,${secondary});
        background: var(--_g) 0 0, var(--_g) 0 100%, var(--_g) 100% 100%;
        background-size: 40% 40%;
        animation: dots-l11-anim ${speed} infinite linear;
      }
      @keyframes dots-l11-anim {
        25% {background-position:100% 0   ,0 100%,100% 100%}
        50% {background-position:100% 0   ,0 0   ,100% 100%}
        75% {background-position:100% 0   ,0 0   ,0    100%}
        100%{background-position:100% 100%,0 0   ,0    100%}
      }
    `,
    html: '<div class="loader-dots-l11"></div>',
  },
  {
    id: "dots-l12",
    name: "Four Square",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l12 {
        width: ${size}px;
        aspect-ratio: 2;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g) 0 50%, var(--_g) 50% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
        background-size: 25% 50%;
        animation: dots-l12-anim ${speed} infinite linear;
      }
      @keyframes dots-l12-anim {
        33%  {background-position:0 0  ,50% 100%,50% 100%,100% 0}
        66%  {background-position:50% 0,0 100%,100% 100%,50% 0}
        100% {background-position:50% 50%,0 50%,100% 50%,50% 50%}
      }
    `,
    html: '<div class="loader-dots-l12"></div>',
  },
  {
    id: "dots-l13",
    name: "Six Wave",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l13 {
        --s: ${size}px;
        width: var(--s);
        aspect-ratio: 2;
        --_g: ${primary} 90%,${secondary};
        background: 
          radial-gradient(farthest-side at bottom,var(--_g)) 0    calc(50% - var(--s)/16),
          radial-gradient(farthest-side at top   ,var(--_g)) 0    calc(50% + var(--s)/16),
          radial-gradient(farthest-side at bottom,var(--_g)) 50%  calc(50% - var(--s)/16),
          radial-gradient(farthest-side at top   ,var(--_g)) 50%  calc(50% + var(--s)/16),
          radial-gradient(farthest-side at bottom,var(--_g)) 100% calc(50% - var(--s)/16),
          radial-gradient(farthest-side at top   ,var(--_g)) 100% calc(50% + var(--s)/16);
        background-size: 25% 25%;
        background-repeat: no-repeat;
        animation: dots-l13-anim ${speed} infinite linear;
      }
      @keyframes dots-l13-anim {
        16.67% {background-position:0 0,0 100%,50% calc(50% - var(--s)/8),50% calc(50% + var(--s)/16),100% calc(50% - var(--s)/16),100% calc(50% + var(--s)/16)}
        33.33% {background-position:0 0,0 100%,50% 0,50% 100%,100% calc(50% - var(--s)/16),100% calc(50% + var(--s)/16)}
        50%    {background-position:0 0,0 100%,50% 0,50% 100%,100% 0,100% 100%}
        66.67% {background-position:0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% 0,50% 100%,100% 0,100% 100%}
        83.33% {background-position:0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% calc(50% - var(--s)/16),50% calc(50% + var(--s)/16),100% 0,100% 100%}
      }
    `,
    html: '<div class="loader-dots-l13"></div>',
  },
  {
    id: "dots-l14",
    name: "Five Dots Dance",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l14 {
        --s: ${size}px;
        width: var(--s);
        aspect-ratio: 2;
        --_g: ${primary} 90%,${secondary};
        background: 
          radial-gradient(farthest-side,var(--_g)) 0 50%/25% 50%,
          radial-gradient(farthest-side at bottom,var(--_g)) 50% calc(50% - var(--s)/16)/25% 25%,
          radial-gradient(farthest-side at top,var(--_g)) 50% calc(50% + var(--s)/16)/25% 25%,
          radial-gradient(farthest-side at bottom,var(--_g)) 100% calc(50% - var(--s)/16)/25% 25%,
          radial-gradient(farthest-side at top,var(--_g)) 100% calc(50% + var(--s)/16)/25% 25%;
        background-repeat: no-repeat;
        animation: dots-l14-anim ${speed} infinite;
      }
      @keyframes dots-l14-anim {
        25%  {background-position:0 50%,50% 0,50% 100%,100% 0,100% 100%}
        50%  {background-position:100% 50%,0 0,0 100%,50% 0,50% 100%}
        75%,100% {background-position:100% 50%,0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% calc(50% - var(--s)/16),50% calc(50% + var(--s)/16)}
      }
    `,
    html: '<div class="loader-dots-l14"></div>',
  },
  {
    id: "dots-l15",
    name: "Split Rotate",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l15 {
        width: ${size}px;
        aspect-ratio: 4;
        background: radial-gradient(closest-side at calc(100%/6) 50%,${primary} 90%,${secondary}) 0/75% 100%;
        position: relative;
        animation: dots-l15-0-anim ${speed} infinite linear;
      }
      .loader-dots-l15::before {
        content:"";
        position: absolute;
        background: inherit;
        clip-path: inset(0 0 0 50%);
        inset: 0;
        animation: dots-l15-1-anim ${parseFloat(speed)*0.5}s infinite linear;
      }
      @keyframes dots-l15-0-anim {0%,49.99%{transform:scale(1)}50%,100%{transform:scale(-1)}}
      @keyframes dots-l15-1-anim {0%{transform:translateX(-37.5%) rotate(0turn)}80%,100%{transform:translateX(-37.5%) rotate(1turn)}}
    `,
    html: '<div class="loader-dots-l15"></div>',
  },
  {
    id: "dots-l16",
    name: "Triangle Rotate",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l16 {
        width: ${size*0.67}px;
        aspect-ratio: 1.154;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g) 50% 0, var(--_g) 0 100%, var(--_g) 100% 100%;
        background-size: 35% calc(35%*1.154);
        animation: dots-l16-anim ${speed} infinite;
      }
      @keyframes dots-l16-anim {50%,100%{background-position:100% 100%,50% 0,0 100%}}
    `,
    html: '<div class="loader-dots-l16"></div>',
  },
  {
    id: "dots-l17",
    name: "Three Drop",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l17 {
        width: ${size}px;
        aspect-ratio: 1;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g), var(--_g), var(--_g);
        background-size: 25% 25%;
        animation: dots-l17-anim ${speed} infinite;
      }
      @keyframes dots-l17-anim {
        0%     {background-position:0% -100%,50% -100%,100% -100%}
        16.67% {background-position:0% 50%,50% -100%,100% -100%}
        33.33% {background-position:0% 50%,50% 50%,100% -100%}
        45%,55%{background-position:0% 50%,50% 50%,100% 50%}
        66.67% {background-position:0% 200%,50% 50%,100% 50%}
        83.33% {background-position:0% 200%,50% 200%,100% 50%}
        100%   {background-position:0% 200%,50% 200%,100% 200%}
      }
    `,
    html: '<div class="loader-dots-l17"></div>',
  },
  {
    id: "dots-l18",
    name: "Square Dance",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l18 {
        width: ${size/4}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        box-shadow: -20px 0,20px 0;
        animation: dots-l18-anim ${speed} infinite;
      }
      @keyframes dots-l18-anim {
        25%  {box-shadow: -20px -20px, 20px 20px}
        50%  {box-shadow: 0 -20px, 0 20px}
        75%  {box-shadow: 20px -20px, -20px 20px}
        100% {box-shadow: 20px 0, -20px 0}
      }
    `,
    html: '<div class="loader-dots-l18"></div>',
  },
  {
    id: "dots-l19",
    name: "Three March",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l19 {
        width: ${size/4}px;
        aspect-ratio: 1;
        border-radius: 50%;
        clip-path: inset(-45px);
        box-shadow: -60px 15px,-60px 15px,-60px 15px;
        transform: translateY(-15px);
        animation: dots-l19-anim ${speed} infinite linear;
      }
      @keyframes dots-l19-anim {
        16.67% {box-shadow:-60px 15px,-60px 15px,19px 15px}
        33.33% {box-shadow:-60px 15px,0 15px,19px 15px}
        40%,60%{box-shadow:-19px 15px,0 15px,19px 15px}
        66.67% {box-shadow:-19px 15px,0 15px,60px 15px}
        83.33% {box-shadow:-19px 15px,60px 15px,60px 15px}
        100%   {box-shadow:60px 15px,60px 15px,60px 15px}
      }
    `,
    html: '<div class="loader-dots-l19"></div>',
  },
  {
    id: "dots-l20",
    name: "Swing Pair",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l20 {
        height: ${size/4}px;
        aspect-ratio: 6;
        display: flex;
      }
      .loader-dots-l20::before,
      .loader-dots-l20::after {
        content: "";
        flex: 1;
        padding-left: calc(100%/6);
        background: radial-gradient(closest-side at calc(100%/3) 50%,${primary} 90%,${secondary}) 0/75% 100% content-box;
        animation: dots-l20-anim ${parseFloat(speed)*2}s infinite;
      }
      .loader-dots-l20::after {
        --_s:-1;
      }
      @keyframes dots-l20-anim {
        0%   {transform:scale(var(--_s,1)) translate(0) rotate(0)}
        25%  {transform:scale(var(--_s,1)) translate(-25%) rotate(0)}
        50%  {transform:scale(var(--_s,1)) translate(-25%) rotate(1turn)}
        75%,100% {transform:scale(var(--_s,1)) translate(0) rotate(1turn)}
      }
    `,
    html: '<div class="loader-dots-l20"></div>',
  },
  {
    id: "dots-l21",
    name: "Grow Shrink",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l21 {
        color: ${primary};
        width: ${size/15}px;
        aspect-ratio: 1;
        border-radius: 50%;
        box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
        transform: translateX(-38px);
        animation: dots-l21-anim ${parseFloat(speed)*0.5}s infinite alternate linear;
      }
      @keyframes dots-l21-anim {
        50%  {box-shadow:19px 0 0 3px,38px 0 0 7px,57px 0 0 3px}
        100% {box-shadow:19px 0 0 0,38px 0 0 3px,57px 0 0 7px}
      }
    `,
    html: '<div class="loader-dots-l21"></div>',
  },
  {
    id: "dots-l22",
    name: "Spiral Orbit",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l22 {
        width: ${size/4}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        display: grid;
        animation: dots-l22-0-anim ${parseFloat(speed)*2}s infinite linear;
      }
      .loader-dots-l22::before,
      .loader-dots-l22::after {
        content: "";
        grid-area: 1/1;
        margin: 15%;
        border-radius: 50%;
        background: inherit;
        transform: rotate(0deg) translate(150%);
        animation: dots-l22-1-anim ${speed} infinite;
      }
      .loader-dots-l22::after {
        animation-delay: -0.5s
      }
      @keyframes dots-l22-0-anim {100%{transform:rotate(1turn)}}
      @keyframes dots-l22-1-anim {100%{transform:rotate(1turn) translate(150%)}}
    `,
    html: '<div class="loader-dots-l22"></div>',
  },
  {
    id: "dots-l23",
    name: "Jump Catch",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l23 {
        width: ${size*0.83}px;
        height: ${size*0.47}px;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) 50% 0, var(--_g) 100% 0;
        background-size: ${size*0.2}px ${size*0.2}px;
        position: relative;
        animation: dots-l23-0-anim ${parseFloat(speed)*1.5}s infinite linear;
      }
      .loader-dots-l23::before {
        content: "";
        position: absolute;
        height: ${size*0.2}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        left:0;
        top:0;
        animation: 
          dots-l23-1-anim ${parseFloat(speed)*1.5}s infinite linear,
          dots-l23-2-anim ${parseFloat(speed)*0.5}s infinite cubic-bezier(0,200,.8,200);
      }
      @keyframes dots-l23-0-anim {
        0%,31%  {background-position:50% 0,100% 0}
        33%     {background-position:50% 100%,100% 0}
        43%,64% {background-position:50% 0,100% 0}
        66%     {background-position:50% 0,100% 100%}
        79%     {background-position:50% 0,100% 0}
        100%    {transform:translateX(calc(-100%/3))}
      }
      @keyframes dots-l23-1-anim {100%{left:calc(100% + 7px)}}
      @keyframes dots-l23-2-anim {100%{top:-0.1px}}
    `,
    html: '<div class="loader-dots-l23"></div>',
  },
  {
    id: "dots-l24",
    name: "Middle Bounce",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l24 {
        width: ${size*1.47}px;
        height: ${size*0.2}px;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) 25% 0, var(--_g) 75% 0;
        background-size: ${size*0.2}px ${size*0.2}px;
        position: relative;
        animation: dots-l24-0-anim ${speed} infinite linear;
      }
      .loader-dots-l24::before {
        content: "";
        position: absolute;
        height: ${size*0.2}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        inset: 0;
        margin: auto;
        animation: dots-l24-1-anim ${speed} infinite cubic-bezier(0.5,300,0.5,-300);
      }
      @keyframes dots-l24-0-anim {
        0%,24%  {background-position:25% 0,75% 0}
        40%     {background-position:25% 0,85% 0}
        50%,72% {background-position:25% 0,75% 0}
        90%     {background-position:15% 0,75% 0}
        100%    {background-position:25% 0,75% 0}
      }
      @keyframes dots-l24-1-anim {100%{transform:translate(0.1px)}}
    `,
    html: '<div class="loader-dots-l24"></div>',
  },
  {
    id: "dots-l25",
    name: "Side Bounce",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l25 {
        width: ${size*0.83}px;
        height: ${size*0.2}px;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: ${size*0.2}px ${size*0.2}px;
        position: relative;
      }
      .loader-dots-l25::before {
        content: "";
        position: absolute;
        height: ${size*0.2}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        inset: 0;
        margin: auto;
        animation: dots-l25-1-anim ${speed}, dots-l25-2-anim ${parseFloat(speed)*0.5}s;
        animation-timing-function: cubic-bezier(.5,-900,.5,900);
        animation-iteration-count: infinite;
      }
      @keyframes dots-l25-1-anim {100%{transform:translate(0.12px)}}
      @keyframes dots-l25-2-anim {100%{inset:-0.15px 0 0}}
    `,
    html: '<div class="loader-dots-l25"></div>',
  },
  {
    id: "dots-l26",
    name: "Nine Grid",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l26 {
        width: ${size/15}px;
        color: ${primary};
        aspect-ratio: 1;
        border-radius: 50%;
        box-shadow: 
          19px -19px 0 0, 38px -19px 0 0, 57px -19px 0 0,
          19px 0 0 5px, 38px 0 0 5px, 57px 0 0 5px,
          19px 19px 0 0, 38px 19px 0 0, 57px 19px 0 0;
        transform: translateX(-38px);
        animation: dots-l26-anim ${parseFloat(speed)*2}s infinite linear;
      }
      @keyframes dots-l26-anim {
        12.5% {box-shadow:19px -19px 0 0,38px -19px 0 0,57px -19px 0 5px,19px 0 0 5px,38px 0 0 0,57px 0 0 5px,19px 19px 0 0,38px 19px 0 0,57px 19px 0 0}
        25%   {box-shadow:19px -19px 0 5px,38px -19px 0 0,57px -19px 0 5px,19px 0 0 0,38px 0 0 0,57px 0 0 0,19px 19px 0 0,38px 19px 0 5px,57px 19px 0 0}
        50%   {box-shadow:19px -19px 0 5px,38px -19px 0 5px,57px -19px 0 0,19px 0 0 0,38px 0 0 0,57px 0 0 0,19px 19px 0 0,38px 19px 0 0,57px 19px 0 5px}
        62.5% {box-shadow:19px -19px 0 0,38px -19px 0 0,57px -19px 0 0,19px 0 0 5px,38px 0 0 0,57px 0 0 0,19px 19px 0 0,38px 19px 0 5px,57px 19px 0 5px}
        75%   {box-shadow:19px -19px 0 0,38px -19px 0 5px,57px -19px 0 0,19px 0 0 0,38px 0 0 0,57px 0 0 5px,19px 19px 0 0,38px 19px 0 0,57px 19px 0 5px}
        87.5% {box-shadow:19px -19px 0 0,38px -19px 0 5px,57px -19px 0 0,19px 0 0 0,38px 0 0 5px,57px 0 0 0,19px 19px 0 5px,38px 19px 0 0,57px 19px 0 0}
      }
    `,
    html: '<div class="loader-dots-l26"></div>',
  },
  {
    id: "dots-l27",
    name: "Flip Pair",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l27 {
        height: ${size/4}px;
        aspect-ratio: 4;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: 25% 100%;
        display: grid;
      }
      .loader-dots-l27::before,
      .loader-dots-l27::after {
        content: "";
        grid-area: 1/1;
        margin: auto;
        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        clip-path: inset(0 0 49%);
        transform-origin: -100% 50%;
        animation: dots-l27-anim ${parseFloat(speed)*0.5}s infinite alternate;
      }
      .loader-dots-l27::after {
        --s:-1;
        transform-origin: 200% 50%;
      }
      @keyframes dots-l27-anim {
        0%,40% {transform:scaleY(var(--s,1)) rotate(0)}
        100%   {transform:scaleY(var(--s,1)) rotate(calc(var(--s,1)*-90deg))}
      }
    `,
    html: '<div class="loader-dots-l27"></div>',
  },
  {
    id: "dots-l28",
    name: "Pulse Expand",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l28 {
        width: ${size*0.2}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        clip-path: inset(-220%);
        animation: dots-l28-anim ${parseFloat(speed)*2}s infinite linear;
      }
      @keyframes dots-l28-anim {
        0%  {box-shadow:0 0 0 0, 40px 0,-40px 0,0 40px,0 -40px}
        10% {box-shadow:0 0 0 0, 12px 0,-40px 0,0 40px,0 -40px}
        20% {box-shadow:0 0 0 4px, 0 0,-40px 0,0 40px,0 -40px}
        30% {box-shadow:0 0 0 4px, 0 0,-12px 0,0 40px,0 -40px}
        40% {box-shadow:0 0 0 8px, 0 0,0 0,0 40px,0 -40px}
        50% {box-shadow:0 0 0 8px, 0 0,0 0,0 12px,0 -40px}
        60% {box-shadow:0 0 0 12px,0 0,0 0,0 0,0 -40px}
        70% {box-shadow:0 0 0 12px,0 0,0 0,0 0,0 -12px}
        80% {box-shadow:0 0 0 16px,0 0,0 0,0 0,0 0}
        90%,100%{box-shadow:0 0 0 0,40px 0,-40px 0,0 40px,0 -40px}
      }
    `,
    html: '<div class="loader-dots-l28"></div>',
  },
  {
    id: "dots-l29",
    name: "Flip Swing",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l29 {
        --s: ${size/4}px;
        width: calc(var(--s)*2.33);
        aspect-ratio: 1;
        display: flex;
        justify-content: space-between;
        animation: dots-l29-0-anim ${speed} infinite;
      }
      .loader-dots-l29::before,
      .loader-dots-l29::after {
        content: "";
        width: var(--s);
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) top, var(--_g) bottom;
        background-size: 100% var(--s);
        transform-origin: 50% calc(100% - var(--s)/2);
        animation: inherit;
        animation-name: dots-l29-1-anim;
      }
      .loader-dots-l29::after {
        --_s:-1;
      }
      @keyframes dots-l29-0-anim {100%{transform:translateY(calc(var(--s) - 100%))}}
      @keyframes dots-l29-1-anim {100%{transform:rotate(calc(var(--_s,1)*-180deg))}}
    `,
    html: '<div class="loader-dots-l29"></div>',
  },
  {
    id: "dots-l30",
    name: "Double Swing",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l30 {
        --s: ${size/4}px;
        width: calc(var(--s)*2.33);
        aspect-ratio: 1;
        display: flex;
        justify-content: space-between;
      }
      .loader-dots-l30::before,
      .loader-dots-l30::after {
        content: "";
        width: var(--s);
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) top, var(--_g) bottom;
        background-size: 100% var(--s);
        transform-origin: 50% calc(100% - var(--s)/2);
        animation: dots-l30-anim ${speed} infinite;
      }
      .loader-dots-l30::after {
        transform-origin: 50% calc(var(--s)/2);
      }
      @keyframes dots-l30-anim {70%,100%{transform:rotate(-270deg)}}
    `,
    html: '<div class="loader-dots-l30"></div>',
  },
  {
    id: "dots-l31",
    name: "Slide Rotate",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l31 {
        height: ${size/4}px;
        aspect-ratio: 4;
        display: grid;
        animation: dots-l31-0-anim ${speed} infinite;
      }
      .loader-dots-l31::before,
      .loader-dots-l31::after {
        content: "";
        grid-area: 1/1;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: 25% 100%;
      }
      .loader-dots-l31::after {
        transform: rotate(0) translate(37.5%) rotate(0);
        animation: inherit;
        animation-name: dots-l31-1-anim;
      }
      @keyframes dots-l31-0-anim {100%{transform:translate(37.5%)}}
      @keyframes dots-l31-1-anim {100%{transform:rotate(-.5turn) translate(37.5%) rotate(.5turn)}}
    `,
    html: '<div class="loader-dots-l31"></div>',
  },
  {
    id: "dots-l32",
    name: "Mirror Spin",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l32 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: grid;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
      }
      .loader-dots-l32::before,
      .loader-dots-l32::after {
        content: "";
        grid-area: 1/1;
        background: var(--_g) left, var(--_g) right;
        background-size: 20% 100%;
        animation: dots-l32-anim ${speed} infinite;
      }
      .loader-dots-l32::after {
        background: var(--_g) calc(1*100%/3), var(--_g) calc(2*100%/3);
        background-size: 20% 100%;
        animation-direction: reverse;
      }
      @keyframes dots-l32-anim {80%,100%{transform:rotate(.5turn)}}
    `,
    html: '<div class="loader-dots-l32"></div>',
  },
  {
    id: "dots-l33",
    name: "Swap Places",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l33 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: flex;
        justify-content: space-between;
      }
      .loader-dots-l33::before,
      .loader-dots-l33::after {
        content: "";
        width: calc(140%/3);
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: calc(300%/7) 100%;
        transform-origin: calc(300%/14) 50%;
        transform: translate(0) rotate(0);
        animation: dots-l33-anim ${speed} infinite linear;
      }
      .loader-dots-l33::after {
        --s:-1;
        transform-origin: calc(100% - calc(300%/14)) 50%;
      }
      @keyframes dots-l33-anim {100%{transform:translate(calc(var(--s,1)*(100% - calc(300%/7)))) rotate(calc(var(--s,1)*.5turn))}}
    `,
    html: '<div class="loader-dots-l33"></div>',
  },
  {
    id: "dots-l34",
    name: "Alternate Slide",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l34 {
        height: ${size/4}px;
        aspect-ratio: 4;
        display: grid;
      }
      .loader-dots-l34::before,
      .loader-dots-l34::after {
        content: "";
        grid-area: 1/1;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: 25% 100%;
        animation: dots-l34-anim ${speed} infinite;
        transform: translate(var(--d,0)) rotate(0);
      }
      .loader-dots-l34::after {
        --d: 37.5%;
        animation-delay: .5s;
      }
      @keyframes dots-l34-anim {50%,100%{transform:translate(var(--d,0)) rotate(.5turn)}}
    `,
    html: '<div class="loader-dots-l34"></div>',
  },
  {
    id: "dots-l35",
    name: "Wave Motion",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l35 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: grid;
      }
      .loader-dots-l35::before,
      .loader-dots-l35::after {
        content: "";
        grid-area: 1/1;
        height: inherit;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: ${size*0.25}px 100%;
        background-repeat: no-repeat;
        animation: dots-l35-anim ${speed} infinite linear;
      }
      .loader-dots-l35::after {
        margin-left: auto;
        --s:-1;
      }
      @keyframes dots-l35-anim {
        0%   {transform:translateY(calc(var(--s,1)*0px));aspect-ratio:2.3}
        33%  {transform:translateY(calc(var(--s,1)*8px));aspect-ratio:2.3}
        66%  {transform:translateY(calc(var(--s,1)*8px));aspect-ratio:3.7}
        100% {transform:translateY(calc(var(--s,1)*0px));aspect-ratio:3.7}
      }
    `,
    html: '<div class="loader-dots-l35"></div>',
  },
  {
    id: "dots-l36",
    name: "Flip Wave",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l36 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: grid;
        animation: dots-l36-0-anim ${parseFloat(speed)*2}s infinite linear;
      }
      .loader-dots-l36::before,
      .loader-dots-l36::after {
        content: "";
        grid-area: 1/1;
        height: inherit;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: ${size*0.25}px 100%;
        background-repeat: no-repeat;
        animation: dots-l36-1-anim ${speed} infinite linear;
      }
      .loader-dots-l36::after {
        margin-left: auto;
        --s:-1;
      }
      @keyframes dots-l36-0-anim {0%,49.99%{transform:scaleY(1)}50%,100%{transform:scaleY(-1)}}
      @keyframes dots-l36-1-anim {
        0%   {transform:translate(0,calc(var(--s,1)*0px));aspect-ratio:2.3}
        33%  {transform:translate(0,calc(var(--s,1)*8px));aspect-ratio:2.3}
        66%  {transform:translate(calc(var(--s,1)*19px),calc(var(--s,1)*8px));aspect-ratio:3.7}
        100% {transform:translate(calc(var(--s,1)*19px),calc(var(--s,1)*0px));aspect-ratio:3.7}
      }
    `,
    html: '<div class="loader-dots-l36"></div>',
  },
  {
    id: "dots-l37",
    name: "Pulsing Four",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l37 {
        color: ${primary};
        width: ${size/10}px;
        aspect-ratio: 1;
        border-radius: 50%;
        animation:
          dots-l37-1-anim ${parseFloat(speed)*0.75}s infinite linear alternate,
          dots-l37-2-anim ${parseFloat(speed)*1.5}s infinite linear;
      }
      @keyframes dots-l37-1-anim {
        0%,20% {box-shadow:30px 0 0 3px,10px 0 0 3px,-10px 0 0 3px,-30px 0 0 3px}
        60%,100% {box-shadow:12px 0 0 3px,14px 0 0 6px,-14px 0 0 6px,-12px 0 0 3px}
      }
      @keyframes dots-l37-2-anim {
        0%,25%   {transform:rotate(0)}
        50%,100% {transform:rotate(.5turn)}
      }
    `,
    html: '<div class="loader-dots-l37"></div>',
  },
  {
    id: "dots-l38",
    name: "Square Rotate",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l38 {
        width: ${size*0.58}px;
        aspect-ratio: 1;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) 0 0, var(--_g) 100% 0, var(--_g) 100% 100%, var(--_g) 0 100%;
        background-size: 40% 40%;
        animation: dots-l38-anim ${parseFloat(speed)*0.5}s infinite;
      }
      @keyframes dots-l38-anim {100%{background-position:100% 0,100% 100%,0 100%,0 0}}
    `,
    html: '<div class="loader-dots-l38"></div>',
  },
  {
    id: "dots-l39",
    name: "Cross Move",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l39 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: grid;
        animation: dots-l39-0-anim ${speed} infinite linear;
      }
      .loader-dots-l39::before,
      .loader-dots-l39::after {
        content: "";
        width: calc(140%/3);
        grid-area: 1/1;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: calc(300%/7) 100%;
        animation: dots-l39-1-anim ${speed} infinite linear;
      }
      .loader-dots-l39::after {
        margin-left: auto;
        --s:-1;
      }
      @keyframes dots-l39-0-anim {0%,30%{transform:rotate(0)}50%,100%{transform:rotate(.5turn)}}
      @keyframes dots-l39-1-anim {30%,70%{transform:translate(calc(var(--s,1)*400%/14))}}
    `,
    html: '<div class="loader-dots-l39"></div>',
  },
  {
    id: "dots-l40",
    name: "Marching Four",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l40 {
        height: ${size/4}px;
        aspect-ratio: 5;
        --_g:no-repeat radial-gradient(farthest-side,${primary} 94%,${secondary});
        background: var(--_g),var(--_g),var(--_g),var(--_g);
        background-size: 20% 100%;
        animation:
          dots-l40-1-anim ${parseFloat(speed)*0.75}s infinite alternate,
          dots-l40-2-anim ${parseFloat(speed)*1.5}s infinite alternate;
      }
      @keyframes dots-l40-1-anim {
        0%,10% {background-position:0 0,0 0,0 0,0 0}
        33% {background-position:0 0,calc(100%/3) 0,calc(100%/3) 0,calc(100%/3) 0}
        66% {background-position:0 0,calc(100%/3) 0,calc(2*100%/3) 0,calc(2*100%/3) 0}
        90%,100% {background-position:0 0,calc(100%/3) 0,calc(2*100%/3) 0,100% 0}
      }
      @keyframes dots-l40-2-anim {0%,49.99%{transform:scale(1)}50%,100%{transform:scale(-1)}}
    `,
    html: '<div class="loader-dots-l40"></div>',
  },
  {
    id: "dots-l41",
    name: "Jump Arc",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l41 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: flex;
        justify-content: space-between;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 95%,${secondary});
        background: var(--_g) calc(1*100%/3) 0, var(--_g) calc(2*100%/3) 0;
        background-size: 20% 100%;
      }
      .loader-dots-l41::before,
      .loader-dots-l41::after {
        content: "";
        height: inherit;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        animation: dots-l41-anim ${speed} infinite;
      }
      .loader-dots-l41::after {
        --s:-1,-1;
      }
      @keyframes dots-l41-anim {
        0%   {transform:scale(var(--s,1)) translate(0,0)}
        33%  {transform:scale(var(--s,1)) translate(0,130%)}
        66%  {transform:scale(var(--s,1)) translate(400%,130%)}
        100% {transform:scale(var(--s,1)) translate(400%,0)}
      }
    `,
    html: '<div class="loader-dots-l41"></div>',
  },
  {
    id: "dots-l42",
    name: "Step Arc",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l42 {
        height: ${size/4}px;
        aspect-ratio: 5;
        display: flex;
        justify-content: space-between;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 95%,${secondary});
        background: var(--_g),var(--_g);
        background-size: 20% 100%;
        animation: dots-l42-0-anim ${speed} infinite;
      }
      .loader-dots-l42::before,
      .loader-dots-l42::after {
        content: "";
        height: inherit;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        animation: dots-l42-1-anim ${speed} infinite;
      }
      .loader-dots-l42::after {
        --s:-1,-1;
      }
      @keyframes dots-l42-0-anim {
        0%,60%  {background-position:calc(1*100%/3) 0,calc(2*100%/3) 0}
        100% {background-position:calc(0*100%/3) 0,calc(3*100%/3) 0}
      }
      @keyframes dots-l42-1-anim {
        0%   {transform:scale(var(--s,1)) translate(0,0)}
        33%  {transform:scale(var(--s,1)) translate(0,130%)}
        66%  {transform:scale(var(--s,1)) translate(calc(400%/3),130%)}
        100% {transform:scale(var(--s,1)) translate(calc(400%/3),0)}
      }
    `,
    html: '<div class="loader-dots-l42"></div>',
  },
  {
    id: "dots-l43",
    name: "Vertical Wave",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l43 {
        height: ${size*0.5}px;
        aspect-ratio: 2.5;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background:var(--_g), var(--_g), var(--_g), var(--_g);
        background-size: 20% 50%;
        animation: dots-l43-anim ${speed} infinite linear;
      }
      @keyframes dots-l43-anim {
        0%     {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
        16.67% {background-position:calc(0*100%/3) 0,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
        33.33% {background-position:calc(0*100%/3) 100%,calc(1*100%/3) 0,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
        50%    {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 100%,calc(2*100%/3) 0,calc(3*100%/3) 50%}
        66.67% {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 100%,calc(3*100%/3) 0}
        83.33% {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 100%}
        100%   {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
      }
    `,
    html: '<div class="loader-dots-l43"></div>',
  },
  {
    id: "dots-l44",
    name: "Cascade Wave",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l44 {
        height: ${size*0.5}px;
        aspect-ratio: 2.5;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g), var(--_g), var(--_g), var(--_g);
        background-size: 20% 50%;
        animation: dots-l44-anim ${speed} infinite linear alternate;
      }
      @keyframes dots-l44-anim {
        0%,5%    {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
        12.5% {background-position:calc(0*100%/3) 0,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
        25%   {background-position:calc(0*100%/3) 0,calc(1*100%/3) 0,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
        37.5% {background-position:calc(0*100%/3) 100%,calc(1*100%/3) 0,calc(2*100%/3) 0,calc(3*100%/3) 50%}
        50%   {background-position:calc(0*100%/3) 100%,calc(1*100%/3) 100%,calc(2*100%/3) 0,calc(3*100%/3) 0}
        62.5% {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 100%,calc(2*100%/3) 100%,calc(3*100%/3) 0}
        75%   {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 100%,calc(3*100%/3) 100%}
        87.5% {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 100%}
        95%,100%  {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 50%,calc(2*100%/3) 50%,calc(3*100%/3) 50%}
      }
    `,
    html: '<div class="loader-dots-l44"></div>',
  },
  {
    id: "dots-l45",
    name: "Six Dots Complex",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l45 {
        --s: ${size*0.47}px;
        height: var(--s);
        aspect-ratio: 2.5;
        --_g: ${primary} 90%,${secondary};
        --_g0: no-repeat radial-gradient(farthest-side,var(--_g));
        --_g1: no-repeat radial-gradient(farthest-side at top,var(--_g));
        --_g2: no-repeat radial-gradient(farthest-side at bottom,var(--_g));
        background: var(--_g0), var(--_g1), var(--_g2), var(--_g0), var(--_g1), var(--_g2);
        background-size: 20% 50%,20% 25%,20% 25%;
        animation: dots-l45-anim ${speed} infinite;
      }
      @keyframes dots-l45-anim {
        0%   {background-position:calc(0*100%/3) 50%,calc(1*100%/3) calc(50% + var(--s)/8),calc(1*100%/3) calc(50% - var(--s)/8),calc(3*100%/3) 50%,calc(2*100%/3) calc(50% + var(--s)/8),calc(2*100%/3) calc(50% - var(--s)/8)}
        33%  {background-position:calc(0*100%/3) 50%,calc(1*100%/3) 100%,calc(1*100%/3) 0,calc(3*100%/3) 50%,calc(2*100%/3) 100%,calc(2*100%/3) 0}
        66%  {background-position:calc(1*100%/3) 50%,calc(0*100%/3) 100%,calc(0*100%/3) 0,calc(2*100%/3) 50%,calc(3*100%/3) 100%,calc(3*100%/3) 0}
        90%,100% {background-position:calc(1*100%/3) 50%,calc(0*100%/3) calc(50% + var(--s)/8),calc(0*100%/3) calc(50% - var(--s)/8),calc(2*100%/3) 50%,calc(3*100%/3) calc(50% + var(--s)/8),calc(3*100%/3) calc(50% - var(--s)/8)}
      }
    `,
    html: '<div class="loader-dots-l45"></div>',
  },
  {
    id: "dots-l46",
    name: "Square Chase",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l46 {
        width: ${size*0.53}px;
        aspect-ratio: 1;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g), var(--_g), var(--_g), var(--_g);
        background-size: 40% 40%;
        animation: dots-l46-anim ${speed} infinite;
      }
      @keyframes dots-l46-anim {
        0%  {background-position:0 0,100% 0,100% 100%,0 100%}
        40%,50% {background-position:100% 100%,100% 0,0 0,0 100%}
        90%,100%{background-position:100% 100%,0 100%,0 0,100% 0}
      }
    `,
    html: '<div class="loader-dots-l46"></div>',
  },
  {
    id: "dots-l47",
    name: "Single Dot Move",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l47 {
        height: ${size/4}px;
        aspect-ratio: 5;
        background: radial-gradient(closest-side at 37.5% 50%,${primary} 94%,${secondary}) 0/calc(80%/3) 100%;
        animation: dots-l47-anim ${parseFloat(speed)*0.75}s infinite;
      }
      @keyframes dots-l47-anim {100%{background-position:36.36%}}
    `,
    html: '<div class="loader-dots-l47"></div>',
  },
  {
    id: "dots-l48",
    name: "Masked Dot",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l48 {
        height: ${size/4}px;
        aspect-ratio: 5;
        -webkit-mask: linear-gradient(90deg,${secondary},${primary} 20% 80%,${secondary});
        background: radial-gradient(closest-side at 37.5% 50%,${primary} 94%,${secondary}) 0/calc(80%/3) 100%;
        animation: dots-l48-anim ${parseFloat(speed)*0.75}s infinite linear;
      }
      @keyframes dots-l48-anim {100%{background-position:36.36%}}
    `,
    html: '<div class="loader-dots-l48"></div>',
  },
  {
    id: "dots-l49",
    name: "Sync Rotate",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l49 {
        height: ${size/4}px;
        aspect-ratio: 4;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: 25% 100%;
        display: grid;
      }
      .loader-dots-l49::before,
      .loader-dots-l49::after {
        content: "";
        height: inherit;
        aspect-ratio: 1;
        grid-area: 1/1;
        margin: auto;
        border-radius: 50%;
        transform-origin: -100% 50%;
        background: ${primary};
        animation: dots-l49-anim ${speed} infinite linear;
      }
      .loader-dots-l49::after {
        transform-origin: 200% 50%;
        --s:-1;
        animation-delay: -0.5s;
      }
      @keyframes dots-l49-anim {58%,100%{transform:rotate(calc(var(--s,1)*1turn))}}
    `,
    html: '<div class="loader-dots-l49"></div>',
  },
  {
    id: "dots-l50",
    name: "Full Circle",
    category: "Dots",
    getCss: (primary, secondary, size, speed) => `
      .loader-dots-l50 {
        height: ${size/4}px;
        aspect-ratio: 4;
        --_g: no-repeat radial-gradient(farthest-side,${primary} 90%,${secondary});
        background: var(--_g) left, var(--_g) right;
        background-size: 25% 100%;
        display: flex;
      }
      .loader-dots-l50::before{
        content: "";
        flex: 1;
        background: inherit;
        animation: dots-l50-anim ${parseFloat(speed)*2}s infinite;
      }
      @keyframes dots-l50-anim {
        0%    {transform:translate(37.5%) rotate(0)}
        16.67%{transform:translate(37.5%) rotate(90deg)}
        33.33%{transform:translate(-37.5%) rotate(90deg)}
        50%   {transform:translate(-37.5%) rotate(180deg)}
        66.67%{transform:translate(-37.5%) rotate(270deg)}
        83.33%{transform:translate(37.5%) rotate(270deg)}
        100%  {transform:translate(37.5%) rotate(360deg)}
      }
    `,
    html: '<div class="loader-dots-l50"></div>',
  }
];

const spinnerLoaders = [
  {
    id: "spinner-l1",
    name: "Classic Half Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l1 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 8px solid;
        border-color: ${primary} ${secondary};
        animation: spinner-l1-anim ${speed} infinite;
      }
      @keyframes spinner-l1-anim {to{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l1"></div>',
  },
  {
    id: "spinner-l2",
    name: "Color Border Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l2 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 8px solid ${secondary};
        border-right-color: ${primary};
        animation: spinner-l2-anim ${speed} infinite linear;
      }
      @keyframes spinner-l2-anim {to{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l2"></div>',
  },
  {
    id: "spinner-l3",
    name: "Mask Progress Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l3 {
        width: ${size}px;
        padding: 8px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        --_m: 
          conic-gradient(${secondary} 10%,${primary}),
          linear-gradient(${primary} 0 0) content-box;
        -webkit-mask: var(--_m);
                mask: var(--_m);
        -webkit-mask-composite: source-out;
                mask-composite: subtract;
        animation: spinner-l3-anim ${speed} infinite linear;
      }
      @keyframes spinner-l3-anim {to{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l3"></div>',
  },
  {
    id: "spinner-l4",
    name: "Segmented Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l4 {
        width: ${size}px;
        --b: 8px;
        aspect-ratio: 1;
        border-radius: 50%;
        padding: 1px;
        background: conic-gradient(${secondary} 10%,${primary}) content-box;
        -webkit-mask:
          repeating-conic-gradient(${secondary} 0deg,${primary} 1deg 20deg,${secondary} 21deg 36deg),
          radial-gradient(farthest-side,${secondary} calc(100% - var(--b) - 1px),${primary} calc(100% - var(--b)));
        -webkit-mask-composite: destination-in;
                mask-composite: intersect;
        animation: spinner-l4-anim ${speed} infinite steps(10);
      }
      @keyframes spinner-l4-anim {to{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l4"></div>',
  },
  {
    id: "spinner-l5",
    name: "Pie Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l5 {
        width: ${size}px;
        --b: 8px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        -webkit-mask:
          repeating-conic-gradient(${secondary} 0deg,${primary} 1deg 70deg,${secondary} 71deg 90deg),
          radial-gradient(farthest-side,${secondary} calc(100% - var(--b) - 1px),${primary} calc(100% - var(--b)));
        -webkit-mask-composite: destination-in;
                mask-composite: intersect;
        animation: spinner-l5-anim ${speed} infinite;
      }
      @keyframes spinner-l5-anim {to{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l5"></div>',
  },
  {
    id: "spinner-l6",
    name: "Dot Trail Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l6 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        padding: 3px;
        background: 
          radial-gradient(farthest-side,${primary} 95%,${secondary}) 50% 0/${size*0.24}px ${size*0.24}px no-repeat,
          radial-gradient(farthest-side,${secondary} calc(100% - 5px),${primary} calc(100% - 4px)) content-box;
        animation: spinner-l6-anim ${parseFloat(speed)*2}s infinite;
      }
      @keyframes spinner-l6-anim {to{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l6"></div>',
  },
  {
    id: "spinner-l7",
    name: "Four Dots Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l7 {
        width: ${size}px;
        aspect-ratio: 1;
        --_c:no-repeat radial-gradient(farthest-side,${primary} 92%,${secondary});
        background: 
          var(--_c) top,
          var(--_c) left,
          var(--_c) right,
          var(--_c) bottom;
        background-size: ${size*0.24}px ${size*0.24}px;
        animation: spinner-l7-anim ${speed} infinite;
      }
      @keyframes spinner-l7-anim {to{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l7"></div>',
  },
  {
    id: "spinner-l8",
    name: "Cross Dots Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l8 {
        width: ${size}px;
        aspect-ratio: 1;
        color: ${primary};
        --_c:no-repeat radial-gradient(farthest-side,currentColor 92%,${secondary});
        background: 
          var(--_c) 50% 0   /${size*0.24}px ${size*0.24}px,
          var(--_c) 50% 100%/${size*0.24}px ${size*0.24}px,
          var(--_c) 100% 50%/${size*0.24}px ${size*0.24}px,
          var(--_c) 0    50%/${size*0.24}px ${size*0.24}px,
          var(--_c) 50%  50%/${size*0.24}px ${size*0.24}px,
          conic-gradient(from 90deg at 4px 4px,${secondary} 90deg,currentColor 0)
          -4px -4px/calc(50% + 2px) calc(50% + 2px);
        animation: spinner-l8-anim ${speed} infinite linear;
      }
      @keyframes spinner-l8-anim {to{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l8"></div>',
  },
  {
    id: "spinner-l9",
    name: "Ring Dot Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l9 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: 
          radial-gradient(farthest-side,${primary} 95%,${secondary}) 50% 1px/${size*0.24}px ${size*0.24}px no-repeat,
          radial-gradient(farthest-side,${secondary} calc(100% - 14px),${secondary} 0);
        animation: spinner-l9-anim ${parseFloat(speed)*2}s infinite linear;
      }
      @keyframes spinner-l9-anim {to{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l9"></div>',
  },
  {
    id: "spinner-l10",
    name: "Double Cross Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l10 {
        width: ${size}px;
        aspect-ratio: 1;
        color: ${primary};
        border-radius: 50%;
        display: grid;
        background: 
          conic-gradient(from 90deg at 4px 4px,${secondary} 90deg,currentColor 0)
          -4px -4px/calc(50% + 2px) calc(50% + 2px),
          radial-gradient(farthest-side,currentColor 6px,${secondary} 7px calc(100% - 6px),currentColor calc(100% - 5px)) no-repeat;
        animation: spinner-l10-anim ${parseFloat(speed)*2}s infinite linear;
        position: relative;
      }
      .loader-spinner-l10::before {
        content: "";
        border-radius: inherit;
        background: inherit;
        transform: rotate(45deg);
      }
      @keyframes spinner-l10-anim {to{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l10"></div>',
  },
  {
    id: "spinner-l11",
    name: "Pie Slice Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l11 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        padding: 6px;
        background:
          conic-gradient(from 135deg at top,currentColor 90deg, ${secondary} 0) 0 calc(50% - 4px)/${size*0.34}px ${size*0.17}px,
          radial-gradient(farthest-side at bottom left,${secondary} calc(100% - 6px),currentColor calc(100% - 5px) 99%,${secondary}) top right/50% 50% content-box content-box,
          radial-gradient(farthest-side at top,${secondary} calc(100% - 6px),currentColor calc(100% - 5px) 99%,${secondary}) bottom/100% 50% content-box content-box;
        background-repeat: no-repeat;
        animation: spinner-l11-anim ${speed} infinite linear;
      }
      @keyframes spinner-l11-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l11"></div>',
  },
  {
    id: "spinner-l12",
    name: "Nested Dots Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l12 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
      }
      .loader-spinner-l12::before,
      .loader-spinner-l12::after {
        content:"";
        grid-area: 1/1;
        --_c:no-repeat radial-gradient(farthest-side,${primary} 92%,${secondary});
        background: 
          var(--_c) 50% 0,
          var(--_c) 50% 100%,
          var(--_c) 100% 50%,
          var(--_c) 0 50%;
        background-size: ${size*0.24}px ${size*0.24}px;
        animation: spinner-l12-anim ${speed} infinite;
      }
      .loader-spinner-l12::before {
        margin: 4px;
        filter: hue-rotate(45deg);
        background-size: ${size*0.16}px ${size*0.16}px;
        animation-timing-function: linear;
      }
      @keyframes spinner-l12-anim {100%{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l12"></div>',
  },
  {
    id: "spinner-l13",
    name: "Conic Mask Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l13 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: 
          radial-gradient(farthest-side,${primary} 94%,${secondary}) top/${size*0.16}px ${size*0.16}px no-repeat,
          conic-gradient(${secondary} 30%,${primary});
        -webkit-mask: radial-gradient(farthest-side,${secondary} calc(100% - 8px),${primary} 0);
        animation: spinner-l13-anim ${speed} infinite linear;
      }
      @keyframes spinner-l13-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l13"></div>',
  },
  {
    id: "spinner-l14",
    name: "Blend Rings Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l14 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        animation: spinner-l14-anim ${parseFloat(speed)*4}s infinite;
      }
      .loader-spinner-l14::before,
      .loader-spinner-l14::after {
        content: "";
        grid-area: 1/1;
        border: 8px solid;
        border-radius: 50%;
        border-color: ${primary} ${primary} ${secondary} ${secondary};
        mix-blend-mode: darken;
        animation: spinner-l14-anim ${speed} infinite linear;
      }
      .loader-spinner-l14::after {
        border-color: ${secondary} ${secondary} ${secondary} ${secondary};
        animation-direction: reverse;
      }
      @keyframes spinner-l14-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l14"></div>',
  },
  {
    id: "spinner-l15",
    name: "Nested Rings Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l15 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        border: 4px solid ${secondary};
        border-radius: 50%;
        border-right-color: ${primary};
        animation: spinner-l15-anim ${speed} infinite linear;
      }
      .loader-spinner-l15::before,
      .loader-spinner-l15::after {
        content: "";
        grid-area: 1/1;
        margin: 2px;
        border: inherit;
        border-radius: 50%;
        animation: spinner-l15-anim ${parseFloat(speed)*2}s infinite;
      }
      .loader-spinner-l15::after {
        margin: 8px;
        animation-duration: ${parseFloat(speed)*3}s;
      }
      @keyframes spinner-l15-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l15"></div>',
  },
  {
    id: "spinner-l16",
    name: "Triple Rings Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l16 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        border: 4px solid ${secondary};
        border-radius: 50%;
        border-color: ${secondary} ${secondary};
        animation: spinner-l16-anim ${speed} infinite linear;
      }
      .loader-spinner-l16::before,
      .loader-spinner-l16::after {
        content: "";
        grid-area: 1/1;
        margin: 2px;
        border: inherit;
        border-radius: 50%;
      }
      .loader-spinner-l16::before {
        border-color: ${primary} ${secondary};
        animation: inherit;
        animation-duration: ${parseFloat(speed)*0.5}s;
        animation-direction: reverse;
      }
      .loader-spinner-l16::after {
        margin: 8px;
      }
      @keyframes spinner-l16-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l16"></div>',
  },
  {
    id: "spinner-l18",
    name: "Cross Dots Ring",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l18 {
        width: ${size}px;
        aspect-ratio: 1;
        --_c:no-repeat radial-gradient(farthest-side,${primary} 92%,${secondary});
        background: 
          var(--_c) 50% 0,
          var(--_c) 50% 100%,
          var(--_c) 100% 50%,
          var(--_c) 0 50%;
        background-size: ${size*0.2}px ${size*0.2}px;
        animation: spinner-l18-anim ${speed} infinite;
        position: relative;
      }
      .loader-spinner-l18::before {
        content:"";
        position: absolute;
        inset:0;
        margin: 3px;
        background: repeating-conic-gradient(${secondary} 0 35deg,${primary} 0 90deg);
        -webkit-mask: radial-gradient(farthest-side,${secondary} calc(100% - 3px),${primary} 0);
        border-radius: 50%;
      }
      @keyframes spinner-l18-anim {100%{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l18"></div>',
  },
  {
    id: "spinner-l19",
    name: "Cross Circle Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l19 {
        width: ${size}px;
        aspect-ratio: 1;
        color: ${primary};
        display: grid;
        background: radial-gradient(farthest-side, currentColor calc(100% - 6px),${secondary} calc(100% - 5px) 0);
        -webkit-mask: radial-gradient(farthest-side,${secondary} calc(100% - 13px),${primary} calc(100% - 12px));
        border-radius: 50%;
        animation: spinner-l19-anim ${parseFloat(speed)*2}s infinite linear;
      }
      .loader-spinner-l19::before,
      .loader-spinner-l19::after {
        content: "";
        grid-area: 1/1;
        background:
          linear-gradient(currentColor 0 0) center,
          linear-gradient(currentColor 0 0) center;
        background-size: 100% ${size*0.2}px,${size*0.2}px 100%;
        background-repeat: no-repeat;
      }
      .loader-spinner-l19::after {
        transform: rotate(45deg);
      }
      @keyframes spinner-l19-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l19"></div>',
  },
  {
    id: "spinner-l20",
    name: "Clip Path Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l20 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 8px solid ${primary};
        animation:
          spinner-l20-1-anim ${parseFloat(speed)*0.8}s infinite linear alternate,
          spinner-l20-2-anim ${parseFloat(speed)*1.6}s infinite linear;
      }
      @keyframes spinner-l20-1-anim {
        0%    {clip-path: polygon(50% 50%,0 0,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}
        12.5% {clip-path: polygon(50% 50%,0 0,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}
        25%   {clip-path: polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,100% 100%,100% 100%)}
        50%   {clip-path: polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,50% 100%,0% 100%)}
        62.5% {clip-path: polygon(50% 50%,100% 0,100% 0%,100% 0%,100% 100%,50% 100%,0% 100%)}
        75%   {clip-path: polygon(50% 50%,100% 100%,100% 100%,100% 100%,100% 100%,50% 100%,0% 100%)}
        100%  {clip-path: polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%)}
      }
      @keyframes spinner-l20-2-anim {
        0%    {transform:scaleY(1) rotate(0deg)}
        49.99%{transform:scaleY(1) rotate(135deg)}
        50%   {transform:scaleY(-1) rotate(0deg)}
        100%  {transform:scaleY(-1) rotate(-135deg)}
      }
    `,
    html: '<div class="loader-spinner-l20"></div>',
  },
  {
    id: "spinner-l21",
    name: "Repeating Conic Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l21 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: repeating-conic-gradient(${primary} 0 90deg,${secondary} 0 180deg);
        animation: spinner-l21-anim ${speed} infinite linear;
      }
      @keyframes spinner-l21-anim {100%{transform: rotate(.5turn)}}
    `,
    html: '<div class="loader-spinner-l21"></div>',
  },
  {
    id: "spinner-l22",
    name: "Color Wheel Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l22 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        border-radius: 50%;
        background: conic-gradient(${primary} 25%,${primary} 0 50%,${primary} 0 75%,${primary} 0);
        animation: spinner-l22-anim ${parseFloat(speed)*2}s infinite linear;
      }
      .loader-spinner-l22::before,
      .loader-spinner-l22::after {
        content: "";
        grid-area: 1/1;
        margin: 15%;
        border-radius: 50%;
        background: inherit;
        animation: inherit;
      }
      .loader-spinner-l22::after {
        margin: 25%;
        animation-duration: ${parseFloat(speed)*3}s;
      }
      @keyframes spinner-l22-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l22"></div>',
  },
  {
    id: "spinner-l23",
    name: "Clock Hands Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l23 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        border-radius: 50%;
        background:
          linear-gradient(0deg ,${primary} 30%,${secondary} 0 70%,${primary} 0) 50%/${size*0.16}% 100%,
          linear-gradient(90deg,${primary} 30%,${secondary} 0 70%,${primary} 0) 50%/100% ${size*0.16}%;
        background-repeat: no-repeat;
        animation: spinner-l23-anim ${speed} infinite steps(12);
      }
      .loader-spinner-l23::before,
      .loader-spinner-l23::after {
        content: "";
        grid-area: 1/1;
        border-radius: 50%;
        background: inherit;
        opacity: 0.915;
        transform: rotate(30deg);
      }
      .loader-spinner-l23::after {
        opacity: 0.83;
        transform: rotate(60deg);
      }
      @keyframes spinner-l23-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l23"></div>',
  },
  {
    id: "spinner-l24",
    name: "Triple Rings Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l24 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 8px solid ${secondary};
        border-right-color: ${primary};
        position: relative;
        animation: spinner-l24-anim ${speed} infinite linear;
      }
      .loader-spinner-l24::before,
      .loader-spinner-l24::after {
        content: "";
        position: absolute;
        inset: -8px;
        border-radius: 50%;
        border: inherit;
        animation: inherit;
        animation-duration: ${parseFloat(speed)*2}s;
      }
      .loader-spinner-l24::after {
        animation-duration: ${parseFloat(speed)*4}s;
      }
      @keyframes spinner-l24-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l24"></div>',
  },
  {
    id: "spinner-l25",
    name: "Pendulum Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l25 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: ${primary};
        -webkit-mask: radial-gradient(circle closest-side at 50% 40%,${secondary} 94%, ${primary});
        transform-origin: 50% 40%;
        animation: spinner-l25-anim ${speed} infinite linear;
      }
      @keyframes spinner-l25-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l25"></div>',
  },
  {
    id: "spinner-l26",
    name: "Web Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l26 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        -webkit-mask: conic-gradient(from 15deg,${secondary},${primary});
        animation: spinner-l26-anim ${speed} infinite steps(12);
      }
      .loader-spinner-l26,
      .loader-spinner-l26::before,
      .loader-spinner-l26::after {
        background:
          radial-gradient(closest-side at 50% 12.5%,
           ${primary} 96%,${secondary}) 50% 0/${size*0.4}% ${size*0.8}% repeat-y,
          radial-gradient(closest-side at 12.5% 50%,
           ${primary} 96%,${secondary}) 0 50%/${size*0.8}% ${size*0.4}% repeat-x;
      }
      .loader-spinner-l26::before,
      .loader-spinner-l26::after {
        content: "";
        grid-area: 1/1;
        transform: rotate(30deg);
      }
      .loader-spinner-l26::after {
        transform: rotate(60deg);
      }
      @keyframes spinner-l26-anim {100%{transform:rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l26"></div>',
  },
  {
    id: "spinner-l27",
    name: "Circle of Dots",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l27 {
        --d: ${size*0.44}px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        color: ${primary};
        box-shadow: 
          calc(1*var(--d))      calc(0*var(--d))     0 0,
          calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
          calc(0*var(--d))      calc(1*var(--d))     0 2px,
          calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
          calc(-1*var(--d))     calc(0*var(--d))     0 4px,
          calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
          calc(0*var(--d))      calc(-1*var(--d))    0 6px;
        animation: spinner-l27-anim ${speed} infinite steps(8);
      }
      @keyframes spinner-l27-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l27"></div>',
  },
  {
    id: "spinner-l28",
    name: "Nested Conic",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l28 {
        width: ${size}px;
        aspect-ratio: 1;
        display: grid;
        color: ${primary};
        background: 
          conic-gradient(from 90deg at 3px 3px,${secondary} 90deg,currentColor 0)
          -3px -3px/calc(50% + 1.5px) calc(50% + 1.5px);
        animation: spinner-l28-anim ${parseFloat(speed)*2}s infinite;
      }
      .loader-spinner-l28::before,
      .loader-spinner-l28::after {
        content: "";
        grid-area: 1/1;
        background: repeating-conic-gradient(${secondary} 0 35deg,currentColor 0 90deg);
        -webkit-mask: radial-gradient(farthest-side,${secondary} calc(100% - 3px),${primary} 0);
        border-radius: 50%;
      }
      .loader-spinner-l28::after {
        margin: 20%;
      }
      @keyframes spinner-l28-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l28"></div>',
  },
  {
    id: "spinner-l29",
    name: "Cross Bars Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l29 {
        width: ${size}px;
        aspect-ratio: 1;
        --_c:no-repeat linear-gradient(${primary} 0 0) 50%;
        background: 
          var(--_c)/100% 50%,
          var(--_c)/50% 100%;
        border-radius: 50%;
        animation: spinner-l29-anim ${parseFloat(speed)*2}s infinite linear;
      }
      @keyframes spinner-l29-anim {100%{transform: rotate(1turn)}}
    `,
    html: '<div class="loader-spinner-l29"></div>',
  },
  {
    id: "spinner-l30",
    name: "Hexagon Spinner",
    category: "Spinners",
    getCss: (primary, secondary, size, speed) => `
      .loader-spinner-l30 {
        --R: ${size*0.6}px;
        --g1: ${primary} 96%, ${secondary};
        --g2: ${secondary} 96%, ${secondary};
        width: calc(2*var(--R));
        aspect-ratio: 1;
        border-radius: 50%;
        display: grid;
        -webkit-mask: linear-gradient(${primary} 0 0);
        animation: spinner-l30-anim ${parseFloat(speed)*2}s infinite linear;
      }
      .loader-spinner-l30::before,
      .loader-spinner-l30::after {
        content:"";
        grid-area: 1/1;
        width: 50%;
        background:
          radial-gradient(farthest-side,var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R) - var(--R)),
          radial-gradient(farthest-side,var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R) - var(--R)),
          radial-gradient(farthest-side,var(--g2)) calc(var(--R) + 0.5*var(--R) - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
          radial-gradient(farthest-side,var(--g1)) 0 calc(-1*var(--R)),
          radial-gradient(farthest-side,var(--g2)) calc(var(--R) - 0.5*var(--R) - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
          radial-gradient(farthest-side,var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R) - var(--R)),
          radial-gradient(farthest-side,var(--g2)) calc(-1*var(--R)) 0,
          radial-gradient(farthest-side,var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) + 0.5*var(--R) - var(--R));
        background-size: calc(2*var(--R)) calc(2*var(--R));
        background-repeat: no-repeat;
      }
      .loader-spinner-l30::after {
        transform: rotate(180deg);
        transform-origin: right;
      }
      @keyframes spinner-l30-anim {100%{transform: rotate(-1turn)}}
    `,
    html: '<div class="loader-spinner-l30"></div>',
  }
];

const progressLoaders = [
  {
    id: "progress-l1",
    name: "Simple Progress Bar",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l1 {
        width: ${size * 2}px;
        height: 20px;
        background:
          linear-gradient(${primary} 0 0) 0/0% no-repeat ${secondary};
        animation: progress-l1-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l1-anim {100% {background-size:100%}}
    `,
    html: '<div class="loader-progress-l1"></div>',
  },
  {
    id: "progress-l2",
    name: "Rounded Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l2 {
        width: ${size * 2}px;
        height: 20px;
        border-radius: 20px;
        background:
          linear-gradient(${primary} 0 0) 0/0% no-repeat ${secondary};
        animation: progress-l2-anim ${parseFloat(speed) * 2}s infinite steps(10);
      }
      @keyframes progress-l2-anim {100% {background-size:110%}}
    `,
    html: '<div class="loader-progress-l2"></div>',
  },
  {
    id: "progress-l3",
    name: "Striped Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l3 {
        width: ${size * 2}px;
        height: 20px;
        border-radius: 20px;
        background:
          repeating-linear-gradient(135deg,${primary} 0 10px,${primary} 0 20px) 0/0% no-repeat,
          repeating-linear-gradient(135deg,${secondary} 0 10px,${secondary} 0 20px) 0/100%;
        animation: progress-l3-anim ${parseFloat(speed) * 2}s infinite;
      }
      @keyframes progress-l3-anim {100% {background-size:100%}}
    `,
    html: '<div class="loader-progress-l3"></div>',
  },
  {
    id: "progress-l4",
    name: "Masked Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l4 {
        width: ${size * 2}px;
        height: 20px;
        -webkit-mask: linear-gradient(90deg,${primary} 70%,${secondary} 0) 0/20%;
        background:
          linear-gradient(${primary} 0 0) 0/0% no-repeat ${secondary};
        animation: progress-l4-anim ${parseFloat(speed) * 2}s infinite steps(6);
      }
      @keyframes progress-l4-anim {100% {background-size:120%}}
    `,
    html: '<div class="loader-progress-l4"></div>',
  },
  {
    id: "progress-l5",
    name: "Bordered Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l5 {
        width: ${size * 1.33}px;
        height: 40px;
        color: ${primary};
        border: 2px solid currentColor;
        border-right-color: transparent;
        padding: 3px;
        background: 
          repeating-linear-gradient(90deg,currentColor 0 10px,${secondary} 0 15px) 
          0/0% no-repeat content-box content-box;
        position: relative;
        box-sizing: border-box;
        animation: progress-l5-anim ${parseFloat(speed) * 2}s infinite steps(6);
      }
      .loader-progress-l5::before {
        content: "";
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: 100%;
        width: 10px;
        background:
          linear-gradient(
            ${secondary} calc(50% - 7px),currentColor 0 calc(50% - 5px),
            ${secondary} 0 calc(50% + 5px),currentColor 0 calc(50% + 7px),${secondary} 0) left /100% 100%,
          linear-gradient(currentColor calc(50% - 5px),${secondary} 0 calc(50% + 5px),currentColor 0) left /2px 100%,
          linear-gradient(${secondary} calc(50% - 5px),currentColor 0 calc(50% + 5px),${secondary} 0) right/2px 100%;
        background-repeat:no-repeat;
      }
      @keyframes progress-l5-anim {100% {background-size:120%}}
    `,
    html: '<div class="loader-progress-l5"></div>',
  },
  {
    id: "progress-l6",
    name: "Sliding Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l6 {
        width: ${size * 2}px;
        height: 22px;
        border-radius: 20px;
        color: ${primary};
        border: 2px solid;
        position: relative;
      }
      .loader-progress-l6::before {
        content: "";
        position: absolute;
        margin: 2px;
        inset: 0 100% 0 0;
        border-radius: inherit;
        background: currentColor;
        animation: progress-l6-anim ${parseFloat(speed) * 2}s infinite;
      }
      @keyframes progress-l6-anim {100% {inset:0}}
    `,
    html: '<div class="loader-progress-l6"></div>',
  },
  {
    id: "progress-l7",
    name: "Circle Mask Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l7 {
        width: ${size * 2}px;
        height: 24px;
        -webkit-mask:
          radial-gradient(circle closest-side,${primary} 94%,${secondary}) 0 0/${size/5}% 100%,
          linear-gradient(${primary} 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
        background:
          linear-gradient(${primary} 0 0) 0/0% no-repeat ${secondary};
        animation: progress-l7-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l7-anim {100% {background-size:100%}}
    `,
    html: '<div class="loader-progress-l7"></div>',
  },
  {
    id: "progress-l8",
    name: "Circle Fill Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l8 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        -webkit-mask: linear-gradient(0deg,${primary} 55%,${secondary} 0) bottom/100% 18.18%;
        background:
          linear-gradient(${primary} 0 0) bottom/100% 0% no-repeat ${secondary};
        animation: progress-l8-anim ${parseFloat(speed) * 2}s infinite steps(7);
      }
      @keyframes progress-l8-anim {100% {background-size:100% 115%}}
    `,
    html: '<div class="loader-progress-l8"></div>',
  },
  {
    id: "progress-l9",
    name: "Wave Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l9 {
        --r1: 154%;
        --r2: 68.5%;
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        background:
          radial-gradient(var(--r1) var(--r2) at top   ,${secondary} 79.5%,${primary} 80%),
          radial-gradient(var(--r1) var(--r2) at bottom,${primary} 79.5%,${secondary} 80%),
          radial-gradient(var(--r1) var(--r2) at top   ,${secondary} 79.5%,${primary} 80%),
          ${secondary};
        background-size: 50.5% 220%;
        background-position: -100% 0%,0% 0%,100% 0%;
        background-repeat:no-repeat;
        animation: progress-l9-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l9-anim {
        33%  {background-position: 0% 33% ,100% 33% ,200% 33%}
        66%  {background-position: -100% 66%,0% 66% ,100% 66%}
        100% {background-position: 0% 100%,100% 100%,200% 100%}
      }
    `,
    html: '<div class="loader-progress-l9"></div>',
  },
  {
    id: "progress-l10",
    name: "Radial Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l10 {
        width: ${size * 2}px;
        height: ${size}px;
        border-radius: 200px 200px 0 0;
        -webkit-mask: repeating-radial-gradient(farthest-side at bottom,${secondary} 0,${primary} 1px 12%,${secondary} calc(12% + 1px) 20%);
        background:
          radial-gradient(farthest-side at bottom,${primary} 0 95%,${secondary} 0) bottom/0% 0% no-repeat ${secondary};
        animation: progress-l10-anim ${parseFloat(speed) * 2}s infinite steps(6);
      }
      @keyframes progress-l10-anim {100% {background-size:120% 120%}}
    `,
    html: '<div class="loader-progress-l10"></div>',
  },
  {
    id: "progress-l11",
    name: "Conic Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l11 {
        width: ${size}px;
        aspect-ratio: 1;
        border-radius: 50%;
        animation: progress-l11-anim ${parseFloat(speed) * 2}s infinite;
      }
      @keyframes progress-l11-anim {
        0%   {background: conic-gradient(${primary} 0     ,${secondary} 0)}
        12.5%{background: conic-gradient(${primary} 45deg ,${secondary} 46deg)}
        25%  {background: conic-gradient(${primary} 90deg ,${secondary} 91deg)}
        37.5%{background: conic-gradient(${primary} 135deg,${secondary} 136deg)}
        50%  {background: conic-gradient(${primary} 180deg,${secondary} 181deg)}
        62.5%{background: conic-gradient(${primary} 225deg,${secondary} 226deg)}
        75%  {background: conic-gradient(${primary} 270deg,${secondary} 271deg)}
        87.5%{background: conic-gradient(${primary} 315deg,${secondary} 316deg)}
        100% {background: conic-gradient(${primary} 360deg,${secondary} 360deg)}
      }
    `,
    html: '<div class="loader-progress-l11"></div>',
  },
  {
    id: "progress-l12",
    name: "Multi-bar Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l12 {
        width: ${size * 2}px;
        height: 20px;
        background: 
          linear-gradient(${primary} 50%,${secondary} 0),
          linear-gradient(${secondary} 50%,${primary} 0),
          linear-gradient(${primary} 50%,${secondary} 0),
          linear-gradient(${secondary} 50%,${primary} 0),
          linear-gradient(${primary} 50%,${secondary} 0),
          linear-gradient(${secondary} 50%,${primary} 0)
          ${secondary};
        background-size: calc(100%/6 + 1px) 200%;
        background-repeat: no-repeat;
        animation: progress-l12-anim ${parseFloat(speed) * 2}s infinite;
      }
      @keyframes progress-l12-anim {
        0%     {background-position: calc(0*100%/5) 100%,calc(1*100%/5) 0%,calc(2*100%/5) 100%,calc(3*100%/5) 0%,calc(4*100%/5) 100%,calc(5*100%/5) 0%}
        16.67% {background-position: calc(0*100%/5) 0%,calc(1*100%/5) 0%,calc(2*100%/5) 100%,calc(3*100%/5) 0%,calc(4*100%/5) 100%,calc(5*100%/5) 0%}
        33.33% {background-position: calc(0*100%/5) 0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5) 0%,calc(4*100%/5) 100%,calc(5*100%/5) 0%}
        50%    {background-position: calc(0*100%/5) 0%,calc(1*100%/5) 100%,calc(2*100%/5) 0%,calc(3*100%/5) 0%,calc(4*100%/5) 100%,calc(5*100%/5) 0%}
        66.67% {background-position: calc(0*100%/5) 0%,calc(1*100%/5) 100%,calc(2*100%/5) 0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5) 0%}
        83.33% {background-position: calc(0*100%/5) 0%,calc(1*100%/5) 100%,calc(2*100%/5) 0%,calc(3*100%/5) 100%,calc(4*100%/5) 0%,calc(5*100%/5) 0%}
        100%   {background-position: calc(0*100%/5) 0%,calc(1*100%/5) 100%,calc(2*100%/5) 0%,calc(3*100%/5) 100%,calc(4*100%/5) 0%,calc(5*100%/5) 100%}
      }
    `,
    html: '<div class="loader-progress-l12"></div>',
  },
  {
    id: "progress-l13",
    name: "Conic Mask Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l13 {
        width: ${size * 2.48}px;
        height: 24px;
        -webkit-mask: 
          conic-gradient(from 135deg at top   ,${secondary},${primary} .5deg 90deg,${secondary} 90.5deg) 0 0,
          conic-gradient(from -45deg at bottom,${secondary},${primary} .5deg 90deg,${secondary} 90.5deg) 0 100%;
        -webkit-mask-size:25% 50%;
        -webkit-mask-repeat:repeat-x;
        background: linear-gradient(${primary} 0 0) left/0% 100% no-repeat ${secondary};
        animation: progress-l13-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l13-anim {100% {background-size: 100% 100%}}
    `,
    html: '<div class="loader-progress-l13"></div>',
  },
  {
    id: "progress-l14",
    name: "Step Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l14 {
        width: ${size}px;
        height: 50px;
        --m:no-repeat linear-gradient(90deg,${primary} 70%,${secondary} 0);
        -webkit-mask: 
          var(--m) calc(0*100%/4) 100%/calc(100%/5) calc(1*100%/5),
          var(--m) calc(1*100%/4) 100%/calc(100%/5) calc(2*100%/5),
          var(--m) calc(2*100%/4) 100%/calc(100%/5) calc(3*100%/5),
          var(--m) calc(3*100%/4) 100%/calc(100%/5) calc(4*100%/5),
          var(--m) calc(4*100%/4) 100%/calc(100%/5) calc(5*100%/5);
        background: linear-gradient(${primary} 0 0) left/0% 100% no-repeat ${secondary};
        animation: progress-l14-anim ${parseFloat(speed) * 2}s infinite steps(6);
      }
      @keyframes progress-l14-anim {100% {background-size: 120% 100%}}
    `,
    html: '<div class="loader-progress-l14"></div>',
  },
  {
    id: "progress-l15",
    name: "Triangle Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l15 {
        width: ${size * 1.33}px;
        aspect-ratio: 1.154;
        clip-path: polygon(50% 0,100% 100%,0 100%);
        --c:no-repeat linear-gradient(${primary} 0 0);
        background: var(--c),var(--c),var(--c),var(--c),var(--c);
        background-size: 100% calc(100%/5 + 1px);
        animation: progress-l15-anim ${parseFloat(speed) * 2}s infinite;
      }
      @keyframes progress-l15-anim {
        0%  {background-position: 0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
        20% {background-position: 0 calc(4*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
        40% {background-position: 0 calc(4*100%/4),0 calc(3*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
        60% {background-position: 0 calc(4*100%/4),0 calc(3*100%/4),0 calc(2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
        80% {background-position: 0 calc(4*100%/4),0 calc(3*100%/4),0 calc(2*100%/4),0 calc(1*100%/4),0 calc(-2*100%/4)}
        100%{background-position: 0 calc(4*100%/4),0 calc(3*100%/4),0 calc(2*100%/4),0 calc(1*100%/4),0 calc(0*100%/4)}
      }
    `,
    html: '<div class="loader-progress-l15"></div>',
  },
  {
    id: "progress-l16",
    name: "Double Wave Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l16 {
        height: 4px;
        width: ${size * 2.17}px;
        --c:no-repeat linear-gradient(${primary} 0 0);
        background: var(--c),var(--c),${secondary};
        background-size: 60% 100%;
        animation: progress-l16-anim ${parseFloat(speed) * 3}s infinite;
      }
      @keyframes progress-l16-anim {
        0%   {background-position:-150% 0,-150% 0}
        66%  {background-position: 250% 0,-150% 0}
        100% {background-position: 250% 0, 250% 0}
      }
    `,
    html: '<div class="loader-progress-l16"></div>',
  },
  {
    id: "progress-l17",
    name: "Circle Mask Bar",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l17 {
        width: ${size * 2}px;
        height: 20px;
        -webkit-mask: radial-gradient(circle closest-side,${primary} 94%,${secondary}) left/${size/6}% 100%;
        background: linear-gradient(${primary} 0 0) left/0% 100% no-repeat ${secondary};
        animation: progress-l17-anim ${parseFloat(speed) * 2}s infinite steps(6);
      }
      @keyframes progress-l17-anim {100% {background-size:120% 100%}}
    `,
    html: '<div class="loader-progress-l17"></div>',
  },
  {
    id: "progress-l18",
    name: "Clip Path Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l18 {
        width: ${size}px;
        aspect-ratio: 1;
        border: 15px solid ${secondary};
        border-radius: 50%;
        position: relative;
        transform: rotate(45deg);
      }
      .loader-progress-l18::before {
        content: "";
        position: absolute;
        inset: -15px;
        border-radius: 50%;
        border: 15px solid ${primary};
        animation: progress-l18-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l18-anim {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }
    `,
    html: '<div class="loader-progress-l18"></div>',
  },
  {
    id: "progress-l19",
    name: "Heart Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l19 {
        width: ${size}px;
        aspect-ratio: 1;
        background: linear-gradient(${primary} 0 0) bottom/100% 0% no-repeat ${secondary};
        -webkit-mask: 
          radial-gradient(circle at 60% 65%, ${primary} 62%, ${secondary} 65%) top left, 
          radial-gradient(circle at 40% 65%, ${primary} 62%, ${secondary} 65%) top right, 
          linear-gradient(to bottom left, ${primary} 42%,${secondary} 43%) bottom left, 
          linear-gradient(to bottom right,${primary} 42%,${secondary} 43%) bottom right;
        -webkit-mask-size: 50% 50%;
        -webkit-mask-repeat: no-repeat;
        animation: progress-l19-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l19-anim {90%,100% {background-size:100% 100%}}
    `,
    html: '<div class="loader-progress-l19"></div>',
  },
  {
    id: "progress-l20",
    name: "Complex Mask Progress",
    category: "Progress",
    getCss: (primary, secondary, size, speed) => `
      .loader-progress-l20 {
        --s: ${size * 0.67}px;
        height: calc(var(--s)*0.9);
        width: calc(var(--s)*5);
        --v1:${secondary},${primary} 0.5deg 108deg,${secondary} 109deg;
        --v2:${secondary},${primary} 0.5deg 36deg,${secondary} 37deg;
        -webkit-mask:
          conic-gradient(from 54deg at calc(var(--s)*0.68) calc(var(--s)*0.57),var(--v1)),
          conic-gradient(from 90deg at calc(var(--s)*0.02) calc(var(--s)*0.35),var(--v2)),
          conic-gradient(from 126deg at calc(var(--s)*0.5) calc(var(--s)*0.7),var(--v1)),
          conic-gradient(from 162deg at calc(var(--s)*0.5) 0,var(--v2));
        -webkit-mask-size: var(--s) var(--s);
        -webkit-mask-composite: xor,destination-over;
                mask-composite: exclude,add;
        -webkit-mask-repeat:repeat-x;
        background:linear-gradient(${primary} 0 0) left/0% 100% ${secondary} no-repeat;
        animation: progress-l20-anim ${parseFloat(speed) * 2}s infinite linear;
      }
      @keyframes progress-l20-anim {90%,100% {background-size:100% 100%}}
    `,
    html: '<div class="loader-progress-l20"></div>',
  }
];

const barLoaders = [
  {
    id: "bar-l1",
    name: "Triple Bar Pulse",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l1 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
        background-size: 20% 100%;
        animation: bar-l1-anim ${speed} infinite linear;
      }
      @keyframes bar-l1-anim {
        0%, 100% {background-size: 20% 100%,20% 100%,20% 100%}
        33% {background-size: 20% 10% ,20% 100%,20% 100%}
        50% {background-size: 20% 100%,20% 10% ,20% 100%}
        66% {background-size: 20% 100%,20% 100%,20% 10% }
      }
    `,
    html: '<div class="loader-bar-l1"></div>',
  },
  {
    id: "bar-l2",
    name: "Ascending Wave",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l2 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
        animation: bar-l2-anim ${speed} infinite linear;
      }
      @keyframes bar-l2-anim {
        0%, 100% {background-size: 20% 100%,20% 100%,20% 100%}
        20% {background-size: 20% 60% ,20% 100%,20% 100%}
        40% {background-size: 20% 80% ,20% 60% ,20% 100%}
        60% {background-size: 20% 100%,20% 80% ,20% 60% }
        80% {background-size: 20% 100%,20% 100%,20% 80% }
      }
    `,
    html: '<div class="loader-bar-l2"></div>',
  },
  {
    id: "bar-l3",
    name: "Vertical Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l3 {
        width: ${size}px;
        aspect-ratio: 1;
        background: 
          linear-gradient(${secondary} calc(1*100%/6),${primary} 0 calc(3*100%/6),${secondary} 0) left bottom,
          linear-gradient(${secondary} calc(2*100%/6),${primary} 0 calc(4*100%/6),${secondary} 0) center bottom,
          linear-gradient(${secondary} calc(3*100%/6),${primary} 0 calc(5*100%/6),${secondary} 0) right bottom;
        background-size: 20% 600%;
        background-repeat: no-repeat;
        animation: bar-l3-anim ${speed} infinite linear;
      }
      @keyframes bar-l3-anim {100% {background-position: left top,center top,right top}}
    `,
    html: '<div class="loader-bar-l3"></div>',
  },
  {
    id: "bar-l4",
    name: "Moving Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l4 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} calc(50% - 10px),${secondary} 0 calc(50% + 10px),${primary} 0);
        background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
        background-size: 20% calc(200% + 20px);
        animation: bar-l4-anim ${speed} infinite linear;
      }
      @keyframes bar-l4-anim {
        33%  {background-position: 0% 50%,50% 100%,100% 100%}
        50%  {background-position: 0% 0%,50% 50%,100% 100%}
        66%  {background-position: 0% 0%,50% 0%,100% 50%}
        100% {background-position: 0% 0%,50% 0%,100% 0%}
      }
    `,
    html: '<div class="loader-bar-l4"></div>',
  },
  {
    id: "bar-l5",
    name: "Bouncing Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l5 {
        width: ${size}px;
        aspect-ratio: .75;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
        background-size: 20% 65%;
        animation: bar-l5-anim ${speed} infinite linear;
      }
      @keyframes bar-l5-anim {
        20% {background-position: 0% 50%,50% 100%,100% 100%}
        40% {background-position: 0% 0%,50% 50%,100% 100%}
        60% {background-position: 0% 100%,50% 0%,100% 50%}
        80% {background-position: 0% 100%,50% 100%,100% 0%}
      }
    `,
    html: '<div class="loader-bar-l5"></div>',
  },
  {
    id: "bar-l6",
    name: "Center Wave",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l6 {
        width: ${size}px;
        aspect-ratio: .75;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
        background-size: 20% 50%;
        animation: bar-l6-anim ${speed} infinite linear;
      }
      @keyframes bar-l6-anim {
        20% {background-position: 0% 0%,50% 50%,100% 50%}
        40% {background-position: 0% 100%,50% 0%,100% 50%}
        60% {background-position: 0% 50%,50% 100%,100% 0%}
        80% {background-position: 0% 50%,50% 50%,100% 100%}
      }
    `,
    html: '<div class="loader-bar-l6"></div>',
  },
  {
    id: "bar-l7",
    name: "Alternating Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l7 {
        width: ${size}px;
        aspect-ratio: .75;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
        animation: bar-l7-anim ${speed} infinite linear alternate;
      }
      @keyframes bar-l7-anim {
        0%  {background-size: 20% 50%,20% 50%,20% 50%}
        20% {background-size: 20% 20%,20% 50%,20% 50%}
        40% {background-size: 20% 100%,20% 20%,20% 50%}
        60% {background-size: 20% 50%,20% 100%,20% 20%}
        80% {background-size: 20% 50%,20% 50%,20% 100%}
        100%{background-size: 20% 50%,20% 50%,20% 50%}
      }
    `,
    html: '<div class="loader-bar-l7"></div>',
  },
  {
    id: "bar-l8",
    name: "Sequential Fill",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l8 {
        width: ${size}px;
        aspect-ratio: .75;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
        background-size: 20% 65%;
        animation: bar-l8-anim ${speed} infinite linear;
      }
      @keyframes bar-l8-anim {
        16.67% {background-position: 0% 0%,50% 100%,100% 100%}
        33.33% {background-position: 0% 0%,50% 0%,100% 100%}
        50%    {background-position: 0% 0%,50% 0%,100% 0%}
        66.67% {background-position: 0% 100%,50% 0%,100% 0%}
        83.33% {background-position: 0% 100%,50% 100%,100% 0%}
      }
    `,
    html: '<div class="loader-bar-l8"></div>',
  },
  {
    id: "bar-l9",
    name: "Diagonal Wave",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l9 {
        width: ${size}px;
        aspect-ratio: .75;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
        background-size: 20% 60%;
        animation: bar-l9-anim ${speed} infinite;
      }
      @keyframes bar-l9-anim {
        33% {background-position: 0% 0%,50% 100%,100% 0%}
        66% {background-position: 0% 100%,50% 0%,100% 100%}
      }
    `,
    html: '<div class="loader-bar-l9"></div>',
  },
  {
    id: "bar-l10",
    name: "Striped Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l10 {
        height: ${size}px;
        aspect-ratio: 1.2;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 20%,${secondary} 0 40%);
        background: var(--c) 50% 0, var(--c) 50% 100%;
        background-size: calc(500%/6) 50%;
        animation: bar-l10-anim ${speed} infinite linear;
      }
      @keyframes bar-l10-anim {
        33%  {background-position: 0 0,100% 100%}
        66%  {background-position: 0 100%,100% 0}
        100% {background-position: 50% 100%,50% 0}
      }
    `,
    html: '<div class="loader-bar-l10"></div>',
  },
  {
    id: "bar-l11",
    name: "Six Bar Pulse",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l11 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
        animation: bar-l11-anim ${speed} infinite linear;
      }
      @keyframes bar-l11-anim {
        80% {background-size: 20% 30%}
        0%, 90%, 100%{background-size: 20% 50%}
      }
    `,
    html: '<div class="loader-bar-l11"></div>',
  },
  {
    id: "bar-l12",
    name: "Six Bar Wave",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l12 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
        animation: bar-l12-anim ${speed} infinite;
      }
      @keyframes bar-l12-anim {
        0%, 100%{background-size: 20% 50%}
        16.67% {background-size: 20% 30%, 20% 30%, 20% 50%, 20% 50%, 20% 50%, 20% 50%}
        33.33% {background-size: 20% 30%, 20% 30%, 20% 30%, 20% 30%, 20% 50%, 20% 50%}
        50%    {background-size: 20% 30%, 20% 30%, 20% 30%, 20% 30%, 20% 30%, 20% 30%}
        66.67% {background-size: 20% 50%, 20% 50%, 20% 30%, 20% 30%, 20% 30%, 20% 30%}
        83.33% {background-size: 20% 50%, 20% 50%, 20% 50%, 20% 50%, 20% 30%, 20% 30%}
      }
    `,
    html: '<div class="loader-bar-l12"></div>',
  },
  {
    id: "bar-l13",
    name: "Cross Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l13 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 50%, var(--c) 100% 0, var(--c) 100% 100%;
        animation: bar-l13-anim ${speed} infinite alternate;
      }
      @keyframes bar-l13-anim {
        0%, 10%   {background-size: 20% 100%}
        50%      {background-size: 20% 20%}
        90%, 100% {background-size: 100% 20%}
      }
    `,
    html: '<div class="loader-bar-l13"></div>',
  },
  {
    id: "bar-l14",
    name: "Six Bar Pattern",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l14 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
        animation: bar-l14-1-anim ${parseFloat(speed)*0.5}s infinite alternate,
                  bar-l14-2-anim ${parseFloat(speed)*4}s infinite linear 0.5s;
      }
      @keyframes bar-l14-1-anim {
        0%, 10%   {background-size: 20% 100%}
        100%   {background-size: 20% 20%}
      }
      @keyframes bar-l14-2-anim {
        0%, 49.9% {background-position: 0 0,0 100%,50% 50%,50% 50%,100% 0,100% 100%}
        50%, 100% {background-position: 0 50%,0 50%,50% 0,50% 100%,100% 50%,100% 50%}
      }
    `,
    html: '<div class="loader-bar-l14"></div>',
  },
  {
    id: "bar-l15",
    name: "Three Bar Sequence",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l15 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c), var(--c), var(--c);
        animation: bar-l15-1-anim ${speed} infinite,
                  bar-l15-2-anim ${speed} infinite;
      }
      @keyframes bar-l15-1-anim {
        0%, 100% {background-size: 20% 100%}
        33%, 66% {background-size: 20% 40%}
      }
      @keyframes bar-l15-2-anim {
        0%, 33%   {background-position: 0 0,50% 100%,100% 100%}
        66%, 100% {background-position: 100% 0,0 100%,50% 100%}
      }
    `,
    html: '<div class="loader-bar-l15"></div>',
  },
  {
    id: "bar-l16",
    name: "Three Bar Alternate",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l16 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c), var(--c), var(--c);
        animation: bar-l16-1-anim ${speed} infinite,
                  bar-l16-2-anim ${speed} infinite;
      }
      @keyframes bar-l16-1-anim {
        0%, 100% {background-size: 20% 100%}
        33%, 66% {background-size: 20% 40%}
      }
      @keyframes bar-l16-2-anim {
        0%, 33%   {background-position: 0 0,50% 100%,100% 0}
        66%, 100% {background-position: 0 100%,50% 0,100% 100%}
      }
    `,
    html: '<div class="loader-bar-l16"></div>',
  },
  {
    id: "bar-l17",
    name: "Diagonal Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l17 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 50% 50%, var(--c) 100% 100%;
        animation: bar-l17-anim ${speed} infinite alternate;
      }
      @keyframes bar-l17-anim {
        0%, 10%  {background-size: 20% 100%}
        50%  {background-size: 20% 20%}
        90%, 100% {background-size: 100% 20%}
      }
    `,
    html: '<div class="loader-bar-l17"></div>',
  },
  {
    id: "bar-l18",
    name: "Center Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l18 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c), var(--c), var(--c);
        animation: bar-l18-1-anim ${speed} infinite,
                  bar-l18-2-anim ${speed} infinite;
      }
      @keyframes bar-l18-1-anim {
        0%, 100% {background-size: 20% 100%}
        33%, 66% {background-size: 20% 20%}
      }
      @keyframes bar-l18-2-anim {
        0%, 33%   {background-position: 0 0,50% 50%,100% 100%}
        66%, 100% {background-position: 100% 0,50% 50%,0 100%}
      }
    `,
    html: '<div class="loader-bar-l18"></div>',
  },
  {
    id: "bar-l19",
    name: "Quarter Circle Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l19 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: conic-gradient(from -90deg,${primary} 90deg,${secondary} 0);
        background: var(--c), var(--c);
        background-size: 40% 40%;
        animation: bar-l19-anim ${speed} infinite alternate;
      }
      @keyframes bar-l19-anim {
        0%, 10%  {background-position: 0 0,0 calc(100%/3)}
        50%  {background-position: 0 0,calc(100%/3) calc(100%/3)}
        90%, 100% {background-position: 0 0,calc(100%/3) 0}
      }
    `,
    html: '<div class="loader-bar-l19"></div>',
  },
  {
    id: "bar-l20",
    name: "Rotating Quarters",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l20 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: conic-gradient(from -90deg,${primary} 90deg,${secondary} 0);
        background: var(--c), var(--c);
        background-size: 40% 40%;
        animation: bar-l20-anim ${parseFloat(speed)*1.5}s infinite;
      }
      @keyframes bar-l20-anim {
        0%, 20%  {background-position: 0 0,0 calc(100%/3)}
        33%  {background-position: 0 0,calc(100%/3) calc(100%/3)}
        66%  {background-position: 0 calc(100%/3),calc(100%/3) 0}
        80%, 100% {background-position: 0 calc(100%/3),0 0}
      }
    `,
    html: '<div class="loader-bar-l20"></div>',
  },
  {
    id: "bar-l21",
    name: "Striped Sliders",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l21 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 20%,${secondary} 0 40%);
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 100% 26%;
        animation: bar-l21-anim ${parseFloat(speed)*1.5}s infinite;
      }
      @keyframes bar-l21-anim {
        0%    {background-position:-50px calc(0*100%/3),-50px calc(1*100%/3),-50px calc(2*100%/3),-50px calc(3*100%/3)}
        12.5% {background-position:0 calc(0*100%/3),-50px calc(1*100%/3),-50px calc(2*100%/3),-50px calc(3*100%/3)}
        25%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),-50px calc(2*100%/3),-50px calc(3*100%/3)}
        37.5% {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),-50px calc(3*100%/3)}
        45%,55%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        62.5% {background-position:50px calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        75%   {background-position:50px calc(0*100%/3),50px calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        87.5% {background-position:50px calc(0*100%/3),50px calc(1*100%/3),50px calc(2*100%/3),0 calc(3*100%/3)}
        100%  {background-position:50px calc(0*100%/3),50px calc(1*100%/3),50px calc(2*100%/3),50px calc(3*100%/3)}
      }
    `,
    html: '<div class="loader-bar-l21"></div>',
  },
  {
    id: "bar-l22",
    name: "Vertical Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l22 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 20%,${secondary} 0 40%);
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 100% 26%;
        animation: bar-l22-anim ${parseFloat(speed)*1.5}s infinite;
      }
      @keyframes bar-l22-anim {
        0%    {background-position:0 -20px,0 -20px,0 -20px,0 -20px}
        12.5% {background-position:0 -20px,0 -20px,0 -20px,0 calc(3*100%/3)}
        25%   {background-position:0 -20px,0 -20px,0 calc(2*100%/3),0 calc(3*100%/3)}
        37.5% {background-position:0 -20px,0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        45%,50%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        62.5% {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 50px}
        75%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 50px,0 50px}
        87.5% {background-position:0 calc(0*100%/3),0 50px,0 50px,0 50px}
        100%  {background-position:0 50px,0 50px,0 50px,0 50px}
      }
    `,
    html: '<div class="loader-bar-l22"></div>',
  },
  {
    id: "bar-l23",
    name: "Horizontal Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l23 {
        height: ${size}px;
        aspect-ratio: 1.6;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 20%,${secondary} 0 40%);
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 62.5% 26%;
        animation: bar-l23-anim ${speed} infinite;
      }
      @keyframes bar-l23-anim {
        0%, 10% {background-position:50% calc(0*100%/3),50% calc(1*100%/3),50% calc(2*100%/3),50% calc(3*100%/3)}
        33% {background-position:100% calc(0*100%/3),calc(100% - 9px) calc(1*100%/3),9px calc(2*100%/3),0 calc(3*100%/3)}
        66% {background-position:0 calc(0*100%/3),9px calc(1*100%/3),calc(100% - 9px) calc(2*100%/3),100% calc(3*100%/3)}
        90%, 100%{background-position:50% calc(0*100%/3),50% calc(1*100%/3),50% calc(2*100%/3),50% calc(3*100%/3)}
      }
    `,
    html: '<div class="loader-bar-l23"></div>',
  },
  {
    id: "bar-l24",
    name: "Step Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l24 {
        width: ${size}px;
        aspect-ratio: .8;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 20%,${secondary} 0 40%);
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 100% 21%;
        animation: bar-l24-anim ${parseFloat(speed)*0.75}s infinite alternate;
      }
      @keyframes bar-l24-anim {
        0%, 10% {background-position:0 calc(0*100%/4),0 calc(1*100%/4),0 calc(2*100%/4),0 calc(3*100%/4)}
        25% {background-position:0 calc(0*100%/4),0 calc(1*100%/4),0 calc(2*100%/4),0 calc(4*100%/4)}
        50% {background-position:0 calc(0*100%/4),0 calc(1*100%/4),0 calc(3*100%/4),0 calc(4*100%/4)}
        75% {background-position:0 calc(0*100%/4),0 calc(2*100%/4),0 calc(3*100%/4),0 calc(4*100%/4)}
        90%, 100%{background-position:0 calc(1*100%/4),0 calc(2*100%/4),0 calc(3*100%/4),0 calc(4*100%/4)}
      }
    `,
    html: '<div class="loader-bar-l24"></div>',
  },
  {
    id: "bar-l25",
    name: "Wide Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l25 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 calc(100%/7),${secondary} 0 calc(200%/7));
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 140% 26%;
        animation: bar-l25-anim ${parseFloat(speed)*0.75}s infinite;
      }
      @keyframes bar-l25-anim {
        0%   {background-position:0 calc(0*100%/3),100% calc(1*100%/3),0 calc(2*100%/3),100% calc(3*100%/3)}
        25%  {background-position:100% calc(0*100%/3),100% calc(1*100%/3),0 calc(2*100%/3),100% calc(3*100%/3)}
        50%  {background-position:100% calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),100% calc(3*100%/3)}
        75%  {background-position:100% calc(0*100%/3),0 calc(1*100%/3),100% calc(2*100%/3),100% calc(3*100%/3)}
        100% {background-position:100% calc(0*100%/3),0 calc(1*100%/3),100% calc(2*100%/3),0 calc(3*100%/3)}
      }
    `,
    html: '<div class="loader-bar-l25"></div>',
  },
  {
    id: "bar-l26",
    name: "Progressive Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l26 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 calc(100%/7),${secondary} 0 calc(200%/7));
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 140% 26%;
        animation: bar-l26-anim ${parseFloat(speed)*0.75}s infinite linear;
      }
      @keyframes bar-l26-anim {
        0%, 5%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        20%  {background-position:50% calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        40%  {background-position:100% calc(0*100%/3),50% calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
        60%  {background-position:100% calc(0*100%/3),100% calc(1*100%/3),50% calc(2*100%/3),0 calc(3*100%/3)}
        80%  {background-position:100% calc(0*100%/3),100% calc(1*100%/3),100% calc(2*100%/3),50% calc(3*100%/3)}
        95%, 100% {background-position:100% calc(0*100%/3),100% calc(1*100%/3),100% calc(2*100%/3),100% calc(3*100%/3)}
      }
    `,
    html: '<div class="loader-bar-l26"></div>',
  },
  {
    id: "bar-l27",
    name: "Alternating Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l27 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 calc(100%/7),${secondary} 0 calc(200%/7));
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 140% 26%;
        animation: bar-l27-anim ${parseFloat(speed)*0.75}s infinite linear;
      }
      @keyframes bar-l27-anim {
        0%, 20%   {background-position:0 calc(0*100%/3),100% calc(1*100%/3),0 calc(2*100%/3),100% calc(3*100%/3)}
        80%, 100% {background-position:100% calc(0*100%/3),0 calc(1*100%/3),100% calc(2*100%/3),0 calc(3*100%/3)}
      }
    `,
    html: '<div class="loader-bar-l27"></div>',
  },
  {
    id: "bar-l28",
    name: "Center Stripes",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l28 {
        height: ${size}px;
        aspect-ratio: 1.4;
        --c: no-repeat repeating-linear-gradient(90deg,${primary} 0 20%,${secondary} 0 40%);
        background: var(--c),var(--c),var(--c),var(--c);
        background-size: 72% 26%;
        animation: bar-l28-anim ${speed} infinite;
      }
      @keyframes bar-l28-anim {
        0%, 20%  {background-position:50% calc(0*100%/3),50% calc(1*100%/3),50% calc(2*100%/3),50% calc(3*100%/3)}
        40%  {background-position:50% calc(0*100%/3),100% calc(1*100%/3),0 calc(2*100%/3),50% calc(3*100%/3)}
        60%  {background-position:50% calc(0*100%/3),0 calc(1*100%/3),100% calc(2*100%/3),50% calc(3*100%/3)}
        80%, 100% {background-position:50% calc(0*100%/3),50% calc(1*100%/3),50% calc(2*100%/3),50% calc(3*100%/3)}
      }
    `,
    html: '<div class="loader-bar-l28"></div>',
  },
  {
    id: "bar-l29",
    name: "Grid Dots",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l29 {
        width: 9px;
        height: 9px;
        background: ${primary};
        color: ${primary};
        box-shadow: 
          -18px -9px,0 -9px,18px -9px,
          -18px 0  ,       18px 0,
          -18px 9px,0 9px,18px 9px,
          -18px 18px,0 18px,18px 18px;
        animation: bar-l29-anim ${parseFloat(speed)*2}s infinite;
      }
      @keyframes bar-l29-anim {
        10% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px ${secondary},0 9px,18px 9px ${secondary},
            -18px 18px,0 18px,18px 18px;
        }
        20% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px,18px 9px ${secondary},
            -18px 18px ${secondary},0 18px,18px 18px;
        }
        30% {
          box-shadow: 
            -18px -9px,0 -9px ${secondary},18px -9px,
            -18px 0 ${secondary},       18px 0,
            -18px 9px,0 9px ${secondary},18px 9px,
            -18px 18px ${secondary},0 18px,18px 18px ${secondary};
        }
        40% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0 ${secondary},       18px 0 ${secondary},
            -18px 9px,0 9px,18px 9px,
            -18px 18px,0 18px,18px 18px;
        }
        50% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0  ,       18px 0 ${secondary},
            -18px 9px ${secondary},0 9px,18px 9px,
            -18px 18px,0 18px,18px 18px;
        }
        60% {
          box-shadow: 
            -18px -9px,0 -9px ${secondary},18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px ${secondary},0 9px,18px 9px,
            -18px 18px ${secondary},0 18px,18px 18px;
        }
        70% {
          box-shadow: 
            -18px -9px,0 -9px ${secondary},18px -9px ${secondary},
            -18px 0  ,       18px 0,
            -18px 9px,0 9px,18px 9px,
            -18px 18px ${secondary},0 18px,18px 18px;
        }
        80% {
          box-shadow: 
            -18px -9px ${secondary},0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px,18px 9px,
            -18px 18px,0 18px,18px 18px ${secondary};
        }
        90% {
          box-shadow: 
            -18px -9px ${secondary},0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px ${secondary},18px 9px,
            -18px 18px,0 18px,18px 18px ${secondary};
        }
      }
    `,
    html: '<div class="loader-bar-l29"></div>',
  },
  {
    id: "bar-l30",
    name: "Thick Grid Dots",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l30 {
        width: 9px;
        height: 9px;
        background: ${primary};
        color: ${primary};
        box-shadow: 
          -18px -9px,0 -9px,18px -9px,
          -18px 0  ,       18px 0,
          -18px 9px,0 9px,18px 9px,
          -18px 18px,0 18px,18px 18px;
        animation: bar-l30-anim ${parseFloat(speed)*2}s infinite;
      }
      @keyframes bar-l30-anim {
        10% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px 0 2px,0 9px,18px 9px 0 2px,
            -18px 18px,0 18px,18px 18px;
        }
        20% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px,18px 9px 0 2px,
            -18px 18px 0 2px,0 18px,18px 18px;
        }
        30% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0 0 2px,       18px 0,
            -18px 9px,0 9px 0 2px,18px 9px,
            -18px 18px 0 2px,0 18px,18px 18px 0 2px;
        }
        40% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0 0 2px,       18px 0 0 2px,
            -18px 9px,0 9px,18px 9px,
            -18px 18px,0 18px,18px 18px 0 2px;
        }
        50% {
          box-shadow: 
            -18px -9px,0 -9px,18px -9px,
            -18px 0  ,       18px 0 0 2px,
            -18px 9px 0 2px,0 9px,18px 9px,
            -18px 18px,0 18px,18px 18px;
        }
        60% {
          box-shadow: 
            -18px -9px,0 -9px 0 2px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px 0 2px,0 9px,18px 9px,
            -18px 18px 0 2px,0 18px,18px 18px;
        }
        70% {
          box-shadow: 
            -18px -9px,0 -9px 0 2px,18px -9px 0 2px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px,18px 9px,
            -18px 18px 0 2px,0 18px,18px 18px;
        }
        80% {
          box-shadow: 
            -18px -9px 0 2px,0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px,18px 9px,
            -18px 18px,0 18px,18px 18px 0 2px;
        }
        90% {
          box-shadow: 
            -18px -9px 0 2px,0 -9px,18px -9px,
            -18px 0  ,       18px 0,
            -18px 9px,0 9px 0 2px,18px 9px,
            -18px 18px,0 18px,18px 18px 0 2px;
        }
      }
    `,
    html: '<div class="loader-bar-l30"></div>',
  },
  {
    id: "bar-l31",
    name: "Complex Bars with Dots",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l31 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --r1: radial-gradient(farthest-side at bottom,${primary} 93%,${secondary});
        --r2: radial-gradient(farthest-side at top,${primary} 93%,${secondary});
        background: 
          var(--c), var(--r1), var(--r2),
          var(--c), var(--r1), var(--r2),
          var(--c), var(--r1), var(--r2);
        background-repeat: no-repeat;
        animation: bar-l31-anim ${speed} infinite alternate;
      }
      @keyframes bar-l31-anim {
        0%, 10% {
          background-size: 8px 0, 8px 4px, 8px 4px;
          background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px), 50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
        }
        90%, 100% {
          background-size: 8px 100%, 8px 4px, 8px 4px;
          background-position: 0 50%, 0 -2px, 0 calc(100% + 2px), 50% 50%, 50% -2px, 50% calc(100% + 2px), 100% 50%, 100% -2px, 100% calc(100% + 2px);
        }
      }
    `,
    html: '<div class="loader-bar-l31"></div>',
  },
  {
    id: "bar-l32",
    name: "Staggered Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l32 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --r1: radial-gradient(farthest-side at bottom,${primary} 93%,${secondary});
        --r2: radial-gradient(farthest-side at top,${primary} 93%,${secondary});
        background: 
          var(--c), var(--r1), var(--r2),
          var(--c), var(--r1), var(--r2),
          var(--c), var(--r1), var(--r2);
        background-repeat: no-repeat;
        animation: bar-l32-anim ${speed} infinite alternate;
      }
      @keyframes bar-l32-anim {
        0%, 25% {
          background-size: 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px;
          background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px), 50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
        }
        50% {
          background-size: 8px 100%, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px;
          background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
        }
        75% {
          background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px;
          background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%, 50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
        }
        95%, 100% {
          background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px;
          background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%, 50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%, 100% calc(0% - 2px), 100% calc(100% + 2px);
        }
      }
    `,
    html: '<div class="loader-bar-l32"></div>',
  },
  {
    id: "bar-l33",
    name: "Ball and Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l33 {
        width: ${size}px;
        height: ${size*0.65}px;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 100%, var(--c) 50% 100%, var(--c) 100% 100%;
        background-size: 8px calc(100% - 4px);
        position: relative;
      }
      .loader-bar-l33::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${primary};
        left: 0;
        top: 0;
        animation: 
          bar-l33-1-anim ${parseFloat(speed)*1.5}s infinite linear alternate,
          bar-l33-2-anim ${parseFloat(speed)*0.75}s infinite cubic-bezier(0,200,.8,200);
      }
      @keyframes bar-l33-1-anim {100% {left: calc(100% - 8px)}}
      @keyframes bar-l33-2-anim {100% {top: -0.1px}}
    `,
    html: '<div class="loader-bar-l33"></div>',
  },
  {
    id: "bar-l34",
    name: "Bouncing Ball Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l34 {
        width: ${size}px;
        height: 20px;
        --c: no-repeat radial-gradient(farthest-side,${primary} 93%,${secondary});
        background: var(--c) 0 0, var(--c) 50% 0, var(--c) 100% 0;
        background-size: 8px 8px;
        position: relative;
        animation: bar-l34-0-anim ${speed} infinite linear alternate;
      }
      .loader-bar-l34::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 12px;
        background: ${primary};
        left: 0;
        top: 0;
        animation: 
          bar-l34-1-anim ${speed} infinite linear alternate,
          bar-l34-2-anim ${parseFloat(speed)*0.5}s infinite cubic-bezier(0,200,.8,200);
      }
      @keyframes bar-l34-0-anim {
        0%      {background-position: 0 100%, 50% 0, 100% 0}
        8%, 42%  {background-position: 0 0, 50% 0, 100% 0}
        50%     {background-position: 0 0, 50% 100%, 100% 0}
        58%, 92% {background-position: 0 0, 50% 0, 100% 0}
        100%    {background-position: 0 0, 50% 0, 100% 100%}
      }
      @keyframes bar-l34-1-anim {100% {left: calc(100% - 8px)}}
      @keyframes bar-l34-2-anim {100% {top: -0.1px}}
    `,
    html: '<div class="loader-bar-l34"></div>',
  },
  {
    id: "bar-l35",
    name: "Sliding Ball Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l35 {
        width: ${size}px;
        height: 30px;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 100%/8px 30px, var(--c) 50% 100%/8px 20px, var(--c) 100% 100%/8px 10px;
        position: relative;
        clip-path: inset(-100% 0);
      }
      .loader-bar-l35::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${primary};
        left: -16px;
        top: 0;
        animation: 
          bar-l35-1-anim ${parseFloat(speed)*2}s infinite linear,
          bar-l35-2-anim ${parseFloat(speed)*0.5}s infinite cubic-bezier(0,200,.8,200);
      }
      @keyframes bar-l35-1-anim {
        0%   {left: -16px; transform: translateY(-8px)}
        100% {left: calc(100% + 8px); transform: translateY(22px)}
      }
      @keyframes bar-l35-2-anim {100% {top: -0.1px}}
    `,
    html: '<div class="loader-bar-l35"></div>',
  },
  {
    id: "bar-l36",
    name: "Complex Ball Animation",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l36 {
        width: ${size}px;
        height: 20px;
        --c: no-repeat radial-gradient(farthest-side,${primary} 93%,${secondary});
        background: var(--c) 0 0, var(--c) 50% 0;
        background-size: 8px 8px;
        position: relative;
        clip-path: inset(-200% -100% 0 0);
        animation: bar-l36-0-anim ${parseFloat(speed)*1.5}s infinite linear;
      }
      .loader-bar-l36::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 12px;
        background: ${primary};
        left: -16px;
        top: 0;
        animation: 
          bar-l36-1-anim ${parseFloat(speed)*1.5}s infinite linear,
          bar-l36-2-anim ${parseFloat(speed)*0.5}s infinite cubic-bezier(0,200,.8,200);
      }
      .loader-bar-l36::after {
        content: "";
        position: absolute;
        inset: 0 0 auto auto;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${primary};
        animation: bar-l36-3-anim ${parseFloat(speed)*1.5}s infinite linear;
      }
      @keyframes bar-l36-0-anim {
        0%, 30%  {background-position: 0 0, 50% 0}
        33%     {background-position: 0 100%, 50% 0}
        41%, 63% {background-position: 0 0, 50% 0}
        66%     {background-position: 0 0, 50% 100%}
        74%, 100%{background-position: 0 0, 50% 0}
      }
      @keyframes bar-l36-1-anim {
        90%  {transform: translateY(0)}
        95%  {transform: translateY(15px)}
        100% {transform: translateY(15px); left: calc(100% - 8px)}
      }
      @keyframes bar-l36-2-anim {100% {top: -0.1px}}
      @keyframes bar-l36-3-anim {
        0%, 80%, 100% {transform: translate(0)}
        90%         {transform: translate(26px)}
      }
    `,
    html: '<div class="loader-bar-l36"></div>',
  },
  {
    id: "bar-l37",
    name: "Sliding Dot Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l37 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
        background-size: 8px 50%;
        animation: bar-l37-0-anim ${speed} infinite;
        position: relative;
        overflow: hidden;
      }
      .loader-bar-l37::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${primary};
        top: calc(50% - 4px);
        left: -8px;
        animation: inherit;
        animation-name: bar-l37-1-anim;
      }
      @keyframes bar-l37-0-anim {
        16.67% {background-size: 8px 30%, 8px 30%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
        33.33% {background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        50%    {background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 30%}
        66.67% {background-size: 8px 50%, 8px 50%, 8px 30%, 8px 30%, 8px 30%, 8px 30%}
        83.33% {background-size: 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 30%, 8px 30%}
      }
      @keyframes bar-l37-1-anim {
        20%  {left: 0px}
        40%  {left: calc(50% - 4px)}
        60%  {left: calc(100% - 8px)}
        80%, 100% {left: 100%}
      }
    `,
    html: '<div class="loader-bar-l37"></div>',
  },
  {
    id: "bar-l38",
    name: "Center Dot Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l38 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
        background-size: 8px 50%;
        animation: bar-l38-0-anim ${parseFloat(speed)*2}s infinite;
        position: relative;
        overflow: hidden;
      }
      .loader-bar-l38::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${primary};
        top: calc(50% - 4px);
        left: -8px;
        animation: inherit;
        animation-name: bar-l38-1-anim;
      }
      @keyframes bar-l38-0-anim {
        16.67% {background-size: 8px 30%, 8px 30%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
        33.33% {background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        50%    {background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        66.67% {background-size: 8px 50%, 8px 50%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        83.33% {background-size: 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
      }
      @keyframes bar-l38-1-anim {
        20%      {left: 0px}
        40%, 100% {left: calc(50% - 4px)}
      }
    `,
    html: '<div class="loader-bar-l38"></div>',
  },
  {
    id: "bar-l39",
    name: "Jumping Dot Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l39 {
        width: ${size}px;
        height: ${size}px;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 0, var(--c) 100% 100%;
        background-size: 8px 50%;
        animation: bar-l39-0-anim ${parseFloat(speed)*2}s infinite;
        position: relative;
        overflow: hidden;
      }
      .loader-bar-l39::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${primary};
        top: calc(50% - 4px);
        left: -8px;
        animation: inherit;
        animation-name: bar-l39-1-anim;
      }
      @keyframes bar-l39-0-anim {
        16.67% {background-size: 8px 30%, 8px 30%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
        33.33% {background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        50%    {background-size: 8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        66.67% {background-size: 8px 50%, 8px 50%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
        83.33% {background-size: 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
      }
      @keyframes bar-l39-1-anim {
        20%     {left: 0px}
        40%, 70% {left: calc(50% - 4px)}
        80%, 85% {left: 8px; top: calc(50% - 4px)}
        100%    {left: 8px; top: -8px}
      }
    `,
    html: '<div class="loader-bar-l39"></div>',
  },
  {
    id: "bar-l40",
    name: "Rotating Ball Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l40 {
        width: ${size*1.56}px;
        height: 30px;
        overflow: hidden;
        position: relative;
      }
      .loader-bar-l40::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        inset: 0;
        margin: auto;
        background: ${primary};
        transform-origin: bottom;
        animation: bar-l40-1-anim ${parseFloat(speed)*3}s infinite;
      }
      .loader-bar-l40::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 14px;
        bottom: calc(50% - 4px);
        background: ${primary};
        animation: bar-l40-2-anim ${parseFloat(speed)*3}s infinite;
      }
      @keyframes bar-l40-1-anim {
        0%, 10% {transform: translate(0) scale(1); box-shadow: 60px 0, 60px 0}
        20%, 40% {transform: translate(20px) scale(1); box-shadow: 60px 0, 60px 0}
        48% {transform: translate(20px) scale(1); box-shadow: 8px 0, 60px 0}
        50% {transform: translate(20px) scale(1.5); box-shadow: 0 0, 60px 0}
        58% {transform: translate(20px) scale(1.5); box-shadow: 0 0, 8px 0}
        60%, 70% {transform: translate(20px) scale(2); box-shadow: 0 0, 0 0}
        85% {transform: translate(-50px) scale(2); box-shadow: 0 0, 0 0}
        87% {transform: translate(-50px) scale(1); box-shadow: 0 0, 0 0}
        100%{transform: translate(0) scale(1); box-shadow: 0 0, 0 0}
      }
      @keyframes bar-l40-2-anim {
        20%, 70% {left: 50%}
        0%, 10%, 85%, 100% {left: -25px}
      }
    `,
    html: '<div class="loader-bar-l40"></div>',
  },
  {
    id: "bar-l41",
    name: "Masked Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l41 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        background: var(--c), var(--c), var(--c);
        background-size: 8px calc(50% + 8px);
        -webkit-mask: radial-gradient(circle closest-side, ${secondary} 92%, ${primary}) 0/8px 100%;
        animation: bar-l41-anim ${parseFloat(speed)*0.75}s infinite alternate linear;
      }
      @keyframes bar-l41-anim {
        0%, 10%  {background-position: 0 100%, 50% 100%, 100% 100%}
        25%  {background-position: 0 50%, 50% 100%, 100% 100%}
        50%  {background-position: 0 0, 50% 50%, 100% 100%}
        75%  {background-position: 0 0, 50% 0, 100% 50%}
        90%, 100%{background-position: 0 0, 50% 0, 100% 0}
      }
    `,
    html: '<div class="loader-bar-l41"></div>',
  },
  {
    id: "bar-l42",
    name: "Masked Center Bars",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l42 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(${primary} 0 0);
        --m: no-repeat radial-gradient(circle closest-side, ${secondary} 92%, ${primary});
        background: var(--c) 0 50%, var(--c) 50% 50%, var(--c) 100% 50%;
        background-size: 8px calc(50% + 8px);
        -webkit-mask: var(--m), var(--m), var(--m);
        -webkit-mask-size: 8px 150%;
        animation: bar-l42-anim ${speed} infinite alternate;
      }
      @keyframes bar-l42-anim {
        0%, 100% {-webkit-mask-position: 0 50%, 50% 50%, 100% 50%}
        20%  {-webkit-mask-position: 0 100%, 50% 50%, 100% 50%}
        40%  {-webkit-mask-position: 0 0, 50% 100%, 100% 50%}
        60%  {-webkit-mask-position: 0 50%, 50% 0, 100% 100%}
        80%  {-webkit-mask-position: 0 50%, 50% 50%, 100% 0}
      }
    `,
    html: '<div class="loader-bar-l42"></div>',
  },
  {
    id: "bar-l43",
    name: "Bar and Dot Combo",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l43 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 92%, ${secondary});
        background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
        background-size: 8px 12px, 8px 8px;
        background-repeat: no-repeat;
        animation: bar-l43-anim ${speed} infinite alternate;
      }
      @keyframes bar-l43-anim {
        0%, 100%  {background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%}
        20%   {background-position: 0 calc(50% - 6px), 0 calc(50% + 4px), 50% 0, 50% 100%, 100% 0, 100% 100%}
        40%   {background-position: 0 calc(50% - 6px), 0 calc(50% + 4px), 50% calc(50% - 6px), 50% calc(50% + 4px), 100% 0, 100% 100%}
        60%   {background-position: 0 0, 0 100%, 50% calc(50% - 6px), 50% calc(50% + 4px), 100% calc(50% - 6px), 100% calc(50% + 4px)}
        80%   {background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% calc(50% - 6px), 100% calc(50% + 4px)}
      }
    `,
    html: '<div class="loader-bar-l43"></div>',
  },
  {
    id: "bar-l44",
    name: "Alternating Bar Dots",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l44 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 92%, ${secondary});
        background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
        background-size: 8px 15px, 8px 8px;
        background-repeat: no-repeat;
        animation: bar-l44-anim ${speed} infinite alternate;
      }
      @keyframes bar-l44-anim {
        0%, 10% {background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%}
        33% {background-position: 0 100%, 0 0, 50% 0, 50% 100%, 100% 0, 100% 100%}
        66% {background-position: 0 100%, 0 0, 50% 100%, 50% 0, 100% 0, 100% 100%}
        90%, 100%{background-position: 0 100%, 0 0, 50% 100%, 50% 0, 100% 100%, 100% 0}
      }
    `,
    html: '<div class="loader-bar-l44"></div>',
  },
  {
    id: "bar-l45",
    name: "Complex Bar Sequence",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l45 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 92%, ${secondary});
        background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
        background-size: 8px 15px, 8px 8px;
        background-repeat: no-repeat;
        animation: bar-l45-anim ${parseFloat(speed)*2}s infinite;
      }
      @keyframes bar-l45-anim {
        0%     {background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%}
        11.11% {background-position: 0 calc(100% - 8px), 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%}
        22.22% {background-position: 0 calc(100% - 8px), 0 100%, 50% calc(100% - 8px), 50% 100%, 100% 0, 100% 100%}
        33.33% {background-position: 0 calc(100% - 8px), 0 100%, 50% calc(100% - 8px), 50% 100%, 100% calc(100% - 8px), 100% 100%}
        44.44% {background-position: 0 0, 0 15px, 50% calc(100% - 8px), 50% 100%, 100% calc(100% - 8px), 100% 100%}
        55.55% {background-position: 0 0, 0 15px, 50% 0, 50% 15px, 100% calc(100% - 8px), 100% 100%}
        66.66% {background-position: 0 0, 0 15px, 50% 0, 50% 15px, 100% 0, 100% 15px}
        77.77% {background-position: 0 0, 0 100%, 50% 0, 50% 15px, 100% 0, 100% 15px}
        88.88% {background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 15px}
        100%   {background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%}
      }
    `,
    html: '<div class="loader-bar-l45"></div>',
  },
  {
    id: "bar-l46",
    name: "Sync Bar Dots",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l46 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 92%, ${secondary});
        background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
        background-size: 8px 12px, 8px 8px;
        background-repeat: no-repeat;
        animation: bar-l46-anim ${speed} infinite linear alternate;
      }
      @keyframes bar-l46-anim {
        0%,5%   {background-position: 0 50%, 0 0, 50% 50%, 50% 0, 100% 50%, 100% 0}
        16.67%  {background-position: 0 50%, 0 calc(50% - 10px), 50% 50%, 50% 0, 100% 50%, 100% 0}
        33.33%  {background-position: 0 calc(50% + 10px), 0 50%, 50% 50%, 50% 0, 100% 50%, 100% 0}
        50%     {background-position: 0 calc(50% + 10px), 0 50%, 50% 50%, 50% calc(50% - 10px), 100% 50%, 100% 0}
        66.67%  {background-position: 0 calc(50% + 10px), 0 50%, 50% calc(50% + 10px), 50% 50%, 100% 50%, 100% 0}
        83.33%  {background-position: 0 calc(50% + 10px), 0 50%, 50% calc(50% + 10px), 50% 50%, 100% 50%, 100% calc(50% - 10px)}
        95%,100%{background-position: 0 calc(50% + 10px), 0 50%, 50% calc(50% + 10px), 50% 50%, 100% calc(50% + 10px), 100% 50%}
      }
    `,
    html: '<div class="loader-bar-l46"></div>',
  },
  {
    id: "bar-l47",
    name: "Linear Bar Dots",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l47 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 92%, ${secondary});
        background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
        background-size: 8px 12px, 8px 8px;
        background-repeat: no-repeat;
        animation: bar-l47-anim ${speed} infinite linear;
      }
      @keyframes bar-l47-anim {
        0%,5% {background-position: 0 50%, 0 0, 50% 50%, 50% 0, 100% 50%, 100% 0}
        12.5% {background-position: 0 50%, 0 calc(50% - 10px), 50% 50%, 50% 0, 100% 50%, 100% 0}
        25%   {background-position: 0 calc(50% + 10px), 0 50%, 50% 50%, 50% 0, 100% 50%, 100% 0}
        37.5% {background-position: 0 calc(50% + 10px), 0 50%, 50% 50%, 50% calc(50% - 10px), 100% 50%, 100% 0}
        50%   {background-position: 0 50%, 0 0, 50% calc(50% + 10px), 50% 50%, 100% 50%, 100% 0}
        62.5% {background-position: 0 50%, 0 0, 50% calc(50% + 10px), 50% 50%, 100% 50%, 100% calc(50% - 10px)}
        75%   {background-position: 0 50%, 0 0, 50% 50%, 50% 0, 100% calc(50% + 10px), 100% 50%}
        87.5% {background-position: 0 50%, 0 0, 50% 50%, 50% 0, 100% calc(50% + 10px), 100% 50%}
        95%,100%  {background-position: 0 50%, 0 0, 50% 50%, 50% 0, 100% 50%, 100% 0}
      }
    `,
    html: '<div class="loader-bar-l47"></div>',
  },
  {
    id: "bar-l48",
    name: "Cross Bar Pattern",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l48 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 92%, ${secondary});
        background: var(--m) center/12px 12px,
                   var(--c) left 50% top -20px/8px 16px,
                   var(--c) left 50% bottom -20px/8px 16px,
                   var(--c) top 50% left -20px/16px 8px,
                   var(--c) top 50% right -20px/16px 8px;
        background-repeat: no-repeat;
        animation: bar-l48-1-anim ${parseFloat(speed)*1.5}s infinite,
                  bar-l48-2-anim ${parseFloat(speed)*1.5}s infinite;
      }
      @keyframes bar-l48-1-anim {
        30%, 70% {background-position: center,
                  left 50% top calc(50% - 8px),
                  left 50% bottom calc(50% - 8px),
                  top 50% left calc(50% - 8px),
                  top 50% right calc(50% - 8px)}
      }
      @keyframes bar-l48-2-anim {
        0%, 40%   {transform: rotate(0)}
        60%, 100% {transform: rotate(90deg)}
      }
    `,
    html: '<div class="loader-bar-l48"></div>',
  },
  {
    id: "bar-l49",
    name: "Rotating Bar Set",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l49 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 90%, ${secondary});
        background: var(--c), var(--m), var(--c);
        background-size: 16px 8px, 10px 10px;
        background-repeat: no-repeat;
        animation: bar-l49-1-anim ${parseFloat(speed)*0.5}s infinite alternate,
                  bar-l49-2-anim ${parseFloat(speed)*4}s infinite linear 0.5s;
      }
      @keyframes bar-l49-1-anim {
        0%, 10%   {background-position: calc(50% - 8px) 50%, 50% 10%, calc(50% + 8px) 50%}
        80%, 100% {background-position: -20px 50%, 50% 50%, calc(100% + 20px) 50%}
      }
      @keyframes bar-l49-2-anim {
        0%, 24.99% {transform: rotate(0)}
        25%, 49.99% {transform: rotate(90deg)}
        50%, 74.99% {transform: rotate(180deg)}
        75%, 100%   {transform: rotate(270deg)}
      }
    `,
    html: '<div class="loader-bar-l49"></div>',
  },
  {
    id: "bar-l50",
    name: "Advanced Bar System",
    category: "Bars",
    getCss: (primary, secondary, size, speed) => `
      .loader-bar-l50 {
        width: ${size}px;
        aspect-ratio: 1;
        --c: linear-gradient(${primary} 0 0);
        --m: radial-gradient(farthest-side, ${primary} 90%, ${secondary});
        background: var(--c), var(--m), var(--c);
        background-size: 16px 8px, 10px 10px;
        background-repeat: no-repeat;
        animation: bar-l50-1-anim ${speed} infinite linear,
                  bar-l50-2-anim ${parseFloat(speed)*4}s infinite linear -0.4s;
      }
      @keyframes bar-l50-1-anim {
        0%, 10%   {background-position: calc(50% - 8px) 50%, 50% -15px, calc(50% + 8px) 50%}
        33%      {background-position: -20px 50%, 50% 50%, calc(100% + 20px) 50%}
        66%      {background-position: -20px 50%, 50% calc(100% + 15px), calc(100% + 20px) 50%}
        80%, 100% {background-position: calc(50% - 8px) 50%, 50% calc(100% + 15px), calc(50% + 8px) 50%}
      }
      @keyframes bar-l50-2-anim {
        0%, 24.99% {transform: rotate(0)}
        25%, 49.99% {transform: rotate(90deg)}
        50%, 74.99% {transform: rotate(180deg)}
        75%, 100%   {transform: rotate(270deg)}
      }
    `,
    html: '<div class="loader-bar-l50"></div>',
  }
];

export const loadersData = [...dotLoaders, ...spinnerLoaders, ...progressLoaders, ...barLoaders];