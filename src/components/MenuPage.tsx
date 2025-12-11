import { ChevronRight, AlertCircle, Euro, Smartphone, Settings, HelpCircle, Headphones, Copy, ScanLine } from 'lucide-react';

export function MenuPage() {
  const menuSections = [
    {
      items: [
        { icon: AlertCircle, text: 'Виправити дані онлайн', hasArrow: true },
        { icon: Euro, text: 'Штрафи', hasArrow: true },
      ]
    },
    {
      items: [
        { icon: Smartphone, text: 'Активні сесії', hasArrow: true },
        { icon: Settings, text: 'Налаштування', hasArrow: true },
      ]
    },
    {
      items: [
        { icon: HelpCircle, text: 'Питання та відповіді', hasArrow: true },
        { icon: Headphones, text: 'Служба підтримки', hasArrow: true },
        { icon: Copy, text: 'Копіювати номер пристрою', hasArrow: false },
      ]
    },
    {
      items: [
        { icon: ScanLine, text: 'Сканувати документ', hasArrow: false },
      ]
    }
  ];

  return (
    <div className="w-full min-h-full px-6 pt-6 pb-[100px]">
      <div className="mb-6">
        <h1 className="font-['e-Ukraine',sans-serif] font-medium text-[32px] text-[#2c2c2c] mb-1">
          Меню
        </h1>
        <p className="text-sm text-gray-500 font-['e-Ukraine',sans-serif]">
          Версія 1.8.1
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {section.items.map((item, itemIndex) => (
              <button
                key={itemIndex}
                className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left ${
                  itemIndex !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                }`}
                onClick={() => console.log(`Clicked: ${item.text}`)}
              >
                <item.icon size={24} className="text-[#2c2c2c]" />
                <span className="flex-1 text-[#2c2c2c] font-['e-Ukraine',sans-serif]">
                  {item.text}
                </span>
                {item.hasArrow && <ChevronRight size={20} className="text-gray-400" />}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Logout button */}
      <button className="w-full max-w-xs mx-auto block bg-[#2c2c2c] text-white py-4 rounded-full mb-4 font-['e-Ukraine',sans-serif]">
        Вийти
      </button>

      {/* Privacy notice */}
      <p className="text-center text-sm text-gray-600 px-4 underline font-['e-Ukraine',sans-serif]">
        Повідомлення про обробку<br />персональних даних
      </p>
    </div>
  );
}