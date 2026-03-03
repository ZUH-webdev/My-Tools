export const convertRgbaToAll = (rgba) => {
    // 1. Regex to extract numbers from rgba(r, g, b, a) or just r, g, b, a
    const rgbaRegex = /^rgba?\(?(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)?$/;
    const match = rgba.trim().match(rgbaRegex);

    if (!match) {
        return { error: true, message: "Invalid RGBA format. Use: rgba(255, 255, 255, 1)" };
    }

    // 2. Extract values and convert to numbers
    let r = parseInt(match[1]);
    let g = parseInt(match[2]);
    let b = parseInt(match[3]);
    let a = match[4] !== undefined ? parseFloat(match[4]) : 1;

    // 3. Validation: Check if values are in range (0-255 for RGB, 0-1 for Alpha)
    if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0 || a < 0 || a > 1) {
        return { error: true, message: "Values must be: RGB 0-255, Alpha 0-1" };
    }

    // 4. Convert RGB to HEX
    const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
    
    // Alpha to HEX (0-255)
    const alphaHex = a < 1 ? toHex(Math.round(a * 255)) : "";
    const hexResult = `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`;

    // 5. Convert to HSLA 
    let rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    let max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h, s, l = (max + min) / 2;

    if (max === min) h = s = 0;
    else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
            case gNorm: h = (bNorm - rNorm) / d + 2; break;
            case bNorm: h = (rNorm - gNorm) / d + 4; break;
        }
        h /= 6;
    }

    return {
        error: false,
        hex: hexResult,
        rgba: `rgba(${r}, ${g}, ${b}, ${a})`,
        hsla: `hsla(${(h * 360).toFixed(1)}, ${(s * 100).toFixed(1)}%, ${(l * 100).toFixed(1)}%, ${a})`
    };
};