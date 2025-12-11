# 🔧 Чому manifest не знаходився - ПОЯСНЕННЯ

## ❌ **Проблема:**

Vite копіює файли з `public/` в `dist/` **БЕЗ** додавання base path.

### Що відбувається:

```
📁 Структура після build:

dist/
├── index.html                    ← Тут є <link rel="manifest" href="???">
├── manifest.json                 ← Файл тут
├── favicon.svg
├── icon-placeholder.svg
└── assets/
    ├── App-abc123.js
    └── index-xyz789.css
```

### Коли файли деплояться на GitHub Pages:

```
katywenkatwins.github.io/Rezervplus/
├── index.html
├── manifest.json                 ← Файл ТУТ!
├── favicon.svg
└── assets/...
```

**URL файлу:** `https://katywenkatwins.github.io/Rezervplus/manifest.json`

---

## ✅ **Рішення:**

### В `index.html` треба використати ПОВНИЙ шлях з base:

```html
<!-- ❌ НЕ ПРАЦЮЄ (шукає на кореневому рівні домену): -->
<link rel="manifest" href="/manifest.json">
<!-- Шукає: katywenkatwins.github.io/manifest.json -->

<!-- ✅ ПРАЦЮЄ (шукає в підпапці): -->
<link rel="manifest" href="/Rezervplus/manifest.json">
<!-- Шукає: katywenkatwins.github.io/Rezervplus/manifest.json -->
```

---

## 📁 **Структура файлів:**

### В Figma Make проекті:
```
/
├── index.html              ← Має шляхи з /Rezervplus/
├── vite.config.ts          ← base: '/Rezervplus/'
├── public/
│   ├── manifest.json       ← Відносні шляхи всередині
│   ├── service-worker.js   ← BASE_PATH = '/Rezervplus'
│   ├── favicon.svg
│   └── icon-*.png
└── src/
    ├── App.tsx
    └── main.tsx
```

### Після build (в dist/):
```
dist/
├── index.html              ← Містить /Rezervplus/manifest.json
├── manifest.json           ← Скопійовано з public/
├── service-worker.js       ← Скопійовано з public/
├── favicon.svg             ← Скопійовано з public/
├── icon-*.png              ← Скопійовано з public/
└── assets/
    ├── App-abc123.js
    └── index-xyz789.css
```

### На GitHub Pages (katywenkatwins.github.io/Rezervplus/):
```
Rezervplus/
├── index.html              ← Шукає /Rezervplus/manifest.json ✅
├── manifest.json           ← Знаходиться тут ✅
├── service-worker.js
├── favicon.svg
└── assets/...
```

---

## 🎯 **Важливі правила:**

### 1. **В `index.html`** (корінь проекту):
- Використовувати ПОВНІ шляхи з `/Rezervplus/`
- Файли з `public/` копіюються в `dist/` як є

```html
<link rel="manifest" href="/Rezervplus/manifest.json">
<link rel="icon" href="/Rezervplus/favicon.svg">
<script>
  navigator.serviceWorker.register('/Rezervplus/service-worker.js');
</script>
```

### 2. **В `manifest.json`** (public/):
- Використовувати ВІДНОСНІ шляхи (без слешів на початку)
- Або ПОВНІ шляхи з `/Rezervplus/`

```json
{
  "icons": [
    {
      "src": "icon-192x192.png",           // ✅ Відносний
      "src": "/Rezervplus/icon-192x192.png" // ✅ Повний
    }
  ]
}
```

### 3. **В `vite.config.ts`**:
```typescript
export default defineConfig({
  base: '/Rezervplus/',     // ✅ Base path для GitHub Pages
  publicDir: 'public',      // ✅ Звідки копіювати статичні файли
  build: {
    outDir: 'dist',         // ✅ Куди білдити
  },
});
```

---

## 🔍 **Як перевірити що все працює:**

### 1. Локально (перед пушем):
```bash
npm run build
cd dist
python -m http.server 8000
# Відкрити http://localhost:8000/Rezervplus/
```

### 2. На GitHub Pages:
1. Відкрити https://katywenkatwins.github.io/Rezervplus/
2. F12 → Application → Manifest
3. Має з'явитися manifest без помилок ✅

### 3. Перевірити файли:
```
Відкрити в новій вкладці:
- https://katywenkatwins.github.io/Rezervplus/manifest.json
- https://katywenkatwins.github.io/Rezervplus/favicon.svg
- https://katywenkatwins.github.io/Rezervplus/icon-192x192.png

Якщо файли відкриваються - все ОК! ✅
```

---

## 🚨 **Типові помилки:**

### ❌ Manifest not found
**Причина:** Неправильний шлях в `index.html`
**Рішення:** Використати `/Rezervplus/manifest.json`

### ❌ Icon not loaded
**Причина:** Неправильні шляхи в `manifest.json`
**Рішення:** Використати відносні шляхи або `/Rezervplus/icon.png`

### ❌ Service Worker failed to register
**Причина:** Неправильний шлях в скрипті реєстрації
**Рішення:** Використати `/Rezervplus/service-worker.js`

---

## ✅ **Після виправлення:**

Тепер всі шляхи правильні:
- ✅ `index.html` → `/Rezervplus/manifest.json`
- ✅ `manifest.json` → відносні шляхи до іконок
- ✅ `service-worker.js` → `BASE_PATH = '/Rezervplus'`

**Manifest має знайтися після перебілду на GitHub! 🎉**
