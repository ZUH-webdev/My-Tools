import { useState, useEffect, useRef } from 'react';
import { Download, Maximize2, Shuffle, Copy, Check, ChevronDown } from 'lucide-react';

const SvgPattern = () => {
    // Pattern types with their SVG implementations
    const patternTypes = [
        { id: 'circle', name: 'Circle' },
        { id: 'square', name: 'Square' },
        { id: 'triangle', name: 'Triangle' },
        { id: 'hexagon', name: 'Hexagon' },
        { id: 'star', name: 'Star' },
        { id: 'diamond', name: 'Diamond' },
        { id: 'plus', name: 'Plus' },
        { id: 'cross', name: 'Cross' },
        { id: 'dots', name: 'Dots' },
        { id: 'waves', name: 'Waves' },
        { id: 'zigzag', name: 'Zigzag' },
        { id: 'stripes', name: 'Stripes' },
        { id: 'checkerboard', name: 'Checkerboard' },
        { id: 'grid', name: 'Grid' },
        { id: 'hearts', name: 'Hearts' },
        { id: 'arrows', name: 'Arrows' },
        { id: 'chevron', name: 'Chevron' },
        { id: 'octagon', name: 'Octagon' },
        { id: 'pentagon', name: 'Pentagon' },
        { id: 'rings', name: 'Rings' },
        { id: 'flower', name: 'Flower' },
        { id: 'leaf', name: 'Leaf' },
        { id: 'moon', name: 'Moon' },
        { id: 'sun', name: 'Sun' },
        { id: 'cloud', name: 'Cloud' },
        { id: 'lightning', name: 'Lightning' },
        { id: 'snowflake', name: 'Snowflake' },
        { id: 'burst', name: 'Burst' },
        { id: 'spiral', name: 'Spiral' },
        { id: 'curve', name: 'Curve' },
        { id: 'wave2', name: 'Wave 2' },
        { id: 'ellipse', name: 'Ellipse' },
        { id: 'rectangle', name: 'Rectangle' },
        { id: 'roundedSquare', name: 'Rounded Square' },
        { id: 'pill', name: 'Pill' },
        { id: 'teardrop', name: 'Teardrop' },
        { id: 'droplet', name: 'Droplet' },
        { id: 'blob', name: 'Blob' },
        { id: 'organic', name: 'Organic' },
        { id: 'splatter', name: 'Splatter' },
        { id: 'confetti', name: 'Confetti' },
        { id: 'sparkle', name: 'Sparkle' },
        { id: 'asterisk', name: 'Asterisk' },
        { id: 'clover', name: 'Clover' },
        { id: 'infinity', name: 'Infinity' },
        { id: 'peace', name: 'Peace' },
        { id: 'yin-yang', name: 'Yin Yang' },
        { id: 'gear', name: 'Gear' },
        { id: 'polygon6', name: 'Polygon 6' },
        { id: 'polygon7', name: 'Polygon 7' },
        { id: 'polygon8', name: 'Polygon 8' },
        { id: 'mesh', name: 'Mesh' },
        { id: 'lattice', name: 'Lattice' },
        { id: 'weave', name: 'Weave' },
        { id: 'brick', name: 'Brick' }
    ];

    const exportTemplates = [
        { id: 'custom', name: 'Custom', width: 1200, height: 630 },
        { id: 'facebook-cover', name: 'Facebook Cover', width: 820, height: 312 },
        { id: 'facebook-post', name: 'Facebook Post', width: 1200, height: 630 },
        { id: 'twitter-header', name: 'Twitter Header', width: 1500, height: 500 },
        { id: 'twitter-post', name: 'Twitter Post', width: 1200, height: 675 },
        { id: 'instagram-post', name: 'Instagram Post', width: 1080, height: 1080 },
        { id: 'instagram-story', name: 'Instagram Story', width: 1080, height: 1920 },
        { id: 'linkedin-cover', name: 'LinkedIn Cover', width: 1584, height: 396 },
        { id: 'linkedin-post', name: 'LinkedIn Post', width: 1200, height: 627 },
        { id: 'youtube-thumbnail', name: 'YouTube Thumbnail', width: 1280, height: 720 },
        { id: 'youtube-banner', name: 'YouTube Banner', width: 2560, height: 1440 },
        { id: 'og-image', name: 'OG Image', width: 1200, height: 630 }
    ];

    const [patternType, setPatternType] = useState('circle');
    const [patternColor, setPatternColor] = useState('#47d3ff');
    const [backgroundColor, setBackgroundColor] = useState('#474bff');
    const [size, setSize] = useState(32);
    const [spacing, setSpacing] = useState(30);
    const [rotation, setRotation] = useState(0);
    const [skew, setSkew] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [exportTemplate, setExportTemplate] = useState('og-image');
    const [customWidth, setCustomWidth] = useState(1200);
    const [customHeight, setCustomHeight] = useState(630);
    const [fullScreen, setFullScreen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentTemplate = exportTemplates.find(t => t.id === exportTemplate);
    const exportWidth = exportTemplate === 'custom' ? customWidth : currentTemplate.width;
    const exportHeight = exportTemplate === 'custom' ? customHeight : currentTemplate.height;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setExportDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Generate random color
    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    };

    const shuffleColors = () => {
        setPatternColor(getRandomColor());
        setBackgroundColor(getRandomColor());
    };

    // Reset to default
    const resetSettings = () => {
        setPatternType('circle');
        setPatternColor('#47d3ff');
        setBackgroundColor('#474bff');
        setSize(32);
        setSpacing(30);
        setRotation(0);
        setSkew(0);
        setOpacity(1);
    };

    // Generate pattern shape based on type
    const generateShape = (type, size) => {
        const half = size / 2;

        switch (type) {
            case 'circle':
                return `<circle cx="${half}" cy="${half}" r="${half}" fill="${patternColor}"/>`;
            case 'square':
                return `<rect x="0" y="0" width="${size}" height="${size}" fill="${patternColor}"/>`;
            case 'triangle':
                return `<polygon points="${half},0 ${size},${size} 0,${size}" fill="${patternColor}"/>`;
            case 'hexagon':
                return `<polygon points="${half},0 ${size},${size * 0.25} ${size},${size * 0.75} ${half},${size} 0,${size * 0.75} 0,${size * 0.25}" fill="${patternColor}"/>`;
            case 'star':
                return `<polygon points="${half},0 ${half * 1.2},${half * 0.8} ${size},${half} ${half * 1.2},${half * 1.2} ${half},${size} ${half * 0.8},${half * 1.2} 0,${half} ${half * 0.8},${half * 0.8}" fill="${patternColor}"/>`;
            case 'diamond':
                return `<polygon points="${half},0 ${size},${half} ${half},${size} 0,${half}" fill="${patternColor}"/>`;
            case 'plus':
                return `<path d="M${half * 0.6},0 L${half * 1.4},0 L${half * 1.4},${half * 0.6} L${size},${half * 0.6} L${size},${half * 1.4} L${half * 1.4},${half * 1.4} L${half * 1.4},${size} L${half * 0.6},${size} L${half * 0.6},${half * 1.4} L0,${half * 1.4} L0,${half * 0.6} L${half * 0.6},${half * 0.6} Z" fill="${patternColor}"/>`;
            case 'cross':
                return `<path d="M0,0 L${size},${size} M${size},0 L0,${size}" stroke="${patternColor}" stroke-width="${size * 0.2}" stroke-linecap="round"/>`;
            case 'dots':
                return `<circle cx="${half}" cy="${half}" r="${size * 0.3}" fill="${patternColor}"/>`;
            case 'waves':
                return `<path d="M0,${half} Q${half * 0.5},0 ${half},${half} T${size},${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.15}"/>`;
            case 'zigzag':
                return `<path d="M0,${size} L${half},0 L${size},${size}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.15}" stroke-linejoin="miter"/>`;
            case 'stripes':
                return `<rect x="0" y="0" width="${size * 0.4}" height="${size}" fill="${patternColor}"/>`;
            case 'checkerboard':
                return `<rect x="0" y="0" width="${half}" height="${half}" fill="${patternColor}"/><rect x="${half}" y="${half}" width="${half}" height="${half}" fill="${patternColor}"/>`;
            case 'grid':
                return `<rect x="0" y="0" width="${size}" height="${size}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.1}"/>`;
            case 'hearts':
                return `<path d="M${half},${size * 0.3} C${half},${size * 0.15} ${size * 0.15},0 ${size * 0.3},${size * 0.15} C${size * 0.4},${size * 0.25} ${half},${size * 0.4} ${half},${size * 0.8} C${half},${size * 0.4} ${size * 0.6},${size * 0.25} ${size * 0.7},${size * 0.15} C${size * 0.85},0 ${half},${size * 0.15} ${half},${size * 0.3} Z" fill="${patternColor}"/>`;
            case 'arrows':
                return `<path d="M${half},0 L${size},${half} L${half * 1.2},${half} L${half * 1.2},${size} L${half * 0.8},${size} L${half * 0.8},${half} L0,${half} Z" fill="${patternColor}"/>`;
            case 'chevron':
                return `<path d="M0,${size * 0.3} L${half},0 L${size},${size * 0.3} L${size},${size * 0.5} L${half},${size * 0.2} L0,${size * 0.5} Z" fill="${patternColor}"/>`;
            case 'octagon':
                return `<polygon points="${size * 0.3},0 ${size * 0.7},0 ${size},${size * 0.3} ${size},${size * 0.7} ${size * 0.7},${size} ${size * 0.3},${size} 0,${size * 0.7} 0,${size * 0.3}" fill="${patternColor}"/>`;
            case 'pentagon':
                return `<polygon points="${half},0 ${size},${size * 0.38} ${size * 0.81},${size} ${size * 0.19},${size} 0,${size * 0.38}" fill="${patternColor}"/>`;
            case 'rings':
                return `<circle cx="${half}" cy="${half}" r="${size * 0.4}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.15}"/>`;
            case 'flower':
                return `<circle cx="${half}" cy="${half}" r="${size * 0.2}" fill="${patternColor}"/><circle cx="${half}" cy="${size * 0.2}" r="${size * 0.15}" fill="${patternColor}"/><circle cx="${half}" cy="${size * 0.8}" r="${size * 0.15}" fill="${patternColor}"/><circle cx="${size * 0.2}" cy="${half}" r="${size * 0.15}" fill="${patternColor}"/><circle cx="${size * 0.8}" cy="${half}" r="${size * 0.15}" fill="${patternColor}"/>`;
            case 'leaf':
                return `<path d="M${half},0 Q${size},${half} ${half},${size} Q0,${half} ${half},0" fill="${patternColor}"/>`;
            case 'moon':
                return `<path d="M${half},0 A${half},${half} 0 0,0 ${half},${size} A${half * 0.6},${half * 0.6} 0 0,1 ${half},0" fill="${patternColor}"/>`;
            case 'sun':
                return `<circle cx="${half}" cy="${half}" r="${size * 0.25}" fill="${patternColor}"/><path d="M${half},0 L${half},${size * 0.2} M${half},${size * 0.8} L${half},${size} M0,${half} L${size * 0.2},${half} M${size * 0.8},${half} L${size},${half}" stroke="${patternColor}" stroke-width="${size * 0.1}" stroke-linecap="round"/>`;
            case 'cloud':
                return `<ellipse cx="${size * 0.3}" cy="${half}" rx="${size * 0.25}" ry="${size * 0.2}" fill="${patternColor}"/><ellipse cx="${size * 0.5}" cy="${half * 0.8}" rx="${size * 0.3}" ry="${size * 0.25}" fill="${patternColor}"/><ellipse cx="${size * 0.7}" cy="${half}" rx="${size * 0.25}" ry="${size * 0.2}" fill="${patternColor}"/>`;
            case 'lightning':
                return `<path d="M${half * 1.2},0 L${half * 0.6},${half} L${half},${half} L${half * 0.4},${size} L${half * 1.4},${half * 0.8} L${half * 0.8},${half * 0.8} Z" fill="${patternColor}"/>`;
            case 'snowflake':
                return `<path d="M${half},0 L${half},${size} M0,${half} L${size},${half} M${size * 0.15},${size * 0.15} L${size * 0.85},${size * 0.85} M${size * 0.85},${size * 0.15} L${size * 0.15},${size * 0.85}" stroke="${patternColor}" stroke-width="${size * 0.1}" stroke-linecap="round"/>`;
            case 'burst':
                return `<path d="M${half},${half} L${half},0 M${half},${half} L${size},${size * 0.2} M${half},${half} L${size},${size * 0.8} M${half},${half} L${half},${size} M${half},${half} L0,${size * 0.8} M${half},${half} L0,${size * 0.2}" stroke="${patternColor}" stroke-width="${size * 0.08}" stroke-linecap="round"/>`;
            case 'spiral':
                return `<path d="M${half},${half} Q${size * 0.6},${half} ${size * 0.6},${size * 0.4} Q${size * 0.6},${size * 0.3} ${size * 0.5},${size * 0.3} Q${size * 0.4},${size * 0.3} ${size * 0.4},${size * 0.4}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.1}"/>`;
            case 'curve':
                return `<path d="M0,${size} Q${half},0 ${size},${size}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.15}"/>`;
            case 'wave2':
                return `<path d="M0,${half} C${size * 0.25},0 ${size * 0.25},${size} ${half},${half} S${size * 0.75},0 ${size},${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.12}"/>`;
            case 'ellipse':
                return `<ellipse cx="${half}" cy="${half}" rx="${half}" ry="${size * 0.3}" fill="${patternColor}"/>`;
            case 'rectangle':
                return `<rect x="${size * 0.2}" y="${size * 0.3}" width="${size * 0.6}" height="${size * 0.4}" fill="${patternColor}"/>`;
            case 'roundedSquare':
                return `<rect x="0" y="0" width="${size}" height="${size}" rx="${size * 0.2}" fill="${patternColor}"/>`;
            case 'pill':
                return `<rect x="0" y="${size * 0.3}" width="${size}" height="${size * 0.4}" rx="${size * 0.2}" fill="${patternColor}"/>`;
            case 'teardrop':
                return `<path d="M${half},0 Q${size},${half} ${half},${size} Q${half},${size} ${half},${size} Q0,${half} ${half},0" fill="${patternColor}"/>`;
            case 'droplet':
                return `<path d="M${half},0 L${size * 0.8},${size * 0.6} Q${size},${size * 0.7} ${half},${size} Q0,${size * 0.7} ${size * 0.2},${size * 0.6} Z" fill="${patternColor}"/>`;
            case 'blob':
                return `<path d="M${half},${size * 0.1} Q${size * 0.9},${size * 0.3} ${size * 0.8},${size * 0.7} Q${size * 0.5},${size * 0.95} ${size * 0.2},${size * 0.7} Q${size * 0.1},${size * 0.3} ${half},${size * 0.1}" fill="${patternColor}"/>`;
            case 'organic':
                return `<path d="M${size * 0.3},${size * 0.2} Q${size * 0.7},${size * 0.1} ${size * 0.8},${size * 0.4} Q${size * 0.9},${size * 0.7} ${size * 0.6},${size * 0.85} Q${size * 0.3},${size * 0.95} ${size * 0.15},${size * 0.6} Q${size * 0.05},${size * 0.35} ${size * 0.3},${size * 0.2}" fill="${patternColor}"/>`;
            case 'splatter':
                return `<circle cx="${half}" cy="${half}" r="${size * 0.2}" fill="${patternColor}"/><circle cx="${size * 0.7}" cy="${size * 0.3}" r="${size * 0.1}" fill="${patternColor}"/><circle cx="${size * 0.3}" cy="${size * 0.7}" r="${size * 0.12}" fill="${patternColor}"/>`;
            case 'confetti':
                return `<rect x="${size * 0.2}" y="${size * 0.1}" width="${size * 0.15}" height="${size * 0.3}" fill="${patternColor}" transform="rotate(20 ${size * 0.275} ${size * 0.25})"/><circle cx="${size * 0.7}" cy="${size * 0.6}" r="${size * 0.12}" fill="${patternColor}"/>`;
            case 'sparkle':
                return `<path d="M${half},0 L${half * 1.1},${half * 0.9} L${size},${half} L${half * 1.1},${half * 1.1} L${half},${size} L${half * 0.9},${half * 1.1} L0,${half} L${half * 0.9},${half * 0.9} Z" fill="${patternColor}"/>`;
            case 'asterisk':
                return `<path d="M${half},0 L${half},${size} M${size * 0.15},${size * 0.15} L${size * 0.85},${size * 0.85} M0,${half} L${size},${half} M${size * 0.85},${size * 0.15} L${size * 0.15},${size * 0.85}" stroke="${patternColor}" stroke-width="${size * 0.12}" stroke-linecap="round"/>`;
            case 'clover':
                return `<circle cx="${half}" cy="${size * 0.25}" r="${size * 0.2}" fill="${patternColor}"/><circle cx="${half}" cy="${size * 0.75}" r="${size * 0.2}" fill="${patternColor}"/><circle cx="${size * 0.25}" cy="${half}" r="${size * 0.2}" fill="${patternColor}"/><circle cx="${size * 0.75}" cy="${half}" r="${size * 0.2}" fill="${patternColor}"/>`;
            case 'infinity':
                return `<path d="M${size * 0.2},${half} Q${size * 0.3},${size * 0.2} ${half},${half} Q${size * 0.7},${size * 0.8} ${size * 0.8},${half} Q${size * 0.7},${size * 0.2} ${half},${half} Q${size * 0.3},${size * 0.8} ${size * 0.2},${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.12}"/>`;
            case 'peace':
                return `<circle cx="${half}" cy="${half}" r="${half * 0.8}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.1}"/><path d="M${half},${size * 0.2} L${half},${size * 0.8} M${half},${half} L${size * 0.25},${size * 0.75} M${half},${half} L${size * 0.75},${size * 0.75}" stroke="${patternColor}" stroke-width="${size * 0.1}"/>`;
            case 'yin-yang':
                return `<circle cx="${half}" cy="${half}" r="${half}" fill="${patternColor}"/><path d="M${half},0 A${half},${half} 0 0,1 ${half},${size}" fill="${backgroundColor}"/><circle cx="${half}" cy="${size * 0.25}" r="${size * 0.12}" fill="${backgroundColor}"/><circle cx="${half}" cy="${size * 0.75}" r="${size * 0.12}" fill="${patternColor}"/>`;
            case 'gear':
                return `<circle cx="${half}" cy="${half}" r="${size * 0.25}" fill="${patternColor}"/><rect x="${half * 0.8}" y="0" width="${size * 0.2}" height="${size * 0.3}" fill="${patternColor}"/><rect x="${half * 0.8}" y="${size * 0.7}" width="${size * 0.2}" height="${size * 0.3}" fill="${patternColor}"/><rect x="0" y="${half * 0.8}" width="${size * 0.3}" height="${size * 0.2}" fill="${patternColor}"/><rect x="${size * 0.7}" y="${half * 0.8}" width="${size * 0.3}" height="${size * 0.2}" fill="${patternColor}"/>`;
            case 'polygon6':
                return `<polygon points="${half},${size * 0.1} ${size * 0.9},${size * 0.3} ${size * 0.9},${size * 0.7} ${half},${size * 0.9} ${size * 0.1},${size * 0.7} ${size * 0.1},${size * 0.3}" fill="${patternColor}"/>`;
            case 'polygon7':
                return `<polygon points="${half},${size * 0.05} ${size * 0.85},${size * 0.25} ${size * 0.95},${size * 0.6} ${size * 0.7},${size * 0.9} ${size * 0.3},${size * 0.9} ${size * 0.05},${size * 0.6} ${size * 0.15},${size * 0.25}" fill="${patternColor}"/>`;
            case 'polygon8':
                return `<polygon points="${half},0 ${size * 0.85},${size * 0.15} ${size},${half} ${size * 0.85},${size * 0.85} ${half},${size} ${size * 0.15},${size * 0.85} 0,${half} ${size * 0.15},${size * 0.15}" fill="${patternColor}"/>`;
            case 'mesh':
                return `<path d="M0,0 L${size},0 L${size},${size} L0,${size} Z M${half},0 L${half},${size} M0,${half} L${size},${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.08}"/>`;
            case 'lattice':
                return `<path d="M0,0 L${size},${size} M${size},0 L0,${size} M${half},0 L${half},${size} M0,${half} L${size},${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.06}"/>`;
            case 'weave':
                return `<path d="M0,${size * 0.3} Q${half},${size * 0.1} ${size},${size * 0.3} M0,${size * 0.7} Q${half},${size * 0.9} ${size},${size * 0.7}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.15}"/>`;
            case 'brick':
                return `<rect x="0" y="0" width="${size}" height="${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.08}"/><rect x="0" y="${half}" width="${half}" height="${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.08}"/><rect x="${half}" y="${half}" width="${half}" height="${half}" stroke="${patternColor}" fill="none" stroke-width="${size * 0.08}"/>`;
            default:
                return `<circle cx="${half}" cy="${half}" r="${half}" fill="${patternColor}"/>`;
        }
    };

    // Generate SVG code
    const generateSVG = (forExport = false) => {
        const patternSize = size + spacing;
        const width = forExport ? exportWidth : 680;
        const height = forExport ? exportHeight : 400;

        const shape = generateShape(patternType, size);

        return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pattern" x="0" y="0" width="${patternSize}" height="${patternSize}" patternUnits="userSpaceOnUse" patternTransform="rotate(${rotation}) skewX(${skew})">
      <g opacity="${opacity}">
        ${shape}
      </g>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <rect width="100%" height="100%" fill="url(#pattern)"/>
</svg>`;
    };

    // Copy SVG code to clipboard
    const copySVGCode = () => {
        const svgCode = generateSVG(true);
        navigator.clipboard.writeText(svgCode);
        setCopied(true);
        setExportDropdownOpen(false);
        setTimeout(() => setCopied(false), 2000);
    };

    // Download as SVG file
    const downloadSVG = () => {
        const svgCode = generateSVG(true);
        const blob = new Blob([svgCode], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pattern.svg';
        a.click();
        URL.revokeObjectURL(url);
        setExportDropdownOpen(false);
    };

    // Download as PNG file
    const downloadPNG = () => {
        const svgCode = generateSVG(true);
        const canvas = document.createElement('canvas');
        canvas.width = exportWidth;
        canvas.height = exportHeight;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        const blob = new Blob([svgCode], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                const pngUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = pngUrl;
                a.download = 'pattern.png';
                a.click();
                URL.revokeObjectURL(pngUrl);
                URL.revokeObjectURL(url);
            });
        };

        img.src = url;
        setExportDropdownOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-manrope">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Preview Area */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-xl shadow p-6">
                            <div
                                className="w-full rounded-lg overflow-hidden border-2 border-gray-200"
                                style={{ height: '400px' }}
                                dangerouslySetInnerHTML={{ __html: generateSVG() }}
                            />

                            <button
                                onClick={() => setFullScreen(true)}
                                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                            >
                                <Maximize2 size={20} />
                                Full Screen Preview
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={shuffleColors}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                            >
                                <Shuffle size={20} />
                                Shuffle Colors
                            </button>

                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    <Download size={20} />
                                    Export
                                    <ChevronDown size={18} className={`transition-transform ${exportDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {exportDropdownOpen && (
                                    <div className="absolute top-full mt-2 w-full bg-white border-2 border-gray-200 rounded-lg shadow z-10 overflow-hidden">
                                        <button
                                            onClick={copySVGCode}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                                        >
                                            {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-gray-600" />}
                                            <span className="text-gray-800 font-medium">{copied ? 'Copied!' : 'Copy SVG Code'}</span>
                                        </button>
                                        <div className="border-t border-gray-200"></div>
                                        <button
                                            onClick={downloadSVG}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <Download size={18} className="text-gray-600" />
                                            <span className="text-gray-800 font-medium">Download SVG</span>
                                        </button>
                                        <div className="border-t border-gray-200"></div>
                                        <button
                                            onClick={downloadPNG}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <Download size={18} className="text-gray-600" />
                                            <span className="text-gray-800 font-medium">Download PNG</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Export Size Settings */}
                        <div className="bg-white rounded-xl shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-space-grotesk">Export Size Settings</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Background Template</label>
                                    <select
                                        value={exportTemplate}
                                        onChange={(e) => setExportTemplate(e.target.value)}
                                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                                    >
                                        {exportTemplates.map(template => (
                                            <option key={template.id} value={template.id}>{template.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {exportTemplate === 'custom' ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Width (px)</label>
                                            <input
                                                type="number"
                                                value={customWidth}
                                                onChange={(e) => setCustomWidth(Number(e.target.value))}
                                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Height (px)</label>
                                            <input
                                                type="number"
                                                value={customHeight}
                                                onChange={(e) => setCustomHeight(Number(e.target.value))}
                                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Width (px)</label>
                                            <div className="px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-lg text-gray-700">
                                                {exportWidth}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Height (px)</label>
                                            <div className="px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-lg text-gray-700">
                                                {exportHeight}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Settings Panel */}
                    <div className="space-y-6">
                        {/* Pattern Type */}
                        <div className="bg-white rounded-xl shadow p-5">
                            <label className="block text-md font-bold text-gray-900 mb-2 font-space-grotesk">Pattern Type</label>
                            <select
                                value={patternType}
                                onChange={(e) => setPatternType(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                            >
                                {patternTypes.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Colors */}
                        <div className="bg-white rounded-xl shadow p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-space-grotesk">Colors</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pattern Color</label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="color"
                                            value={patternColor}
                                            onChange={(e) => setPatternColor(e.target.value)}
                                            className="w-14 h-14 rounded-lg cursor-pointer border-2 border-gray-300"
                                            style={{ padding: '2px' }}
                                        />
                                        <input
                                            type="text"
                                            value={patternColor}
                                            onChange={(e) => setPatternColor(e.target.value)}
                                            className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none font-semibold text-sm uppercase"
                                            placeholder="#47d3ff"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="color"
                                            value={backgroundColor}
                                            onChange={(e) => setBackgroundColor(e.target.value)}
                                            className="w-14 h-14 rounded-lg cursor-pointer border-2 border-gray-300"
                                            style={{ padding: '2px' }}
                                        />
                                        <input
                                            type="text"
                                            value={backgroundColor}
                                            onChange={(e) => setBackgroundColor(e.target.value)}
                                            className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none font-semibold text-sm uppercase"
                                            placeholder="#474bff"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pattern Settings */}
                        <div className="bg-white rounded-xl shadow p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900 font-space-grotesk">Pattern Settings</h3>
                                <button
                                    onClick={resetSettings}
                                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-gray-700">Size</label>
                                        <span className="text-sm text-gray-600">{size}px</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        value={size}
                                        onChange={(e) => setSize(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-gray-700">Spacing</label>
                                        <span className="text-sm text-gray-600">{spacing}px</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={spacing}
                                        onChange={(e) => setSpacing(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-gray-700">Rotation</label>
                                        <span className="text-sm text-gray-600">{rotation}deg</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="360"
                                        value={rotation}
                                        onChange={(e) => setRotation(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-gray-700">Skew</label>
                                        <span className="text-sm text-gray-600">{skew}deg</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="-45"
                                        max="45"
                                        value={skew}
                                        onChange={(e) => setSkew(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium text-gray-700">Pattern Opacity</label>
                                        <span className="text-sm text-gray-600">{opacity.toFixed(2)}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={opacity}
                                        onChange={(e) => setOpacity(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal */}
            {fullScreen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <button
                        onClick={() => setFullScreen(false)}
                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all backdrop-blur-sm"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className="max-w-full max-h-full rounded-xl shadow-2xl"
                        dangerouslySetInnerHTML={{ __html: generateSVG() }}
                    />
                </div>
            )}
        </div>
    );
};

export default SvgPattern;