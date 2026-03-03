import { Copy } from "lucide-react";
import { useState } from "react";

export default function ImageColorExtract() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [count, setCount] = useState(5);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      extractColors(reader.result, count);
    };
    reader.readAsDataURL(file);
  };

  const extractColors = (src, colorCount) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const pixels = ctx.getImageData(0, 0, img.width, img.height).data;
      const map = {};

      // SAMPLE EVERY 10th PIXEL (IMPORTANT)
      for (let i = 0; i < pixels.length; i += 40) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const key = `${Math.round(r / 10) * 10},${Math.round(
          g / 10
        ) * 10},${Math.round(b / 10) * 10}`;

        map[key] = (map[key] || 0) + 1;
      }

      const sorted = Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .slice(0, colorCount)
        .map(([rgb]) => {
          const [r, g, b] = rgb.split(",").map(Number);
          return {
            rgb: `rgb(${r}, ${g}, ${b})`,
            hex: `#${((1 << 24) + (r << 16) + (g << 8) + b)
              .toString(16)
              .slice(1)}`
          };
        });

      setColors(sorted);
    };
  };

  const copyAll = () => {
    const text = colors.map((c) => c.hex).join(", ");
    navigator.clipboard.writeText(text);
    alert("Colors copied to clipboard!");
  };

  return (
    <div className="max-w-5xl mx-auto pt-4">
      {/* Upload Box */}
      <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 cursor-pointer bg-white transition">
        <input type="file" className="hidden" onChange={handleImage} />
        <p className="text-gray-600">
          Drag your image here or <span className="text-blue-600">browse</span>
        </p>
      </label>

      {image && (
        <img
          src={image}
          className="mx-auto mt-6 rounded-xl shadow-lg max-w-xs"
        />
      )}

      {/* Controls */}
      <div className="flex justify-between items-center mt-8">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-500">
            Color Count
          </label>
          <select
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
              extractColors(image, e.target.value);
            }}
            className="px-6 py-3 rounded-lg border text-gray-600 border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} Colors
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={copyAll}
          className="flex justify-between items-center gap-1 bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
            <Copy className="h-4 w-4"/>
          Copy All
        </button>
      </div>

      {/* Color Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-8">
        {colors.map((c, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-3 text-center">
            <div
              className="h-16 rounded mb-2"
              style={{ background: c.hex }}
            />
            <p className="font-semibold">{c.hex}</p>
            <p className="text-xs text-gray-500">{c.rgb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
