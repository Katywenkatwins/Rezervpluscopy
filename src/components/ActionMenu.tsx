import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-rbju89jxrx';

interface ActionMenuProps {
  onClose: () => void;
}

export function ActionMenu({ onClose }: ActionMenuProps) {
  const menuItems = [
    {
      text: 'Переглянути документ',
      icon: (
        <div className="relative shrink-0 size-[19.8px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p36359d90} stroke="#2A2A2A" strokeWidth="1.8" />
            <circle cx="11.2534" cy="4.35002" fill="#2A2A2A" r="1.05" />
          </svg>
        </div>
      )
    },
    {
      text: 'Завантажити PDF',
      icon: (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.pb47f400} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d={svgPaths.p1ff75610} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
          </svg>
        </div>
      )
    },
    {
      text: 'Оновити документ',
      icon: (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p223b2500} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d={svgPaths.p306c3080} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d={svgPaths.p1f59c00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d={svgPaths.p2cf90980} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
          </svg>
        </div>
      )
    },
    {
      text: 'Розширені дані з реєстру',
      icon: (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2eb73e80} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d="M7.99973 11.9996H15.9997" stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d="M11.9996 7.99973V15.9997" stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
          </svg>
        </div>
      )
    },
    {
      text: 'Подати запит на відстрочку',
      icon: (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <defs>
              <clipPath id="clip0_11_85">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip0_11_85)">
              <path d={svgPaths.p1ff75610} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
              <path d={svgPaths.p3bed78c0} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
              <path d={svgPaths.p33e6ec00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
              <path d="M6 2H15L20 7V10.7524" stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
              <path d="M20.0045 14.7524V21.7524" stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
              <path d="M16.5045 18.2524H23.0045" stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            </g>
          </svg>
        </div>
      )
    },
    {
      text: 'Направлення на ВЛК',
      icon: (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p1a408580} stroke="#2A2A2A" strokeWidth="2.016" />
          </svg>
        </div>
      )
    },
    {
      text: 'Уточнити контактні дані',
      icon: (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p12392f00} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
            <path d={svgPaths.p20d7faf0} stroke="#2C2C2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
          </svg>
        </div>
      )
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-end"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-[393px] mx-auto bg-white rounded-t-3xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Handle */}
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

          {/* Menu items */}
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left"
                onClick={() => {
                  console.log(`Clicked: ${item.text}`);
                  onClose();
                }}
              >
                {item.icon}
                <span className="flex-1 text-[#2c2c2c] font-['e-Ukraine',sans-serif]">{item.text}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
