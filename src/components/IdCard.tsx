import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-yozftvfaza';
import svgPathsHeader from '../imports/svg-5tx85a08ia';

interface UserData {
  photo: string;
  birthDate: string;
  defermentDate: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  category: string;
  updateInfo: string;
}

interface IdCardProps {
  userData: UserData;
  onPlusClick: () => void;
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function IdCard({ userData, onPlusClick, onPhotoChange }: IdCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipKey, setFlipKey] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setFlipKey(prev => prev + 1);
  };

  return (
    <div className="perspective-[1000px] w-[347px] h-[490px] mt-[32px] mr-[0px] mb-[0px] ml-[0px]">
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front side */}
        <motion.div
          className="absolute inset-0 bg-[#d5d3be] border border-[#a4a290] border-solid rounded-[8px] overflow-hidden cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={handleFlip}
        >
          {/* Darken overlay during flip */}
          {flipKey > 0 && (
            <motion.div
              key={`front-${flipKey}`}
              className="absolute inset-0 bg-black pointer-events-none rounded-[8px] z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.6 }}
            />
          )}
          
          {/* Header */}
          <div className="h-[64px] px-[15px] pt-[5px] pb-0 flex items-center justify-between">
            <div className="h-[31.993px] w-[105.85px]">
              <p className="font-['e-Ukraine',sans-serif] font-medium leading-[32px] text-[#2c2c2c] text-[21px] tracking-[-1.5px] whitespace-nowrap">
                Резерв ID
              </p>
            </div>
            <svg className="w-[36px] h-[47px]" fill="none" preserveAspectRatio="none" viewBox="0 0 36 47">
              <path 
                clipRule="evenodd" 
                d={svgPathsHeader.p21d40680} 
                fill="#2A2A2A" 
                fillRule="evenodd" 
                stroke="#2A2A2A" 
                strokeWidth="0.10302" 
              />
            </svg>
          </div>

          {/* Photo and info section */}
          <div className="h-[224px] px-[15.996px] pt-[5px] pb-0 flex gap-[15.996px] items-start">
            {/* Photo */}
            <div className="relative w-[147px] h-[208px]">
              <input
                type="file"
                ref={fileInputRef}
                onChange={onPhotoChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePhotoClick();
                }}
                type="button"
                className="block w-full h-full"
              >
                <div className="bg-gray-200 h-[197px] overflow-hidden rounded-[6px] w-[147px]">
                  <img 
                    src="https://raw.githubusercontent.com/Katywenkatwins/-/main/image%205.png"
                    alt="Фото"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 h-[207.999px] flex flex-col gap-[12px]">
              {/* Birth date */}
              <div className="h-[47.998px] w-[153.171px]">
                <div className="h-[18px] w-[153px]">
                  <p className="font-['e-Ukraine',sans-serif] font-normal leading-[20px] text-[#545244] text-[13px] tracking-[0.1px]">
                    Дата народження:
                  </p>
                </div>
                <div className="h-[23px] w-[85px] pt-[3px]">
                  <p className="font-['e-Ukraine',sans-serif] font-medium leading-[28px] text-[#35312b] text-[16px] tracking-[-0.7px] whitespace-nowrap">
                    {userData.birthDate}
                  </p>
                </div>
              </div>

              {/* Deferment date */}
              <div className="h-[47.998px] w-[153.171px] relative">
                <div className="absolute top-0 left-0 h-[20.003px] w-[153.171px]">
                  <p className="font-['e-Ukraine',sans-serif] font-normal leading-[20px] text-[#545244] text-[13px] tracking-[0.1px]">
                    Відстрочка до:
                  </p>
                </div>
                <div className="absolute top-[20px] left-0 h-[27.996px] w-[153.171px]">
                  <p className="font-['e-Ukraine',sans-serif] font-medium leading-[28px] text-[#2c2c2c] text-[16px] tracking-[-0.7px] whitespace-nowrap">
                    {userData.defermentDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brown info bar */}
          <div className="absolute left-0 top-[295px] w-[347px] h-[21px] bg-[#68491b] overflow-hidden">
            <motion.div
              className="flex absolute top-[calc(50%-7.5px)]"
              animate={{
                x: [0, -300],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <p className="font-['e-Ukraine',sans-serif] font-normal leading-[16px] text-white text-[13px] tracking-[0.1px] whitespace-nowrap pr-[10px]">
                {userData.updateInfo}
              </p>
              <p className="font-['e-Ukraine',sans-serif] font-normal leading-[16px] text-white text-[13px] tracking-[0.1px] whitespace-nowrap pr-[10px]">
                {userData.updateInfo}
              </p>
              <p className="font-['e-Ukraine',sans-serif] font-normal leading-[16px] text-white text-[13px] tracking-[0.1px] whitespace-nowrap pr-[10px]">
                {userData.updateInfo}
              </p>
              <p className="font-['e-Ukraine',sans-serif] font-normal leading-[16px] text-white text-[13px] tracking-[0.1px] whitespace-nowrap pr-[10px]">
                {userData.updateInfo}
              </p>
            </motion.div>
          </div>

          {/* Name section */}
          <div className="absolute left-0 top-[316px] h-[131px] w-[347px]">
            {/* Category */}
            <div className="absolute left-[16px] top-[59px] h-[20.003px] w-[329.159px]">
              <p className="font-['e-Ukraine',sans-serif] font-normal leading-[20px] text-[#545244] text-[14px] tracking-[-0.4px]">
                {userData.category}
              </p>
            </div>

            {/* Name */}
            <div className="absolute left-[15px] top-[86px] h-[75.002px] w-[329.159px]">
              <div className="flex flex-col h-full">
                <div className="h-[25.001px] w-full">
                  <p className="font-['e-Ukraine',sans-serif] font-medium leading-[25px] text-[#2c2c2c] text-[20px] whitespace-nowrap">
                    {userData.lastName}
                  </p>
                </div>
                <div className="h-[25.001px] w-full">
                  <p className="font-['e-Ukraine',sans-serif] font-medium leading-[25px] text-[#2c2c2c] text-[20px] whitespace-nowrap">
                    {userData.firstName}
                  </p>
                </div>
                <div className="h-[25.001px] w-full">
                  <p className="font-['e-Ukraine',sans-serif] font-medium leading-[25px] text-[#2c2c2c] text-[20px] whitespace-nowrap">
                    {userData.patronymic}
                  </p>
                </div>
              </div>
            </div>

            {/* Plus button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlusClick();
              }}
              className="absolute left-[286px] top-[117px] w-[40px] h-[40px] bg-[#fc8a0e] rounded-full flex flex-col items-start pt-[9.231px] pb-0 px-[9.231px]"
            >
              <div className="h-[21.537px] w-full overflow-hidden relative mt-[0px] mr-[0px] mb-[0px] ml-[1px]">
                <div className="absolute h-0 left-[calc(50%-0.5px)] top-[calc(50%+0.23px)] translate-x-[-50%] translate-y-[-50%] w-[15px]">
                  <div className="absolute inset-[-2px_-13.33%] mt-[0px] mr-[0px] mb-[0px] ml-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 4">
                      <path d="M2 2H17" stroke="#242813" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
                <div className="absolute h-[15px] left-[calc(50%-0.77px)] top-[4px] translate-x-[-50%] w-0">
                  <div className="absolute inset-[-13.33%_-2px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 19">
                      <path d="M2 2V17" stroke="#242813" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Back side - QR Code */}
        <motion.div
          className="absolute inset-0 bg-white border border-[#a4a290] border-solid rounded-[8px] overflow-hidden cursor-pointer"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          onClick={handleFlip}
        >
          {/* Darken overlay during flip */}
          {flipKey > 0 && (
            <motion.div
              key={`back-${flipKey}`}
              className="absolute inset-0 bg-black pointer-events-none rounded-[8px] z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.6 }}
            />
          )}
          
          <div className="flex flex-col items-center justify-center h-full px-[30px] py-[40px]">
            <p className="font-['e-Ukraine',sans-serif] font-normal leading-[24px] text-[#2c2c2c] text-[15px] tracking-[-0.2px] mb-[28px] text-center">
              QR-код дійсний до 10 грудня 2026
            </p>
            <div className="w-[340px] h-[340px] bg-white flex items-center justify-center">
              <img
                src="https://raw.githubusercontent.com/Katywenkatwins/Rezerv/main/src/imports/image%206.png"
                alt="QR Code"
                className="w-full h-full object-cover px-[9px] py-[0px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}