import svgPaths from "./svg-yozftvfaza";
import imgImage4 from "figma:asset/3037c779a72c805abee5233a1c6579a78417599e.png";

function Text() {
  return (
    <div className="h-[22px] relative shrink-0 w-[89px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[22px] relative w-[89px]">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24px] left-px text-[14px] text-black text-nowrap top-[-1.99px] whitespace-pre">Сповіщення</p>
      </div>
    </div>
  );
}

function PhBellSimpleFill() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ph:bell-simple-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ph:bell-simple-fill">
          <path d={svgPaths.p12d98800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#fbfdfc] content-stretch flex gap-[2px] h-[30px] items-center left-[241px] pb-0 pl-[9.5px] pr-0 pt-[0.5px] rounded-[2.04841e+07px] top-[70px] w-[130px]" data-name="Button">
      <Text />
      <PhBellSimpleFill />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.993px] relative shrink-0 w-[105.85px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[31.993px] items-start relative w-[105.85px]">
        <p className="font-['e-Ukraine:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#2c2c2c] text-[21px] text-nowrap tracking-[-1.5px] whitespace-pre">Резерв ID</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[47px] relative shrink-0 w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 47">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p29491e80} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector 1" stroke="var(--stroke-0, #2A2A2A)" strokeWidth="0.10302" />
        </g>
      </svg>
    </div>
  );
}

