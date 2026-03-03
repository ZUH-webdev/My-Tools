export const toggleSwitchDesigns = [
  {
    id: "toggle-1",
    name: "Material Modern",
    category: "Material",
    getCss: (primary = "#2196F3", size = "medium") => {
      const sizes = {
        small: { width: 50, height: 24, slider: 20, offset: 26 },
        medium: { width: 60, height: 34, slider: 26, offset: 26 },
        large: { width: 70, height: 40, slider: 32, offset: 30 }
      };
      const s = sizes[size];
      return `
        .toggle-material-modern {
          position: relative;
          display: inline-block;
          width: ${s.width}px;
          height: ${s.height}px;
        }
        .toggle-material-modern input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-material-modern .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: ${s.height}px;
        }
        .toggle-material-modern .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: ${(s.height - s.slider) / 2}px;
          bottom: ${(s.height - s.slider) / 2}px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .toggle-material-modern input:checked + .slider {
          background-color: ${primary};
        }
        .toggle-material-modern input:checked + .slider:before {
          transform: translateX(${s.offset}px);
        }
        .toggle-material-modern input:disabled + .slider {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
    },
    html: `<label class="toggle-material-modern"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-2",
    name: "iOS Style",
    category: "iOS",
    getCss: (primary = "#34C759", size = "medium") => {
      const sizes = {
        small: { width: 45, height: 26, slider: 22, offset: 19 },
        medium: { width: 51, height: 31, slider: 27, offset: 20 },
        large: { width: 60, height: 36, slider: 32, offset: 24 }
      };
      const s = sizes[size];
      return `
        .toggle-ios {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-ios input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-ios .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e5e5ea;
          border-radius: ${s.height}px;
          box-shadow: inset 0 0 8px rgba(0,0,0,0.1);
          transition: .4s;
        }
        .toggle-ios .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 2px;
          bottom: 2px;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border-radius: 50%;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          transition: .4s;
        }
        .toggle-ios input:checked + .slider {
          background-color: ${primary};
        }
        .toggle-ios input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: -2px 2px 5px rgba(0,0,0,0.2);
        }
      `;
    },
    html: `<label class="toggle-ios"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-3",
    name: "Glass Morphism",
    category: "Modern",
    getCss: (primary = "#9333EA", size = "medium") => {
      const sizes = {
        small: { width: 55, height: 28, slider: 22, offset: 27 },
        medium: { width: 65, height: 35, slider: 27, offset: 30 },
        large: { width: 75, height: 40, slider: 32, offset: 35 }
      };
      const s = sizes[size];
      return `
        .toggle-glass {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-glass input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-glass .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: ${s.height}px;
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: .4s;
        }
        .toggle-glass .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 3px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: .4s;
        }
        .toggle-glass input:checked + .slider {
          background: rgba(${hexToRgb(primary)}, 0.8);
          border-color: rgba(${hexToRgb(primary)}, 0.3);
        }
        .toggle-glass input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background: rgba(255, 255, 255, 1);
        }
      `;
    },
    html: `<label class="toggle-glass"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-4",
    name: "Neon Glow",
    category: "Modern",
    getCss: (primary = "#00D9FF", size = "medium") => {
      const sizes = {
        small: { width: 50, height: 25, slider: 21, offset: 25 },
        medium: { width: 60, height: 30, slider: 24, offset: 30 },
        large: { width: 70, height: 35, slider: 29, offset: 35 }
      };
      const s = sizes[size];
      return `
        .toggle-neon {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-neon input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-neon .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #333;
          border-radius: ${s.height}px;
          transition: all 0.4s;
        }
        .toggle-neon .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 2px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 0 0 5px rgba(255,255,255,0.5);
        }
        .toggle-neon input:checked + .slider {
          background-color: ${primary};
          box-shadow: 0 0 20px ${primary}80;
        }
        .toggle-neon input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .toggle-neon input:focus-visible + .slider {
          outline: 2px solid ${primary};
          outline-offset: 2px;
        }
      `;
    },
    html: `<label class="toggle-neon"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-5",
    name: "Minimal Outline",
    category: "Minimal",
    getCss: (primary = "#4CAF50", size = "medium") => {
      const sizes = {
        small: { width: 45, height: 22, slider: 18, offset: 23 },
        medium: { width: 50, height: 25, slider: 21, offset: 25 },
        large: { width: 60, height: 30, slider: 26, offset: 30 }
      };
      const s = sizes[size];
      return `
        .toggle-minimal {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-minimal input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-minimal .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          border: 2px solid #ddd;
          border-radius: ${s.height}px;
          transition: .3s;
        }
        .toggle-minimal .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 2px;
          bottom: 2px;
          background-color: #666;
          border-radius: 50%;
          transition: .3s;
        }
        .toggle-minimal input:checked + .slider {
          border-color: ${primary};
          background-color: white;
        }
        .toggle-minimal input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background-color: ${primary};
        }
      `;
    },
    html: `<label class="toggle-minimal"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-6",
    name: "3D Skeuomorphic",
    category: "Retro",
    getCss: (primary = "#FF9800", size = "medium") => {
      const sizes = {
        small: { width: 60, height: 30, slider: 24, offset: 30 },
        medium: { width: 70, height: 36, slider: 28, offset: 34 },
        large: { width: 80, height: 42, slider: 34, offset: 38 }
      };
      const s = sizes[size];
      return `
        .toggle-3d {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-3d input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-3d .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          border-radius: ${s.height}px;
          box-shadow: 
            inset 3px 3px 7px rgba(0, 0, 0, 0.1),
            inset -3px -3px 7px rgba(255, 255, 255, 0.7),
            2px 2px 5px rgba(0, 0, 0, 0.1);
          transition: .4s;
        }
        .toggle-3d .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
          border-radius: 50%;
          box-shadow: 
            3px 3px 7px rgba(0, 0, 0, 0.2),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          transition: .4s;
        }
        .toggle-3d input:checked + .slider {
          background: linear-gradient(145deg, ${darkenColor(primary, 20)}, ${primary});
        }
        .toggle-3d input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: 
            -3px 3px 7px rgba(0, 0, 0, 0.2),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }
      `;
    },
    html: `<label class="toggle-3d"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-7",
    name: "With Text Labels",
    category: "Labeled",
    getCss: (primary = "#2196F3", size = "medium") => {
      const sizes = {
        small: { width: 65, height: 26, slider: 20, offset: 35, fontSize: "10px" },
        medium: { width: 80, height: 34, slider: 26, offset: 44, fontSize: "12px" },
        large: { width: 95, height: 40, slider: 32, offset: 53, fontSize: "14px" }
      };
      const s = sizes[size];
      return `
        .toggle-text {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-text input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-text .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          border-radius: ${s.height}px;
          transition: .4s;
          overflow: hidden;
        }
        .toggle-text .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: ${(s.height - s.slider) / 2}px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          z-index: 2;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .toggle-text .slider:after {
          content: "OFF";
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          font-size: ${s.fontSize};
          font-weight: bold;
          font-family: Arial, sans-serif;
          transition: .3s;
        }
        .toggle-text .slider:before {
          content: "ON";
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${primary};
          font-size: ${s.fontSize};
          font-weight: bold;
          font-family: Arial, sans-serif;
        }
        .toggle-text input:checked + .slider {
          background-color: ${primary};
        }
        .toggle-text input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          color: ${primary};
          background-color: white;
        }
        .toggle-text input:checked + .slider:after {
          content: "ON";
          left: 10px;
          right: auto;
          color: white;
        }
        .toggle-text input:not(:checked) + .slider:before {
          content: "";
        }
      `;
    },
    html: `<label class="toggle-text"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-8",
    name: "Gradient Flow",
    category: "Modern",
    getCss: (primary = "#FF416C", size = "medium") => {
      const sizes = {
        small: { width: 55, height: 28, slider: 22, offset: 27 },
        medium: { width: 65, height: 34, slider: 26, offset: 31 },
        large: { width: 75, height: 40, slider: 32, offset: 35 }
      };
      const s = sizes[size];
      const secondary = "#FF4B2B";
      return `
        .toggle-gradient {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-gradient input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-gradient .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #ccc 50%, #ccc 50%);
          border-radius: ${s.height}px;
          transition: .4s;
          overflow: hidden;
        }
        .toggle-gradient .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: ${(s.height - s.slider) / 2}px;
          background: white;
          border-radius: 50%;
          transition: .4s;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .toggle-gradient .slider:after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, ${primary}, ${secondary});
          border-radius: ${s.height}px;
          transition: .4s;
        }
        .toggle-gradient input:checked + .slider:after {
          left: 0;
        }
        .toggle-gradient input:checked + .slider:before {
          transform: translateX(${s.offset}px);
        }
      `;
    },
    html: `<label class="toggle-gradient"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-9",
    name: "Border Only",
    category: "Minimal",
    getCss: (primary = "#9C27B0", size = "medium") => {
      const sizes = {
        small: { width: 48, height: 24, slider: 18, offset: 24 },
        medium: { width: 56, height: 28, slider: 22, offset: 28 },
        large: { width: 64, height: 32, slider: 26, offset: 32 }
      };
      const s = sizes[size];
      return `
        .toggle-border {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-border input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-border .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          border: 2px solid #ddd;
          border-radius: ${s.height}px;
          transition: .3s;
        }
        .toggle-border .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 2px;
          bottom: 2px;
          border: 2px solid #999;
          border-radius: 50%;
          background: transparent;
          transition: .3s;
          box-sizing: border-box;
        }
        .toggle-border input:checked + .slider {
          border-color: ${primary};
        }
        .toggle-border input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          border-color: ${primary};
          background: ${primary};
        }
      `;
    },
    html: `<label class="toggle-border"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-10",
    name: "Pulse Effect",
    category: "Animated",
    getCss: (primary = "#00BCD4", size = "medium") => {
      const sizes = {
        small: { width: 52, height: 26, slider: 20, offset: 26 },
        medium: { width: 62, height: 32, slider: 24, offset: 30 },
        large: { width: 72, height: 38, slider: 30, offset: 34 }
      };
      const s = sizes[size];
      return `
        .toggle-pulse {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-pulse input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-pulse .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          border-radius: ${s.height}px;
          transition: .4s;
        }
        .toggle-pulse .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 0 0 0 0 rgba(${hexToRgb(primary)}, 0.7);
          animation: pulse 2s infinite;
        }
        .toggle-pulse input:checked + .slider {
          background-color: ${primary};
        }
        .toggle-pulse input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          animation: pulse-active 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(204,204,204,0.7); }
          70% { box-shadow: 0 0 0 6px rgba(204,204,204,0); }
          100% { box-shadow: 0 0 0 0 rgba(204,204,204,0); }
        }
        @keyframes pulse-active {
          0% { box-shadow: 0 0 0 0 rgba(${hexToRgb(primary)}, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(${hexToRgb(primary)}, 0); }
          100% { box-shadow: 0 0 0 0 rgba(${hexToRgb(primary)}, 0); }
        }
      `;
    },
    html: `<label class="toggle-pulse"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-11",
    name: "Shaded Depth",
    category: "Material",
    getCss: (primary = "#3F51B5", size = "medium") => {
      const sizes = {
        small: { width: 54, height: 28, slider: 22, offset: 26 },
        medium: { width: 64, height: 34, slider: 26, offset: 30 },
        large: { width: 74, height: 40, slider: 32, offset: 34 }
      };
      const s = sizes[size];
      return `
        .toggle-shaded {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-shaded input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-shaded .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          border-radius: ${s.height}px;
          transition: .4s;
          box-shadow: 
            inset 0 2px 4px rgba(0,0,0,0.1),
            0 2px 2px rgba(0,0,0,0.1);
        }
        .toggle-shaded .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.2),
            inset 0 -1px 2px rgba(0,0,0,0.1);
        }
        .toggle-shaded input:checked + .slider {
          background-color: ${primary};
          box-shadow: 
            inset 0 2px 4px rgba(0,0,0,0.2),
            0 2px 4px rgba(${hexToRgb(primary)}, 0.3);
        }
        .toggle-shaded input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.2),
            inset 0 -1px 2px rgba(0,0,0,0.1);
        }
      `;
    },
    html: `<label class="toggle-shaded"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-12",
    name: "Retro TV",
    category: "Retro",
    getCss: (primary = "#FF5722", size = "medium") => {
      const sizes = {
        small: { width: 58, height: 26, slider: 18, offset: 32 },
        medium: { width: 68, height: 32, slider: 22, offset: 38 },
        large: { width: 78, height: 38, slider: 28, offset: 42 }
      };
      const s = sizes[size];
      return `
        .toggle-retro {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-retro input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-retro .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #333;
          border-radius: 6px;
          transition: .4s;
          border: 2px solid #555;
          box-shadow: 
            inset 0 0 10px rgba(0,0,0,0.5),
            0 4px 0 rgba(0,0,0,0.3);
        }
        .toggle-retro .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 2px;
          background: linear-gradient(145deg, #666, #888);
          border-radius: 4px;
          transition: .4s;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.1),
            0 2px 0 rgba(0,0,0,0.5);
        }
        .toggle-retro input:checked + .slider {
          background-color: ${primary};
          border-color: ${darkenColor(primary, 30)};
        }
        .toggle-retro input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background: linear-gradient(145deg, #fff, ${lightenColor(primary, 40)});
        }
      `;
    },
    html: `<label class="toggle-retro"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-13",
    name: "Glowing Icon",
    category: "Icon",
    getCss: (primary = "#FFC107", size = "medium") => {
      const sizes = {
        small: { width: 60, height: 28, slider: 22, offset: 32, fontSize: "14px" },
        medium: { width: 70, height: 34, slider: 26, offset: 38, fontSize: "16px" },
        large: { width: 80, height: 40, slider: 32, offset: 42, fontSize: "18px" }
      };
      const s = sizes[size];
      return `
        .toggle-icon-glow {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-icon-glow input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-icon-glow .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #444;
          border-radius: ${s.height}px;
          transition: .4s;
        }
        .toggle-icon-glow .slider:before {
          position: absolute;
          content: "☀️";
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          font-size: ${s.fontSize};
          z-index: 2;
        }
        .toggle-icon-glow input:checked + .slider {
          background-color: ${primary};
          box-shadow: 0 0 15px ${primary}80;
        }
        .toggle-icon-glow input:checked + .slider:before {
          content: "🌙";
          transform: translateX(${s.offset}px);
          background-color: #333;
          color: white;
        }
      `;
    },
    html: `<label class="toggle-icon-glow"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-14",
    name: "Morphing Shape",
    category: "Animated",
    getCss: (primary = "#E91E63", size = "medium") => {
      const sizes = {
        small: { width: 52, height: 24, slider: 18, offset: 28 },
        medium: { width: 60, height: 28, slider: 22, offset: 32 },
        large: { width: 68, height: 32, slider: 26, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-morph {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-morph input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-morph .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          border-radius: ${s.height / 2}px;
          transition: .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .toggle-morph .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .toggle-morph input:checked + .slider {
          background-color: ${primary};
          border-radius: ${s.height}px;
        }
        .toggle-morph input:checked + .slider:before {
          transform: translateX(${s.offset}px) scale(0.9);
          border-radius: 40% 50% 50% 40%;
        }
      `;
    },
    html: `<label class="toggle-morph"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-15",
    name: "Wireframe Modern",
    category: "Minimal",
    getCss: (primary = "#607D8B", size = "medium") => {
      const sizes = {
        small: { width: 50, height: 24, slider: 16, offset: 28 },
        medium: { width: 58, height: 28, slider: 20, offset: 32 },
        large: { width: 66, height: 32, slider: 24, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-wireframe {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-wireframe input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-wireframe .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          border: 1px solid #ddd;
          border-radius: ${s.height}px;
          transition: .3s;
        }
        .toggle-wireframe .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background: transparent;
          border: 2px solid #bbb;
          border-radius: 50%;
          transition: .3s;
          box-sizing: border-box;
        }
        .toggle-wireframe input:checked + .slider {
          border-color: ${primary};
        }
        .toggle-wireframe input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          border-color: ${primary};
          background: ${primary};
        }
      `;
    },
    html: `<label class="toggle-wireframe"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-16",
    name: "Bounce Animation",
    category: "Animated",
    getCss: (primary = "#009688", size = "medium") => {
      const sizes = {
        small: { width: 54, height: 26, slider: 20, offset: 28 },
        medium: { width: 62, height: 30, slider: 24, offset: 32 },
        large: { width: 70, height: 34, slider: 28, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-bounce {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-bounce input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-bounce .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          border-radius: ${s.height}px;
          transition: .4s;
        }
        .toggle-bounce .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .toggle-bounce input:checked + .slider {
          background-color: ${primary};
        }
        .toggle-bounce input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          animation: bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(${s.offset}px) scale(1); }
          50% { transform: translateX(${s.offset}px) scale(1.1); }
        }
      `;
    },
    html: `<label class="toggle-bounce"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-17",
    name: "Duotone Modern",
    category: "Modern",
    getCss: (primary = "#673AB7", size = "medium") => {
      const sizes = {
        small: { width: 56, height: 28, slider: 22, offset: 28 },
        medium: { width: 66, height: 34, slider: 26, offset: 32 },
        large: { width: 76, height: 40, slider: 32, offset: 36 }
      };
      const s = sizes[size];
      const secondary = "#9C27B0";
      return `
        .toggle-duotone {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-duotone input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-duotone .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #e0e0e0 50%, #e0e0e0 50%);
          border-radius: ${s.height}px;
          transition: .4s;
          overflow: hidden;
        }
        .toggle-duotone .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: white;
          border-radius: 50%;
          transition: .4s;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .toggle-duotone .slider:after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, ${primary}, ${secondary});
          border-radius: ${s.height}px;
          transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .toggle-duotone input:checked + .slider:after {
          left: 0;
        }
        .toggle-duotone input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background: white;
        }
      `;
    },
    html: `<label class="toggle-duotone"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-18",
    name: "Filled Slide",
    category: "Material",
    getCss: (primary = "#FF9800", size = "medium") => {
      const sizes = {
        small: { width: 52, height: 24, slider: 20, offset: 28 },
        medium: { width: 60, height: 28, slider: 24, offset: 32 },
        large: { width: 68, height: 32, slider: 28, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-filled-slide {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-filled-slide input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-filled-slide .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e0e0e0;
          border-radius: ${s.height}px;
          transition: .4s;
        }
        .toggle-filled-slide .slider:before {
          position: absolute;
          content: "";
          height: ${s.height - 8}px;
          width: ${s.height - 8}px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .toggle-filled-slide input:checked + .slider {
          background-color: ${primary}40;
        }
        .toggle-filled-slide input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background-color: ${primary};
        }
      `;
    },
    html: `<label class="toggle-filled-slide"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-19",
    name: "Cyberpunk Glow",
    category: "Modern",
    getCss: (primary = "#00FF88", size = "medium") => {
      const sizes = {
        small: { width: 58, height: 26, slider: 20, offset: 32 },
        medium: { width: 68, height: 32, slider: 24, offset: 38 },
        large: { width: 78, height: 38, slider: 30, offset: 42 }
      };
      const s = sizes[size];
      return `
        .toggle-cyber {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-cyber input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-cyber .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #111;
          border-radius: ${s.height}px;
          transition: .4s;
          border: 1px solid #444;
          box-shadow: 
            inset 0 0 10px rgba(0,0,0,0.8),
            0 0 10px rgba(0,0,0,0.5);
        }
        .toggle-cyber .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: #222;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 
            0 0 5px ${primary},
            inset 0 0 5px rgba(0,0,0,0.5);
        }
        .toggle-cyber input:checked + .slider {
          background-color: #000;
          border-color: ${primary};
          box-shadow: 
            inset 0 0 10px rgba(0,0,0,0.8),
            0 0 15px ${primary};
        }
        .toggle-cyber input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background-color: ${primary};
          box-shadow: 
            0 0 10px ${primary},
            inset 0 0 5px rgba(255,255,255,0.3);
        }
      `;
    },
    html: `<label class="toggle-cyber"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-20",
    name: "Pastel Soft",
    category: "Minimal",
    getCss: (primary = "#81C784", size = "medium") => {
      const sizes = {
        small: { width: 52, height: 26, slider: 20, offset: 26 },
        medium: { width: 60, height: 30, slider: 24, offset: 30 },
        large: { width: 68, height: 34, slider: 28, offset: 34 }
      };
      const s = sizes[size];
      return `
        .toggle-pastel {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-pastel input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-pastel .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #f0f0f0;
          border-radius: ${s.height}px;
          transition: .4s;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }
        .toggle-pastel .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .toggle-pastel input:checked + .slider {
          background-color: ${primary};
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        .toggle-pastel input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
      `;
    },
    html: `<label class="toggle-pastel"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-21",
    name: "Neumorphism",
    category: "Modern",
    getCss: (primary = "#64B5F6", size = "medium") => {
      const sizes = {
        small: { width: 56, height: 28, slider: 22, offset: 28 },
        medium: { width: 66, height: 34, slider: 26, offset: 32 },
        large: { width: 76, height: 40, slider: 32, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-neumorphism {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-neumorphism input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-neumorphism .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #e0e0e0;
          border-radius: ${s.height}px;
          box-shadow: 
            inset 6px 6px 12px #bebebe,
            inset -6px -6px 12px #ffffff,
            4px 4px 8px rgba(0,0,0,0.05);
          transition: .4s;
        }
        .toggle-neumorphism .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: #e0e0e0;
          border-radius: 50%;
          transition: .4s;
          box-shadow: 
            3px 3px 6px #bebebe,
            -3px -3px 6px #ffffff;
        }
        .toggle-neumorphism input:checked + .slider {
          background: ${primary};
          box-shadow: 
            inset 6px 6px 12px ${darkenColor(primary, 20)},
            inset -6px -6px 12px ${lightenColor(primary, 20)},
            4px 4px 8px rgba(0,0,0,0.1);
        }
        .toggle-neumorphism input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: 
            3px 3px 6px ${darkenColor(primary, 30)},
            -3px -3px 6px ${lightenColor(primary, 30)};
        }
      `;
    },
    html: `<label class="toggle-neumorphism"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-22",
    name: "Flat Square",
    category: "Minimal",
    getCss: (primary = "#F44336", size = "medium") => {
      const sizes = {
        small: { width: 48, height: 20, slider: 14, offset: 28 },
        medium: { width: 56, height: 24, slider: 18, offset: 32 },
        large: { width: 64, height: 28, slider: 22, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-square {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-square input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-square .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ddd;
          transition: .3s;
        }
        .toggle-square .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .3s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .toggle-square input:checked + .slider {
          background-color: ${primary};
        }
        .toggle-square input:checked + .slider:before {
          transform: translateX(${s.offset}px);
        }
      `;
    },
    html: `<label class="toggle-square"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-23",
    name: "Gradient Border",
    category: "Modern",
    getCss: (primary = "#9C27B0", size = "medium") => {
      const sizes = {
        small: { width: 58, height: 30, slider: 24, offset: 28 },
        medium: { width: 68, height: 36, slider: 28, offset: 32 },
        large: { width: 78, height: 42, slider: 34, offset: 36 }
      };
      const s = sizes[size];
      const secondary = "#673AB7";
      return `
        .toggle-gradient-border {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-gradient-border input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-gradient-border .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          border: 2px solid transparent;
          border-radius: ${s.height}px;
          transition: .4s;
          background-clip: padding-box;
        }
        .toggle-gradient-border .slider:before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(90deg, #ddd, #ddd);
          border-radius: ${s.height}px;
          z-index: -1;
          transition: .4s;
        }
        .toggle-gradient-border .slider:after {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: white;
          border-radius: 50%;
          transition: .4s;
          z-index: 1;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .toggle-gradient-border input:checked + .slider:before {
          background: linear-gradient(90deg, ${primary}, ${secondary});
        }
        .toggle-gradient-border input:checked + .slider:after {
          transform: translateX(${s.offset}px);
        }
      `;
    },
    html: `<label class="toggle-gradient-border"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-24",
    name: "Vintage Radio",
    category: "Retro",
    getCss: (primary = "#795548", size = "medium") => {
      const sizes = {
        small: { width: 62, height: 28, slider: 20, offset: 34 },
        medium: { width: 72, height: 34, slider: 26, offset: 38 },
        large: { width: 82, height: 40, slider: 32, offset: 42 }
      };
      const s = sizes[size];
      return `
        .toggle-vintage {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-vintage input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-vintage .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #8B4513;
          border-radius: ${s.height}px;
          border: 3px solid #A0522D;
          box-shadow: 
            inset 0 0 10px rgba(0,0,0,0.5),
            0 4px 8px rgba(0,0,0,0.3);
          transition: .4s;
        }
        .toggle-vintage .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: radial-gradient(circle at 30% 30%, #FFD700, #B8860B);
          border-radius: 50%;
          transition: .4s;
          box-shadow: 
            inset 0 -2px 4px rgba(0,0,0,0.3),
            0 2px 4px rgba(0,0,0,0.5);
        }
        .toggle-vintage input:checked + .slider {
          background-color: ${primary};
          border-color: ${darkenColor(primary, 30)};
        }
        .toggle-vintage input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background: radial-gradient(circle at 30% 30%, ${primary}, ${darkenColor(primary, 40)});
        }
      `;
    },
    html: `<label class="toggle-vintage"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-25",
    name: "Liquid Fill",
    category: "Animated",
    getCss: (primary = "#00BCD4", size = "medium") => {
      const sizes = {
        small: { width: 54, height: 26, slider: 22, offset: 26 },
        medium: { width: 64, height: 32, slider: 26, offset: 30 },
        large: { width: 74, height: 38, slider: 32, offset: 34 }
      };
      const s = sizes[size];
      return `
        .toggle-liquid {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-liquid input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-liquid .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e0e0e0;
          border-radius: ${s.height}px;
          overflow: hidden;
          transition: .4s;
        }
        .toggle-liquid .slider:before {
          position: absolute;
          content: "";
          height: 100%;
          width: ${s.slider}px;
          left: -100%;
          bottom: 0;
          background-color: ${primary};
          border-radius: ${s.height}px;
          transition: .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 1;
        }
        .toggle-liquid .slider:after {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .toggle-liquid input:checked + .slider:before {
          left: 0;
          width: 100%;
        }
        .toggle-liquid input:checked + .slider:after {
          transform: translateX(${s.offset}px);
        }
      `;
    },
    html: `<label class="toggle-liquid"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-26",
    name: "Futuristic",
    category: "Modern",
    getCss: (primary = "#00E5FF", size = "medium") => {
      const sizes = {
        small: { width: 60, height: 24, slider: 16, offset: 36 },
        medium: { width: 70, height: 30, slider: 20, offset: 42 },
        large: { width: 80, height: 36, slider: 26, offset: 46 }
      };
      const s = sizes[size];
      return `
        .toggle-futuristic {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-futuristic input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-futuristic .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #1a1a2e;
          border-radius: ${s.height / 2}px;
          border: 1px solid #444;
          transition: .4s;
        }
        .toggle-futuristic .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 2px;
          bottom: 2px;
          background-color: #0f3460;
          border-radius: 50%;
          transition: .4s;
          border: 2px solid ${primary};
          box-shadow: 0 0 10px ${primary}80;
        }
        .toggle-futuristic input:checked + .slider {
          background-color: #16213e;
          border-color: ${primary};
          box-shadow: 0 0 15px ${primary}80;
        }
        .toggle-futuristic input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background-color: ${primary};
          border-color: white;
          box-shadow: 0 0 15px ${primary};
        }
      `;
    },
    html: `<label class="toggle-futuristic"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-27",
    name: "Paper Cut",
    category: "Minimal",
    getCss: (primary = "#4CAF50", size = "medium") => {
      const sizes = {
        small: { width: 50, height: 22, slider: 16, offset: 28 },
        medium: { width: 58, height: 26, slider: 20, offset: 32 },
        large: { width: 66, height: 30, slider: 24, offset: 36 }
      };
      const s = sizes[size];
      return `
        .toggle-paper {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-paper input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-paper .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #f5f5f5;
          border-radius: 4px;
          border: 1px solid #ddd;
          transition: .3s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .toggle-paper .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          border-radius: 3px;
          transition: .3s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border: 1px solid #eee;
        }
        .toggle-paper input:checked + .slider {
          background-color: ${primary}15;
          border-color: ${primary};
        }
        .toggle-paper input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background-color: ${primary};
          border-color: ${darkenColor(primary, 10)};
        }
      `;
    },
    html: `<label class="toggle-paper"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-28",
    name: "Bubble Float",
    category: "Animated",
    getCss: (primary = "#FF4081", size = "medium") => {
      const sizes = {
        small: { width: 56, height: 30, slider: 24, offset: 26 },
        medium: { width: 66, height: 36, slider: 28, offset: 30 },
        large: { width: 76, height: 42, slider: 34, offset: 34 }
      };
      const s = sizes[size];
      return `
        .toggle-bubble {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-bubble input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-bubble .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e0e0e0;
          border-radius: ${s.height}px;
          transition: .4s;
          overflow: hidden;
        }
        .toggle-bubble .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          border-radius: 50%;
          transition: .6s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 2px 10px rgba(0,0,0,0.2),
            inset 0 -2px 4px rgba(0,0,0,0.1);
          z-index: 2;
        }
        .toggle-bubble .slider:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${primary};
          border-radius: ${s.height}px;
          transform: scale(0);
          transition: .6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .toggle-bubble input:checked + .slider:after {
          transform: scale(1);
        }
        .toggle-bubble input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          box-shadow: 
            0 4px 15px rgba(0,0,0,0.3),
            inset 0 -2px 4px rgba(0,0,0,0.1);
        }
      `;
    },
    html: `<label class="toggle-bubble"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-29",
    name: "Metal Chrome",
    category: "Retro",
    getCss: (primary = "#607D8B", size = "medium") => {
      const sizes = {
        small: { width: 62, height: 30, slider: 24, offset: 32 },
        medium: { width: 72, height: 36, slider: 28, offset: 36 },
        large: { width: 82, height: 42, slider: 34, offset: 40 }
      };
      const s = sizes[size];
      return `
        .toggle-metal {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-metal input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-metal .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(145deg, #b0b0b0, #d0d0d0);
          border-radius: ${s.height}px;
          border: 2px solid #999;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.5),
            inset 0 -2px 4px rgba(0,0,0,0.2),
            0 4px 8px rgba(0,0,0,0.2);
          transition: .4s;
        }
        .toggle-metal .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: linear-gradient(145deg, #e0e0e0, #c0c0c0);
          border-radius: 50%;
          border: 2px solid #aaa;
          transition: .4s;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.8),
            inset 0 -2px 4px rgba(0,0,0,0.2),
            0 2px 4px rgba(0,0,0,0.3);
        }
        .toggle-metal input:checked + .slider {
          background: linear-gradient(145deg, ${darkenColor(primary, 30)}, ${primary});
          border-color: ${darkenColor(primary, 40)};
        }
        .toggle-metal input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background: linear-gradient(145deg, ${lightenColor(primary, 40)}, ${primary});
          border-color: ${darkenColor(primary, 20)};
        }
      `;
    },
    html: `<label class="toggle-metal"><input type="checkbox"><span class="slider"></span></label>`
  },
  {
    id: "toggle-30",
    name: "Holographic",
    category: "Modern",
    getCss: (primary = "#9C27B0", size = "medium") => {
      const sizes = {
        small: { width: 58, height: 28, slider: 22, offset: 30 },
        medium: { width: 68, height: 34, slider: 26, offset: 34 },
        large: { width: 78, height: 40, slider: 32, offset: 38 }
      };
      const s = sizes[size];
      return `
        .toggle-holographic {
          width: ${s.width}px;
          height: ${s.height}px;
          position: relative;
          display: inline-block;
        }
        .toggle-holographic input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-holographic .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.1) 0%,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0.1) 100%
          );
          backdrop-filter: blur(10px);
          border-radius: ${s.height}px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
          transition: .4s;
        }
        .toggle-holographic .slider:before {
          position: absolute;
          content: "";
          height: ${s.slider}px;
          width: ${s.slider}px;
          left: 4px;
          bottom: 4px;
          background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
          backdrop-filter: blur(5px);
          border-radius: 50%;
          transition: .4s;
          box-shadow: 
            0 4px 20px rgba(0,0,0,0.2),
            inset 0 1px 2px rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .toggle-holographic input:checked + .slider {
          background: linear-gradient(
            90deg,
            rgba(${hexToRgb(primary)},0.3) 0%,
            rgba(${hexToRgb(primary)},0.6) 50%,
            rgba(${hexToRgb(primary)},0.3) 100%
          );
          border-color: rgba(${hexToRgb(primary)},0.4);
        }
        .toggle-holographic input:checked + .slider:before {
          transform: translateX(${s.offset}px);
          background: linear-gradient(145deg, rgba(255,255,255,1), rgba(255,255,255,0.8));
          box-shadow: 
            0 4px 20px rgba(${hexToRgb(primary)},0.4),
            inset 0 1px 2px rgba(255,255,255,0.8);
        }
      `;
    },
    html: `<label class="toggle-holographic"><input type="checkbox"><span class="slider"></span></label>`
  },
];

// Helper functions for color manipulation
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : "33, 150, 243";
}

function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return "#" + (
    0x1000000 +
    (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)
  ).toString(16).slice(1);
}

function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (
    0x1000000 +
    (R > 255 ? 255 : R) * 0x10000 +
    (G > 255 ? 255 : G) * 0x100 +
    (B > 255 ? 255 : B)
  ).toString(16).slice(1);
}