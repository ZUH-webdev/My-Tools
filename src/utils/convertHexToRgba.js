export const convertHexToAll = (hex) => {
    // 1. Clean the input
    const cleanHex = hex.replace('#', '');
    
    // 2. Validation Regex 
    const isValid = /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$|^[0-9A-Fa-f]{8}$/i.test(cleanHex);

    if (!isValid) {
        return { error: true, message: "Invalid HEX color code" };
    }

    let r = 0, g = 0, b = 0, a = 1;

    if (cleanHex.length === 3) {
        r = parseInt(cleanHex[0] + cleanHex[0], 16);
        g = parseInt(cleanHex[1] + cleanHex[1], 16);
        b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else {
        r = parseInt(cleanHex.substring(0, 2), 16);
        g = parseInt(cleanHex.substring(2, 4), 16);
        b = parseInt(cleanHex.substring(4, 6), 16);
        if (cleanHex.length === 8) {
            a = (parseInt(cleanHex.substring(6, 8), 16) / 255).toFixed(2);
        }
    }

    // HSLA Logic
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
        hex: `#${cleanHex.toUpperCase()}`,
        rgba: `rgba(${r}, ${g}, ${b}, ${a})`,
        hsla: `hsla(${(h * 360).toFixed(1)}, ${(s * 100).toFixed(1)}%, ${(l * 100).toFixed(1)}%, ${a})`
    };
};