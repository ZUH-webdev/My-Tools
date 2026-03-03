export const patternsData = [
    {
        id: "pattern-1",
        name: "Isometric Cubes",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 200, default: 71 },
            { id: "c1", label: "Face 1", type: "color", default: "#f2f2f2" },
            { id: "c2", label: "Face 2", type: "color", default: "#cdcbcc" },
            { id: "c3", label: "Face 3", type: "color", default: "#999999" }
        ],
        generate: (v) => `background: conic-gradient(at 83.33% 33.33%,${v.c3} 0 120deg,#0000 0), conic-gradient(from -120deg at 16.66% 33.33%,${v.c2} 0 120deg,#0000 0), conic-gradient(from 120deg at 33.33% 83.33%,${v.c1} 0 120deg,#0000 0), conic-gradient(from 120deg at 66.66% 83.33%,${v.c1} 0 120deg,#0000 0), conic-gradient(from -180deg at 33.33% 50%,${v.c2} 60deg,${v.c1} 0 120deg,#0000 0), conic-gradient(from 60deg at 66.66% 50%,${v.c1} 60deg,${v.c3} 0 120deg,#0000 0), conic-gradient(from -60deg at 50% 33.33%,${v.c1} 120deg,${v.c2} 0 240deg,${v.c3} 0); background-size: ${Math.round(v.s * 1.732)}px ${v.s}px;`
    },
    {
        id: "pattern-2",
        name: "Diamond Mesh",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 400, default: 200 },
            { id: "c1", label: "Color 1", type: "color", default: "#1d1d1d" },
            { id: "c2", label: "Color 2", type: "color", default: "#4e4f51" },
            { id: "c3", label: "Color 3", type: "color", default: "#3c3c3c" }
        ],
        generate: (v) => `background: repeating-conic-gradient(from 30deg,#0000 0 120deg,${v.c3} 0 50%) ${v.s / 2}px ${Math.round(v.s * 0.288)}px, repeating-conic-gradient(from 30deg,${v.c1} 0 60deg,${v.c2} 0 120deg,${v.c3} 0 50%); background-size: ${v.s}px ${Math.round(v.s * 0.577)}px;`
    },
    {
        id: "pattern-3",
        name: "Floating Orbs",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 200, default: 64 },
            { id: "c1", label: "Orb 1", type: "color", default: "#c02942" },
            { id: "c2", label: "Orb 2", type: "color", default: "#53777a" },
            { id: "c3", label: "Stripes 1", type: "color", default: "#ecd078" },
            { id: "c4", label: "Stripes 2", type: "color", default: "#d95b43" }
        ],
        generate: (v) => `background: radial-gradient(${v.c1} 24%,#0000 25%), radial-gradient(${v.c2} 30%,#0000 32%) ${v.s / 2}px ${v.s / 2}px, repeating-conic-gradient(from 30deg,${v.c3} 0 30deg,${v.c4} 0 25%); background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-4",
        name: "Overlapping Scales",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 300, default: 100 },
            { id: "c1", label: "Accent", type: "color", default: "#fff0e5" },
            { id: "c2", label: "Base", type: "color", default: "#025d8c" },
            { id: "c3", label: "Detail", type: "color", default: "#e1642a" }
        ],
        generate: (v) => `background: radial-gradient(47% 50% at -10% 50%,#0000 37%,${v.c1} 39% 70%,#0000 72%) 0 ${v.s / 2}px, radial-gradient(47% 50% at -10% 50%,#0000 37%,${v.c1} 39% 70%,#0000 72%) ${v.s / 2}px 0, radial-gradient(47% 50% at 110% 50%,#0000 37%,${v.c1} 39% 70%,#0000 72%), radial-gradient(47% 50% at 110% 50%,#0000 37%,${v.c1} 39% 70%,#0000 72%) ${v.s / 2}px ${v.s / 2}px, conic-gradient(from 0deg at 55% 50%,${v.c2} 40deg,${v.c3} 0 140deg,${v.c2} 0 180deg,#0000 0) ${v.s / 4}px 0, conic-gradient(from 180deg at 45% 50%,${v.c2} 40deg,${v.c3} 0 140deg,${v.c2} 0 180deg,#0000 0) ${v.s / 4}px 0, ${v.c2}; background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-5",
        name: "Concentric Ripples",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 300, default: 150 },
            { id: "c1", label: "Color 1", type: "color", default: "#f7d2a1" },
            { id: "c2", label: "Color 2", type: "color", default: "#05057e" }
        ],
        generate: (v) => {
            const g = `${v.c1} 0% 5%,${v.c2} 6% 15%,${v.c1} 16% 25%,${v.c2} 26% 35%,${v.c1} 36% 45%,${v.c2} 46% 55%,${v.c1} 56% 65%,${v.c2} 66% 75%,${v.c1} 76% 85%,${v.c2} 86% 95%,#0000 96%`;
            return `background: radial-gradient(50% 50% at 100% 0,${g}), radial-gradient(50% 50% at 0 100%,${g}), radial-gradient(50% 50%,${g}), radial-gradient(50% 50%,${g}) ${v.s / 2}px ${v.s / 2}px ${v.c1}; background-size: ${v.s}px ${v.s}px;`;
        }
    },
    {
        id: "pattern-6",
        name: "Abstract Geo",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 200, default: 105 },
            { id: "c1", label: "Color 1", type: "color", default: "#b9b9b9" },
            { id: "c2", label: "Color 2", type: "color", default: "#dcdcdc" },
            { id: "c3", label: "Color 3", type: "color", default: "#fafafa" }
        ],
        generate: (v) => `background: conic-gradient(from 75deg,${v.c1} 15deg,${v.c2} 0 30deg,#0000 0 180deg,${v.c2} 0 195deg,${v.c1} 0 210deg,#0000 0) ${v.s / 2}px ${Math.round(0.5 * v.s / 0.577)}px, conic-gradient(${v.c1} 30deg,${v.c3} 0 75deg,${v.c1} 0 90deg,${v.c2} 0 105deg,${v.c3} 0 150deg,${v.c2} 0 180deg,${v.c3} 0 210deg,${v.c1} 0 256deg,${v.c2} 0 270deg,${v.c1} 0 286deg,${v.c2} 0 331deg,${v.c3} 0); background-size: ${v.s}px ${Math.round(v.s / 0.577)}px;`
    },
    {
        id: "pattern-7",
        name: "Triad Conic",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 40, max: 200, default: 120 },
            { id: "c1", label: "Color 1", type: "color", default: "#fa6900" },
            { id: "c2", label: "Color 2", type: "color", default: "#d95b43" },
            { id: "c3", label: "Color 3", type: "color", default: "#ecd078" }
        ],
        generate: (v) => `background: conic-gradient(from 150deg at 50% 33%,#0000,${v.c1} .5deg 60deg,#0000 60.5deg) ${v.s / 2}px ${Math.round(v.s / 1.414)}px, conic-gradient(from -30deg at 50% 66%,#0000,${v.c2} .5deg 60deg,${v.c3} 60.5deg); background-size: ${v.s}px ${Math.round(0.5 * v.s / 0.577)}px;`
    },
    {
        id: "pattern-8",
        name: "Simple Slope",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 10, max: 200, default: 100 },
            { id: "c1", label: "Color 1", type: "color", default: "#4ecdc4" },
            { id: "c2", label: "Color 2", type: "color", default: "#556270" }
        ],
        generate: (v) => `background: linear-gradient(-26.5deg,${v.c1} 33%,${v.c2} 33.5% 66.5%,${v.c1} 67%) 0/ ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-9",
        name: "Retro Circles",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 300, default: 140 },
            { id: "c1", label: "Ring Color", type: "color", default: "#170409" },
            { id: "c2", label: "Background", type: "color", default: "#67917a" }
        ],
        generate: (v) => {
            const g = `#0000 52%,${v.c1} 54% 57%,#0000 59%`;
            return `background: radial-gradient(farthest-side at -33.33% 50%,${g}) 0 ${v.s / 2}px, radial-gradient(farthest-side at 50% 133.33%,${g}) ${v.s / 2}px 0, radial-gradient(farthest-side at 133.33% 50%,${g}), radial-gradient(farthest-side at 50% -33.33%,${g}), ${v.c2}; background-size: ${Math.round(v.s / 4.667)}px ${v.s}px,${v.s}px ${Math.round(v.s / 4.667)}px;`;
        }
    },
    {
        id: "pattern-10",
        name: "Quarter Blocks",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 200, default: 100 },
            { id: "c1", label: "Block", type: "color", default: "#00a0b0" },
            { id: "c2", label: "Background", type: "color", default: "#eb6841" }
        ],
        generate: (v) => `background: repeating-conic-gradient(at 33% 33%,${v.c1} 0 25%,#0000 0 50%), repeating-conic-gradient(at 66% 66%,${v.c1} 0 25%,#0000 0 50%), ${v.c2}; background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-11",
        name: "Star Conic Mix",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 250, default: 120 },
            { id: "c1", label: "Color 1", type: "color", default: "#e7525b" },
            { id: "c2", label: "Color 2", type: "color", default: "#78dbf0" }
        ],
        generate: (v) => `background: radial-gradient(at 80% 80%,${v.c1} 25.4%,#0000 26%), radial-gradient(at 20% 80%,${v.c1} 25.4%,#0000 26%), conic-gradient(from -45deg at 50% 41%,${v.c1} 90deg,${v.c2} 0) ${v.s / 2}px 0; background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-12",
        name: "Simple Tiles",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 200, default: 100 },
            { id: "c1", label: "Tile", type: "color", default: "#eceddc" },
            { id: "c2", label: "Grout", type: "color", default: "#29ab87" }
        ],
        generate: (v) => `background: conic-gradient(from -45deg,${v.c1} 90deg,#0000 90.5deg), conic-gradient(from 135deg,${v.c1} 90deg,#0000 90.5deg) ${v.s / 2}px 0, ${v.c2}; background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-13",
        name: "Micro Grid",
        inputs: [
            { id: "s", label: "Main Size", type: "range", min: 50, max: 200, default: 100 },
            { id: "c1", label: "Line", type: "color", default: "#336666" },
            { id: "c2", label: "Base", type: "color", default: "#ffffff" }
        ],
        generate: (v) => `background: conic-gradient(from 90deg at 2px 2px, #0000 90deg,${v.c1} 0), conic-gradient(from 90deg at 1px 1px, #0000 90deg,${v.c1} 0), ${v.c2}; background-size: ${v.s}px ${v.s}px, ${v.s / 5}px ${v.s / 5}px;`
    },
    {
        id: "pattern-14",
        name: "Classic Stars",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 40, max: 200, default: 90 },
            { id: "gap", label: "Gap", type: "range", min: 0, max: 50, default: 9 },
            { id: "c1", label: "Star", type: "color", default: "#fff220" },
            { id: "c2", label: "Sky", type: "color", default: "#e181c2" }
        ],
        generate: (v) => {
            const g = `${v.c1} 36deg, #0000 0`;
            return `background: conic-gradient(from 162deg at ${v.s * 0.5}px ${v.s * 0.68}px, ${g}), conic-gradient(from 18deg at ${v.s * 0.19}px ${v.s * 0.59}px, ${g}), conic-gradient(from 306deg at ${v.s * 0.81}px ${v.s * 0.59}px, ${g}), ${v.c2}; background-position: 0 ${v.s * 0.35}px; background-size: ${v.s + v.gap}px ${v.s + v.gap}px;`;
        }
    },
    {
        id: "pattern-15",
        name: "Geometric Mix",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 300, default: 150 },
            { id: "c1", label: "Color 1", type: "color", default: "#ff847c" },
            { id: "c2", label: "Color 2", type: "color", default: "#e84a5f" },
            { id: "c3", label: "Color 3", type: "color", default: "#fecea8" },
            { id: "c4", label: "Color 4", type: "color", default: "#99b898" }
        ],
        generate: (v) => `background: conic-gradient(from 45deg at 75% 75%, ${v.c3} 90deg,${v.c1} 0 180deg,#0000 0), conic-gradient(from -45deg at 25% 25%, ${v.c3} 90deg,#0000 0), conic-gradient(from -45deg at 50% 100%,#0000 180deg,${v.c3} 0), conic-gradient(from -45deg,${v.c1} 90deg, ${v.c2} 0 225deg,${v.c4} 0); background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-16",
        name: "Modern Herringbone",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 100, max: 400, default: 222 },
            { id: "c1", label: "Dark", type: "color", default: "#7f727b" },
            { id: "c2", label: "Light", type: "color", default: "#d6b4c2" },
            { id: "c3", label: "Medium", type: "color", default: "#baa0ab" }
        ],
        generate: (v) => {
            const g = `${v.c1} 10%,${v.c2} 10.5% 19%,#0000 19.5% 80.5%,${v.c2} 81% 89.5%,${v.c3} 90%`;
            return `background: linear-gradient(145deg,${g}), linear-gradient(145deg,${g}) ${v.s / 2}px ${v.s}px, linear-gradient(35deg,${g}), linear-gradient(35deg,${g}) ${v.s / 2}px ${v.s}px, conic-gradient(from -90deg at 37.5% 50%,#0000 75%,${v.c1} 0) ${v.s / 8}px 0, conic-gradient(from -90deg at 37.5% 50%,#0000 75%,${v.c3} 0) ${v.s / 2}px 0, linear-gradient(90deg,${v.c3} 38%,${v.c1} 0 50%,${v.c3} 0 62%,${v.c1} 0); background-size: ${v.s}px ${Math.round(2 * v.s / 3)}px;`;
        }
    },
    {
        id: "pattern-17",
        name: "Lined Grid",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 10, max: 100, default: 20 },
            { id: "gap", label: "Gap", type: "range", min: 5, max: 50, default: 20 },
            { id: "c1", label: "Color 1", type: "color", default: "#c02942" },
            { id: "c2", label: "Color 2", type: "color", default: "#53777a" },
            { id: "c3", label: "Base", type: "color", default: "#ecd078" }
        ],
        generate: (v) => `background: conic-gradient(at ${v.s}px calc(100% - ${v.s}px),#0000 270deg,${v.c1} 0) ${v.s + v.gap}px 0, linear-gradient(${v.c2} ${v.s}px,#0000 0) 0 ${v.gap}px, conic-gradient(at ${v.s}px calc(100% - ${v.s}px),#0000 90deg,${v.c2} 0 180deg, ${v.c1} 0), ${v.c3}; background-size: ${2 * (v.s + v.gap)}px ${2 * (v.s + v.gap)}px;`
    },
    {
        id: "pattern-18",
        name: "Diagonal Stripes",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 300, default: 200 },
            { id: "c1", label: "Stripe", type: "color", default: "#ffffff" },
            { id: "c2", label: "Background", type: "color", default: "#1095c1" }
        ],
        generate: (v) => {
            const g = `#0000 8%,${v.c1} 0 17%,#0000 0 58%`;
            return `background: linear-gradient(135deg,#0000 20.5%,${v.c1} 0 29.5%,#0000 0) 0 ${v.s / 4}px, linear-gradient(45deg,${g}) ${v.s / 2}px 0, linear-gradient(135deg,${g},${v.c1} 0 67%,#0000 0), linear-gradient(45deg,${g},${v.c1} 0 67%,#0000 0 83%,${v.c1} 0 92%,#0000 0), ${v.c2}; background-size: ${v.s}px ${v.s}px;`;
        }
    },
    {
        id: "pattern-19",
        name: "Woven Triangles",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 150, default: 64 },
            { id: "c1", label: "Color 1", type: "color", default: "#e0e4cc" },
            { id: "c2", label: "Color 2", type: "color", default: "#69d2e7" }
        ],
        generate: (v) => `background: conic-gradient(from 135deg,${v.c1} 90deg,#0000 0) ${v.s}px ${v.s / 2}px, conic-gradient(from 135deg,${v.c2} 90deg,#0000 0), conic-gradient(from 135deg at 50% 0,${v.c1} 90deg,#0000 0) ${v.c2}; background-size: ${2 * v.s}px ${v.s}px;`
    },
    {
        id: "pattern-20",
        name: "Zig Zag Sharp",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 150, default: 64 },
            { id: "c1", label: "Color 1", type: "color", default: "#eb6841" },
            { id: "c2", label: "Color 2", type: "color", default: "#edc951" }
        ],
        generate: (v) => `background: conic-gradient(from -45deg,${v.c1} 90deg,#0000 0 180deg,${v.c2} 0 270deg,#0000 0) 0 ${v.s / 2}px/${v.s}px ${v.s}px, conic-gradient(from 135deg at 50% 0,${v.c1} 90deg,${v.c2} 0) 0 0/${2 * v.s}px ${v.s}px;`
    },
    {
        id: "pattern-21",
        name: "Lined Overlay",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 300, default: 120 },
            { id: "c1", label: "Line Color", type: "color", default: "#4e395d" },
            { id: "c2", label: "Accent Color", type: "color", default: "#8ebe94" }
        ],
        generate: (v) => {
            const g = `${v.c1} 15%,${v.c2} 0 28%,#0000 0 72%,${v.c2} 0 85%,${v.c1} 0`;
            return `background: conic-gradient(from 90deg at 2px 2px,#0000 25%,${v.c1} 0) -1px -1px, linear-gradient(-45deg,${g}), linear-gradient(45deg,${g}), conic-gradient(from 90deg at 40% 40%,${v.c1} 25%,${v.c2} 0) ${v.s / -5}px ${v.s / -5}px; background-size: ${v.s}px ${v.s}px;`;
        }
    },
    {
        id: "pattern-22",
        name: "Modern Quilt",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 200, default: 120 },
            { id: "c1", label: "Border", type: "color", default: "#1a2030" },
            { id: "c2", label: "Block 1", type: "color", default: "#0f9177" },
            { id: "c3", label: "Block 2", type: "color", default: "#fdebad" },
            { id: "c4", label: "Block 3", type: "color", default: "#d34434" },
            { id: "c5", label: "Block 4", type: "color", default: "#b5d999" }
        ],
        generate: (v) => `background: radial-gradient(#0000 70%,${v.c1} 71%), radial-gradient(#0000 70%,${v.c1} 71%) ${v.s / 2}px ${v.s / 2}px, conic-gradient(${v.c2} 25%,${v.c3} 0 50%,${v.c4} 0 75%,${v.c5} 0); background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-23",
        name: "Diamond Dotted Mesh",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 100, default: 34 },
            { id: "c1", label: "Dot Color", type: "color", default: "#ecbe13" },
            { id: "c2", label: "Base Color", type: "color", default: "#309292" }
        ],
        generate: (v) => `background: radial-gradient(${v.s / 2}px,${v.c1} 97%,#0000), radial-gradient(${v.s / 2}px,${v.c1} 97%,#0000) ${2 * v.s}px ${2 * v.s}px, repeating-conic-gradient(from 45deg,#0000 0 25%,${v.c2} 0 50%) ${Math.round(-0.707 * v.s)}px ${Math.round(-0.707 * v.s)}px, repeating-linear-gradient(135deg,${v.c1} ${v.s / -2}px ${v.s / 2}px,${v.c2} 0 ${Math.round(2.328 * v.s)}px); background-size: ${4 * v.s}px ${4 * v.s}px;`
    },
    {
        id: "pattern-24",
        name: "Radial Scales",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 40, max: 150, default: 71 },
            { id: "c1", label: "Primary", type: "color", default: "#78c0a8" },
            { id: "c2", label: "Secondary", type: "color", default: "#fcebb6" }
        ],
        generate: (v) => `background: radial-gradient(36% 72% at 25% -50%,${v.c2} 98%,#0000) 0 0/${2 * v.s}px ${v.s}px, radial-gradient(36% 72% at 75% 150%,${v.c2} 98%,#0000) 0 0/${2 * v.s}px ${v.s}px, radial-gradient(72% 36% at 150% 25%,${v.c2} 98%,#0000) 0 0/${v.s}px ${2 * v.s}px, radial-gradient(72% 36% at -50% 75%,${v.c2} 98%,#0000) 0 0/${v.s}px ${2 * v.s}px, repeating-conic-gradient(${v.c2} 0 45deg,${v.c1} 0 25%) 0 0/${2 * v.s}px ${2 * v.s}px;`
    },
    {
        id: "pattern-25",
        name: "Bubbled Mint",
        inputs: [
            { id: "s", label: "Bubble Size", type: "range", min: 20, max: 150, default: 60 },
            { id: "c1", label: "Bubble Color", type: "color", default: "#7bb0a8" },
            { id: "c2", label: "Background", type: "color", default: "#a7dbab" }
        ],
        generate: (v) => `background: radial-gradient(${v.s}px at 100% ${v.s}px,#0000 ${99 - (v.s / 2)}%,${v.c1} ${100 - (v.s / 2)}% 99%,#0000), radial-gradient(${v.s / 4}px at 50% 33.33%,${v.c1} ${100 - (v.s / 2)}% 99%,#0000) ${v.s}px 0, radial-gradient(${v.s}px at 0% ${v.s}px,#0000 ${99 - (v.s / 2)}%,${v.c1} ${100 - (v.s / 2)}% 99%,#0000) 0 ${3 * v.s}px ${v.c2}; background-size: ${2 * v.s}px ${9 * v.s / 4}px, ${2 * v.s}px ${3 * v.s / 4}px;`
    },
    {
        id: "pattern-26",
        name: "Geometric Stripe Mix",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 20, max: 100, default: 30 },
            { id: "c1", label: "Color 1", type: "color", default: "#e5fcc2" },
            { id: "c2", label: "Color 2", type: "color", default: "#45ada8" }
        ],
        generate: (v) => {
            const s = `37.5% 12.5% at 62.5%`;
            const g = `34% 99%,#0000 101%`;
            return `background: radial-gradient(${s} 100%,#0000 32%,${v.c1} ${g}), radial-gradient(${s} 0,#0000 32%,${v.c1} ${g}) 0 ${3 * v.s}px, radial-gradient(${s} 100%,#0000 32%,${v.c2} ${g}) ${v.s}px ${3 * v.s}px, radial-gradient(${s} 0,#0000 32%,${v.c2} ${g}) ${v.s}px ${6 * v.s}px, radial-gradient(${s} 100%,#0000 32%,${v.c1} ${g}) ${2 * v.s}px ${6 * v.s}px, radial-gradient(${s} 0,#0000 32%,${v.c1} ${g}) ${2 * v.s}px ${9 * v.s}px, radial-gradient(${s} 100%,#0000 32%,${v.c2} ${g}) ${3 * v.s}px ${9 * v.s}px, radial-gradient(${s} 0,#0000 32%,${v.c2} ${g}) ${3 * v.s}px 0, repeating-linear-gradient(${v.c1} 0 25%,${v.c2} 0 50%); background-size: ${4 * v.s}px ${12 * v.s}px;`;
        }
    },
    {
        id: "pattern-27",
        name: "Chevron Woven",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 30, max: 150, default: 65 },
            { id: "c1", label: "Stitch Color", type: "color", default: "#ecd078" },
            { id: "c2", label: "Background", type: "color", default: "#0b486b" }
        ],
        generate: (v) => {
            const gap = v.s / 5;
            const l = `#0000 ${Math.round(33 - 0.866 * gap)}%,${v.c1} ${Math.round(33.2 - 0.866 * gap)}% 33%,#0000 34%`;
            return `background: repeating-linear-gradient(${v.c1} 0 ${gap}px, #0000 0 50%) 0 ${Math.round(0.866 * v.s - gap / 2)}px, conic-gradient(from -150deg at ${gap}px 50%,${v.c1} 120deg,#0000 0), linear-gradient(-120deg,${l}), linear-gradient(-60deg,${l}) ${v.c2}; background-size: ${v.s}px ${Math.round(3.466 * v.s)}px;`;
        }
    },
    {
        id: "pattern-28",
        name: "Multi-Ripple",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 200, default: 100 },
            { id: "c1", label: "Light Color", type: "color", default: "#e1f5c4" },
            { id: "c2", label: "Dark Color", type: "color", default: "#3b8183" }
        ],
        generate: (v) => {
            const g = `#0000, #0004 5%, ${v.c2} 6% 14%,${v.c1} 16% 24%,${v.c2} 26% 34%,${v.c1} 36% 44%,${v.c2} 46% 54%,${v.c1} 56% 64%,${v.c2} 66% 74%,${v.c1} 76% 84%,${v.c2} 86% 94%,#0004 95%,#0000`;
            return `background: radial-gradient(100% 50% at 100% 0,${g}), radial-gradient(100% 50% at 0 50%,${g}), radial-gradient(100% 50% at 100% 100%,${g}); background-size: ${v.s}px ${2 * v.s}px;`;
        }
    },
    {
        id: "pattern-29",
        name: "Dual Tile Conic",
        inputs: [
            { id: "s", label: "Tile Size", type: "range", min: 50, max: 200, default: 100 },
            { id: "c1", label: "Top Color", type: "color", default: "#cff09e" },
            { id: "c2", label: "Bottom Color", type: "color", default: "#3b8686" }
        ],
        generate: (v) => `background: conic-gradient(#0000 75%,${v.c1} 0) 0 ${v.s / 4}px, conic-gradient(from 45deg,${v.c1} 25%,${v.c2} 0); background-size: ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-30",
        name: "Muted Quad",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 200, default: 100 },
            { id: "c1", label: "Dark", type: "color", default: "#7a6a53" },
            { id: "c2", label: "Light", type: "color", default: "#d9ceb2" }
        ],
        generate: (v) => `background: conic-gradient(${v.c1} 135deg,${v.c2} 0 270deg,${v.c1} 0 315deg,${v.c2} 0) 0/ ${v.s}px ${v.s}px;`
    },
    {
        id: "pattern-31",
        name: "Split Arrowhead",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 30, max: 150, default: 66 },
            { id: "c1", label: "Accent", type: "color", default: "#b38184" },
            { id: "c2", label: "Base", type: "color", default: "#413e4a" }
        ],
        generate: (v) => `background: conic-gradient(from -45deg at 75% 12.5%,${v.c1} 25%,#0000 0), conic-gradient(from 135deg at 25% 87.5%,${v.c1} 25%,#0000 0) 0 ${v.s / 2}px, conic-gradient(from 180deg at 50% 75%,#0000 62.5%,${v.c1} 25%), conic-gradient(at 50% 25%,#0000 62.5%,${v.c1} 25%) 0 ${v.s / 2}px ${v.c2}; background-size: ${v.s}px ${2 * v.s}px;`
    },
    {
        id: "pattern-32",
        name: "Complex Cube Prism",
        inputs: [
            { id: "s", label: "Scale", type: "range", min: 20, max: 100, default: 36 },
            { id: "c1", label: "Color 1", type: "color", default: "#000000" },
            { id: "c2", label: "Color 2", type: "color", default: "#d2d3d5" },
            { id: "c3", label: "Color 3", type: "color", default: "#727c7e" }
        ],
        generate: (v) => {
            const p = Math.round(5.196 * v.s);
            const g1 = `conic-gradient(at 83.33% 16.66%,${v.c2} 60deg,#0000 0 300deg,${v.c1} 0)`;
            const g2 = `conic-gradient(at 16.66% 50%,#0000 75%,${v.c1} 0)`;
            const g3 = `conic-gradient(at 33.33% 50%,#0000 75%,${v.c2} 0)`;
            const g4 = `conic-gradient(from 59deg at 66.66% 27.66%,${v.c3} 61deg,#0000 62deg)`;
            const g5 = `conic-gradient(from 60deg at 50% 83.33%,#f1f1f1 60deg,${v.c1} 0 120deg,#0000 0)`;
            return `background: ${g1} ${-v.s}px 0,${g1} ${2 * v.s}px ${p}px, ${g2},${g2} ${3 * v.s}px ${p}px, ${g3},${g3} ${3 * v.s}px ${p}px, ${g4},${g4} ${3 * v.s}px ${p}px, ${g5} ${3 * v.s}px 0,${g5} 0 ${p}px ${v.c3}; background-size: ${6 * v.s}px ${2 * p}px;`;
        }
    },
    {
        id: "pattern-33",
        name: "Radial Cross Hatch",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 100, max: 400, default: 220 },
            { id: "c1", label: "Circle Line", type: "color", default: "#774f38" },
            { id: "c2", label: "Accent Square", type: "color", default: "#f1d4af" }
        ],
        generate: (v) => {
            const g = `radial-gradient(#0000 60%,${v.c1} 61% 63%,#0000 64% 77%,${v.c1} 78% 80%,#0000 81%)`;
            const c = `,#0000 75%,${v.c2} 0`;
            return `background: conic-gradient(at 12% 20% ${c}) ${v.s * 0.44}px ${0.9 * v.s}px, conic-gradient(at 12% 20% ${c}) ${v.s * -0.06}px ${0.4 * v.s}px, conic-gradient(at 20% 12% ${c}) ${0.9 * v.s}px ${v.s * 0.44}px, conic-gradient(at 20% 12% ${c}) ${0.4 * v.s}px ${v.s * -0.06}px, ${g},${g} ${v.s / 2}px ${v.s / 2}px ${v.c2}; background-size: ${v.s}px ${v.s}px;`;
        }
    },
    {
        id: "pattern-34",
        name: "Striped Origami",
        inputs: [
            { id: "s", label: "Size", type: "range", min: 50, max: 200, default: 100 },
            { id: "c1", label: "Light", type: "color", default: "#fdf1cc" },
            { id: "c2", label: "Dark", type: "color", default: "#987f69" }
        ],
        generate: (v) => {
            const g = `${v.c1} 3.125%,${v.c2} 0 9.375%,${v.c1} 0 15.625%,${v.c2} 0 21.875%,${v.c1} 0 28.125%,#0000 0`;
            return `background: linear-gradient(225deg,#0000 3.125%,${v.c2} 0 9.375%,#0000 0 78.125%,${v.c2} 0 84.375%,#0000 0) 0 ${v.s / 2}px, linear-gradient(45deg,${g}) 0 ${v.s}px, linear-gradient(45deg,${g}) ${v.s / -2}px ${v.s / -2}px, linear-gradient(225deg,${g}) ${v.s}px 0, linear-gradient(225deg,${g}) ${v.s / 2}px ${v.s}px, repeating-linear-gradient(-45deg,${v.c1} -3.125% 3.125%,${v.c2} 0 9.375%); background-size: ${2 * v.s}px ${2 * v.s}px;`;
        }
    }
];