#!/usr/bin/env node

/**
 * Генератор PWA іконок
 * Створює базові іконки якщо вони не існують
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const iconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#e0dfcb"/>
  <rect x="10" y="10" width="492" height="492" stroke="#68491b" stroke-width="20" fill="none"/>
  <rect x="80" y="80" width="352" height="352" fill="#d5d3be" stroke="#a4a290" stroke-width="8"/>
  <text x="256" y="300" font-family="system-ui" font-size="240" font-weight="bold" fill="#68491b" text-anchor="middle">R</text>
</svg>`;

// Перевірка чи існують іконки
const requiredIcons = [
  'icon-128x128.png',
  'icon-152x152.png',
  'icon-180x180.png',
  'icon-192x192.png',
  'icon-512x512.png'
];

let missingIcons = [];
requiredIcons.forEach(icon => {
  const iconPath = path.join(PUBLIC_DIR, icon);
  if (!fs.existsSync(iconPath)) {
    missingIcons.push(icon);
  }
});

if (missingIcons.length > 0) {
  console.log('\n⚠️  УВАГА: Відсутні іконки PWA!');
  console.log('❌ Не знайдено:', missingIcons.join(', '));
  console.log('\n📝 Інструкції:');
  console.log('1. Відкрийте /public/generate-icons.html в браузері');
  console.log('2. Завантажте всі іконки');
  console.log('3. Помістіть файли в папку /public');
  console.log('\nАбо використайте: https://www.pwabuilder.com/imageGenerator\n');
  
  // Створюємо SVG placeholder якщо не існує
  const placeholderPath = path.join(PUBLIC_DIR, 'icon-placeholder.svg');
  if (!fs.existsSync(placeholderPath)) {
    fs.writeFileSync(placeholderPath, iconSvg);
    console.log('✅ Створено SVG placeholder: icon-placeholder.svg\n');
  }
} else {
  console.log('✅ Всі PWA іконки знайдені!\n');
}