function IdCard() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-[-1px] pb-0 pt-[5px] px-[15px] top-[-1px] w-[347px]" data-name="IdCard">
      <Heading />
      <Icon />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="bg-gray-200 h-[197px] overflow-clip relative rounded-[6px] shrink-0 w-[147px]" data-name="ImageWithFallback">
      <div className="absolute h-[887.04px] left-[calc(50%+88px)] top-[calc(50%+17.5px)] translate-x-[-50%] translate-y-[-50%] w-[409.86px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[208px] relative shrink-0 w-[147px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[208px] items-start relative w-[147px]">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[18px] relative shrink-0 w-[153px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[18px] relative w-[153px]">
        <p className="absolute font-['e-Ukraine:Regular',sans-serif] leading-[20px] left-[-0.01px] not-italic text-[#545244] text-[13px] top-[-2px] tracking-[0.1px] w-[153.171px]">Дата народження:</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[23px] relative shrink-0 w-[85px]">
      <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[28px] left-[-1.01px] not-italic text-[#35312b] text-[16px] text-nowrap top-[-2.17px] tracking-[-0.7px] whitespace-pre">15.12.1988</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[3px] px-0 relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[47.998px] relative shrink-0 w-[153.171px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[47.998px] items-start relative w-[153.171px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[153.171px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[153.171px]">
        <p className="absolute font-['e-Ukraine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#545244] text-[13px] top-[-5px] tracking-[0.1px] w-[153.171px]">Відстрочка до:</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[20.003px] items-start left-0 top-0 w-[153.171px]" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[28px] left-0 top-[-1.17px] w-[89px]">
      <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[28px] left-[-1px] not-italic text-[#2c2c2c] text-[16px] text-nowrap top-[-2px] tracking-[-0.7px] whitespace-pre">02.02.2026</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[27.996px] left-0 top-[20px] w-[153.171px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[47.998px] relative shrink-0 w-[153.171px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[47.998px] relative w-[153.171px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[207.999px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[207.999px] items-start relative w-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function IdCard1() {
  return (
    <div className="absolute content-stretch flex gap-[15.996px] h-[224px] items-start left-[-1px] pb-0 pt-[5px] px-[15.996px] top-[63px] w-[347px]" data-name="IdCard">
      <Button1 />
      <Container6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[329.159px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[329.159px]">
        <p className="absolute font-['e-Ukraine:Regular',sans-serif] leading-[20px] left-[-1px] not-italic text-[#545244] text-[14px] top-[-1px] tracking-[-0.4px] w-[329.159px]">{`Військовозобов'язаний`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[20.003px] items-start left-[16px] top-[59px] w-[329.159px]" data-name="Container">
      <Frame7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[25.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[25px] left-0 not-italic text-[#2c2c2c] text-[20px] text-nowrap top-[-2.22px] whitespace-pre">ЯЦКОВЕЦЬ</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[25px] left-0 top-[-3.22px] w-[88px]">
      <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[25px] left-0 not-italic text-[#2c2c2c] text-[20px] text-nowrap top-0 whitespace-pre">АНДРІЙ</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[25.001px] relative shrink-0 w-full" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[25px] left-0 top-[-2.22px] w-[109px]">
      <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[25px] left-0 not-italic text-[#2c2c2c] text-[20px] text-nowrap top-[-3px] whitespace-pre">Петрович</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[25.001px] relative shrink-0 w-full" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[75.002px] items-start left-0 top-0 w-[329.159px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[75.002px] left-[15px] top-[86px] w-[329.159px]">
      <Container11 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[21.537px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute h-0 left-[calc(50%-0.5px)] top-[calc(50%+0.23px)] translate-x-[-50%] translate-y-[-50%] w-[15px]" data-name="Vector">
        <div className="absolute inset-[-2px_-13.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 4">
            <path d="M2 2H17" id="Vector" stroke="var(--stroke-0, #242813)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[15px] left-[calc(50%-0.77px)] top-[4px] translate-x-[-50%] w-0" data-name="Vector">
        <div className="absolute inset-[-13.33%_-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 19">
            <path d="M2 2V17" id="Vector" stroke="var(--stroke-0, #242813)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#fc8a0e] content-stretch flex flex-col items-start left-[286px] pb-0 pt-[9.231px] px-[9.231px] rounded-[1.57585e+07px] size-[40px] top-[117px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function IdCard2() {
  return (
    <div className="absolute bg-[#68491b] h-[21px] left-0 overflow-clip top-[8px] w-[347px]" data-name="IdCard">
      <p className="absolute font-['e-Ukraine:Regular',sans-serif] leading-[16px] left-[-20px] not-italic text-[13px] text-nowrap text-white top-[calc(50%-7.5px)] tracking-[0.1px] whitespace-pre">{`Оновлено о 20:24 | 08.12.2025 •  Документ оновле`}</p>
    </div>
  );
}

function IdCard3() {
  return (
    <div className="absolute h-[131px] left-[-1px] top-[316px] w-[347px]" data-name="IdCard">
      <Container7 />
      <Frame4 />
      <Button2 />
      <IdCard2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#d5d3be] border border-[#a4a290] border-solid h-[490px] left-0 overflow-clip rounded-[8px] top-0 w-[347px]" data-name="Container">
      <IdCard />
      <IdCard1 />
      <IdCard3 />
    </div>
  );
}

function IdCard4() {
  return (
    <div className="absolute h-[447px] left-[23px] top-[192px] w-[347px]" data-name="IdCard">
      <Container12 />
    </div>
  );
}

function IdCardPage() {
  return (
    <div className="h-[534.936px] relative shrink-0 w-full" data-name="IdCardPage">
      <Button />
      <IdCard4 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#e0dfcb] content-stretch flex flex-col h-[852.22px] items-start left-0 overflow-clip top-0 w-[393.144px]" data-name="App">
      <IdCardPage />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p9060a00} fill="#2C2C2C" />
            <path d={svgPaths.p7a4ea80} fill="var(--fill-0, #2C2C2C)" />
            <path d={svgPaths.pc407120} stroke="var(--stroke-0, #2C2C2C)" strokeLinecap="round" strokeWidth="1.99993" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[58px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[16px] relative w-[58px]">
        <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[16px] left-0 not-italic text-[11px] text-black text-nowrap top-[-4px] tracking-[-0.3px] whitespace-pre">Резерв ID</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[52.911px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[15.996px] items-start relative w-[52.911px]">
        <Frame8 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[59.979px] relative shrink-0 w-[100.909px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] h-[59.979px] items-center px-0 py-[7.993px] relative w-[100.909px]">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 28">
        <g id="Icon">
          <path d={svgPaths.p1f39ab80} fill="var(--fill-0, #2C2C2C)" id="Vector" stroke="var(--stroke-0, #2C2C2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99993" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[16px] relative w-[45px]">
        <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[16px] left-[-6px] not-italic text-[#2c2c2c] text-[11px] text-nowrap top-[-3px] tracking-[-0.2px] whitespace-pre">Вакансії</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[43.324px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[15.996px] items-start relative w-[43.324px]">
        <Frame9 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[59.979px] relative shrink-0 w-[91.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] h-[59.979px] items-center px-0 py-[7.993px] relative w-[91.323px]">
        <Icon3 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M4.5882 14.7626H21.5882" id="Vector" stroke="var(--stroke-0, #2C2C2C)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.99993" />
          <path d="M4.5882 21.7626H21.5882" id="Vector_2" stroke="var(--stroke-0, #2C2C2C)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.99993" />
          <path d="M4.5882 8.76263H21.5882" id="Vector_3" stroke="var(--stroke-0, #2C2C2C)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.99993" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[35px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[16px] relative w-[35px]">
        <p className="absolute font-['e-Ukraine:Medium',sans-serif] leading-[16px] left-px not-italic text-[#2c2c2c] text-[11px] text-nowrap top-px tracking-[-0.7px] whitespace-pre">Меню</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[33.729px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[15.996px] items-start relative w-[33.729px]">
        <Frame10 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[59.979px] relative shrink-0 w-[81.727px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] h-[59.979px] items-center px-0 py-[7.993px] relative w-[81.727px]">
        <Icon4 />
        <Text3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[67.972px] items-center justify-between left-[-7px] pl-[19.859px] pr-[19.869px] py-0 top-[-9.4px] w-[393.144px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-white border-[#cdcac5] border-[1px_0px_0px] border-solid h-[80.573px] left-0 top-[771.65px] w-[393.144px]" data-name="App">
      <Container13 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Додаток з інтерактивним дизайном">
      <App />
      <App1 />
    </div>
  );
}