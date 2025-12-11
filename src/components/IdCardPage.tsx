import { useState } from 'react';
import { IdCard } from './IdCard';
import { ActionMenu } from './ActionMenu';
import svgPaths from '../imports/svg-yozftvfaza';

export function IdCardPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [userData, setUserData] = useState({
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    birthDate: '15.12.1988',
    defermentDate: '02.02.2026',
    lastName: 'ЯЦКОВЕЦЬ',
    firstName: 'АНДРІЙ',
    patronymic: 'Петрович',
    category: 'Військовозобов\'язаний',
    updateInfo: 'Документ оновлено о 20:24 | 08.12.2025 • '
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserData({ ...userData, photo: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full min-h-full relative pb-[100px] pt-[10px] px-[23px]">
      {/* Notification button */}
      <div className="absolute right-[22px] top-[10px] w-[130px] h-[30px] bg-[#fbfdfc] rounded-full px-[9.5px] pt-[0.5px] pb-0 flex items-center gap-[2px]">
        <div className="h-[22px] w-[89px]">
          <p className="font-['Mulish',sans-serif] font-bold leading-[24px] text-[14px] text-black whitespace-nowrap mt-[-2px] mr-[0px] mb-[0px] ml-[0px]">
            Сповіщення
          </p>
        </div>
        <div className="w-[18px] h-[18px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p12d98800} fill="black" />
          </svg>
        </div>
      </div>

      {/* ID Card */}
      <div className="mt-[50px] w-full max-w-[347px] mx-auto">
        <IdCard 
          userData={userData}
          onPlusClick={() => setShowMenu(true)}
          onPhotoChange={handlePhotoChange}
        />
      </div>

      {/* Action Menu */}
      {showMenu && (
        <ActionMenu onClose={() => setShowMenu(false)} />
      )}
    </div>
  );
}