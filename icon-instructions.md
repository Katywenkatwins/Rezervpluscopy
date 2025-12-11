# Інструкції для створення іконок PWA

Для коректної роботи PWA на iOS та Android, вам потрібно створити іконки наступних розмірів з оригінального зображення `apple-touch-icon-57x57.png`:

## Необхідні іконки:

### iOS іконки (Apple Touch Icons):
- `icon-57x57.png` - iPhone (iOS 6 та старіші)
- `icon-72x72.png` - iPad (iOS 6 та старіші)
- `icon-114x114.png` - iPhone Retina (iOS 6 та старіші)
- `icon-120x120.png` - iPhone (iOS 7-14)
- `icon-144x144.png` - iPad Retina (iOS 6 та старіші)
- `icon-152x152.png` - iPad Retina (iOS 7-14)
- `icon-180x180.png` - iPhone (iOS 8+)

### Android/PWA іконки:
- `icon-192x192.png` - Android Chrome
- `icon-512x512.png` - Android Chrome, splash screen

### iOS Splash Screens (опціонально, але рекомендовано):
- `splash-640x1136.png` - iPhone SE, 5s
- `splash-750x1334.png` - iPhone 8, 7, 6s
- `splash-828x1792.png` - iPhone 11, XR
- `splash-1125x2436.png` - iPhone X, XS, 11 Pro
- `splash-1170x2532.png` - iPhone 12, 12 Pro, 13, 13 Pro, 14
- `splash-1179x2556.png` - iPhone 14 Pro
- `splash-1242x2688.png` - iPhone XS Max, 11 Pro Max
- `splash-1284x2778.png` - iPhone 12 Pro Max, 13 Pro Max, 14 Plus
- `splash-1290x2796.png` - iPhone 14 Pro Max

## Як створити іконки:

### Варіант 1: Онлайн інструменти
1. Використайте https://www.pwabuilder.com/imageGenerator
2. Завантажте ваше оригінальне зображення (рекомендований розмір: 512x512px або більше)
3. Завантажте згенеровані іконки
4. Помістіть їх у папку `/public`

### Варіант 2: Використання ImageMagick (командний рядок)
```bash
# Встановіть ImageMagick
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Створіть іконки з оригінального зображення
convert original.png -resize 57x57 icon-57x57.png
convert original.png -resize 72x72 icon-72x72.png
convert original.png -resize 114x114 icon-114x114.png
convert original.png -resize 120x120 icon-120x120.png
convert original.png -resize 144x144 icon-144x144.png
convert original.png -resize 152x152 icon-152x152.png
convert original.png -resize 180x180 icon-180x180.png
convert original.png -resize 192x192 icon-192x192.png
convert original.png -resize 512x512 icon-512x512.png
```

### Варіант 3: Photoshop/Figma
1. Відкрийте оригінальне зображення
2. Експортуйте кожен розмір окремо
3. Збережіть з відповідними назвами у папку `/public`

## Splash Screens:
Splash screens повинні мати фон `#e0dfcb` з центрованою іконкою вашого додатку.

## Розміщення файлів:
Всі іконки та splash screens повинні бути розміщені у папці `/public` вашого проєкту.

## Перевірка:
Після створення всіх іконок, перевірте файл `/index.html` - всі посилання повинні вказувати на існуючі файли.
