import { useState } from 'react';

export function VacanciesPage() {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  return (
    <div className="w-full min-h-full px-[29px] pt-[20px] pb-[100px] flex flex-col">
      {/* Header with title and help icon */}
      <div className="flex items-start justify-between mb-[38px]">
        <h1 className="font-['e-Ukraine',sans-serif] font-medium text-[#2c2c2c] text-[32px] leading-[36px] tracking-[-0.5px]">
          Вакансії
        </h1>
        <button className="w-[28px] h-[28px] rounded-full border-2 border-[#2c2c2c] flex items-center justify-center">
          <span className="font-['e-Ukraine',sans-serif] font-medium text-[#2c2c2c] text-[18px]">?</span>
        </button>
      </div>

      {/* Description text */}
      <div className="mb-[24px]">
        <p className="font-['e-Ukraine',sans-serif] font-normal text-[#2c2c2c] text-[16px] leading-[24px] tracking-[-0.2px] mb-[24px]">
          Тут знаходяться актуальні посади для служби в українському війську, надані у співпраці з платформою Lobby X.
        </p>
        <p className="font-['e-Ukraine',sans-serif] font-normal text-[#2c2c2c] text-[16px] leading-[24px] tracking-[-0.2px]">
          Це найбільший пеелік пропозицій, який допоможе знайти ту, що підходить саме вам. Обирайте варіанти, подавайте заявки у кілька кліків і очікуйте відповіді від бригади.
        </p>
      </div>

      {/* Spacer to push bottom content down */}
      <div className="flex-1"></div>

      {/* Checkbox */}
      <button
        onClick={() => setDontShowAgain(!dontShowAgain)}
        className="flex items-center gap-[12px] mb-[24px]"
      >
        <div className={`w-[24px] h-[24px] rounded border-2 ${dontShowAgain ? 'border-[#2c2c2c] bg-[#2c2c2c]' : 'border-[#2c2c2c] bg-transparent'} flex items-center justify-center`}>
          {dontShowAgain && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5L5 9L13 1" stroke="#e0dfcb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="font-['e-Ukraine',sans-serif] font-normal text-[#2c2c2c] text-[15px] leading-[20px] tracking-[-0.2px]">
          Більше не показувати
        </span>
      </button>

      {/* Start button */}
      <button className="w-full h-[64px] bg-[#fc8a0e] rounded-[32px] flex items-center justify-center">
        <span className="font-['e-Ukraine',sans-serif] font-medium text-[#242813] text-[18px] leading-[24px] tracking-[-0.3px]">
          Почати
        </span>
      </button>
    </div>
  );
}