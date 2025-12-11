# ⚡ ШВИДКЕ ВИПРАВЛЕННЯ - 5 хвилин

## 🎯 Якщо Figma вже запушила проект

Виконайте ЦІ 3 КРОКИ на GitHub:

---

### **Крок 1: Створити `.github/workflows/deploy.yml`**

1. Перейдіть на https://github.com/Katywenkatwins/Rezervplus
2. Натисніть **"Add file"** → **"Create new file"**
3. В полі імені напишіть: `.github/workflows/deploy.yml`
4. Вставте цей код:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

5. **Commit new file**

---

### **Крок 2: Виправити `vite.config.ts`**

1. Відкрийте файл `vite.config.ts` на GitHub
2. Натисніть **олівець** (Edit)
3. Знайдіть рядок з `build:` і змініть на:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Rezervplus/',
  build: {
    outDir: 'dist',
  },
});
```

4. **Commit changes**

---

### **Крок 3: Налаштувати GitHub Pages**

1. **Settings** → **Pages**
2. **Source:** виберіть **"GitHub Actions"**
3. Збережіть

---

### **Крок 4: Запустити деплой**

1. **Actions** → **"Deploy to GitHub Pages"**
2. **"Run workflow"** → **"Run workflow"**
3. Зачекайте 2-3 хвилини
4. Відкрийте: https://katywenkatwins.github.io/Rezervplus/

---

## ✅ ГОТОВО!

Тепер при кожному пуші через Figma Make - сайт автоматично оновлюється!
