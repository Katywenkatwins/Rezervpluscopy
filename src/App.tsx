import { useState } from 'react';
import { IdCardPage } from './components/IdCardPage';
import { MenuPage } from './components/MenuPage';
import { VacanciesPage } from './components/VacanciesPage';
import svgPaths from './imports/svg-yozftvfaza';
import vacanciesIconPaths from './imports/svg-w4ibpsqtn2';

export default function App() {
  const [activeTab, setActiveTab] = useState<'id' | 'vacancies' | 'menu'>('id');

  return (
    <div className="relative w-full h-screen bg-[#e0dfcb] overflow-hidden mx-auto flex flex-col">
      {/* Main content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar">
        {activeTab === 'id' && <IdCardPage />}
        {activeTab === 'vacancies' && <VacanciesPage />}
        {activeTab === 'menu' && <MenuPage />}
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-[80.573px] bg-white border-t border-[#cdcac5] mx-auto max-w-full">
        <div className="h-[67.972px] w-full flex items-center justify-between px-[19.859px] -mt-[9.4px]">
          {/* Резерв ID button */}
          <button
            onClick={() => setActiveTab('id')}
            className="h-[59.979px] w-[100.909px] flex flex-col items-center gap-[3.997px] py-[7.993px] text-black"
          >
            <div className="w-[29px] h-[29px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
                <g>
                  <path d={svgPaths.p9060a00} fill="currentColor" />
                  <path d={svgPaths.p7a4ea80} fill="currentColor" />
                  <path d={svgPaths.pc407120} stroke="currentColor" strokeLinecap="round" strokeWidth="1.99993" />
                </g>
              </svg>
            </div>
            <div className="h-[15.996px] w-[52.911px]">
              <p className="font-['e-Ukraine',sans-serif] font-medium leading-[16px] text-[11px] tracking-[-0.3px] whitespace-nowrap text-center">
                Резерв ID
              </p>
            </div>
          </button>

          {/* Вакансії button */}
          <button
            onClick={() => setActiveTab('vacancies')}
            className="h-[59.979px] w-[91.323px] flex flex-col items-center gap-[3.997px] py-[7.993px] text-black"
          >
            <div className="w-[22px] h-[28px] rounded-[4px] border-2 border-black mt-[4px] mr-[0px] mb-[0px] ml-[0px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
                <path d={vacanciesIconPaths.p27ef9800} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
              </svg>
            </div>
            <div className="h-[15.996px] w-[43.324px]">
              <p className="font-['e-Ukraine',sans-serif] font-medium leading-[16px] text-[11px] tracking-[-0.2px] whitespace-nowrap text-center">
                Вакансії
              </p>
            </div>
          </button>

          {/* Меню button */}
          <button
            onClick={() => setActiveTab('menu')}
            className="h-[59.979px] w-[81.727px] flex flex-col items-center gap-[3.997px] py-[7.993px] text-black"
          >
            <div className="w-[24px] h-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d="M4.5882 14.7626H21.5882" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.99993" />
                <path d="M4.5882 21.7626H21.5882" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.99993" />
                <path d="M4.5882 8.76263H21.5882" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.99993" />
              </svg>
            </div>
            <div className="h-[15.996px] w-[33.729px]">
              <p className="font-['e-Ukraine',sans-serif] font-medium leading-[16px] text-[11px] tracking-[-0.7px] whitespace-nowrap text-center mt-[4px] mr-[0px] mb-[0px] ml-[0px]">
                Меню
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}