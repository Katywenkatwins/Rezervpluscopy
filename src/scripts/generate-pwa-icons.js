// This script generates PWA icons for the Rezerv ID app
// Run this in a browser console on the generate-icons.html page

const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [
  { name: 'icon-152x152.png', size: 152 },
  { name: 'icon-180x180.png', size: 180 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 }
];

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#e0dfcb';
  ctx.fillRect(0, 0, size, size);

  // Dark border
  ctx.strokeStyle = '#68491b';
  ctx.lineWidth = size * 0.05;
  ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, size - ctx.lineWidth, size - ctx.lineWidth);

  // Inner rectangle
  const padding = size * 0.15;
  ctx.fillStyle = '#d5d3be';
  ctx.fillRect(padding, padding, size - padding * 2, size - padding * 2);

  // Inner rectangle border
  ctx.strokeStyle = '#a4a290';
  ctx.lineWidth = size * 0.02;
  ctx.strokeRect(padding, padding, size - padding * 2, size - padding * 2);

  // Text "R"
  ctx.fillStyle = '#68491b';
  ctx.font = `bold ${size * 0.5}px system-ui`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('R', size / 2, size / 2);

  return canvas;
}

sizes.forEach(({ name, size }) => {
  const canvas = createIcon(size);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/${name}`, buffer);
  console.log(`Generated ${name}`);
});

console.log('All icons generated successfully!');
