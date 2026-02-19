import svgPaths from "./svg-fo73us6i1o";
import imgAbstractConnection from "figma:asset/b170ca6fdee988b2dc9887b841d001a7bdd1dfce.png";
import imgZutIsland from "figma:asset/4bc9574431d9787ae40236108382b161a5adf868.png";
import imgWhiskey from "figma:asset/a4c5131ae8219ac19c24047be967a2d3c822f1ad.png";
import imgBackground from "figma:asset/d359ba6ab683bc4be7edb87e78636e29103ae855.png";
import imgBackground1 from "figma:asset/a66a47c36d7207e9df02414e897290bdf14b3310.png";
import imgBackground2 from "figma:asset/50ba58402031d878c19b9f7ed60c649eae10e7de.png";
import imgBackground3 from "figma:asset/5445d9903e3369556672ccc53e6096da143e3b23.png";
import imgBackground4 from "figma:asset/3e0a9eba5cdbf6d1876eea47493c5b5cd61c5c83.png";
import imgAvatar2Fmale2F35502FEuropean2F3 from "figma:asset/8b1a92cef097201939f3c54d05109a9eb865b3e5.png";
import imgAvatar2Fmale2F50652FAfrican2F1 from "figma:asset/53f0693371c99d212f514ffc95fb1d917115545c.png";
import imgAvatar2Ffemale2F35502FHispanic2F4 from "figma:asset/521342465d78bb593b03f8e8a7bfd1cd0b531432.png";
import { imgTransition } from "./svg-psl46";

function BackgroundBorder() {
  return (
    <div className="bg-[#ffd4d4] content-stretch flex items-center px-[13px] py-[7px] relative rounded-[100px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[139.19px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Next Generation Value</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black tracking-[-1.28px] w-full whitespace-pre-wrap">
        <p className="leading-[70.4px] mb-0">Tokenize the</p>
        <p className="mb-0">
          <span className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[70.4px] not-italic" style={{ backgroundImage: "linear-gradient(117.702645deg, rgb(79, 70, 229) 0%, rgb(236, 72, 153) 100%)", WebkitTextFillColor: "transparent" }}>
            connection
          </span>
          <span className="leading-[70.4px]">,</span>
        </p>
        <p className="leading-[70.4px]">not the asset.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] pt-[1.1px] relative shrink-0 w-[500px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[96px] justify-center leading-[32px] not-italic relative shrink-0 text-[#949494] text-[20px] w-[495.16px] whitespace-pre-wrap">
        <p className="mb-0">iRWA creates a new asset class based on emotional</p>
        <p className="mb-0">connection, loyalty, and intangible benefits. Own the</p>
        <p>impact, not the item.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ff272a] content-stretch flex items-center justify-center pb-[17.59px] pt-[16px] px-[32px] relative rounded-[24px] self-stretch shadow-[0px_4px_20px_0px_rgba(79,70,229,0.25)] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[26px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[125.55px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Explore Projects</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[17.59px] pt-[16px] px-[33px] relative rounded-[24px] self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[26px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-[125.8px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Request a Demo</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[17.1px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14.9px] items-start min-h-px min-w-px relative" data-name="Container">
      <BackgroundBorder />
      <Heading />
      <Container2 />
      <Container3 />
    </div>
  );
}

function AbstractConnection() {
  return (
    <div className="aspect-[552/310.5] relative rounded-[40px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Abstract connection">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAbstractConnection} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[65.05px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Total Value</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[5px] shrink-0 size-[10px]" data-name="Background" />
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-[147.88px]">
          <p className="leading-[38.4px] whitespace-pre-wrap">iRWA + RWA</p>
        </div>
      </div>
    </div>
  );
}

function FloatingCard() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] bottom-[55.35%] content-stretch flex flex-col gap-[6.99px] items-start left-[-40px] p-[21px] rounded-[12px] top-[10%] w-[200px]" data-name="Floating Card 1">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)] top-0 w-[200px]" data-name="Floating Card 1:shadow" />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[178px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[12px] w-[93.59px]">
          <p className="leading-[19.2px] whitespace-pre-wrap">Sentiment Score</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e2e8f0] h-[6px] relative rounded-[4px] shrink-0 w-[178px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_15%_0_0]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135.000002deg, rgb(79, 70, 229) 0%, rgb(236, 72, 153) 100%)" }} />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[68.38px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">High Impact</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-[26.33px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">85%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[178px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[4px] relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function FloatingCard1() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] bottom-[10%] content-stretch flex flex-col gap-[4px] items-start p-[21px] right-[-20px] rounded-[12px] top-[58.32%] w-[220px]" data-name="Floating Card 2">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)] top-0 w-[220px]" data-name="Floating Card 2:shadow" />
      <Container7 />
      <Background1 />
      <Container8 />
    </div>
  );
}

function AbstractVisual() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Abstract Visual">
      <AbstractConnection />
      <FloatingCard />
      <FloatingCard1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center max-w-[1200px] px-[24px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container1 />
      <AbstractVisual />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[120px] left-0 top-[690px] w-[1440px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 120">
        <g id="SVG">
          <path d={svgPaths.p281a3f80} fill="var(--fill-0, #F8FAFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[810px] overflow-clip py-[172.22px] right-0 top-[81px]" data-name="Hero Section">
      <div className="absolute inset-[0_0_-0.07px_0]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(134.788579deg, rgb(240, 249, 255) 0%, rgb(238, 242, 255) 100%)" }} />
      <div className="absolute inset-[0_0_-0.07px_0] opacity-60" data-name="Gradient" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.03) 2.5%, rgba(0, 0, 0, 0) 2.5%), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 2.5%, rgba(0, 0, 0, 0) 2.5%)" }} />
      <div className="absolute bg-[#c7d2fe] blur-[40px] inset-[-10%_-5%_35.93%_63.33%] opacity-15 rounded-bl-[390px] rounded-br-[510px] rounded-tl-[240px] rounded-tr-[480px]" data-name="Background+Blur" />
      <Container />
      <Svg />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[53px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] w-[382.38px]">
        <p className="leading-[52.8px] whitespace-pre-wrap">Redefining Value</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[18px] text-center w-[524.88px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">Moving beyond financial ownership to emotional stewardship.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start max-w-[800px] relative shrink-0 w-[800px]" data-name="Container">
      <Heading1 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[1070px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[24px] text-center w-[950.56px]">
          <p className="leading-[38.4px] whitespace-pre-wrap">Total Value = Financial Assets (RWA) + Non-Financial Assets (iRWA)</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-gradient-to-r from-[#eef2ff] relative rounded-[8px] shrink-0 to-[#fdf2f8] w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start pb-[41px] pt-[40px] px-[41px] relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-[486px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[32px] tracking-[-0.64px] w-[210.03px]">
          <p className="leading-[35.2px] whitespace-pre-wrap">Tangible RWA</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.34%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3316">
          <g id="Group">
            <path d={svgPaths.p2dca8ca0} id="Vector" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1eb93a00} id="Vector_2" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Item() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-[32px] not-italic text-[16px] text-black top-[calc(50%-0.8px)] w-[146.2px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Physical ownership</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[29.17%_8.33%]" data-name="Group">
      <div className="absolute inset-[-10%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
          <g id="Group">
            <path d="M12.5 0.833333H17.5V5.83333" id="Vector" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1f5e580} id="Vector_2" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-[32px] not-italic text-[16px] text-black top-[calc(50%-0.8px)] w-[172.14px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Financial returns focus</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3334 16.6667">
          <g id="Group">
            <path d={svgPaths.p79fbd00} id="Vector" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2662900} id="Vector_2" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-[32px] not-italic text-[16px] text-black top-[calc(50%-0.8px)] w-[205.48px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Heavily regulated / Taxable</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-[486px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.2px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
        <Heading2 />
        <List />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-[486px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[32px] tracking-[-0.64px] w-[238.55px]">
          <p className="leading-[35.2px] whitespace-pre-wrap">Intangible iRWA</p>
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3d0f7f00} id="Vector" stroke="var(--stroke-0, #FF272A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-[32px] not-italic text-[#ff272a] text-[16px] top-[calc(50%-0.8px)] w-[163.02px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Emotional connection</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.55%_-5.56%_-5.56%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.667">
          <g id="Group">
            <path d={svgPaths.p1fc53700} id="Vector" stroke="var(--stroke-0, #FF272A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p6181ec0} id="Vector_2" stroke="var(--stroke-0, #FF272A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-0.01px)]" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Item4() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-[32px] not-italic text-[#ff272a] text-[16px] top-[calc(50%-0.8px)] w-[138.23px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Benefits are gifted</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.31%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3378">
          <g id="Group">
            <path d={svgPaths.p241be740} id="Vector" stroke="var(--stroke-0, #FF272A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1c9e6a00} id="Vector_2" stroke="var(--stroke-0, #FF272A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Item5() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-[32px] not-italic text-[#ff272a] text-[16px] top-[calc(50%-0.8px)] w-[179.16px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Unregulated soft assets</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-[486px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Item3 />
        <Item4 />
        <Item5 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#eef2ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#ff272a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.2px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
        <Heading3 />
        <List1 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#0f172a] h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center to-[#64748b] tracking-[-1px] w-[296.25px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[51.2px] whitespace-pre-wrap">“You can’t tax love.”</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Container12 />
          <BackgroundBorder1 />
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function TransitionMaskGroup() {
  return (
    <div className="absolute bottom-[0.23px] h-[100px] left-0 right-0" data-name="Transition:mask-group">
      <div className="absolute bg-gradient-to-b bottom-0 from-[#f8fafc] h-[100px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1440px_100px] right-0 to-white" data-name="Transition" style={{ maskImage: `url('${imgTransition}')` }} />
    </div>
  );
}

function SectionWhatIsIRwa() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 overflow-clip pb-[184px] pt-[119px] px-[120px] right-0 top-[891px]" data-name="Section - What is iRWA">
      <Container11 />
      <TransitionMaskGroup />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#ffd4d4] content-stretch flex items-center px-[13px] py-[7px] relative rounded-[100px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[99.27px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">The Mechanism</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <p className="leading-[52.8px] whitespace-pre-wrap">The Connection Flow</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder4 />
      <Heading4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.9998">
          <g id="Group">
            <path d={svgPaths.p2c09b400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3725e000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="Background">
      <IconifyIcon6 />
    </div>
  );
}

function Step() {
  return (
    <div className="absolute bg-white border border-[#e8e8e8] border-solid bottom-[40px] left-0 rounded-[12px] top-0 w-[250px]" data-name="Step 1">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Step 1:shadow" />
      <Background2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] left-[32px] not-italic text-[24px] text-black top-[116.5px] tracking-[-0.48px] w-[159.92px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">1. Asset Exists</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[68px] justify-center leading-[22.4px] left-[32px] not-italic text-[#949494] text-[14px] top-[179.29px] w-[141.69px] whitespace-pre-wrap">
        <p className="mb-0">A real-world asset is</p>
        <p className="mb-0">identified (e.g. forest,</p>
        <p>school).</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%_8.36%_8.37%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9944 21.9923">
          <g id="Group">
            <path d={svgPaths.p2cbc0a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p142dba80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3819fe40} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="Background">
      <IconifyIcon7 />
    </div>
  );
}

function Step1() {
  return (
    <div className="absolute bg-white border border-[#e8e8e8] border-solid bottom-[40px] left-[274px] rounded-[12px] top-0 w-[250px]" data-name="Step 2">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Step 2:shadow" />
      <Background3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] left-[32px] not-italic text-[24px] text-black top-[116.5px] tracking-[-0.48px] w-[118.19px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">2. Funding</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[68px] justify-center leading-[22.4px] left-[32px] not-italic text-[#949494] text-[14px] top-[179.29px] w-[170.69px] whitespace-pre-wrap">
        <p className="mb-0">End-user funds the</p>
        <p className="mb-0">connection to support the</p>
        <p>cause.</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p244eba00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="Background">
      <IconifyIcon8 />
    </div>
  );
}

function Step2() {
  return (
    <div className="absolute bg-white border border-[#e8e8e8] border-solid bottom-[40px] left-[548px] rounded-[12px] top-0 w-[250px]" data-name="Step 3">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Step 3:shadow" />
      <Background4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] left-[32px] not-italic text-[24px] text-black top-[116.5px] tracking-[-0.48px] w-[142.38px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">3. Sentiment</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] left-[32px] not-italic text-[#949494] text-[14px] top-[168.1px] w-[182.53px] whitespace-pre-wrap">
        <p className="mb-0">Loyalty and emotional</p>
        <p>connection are established.</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.32%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0048 22.0048">
          <g id="Group">
            <path d={svgPaths.p23412e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p336dd260} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group7 />
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="Background">
      <IconifyIcon9 />
    </div>
  );
}

function Step3() {
  return (
    <div className="absolute bg-white border border-[#e8e8e8] border-solid bottom-[40px] left-[822px] rounded-[12px] top-0 w-[250px]" data-name="Step 4">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Step 4:shadow" />
      <Background5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] left-[32px] not-italic text-[24px] text-black top-[116.5px] tracking-[-0.48px] w-[120.84px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">4. Benefits</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[68px] justify-center leading-[22.4px] left-[32px] not-italic text-[#949494] text-[14px] top-[179.29px] w-[162.75px] whitespace-pre-wrap">
        <p className="mb-0">ESG rights and tangible</p>
        <p className="mb-0">benefits are delivered as</p>
        <p>gifts.</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0003 21.0003">
          <g id="Group">
            <path d={svgPaths.p6b4d140} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p69f3200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group8 />
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#ff272a] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="Background">
      <IconifyIcon10 />
    </div>
  );
}

function Step4() {
  return (
    <div className="absolute bg-[#fdf2f8] border border-[#ff272a] border-solid bottom-[40px] left-[1096px] rounded-[12px] top-0 w-[250px]" data-name="Step 5">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Step 5:shadow" />
      <Background6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] left-[32px] not-italic text-[24px] text-black top-[116.5px] tracking-[-0.48px] w-[95px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">5. Token</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] left-[32px] not-italic text-[#949494] text-[14px] top-[168.1px] w-[177.3px] whitespace-pre-wrap">
        <p className="mb-0">A digital twin token</p>
        <p>represents the connection.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[287.56px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-full">
        <p className="leading-[35.2px] whitespace-pre-wrap">Historical Precedence</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.33%_8.33%_8.34%_8.36%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3257 29.3323">
          <g id="Group">
            <path d={svgPaths.p3efec200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            <path d={svgPaths.p1574d500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            <path d={svgPaths.p20354a00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            <path d={svgPaths.p62f7a9b} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="SVG">
      <Group9 />
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Background">
      <IconifyIcon11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.36px] w-[164.38px]">
        <p className="leading-[19.8px] whitespace-pre-wrap">Panda Sponsorship</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background7 />
      <Heading6 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p314eb00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Background">
      <IconifyIcon12 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.36px] w-[140.39px]">
        <p className="leading-[19.8px] whitespace-pre-wrap">Team Allegiance</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background8 />
      <Heading7 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="Group">
            <path d={svgPaths.p31add500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            <path d={svgPaths.p3370b980} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="SVG">
      <Group10 />
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg14 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Background">
      <IconifyIcon13 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.36px] w-[104.05px]">
        <p className="leading-[19.8px] whitespace-pre-wrap">Eco Funding</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background9 />
      <Heading8 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p2f3b0080} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg15 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Background">
      <IconifyIcon14 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.36px] w-[153.97px]">
        <p className="leading-[19.8px] whitespace-pre-wrap">Spiritual Journeys</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Background10 />
      <Heading9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[31.99px] items-start pt-[16.01px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container18 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function SectionHowItWorks() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip p-[120px] right-0 top-[1890.14px]" data-name="Section - How It Works">
      <Container17 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <p className="leading-[52.8px] whitespace-pre-wrap">{`Instruments & Evolution`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28.8px] not-italic relative shrink-0 text-[#949494] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">A decade of research, compliance testing, and framework</p>
        <p>development.</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[20.56%_8.23%]" data-name="Group">
      <div className="absolute inset-[-7.08%_-4.99%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.0975 32.2634">
          <g id="Group">
            <path d={svgPaths.p2ad5ab80} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p205451c0} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group11 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-[486px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[251.88px]">
          <p className="leading-[26.4px] whitespace-pre-wrap">Watch the Articulation</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[486px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[14px] w-[369.48px]">
          <p className="leading-[22.4px] whitespace-pre-wrap">Understanding the shift from RWA to iRWA in 3 minutes.</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[24px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative">
        <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[83.23px]">
          <p className="leading-[normal] whitespace-pre-wrap">Watch Video</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[33px] pt-[50.1px] px-[33px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[17.1px_0_0.22px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
        <Svg16 />
        <Heading11 />
        <Container29 />
        <Button />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.9px] items-start left-[24px] right-[624px] top-[-1px]" data-name="Container">
      <Heading10 />
      <Container28 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[16px] w-full">
        <p className="leading-[25.6px] whitespace-pre-wrap">2011 – 2015</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">S/E Ratio® Development</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Foundational metrics for social/emotional valuation.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[40px] right-0 top-[-1px]" data-name="Container">
      <Container31 />
      <Heading12 />
      <Container32 />
      <div className="absolute bg-[#ff272a] left-[-49px] rounded-[8px] size-[16px] top-px" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[16px] w-full">
        <p className="leading-[25.6px] whitespace-pre-wrap">2016 – 2018</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">{`SER & MCR Tokens`}</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">FCA compliance testing. Mentioned in FT Innovation Awards.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[40px] right-0 top-[146.99px]" data-name="Container">
      <Container34 />
      <Heading13 />
      <Container35 />
      <div className="absolute bg-[#ff272a] left-[-49px] rounded-[8px] size-[16px] top-px" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[16px] w-full">
        <p className="leading-[25.6px] whitespace-pre-wrap">2019 – 2023</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Academic Validation</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Whitepapers published defining the non-financial asset class.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[40px] right-0 top-[294.97px]" data-name="Container">
      <Container37 />
      <Heading14 />
      <Container38 />
      <div className="absolute bg-[#ff272a] left-[-49px] rounded-[8px] size-[16px] top-px" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[16px] w-full">
        <p className="leading-[25.6px] whitespace-pre-wrap">2024 – 2026</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Scalable Pilots</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[15px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Coffee, Awareness, and 4IR projects launching globally.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[40px] right-0 top-[442.95px]" data-name="Container">
      <Container40 />
      <Heading15 />
      <Container41 />
      <div className="absolute bg-[#ff272a] left-[-49px] rounded-[8px] size-[16px] top-px" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute border-[#e8e8e8] border-l-2 border-solid h-[591.94px] left-[624px] right-[24px] top-0" data-name="VerticalBorder">
      <Container30 />
      <Container33 />
      <Container36 />
      <Container39 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[591.94px] max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <VerticalBorder />
    </div>
  );
}

function SectionInstrumentsTimeline() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex flex-col items-start left-0 overflow-clip p-[120px] right-0 top-[2864.28px]" data-name="Section - Instruments / Timeline">
      <Container26 />
    </div>
  );
}

function SectionCurrentProjectsPaints() {
  return <div className="absolute bg-white inset-0" data-name="Section - Current Projects paints" />;
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[53px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[368.58px]">
        <p className="leading-[52.8px] whitespace-pre-wrap">Current Projects</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[18px] w-[395.89px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">Active iRWA initiatives making tangible impact.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pb-[23.99px] relative shrink-0" data-name="Container">
      <Heading16 />
      <Container45 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#ff272a] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pb-[7.3px] pt-[6.5px] px-[12px] relative rounded-[100px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-[15.78px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">All</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Background11 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#ffd4d4] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pb-[7.3px] pt-[6.5px] px-[13px] relative rounded-[100px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[25.97px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">ESG</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0" data-name="Margin">
      <BackgroundBorder6 />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#ffd4d4] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pb-[7.3px] pt-[6.5px] px-[13px] relative rounded-[100px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[62.09px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Education</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0" data-name="Margin">
      <BackgroundBorder7 />
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#ffd4d4] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pb-[7.3px] pt-[6.5px] px-[13px] relative rounded-[100px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[61.41px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Wellbeing</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0" data-name="Margin">
      <BackgroundBorder8 />
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#ffd4d4] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pb-[7.3px] pt-[6.5px] px-[13px] relative rounded-[100px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[45.48px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Culture</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0" data-name="Margin">
      <BackgroundBorder9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[121.59px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function ZutIsland() {
  return (
    <div className="absolute h-[200px] left-[33px] right-[33px] rounded-[4px] top-[33px]" data-name="Zut Island">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-full left-[-8.86%] max-w-none top-0 w-[117.72%]" src={imgZutIsland} />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="absolute bg-[#ffd4d4] content-stretch flex items-center left-[33px] px-[13px] py-[7px] rounded-[100px] top-[257px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[78.09px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Environment</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[306.8px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[111.25px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">Zut Island</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.585px] right-[33px] top-[349.39px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] w-[209.3px] whitespace-pre-wrap">
        <p className="mb-0">Biodiversity protection and land</p>
        <p>preservation.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[13px] w-full">
          <p className="whitespace-pre-wrap">
            <span className="leading-[20.8px]">Scale:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] not-italic">{` 500 Acres`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[13px] w-full">
          <p className="whitespace-pre-wrap">
            <span className="leading-[20.8px]">Sentiment:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] not-italic">{` High`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-center left-[33px] pt-[17px] right-[33px] top-[418.97px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Project() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[362.66px]" data-name="Project 1">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Project 1:shadow" />
      <ZutIsland />
      <BackgroundBorder10 />
      <Heading17 />
      <Container48 />
      <HorizontalBorder />
    </div>
  );
}

function Whiskey() {
  return (
    <div className="absolute h-[200px] left-[33px] right-[33px] rounded-[4px] top-[33px]" data-name="Whiskey">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-full left-[-0.56%] max-w-none top-0 w-[101.12%]" src={imgWhiskey} />
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="absolute bg-[#ffd4d4] content-stretch flex items-center left-[33px] px-[13px] py-[7px] rounded-[100px] top-[257px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[53.3px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Heritage</p>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[306.8px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[159.42px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">Cask Heritage</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.585px] right-[33px] top-[349.39px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] w-[200.2px] whitespace-pre-wrap">
        <p className="mb-0">Supporting traditional whiskey</p>
        <p>craftsmanship.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[142.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[13px] w-[108.76px]">
          <p className="whitespace-pre-wrap">
            <span className="leading-[20.8px]">Scale:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] not-italic">{` 200 Casks`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-[142.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[13px] w-[116.69px]">
          <p className="whitespace-pre-wrap">
            <span className="leading-[20.8px]">Sentiment:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] not-italic">{` V. High`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex gap-[11.99px] items-start justify-center left-[33px] pt-[17px] right-[33px] top-[418.97px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Project1() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[362.67px]" data-name="Project 2">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Project 2:shadow" />
      <Whiskey />
      <BackgroundBorder11 />
      <Heading18 />
      <Container51 />
      <HorizontalBorder1 />
    </div>
  );
}

function EvMinerals() {
  return <div className="absolute h-[200px] left-[33px] right-[33px] rounded-[4px] top-[33px]" data-name="EV Minerals" />;
}

function BackgroundBorder12() {
  return (
    <div className="absolute bg-[#ffd4d4] content-stretch flex items-center left-[33px] px-[13px] py-[7px] rounded-[100px] top-[257px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[13px] w-[51.36px]">
        <p className="leading-[20.8px] whitespace-pre-wrap">Industry</p>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[306.8px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[134.33px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">EV Minerals</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[349.19px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[14px] w-[259.91px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Ethical sourcing for battery technology.</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[13px] w-full">
          <p className="whitespace-pre-wrap">
            <span className="leading-[20.8px]">Scale:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] not-italic">{` Global`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[13px] w-full">
          <p className="whitespace-pre-wrap">
            <span className="leading-[20.8px]">Sentiment:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] not-italic">{` Med`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-center left-[33px] pt-[17px] right-[33px] top-[396.58px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Project2() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[362.66px]" data-name="Project 3">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Project 3:shadow" />
      <EvMinerals />
      <BackgroundBorder12 />
      <Heading19 />
      <Container54 />
      <HorizontalBorder2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1c889780} id="Vector" stroke="var(--stroke-0, #FF272A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon15() {
  return (
    <div className="relative shrink-0" data-name="iconify-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Svg17 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.59px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[26px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff272a] text-[16px] w-[560.78px]">
          <p className="leading-[25.6px] whitespace-pre-wrap">Unified Ecosystem: Tokens are swappable between all validated projects.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(79,70,229,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(79,70,229,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center pb-[17px] pt-[16px] px-[17px] relative w-full">
          <IconifyIcon15 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container43 />
        <Container47 />
        <OverlayBorder />
      </div>
    </div>
  );
}

function SectionCurrentProjects() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip p-[120px] right-0 top-[3696.22px]" data-name="Section - Current Projects">
      <div className="absolute bg-[#ec4899] blur-[40px] bottom-[0.55%] left-0 opacity-10 rounded-[400px] top-[20%] w-[800px]" data-name="Background+Blur" />
      <SectionCurrentProjectsPaints />
      <Container42 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[53px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] w-[436.92px]">
        <p className="leading-[52.8px] whitespace-pre-wrap">{`Trust & Technology`}</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[18px] text-center w-[462.27px]">
        <p className="leading-[28.8px] whitespace-pre-wrap">Built on compliant frameworks and precision mapping.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading20 />
      <Container60 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 29.3378">
          <g id="Group">
            <path d={svgPaths.p3035c200} id="Vector" stroke="var(--stroke-0, #166534)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            <path d={svgPaths.p3857a900} id="Vector_2" stroke="var(--stroke-0, #166534)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="SVG">
      <Group12 />
    </div>
  );
}

function IconifyIcon16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg18 />
    </div>
  );
}

function Background12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#dcfce7] content-stretch flex items-center justify-center left-1/2 rounded-[32px] size-[64px] top-[33px]" data-name="Background">
      <IconifyIcon16 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[120px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[199.64px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">{`FCA & BoE Tested`}</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] pb-[0.585px] right-[33px] top-[162.59px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[284.25px] whitespace-pre-wrap">
        <p className="mb-0">Tested with UK FCA (2017) and engaged</p>
        <p>with Bank of England for 2025 compliance.</p>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[362.66px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Background12 />
      <Heading21 />
      <Container62 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[8.33%_20.83%]" data-name="Group">
      <div className="absolute inset-[-5%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 29.3333">
          <g id="Group">
            <path d={svgPaths.pe76ed00} id="Vector" stroke="var(--stroke-0, #1E40AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
            <path d="M10.6667 22.6667H10.68" id="Vector_2" stroke="var(--stroke-0, #1E40AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="SVG">
      <Group13 />
    </div>
  );
}

function IconifyIcon17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg19 />
    </div>
  );
}

function Background13() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] rounded-[32px] size-[64px] top-[33px]" data-name="Background">
      <IconifyIcon17 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[120px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[137.81px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">Native Apps</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] pb-[0.585px] right-[33px] top-[162.59px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[269.81px] whitespace-pre-wrap">
        <p className="mb-0">Full iOS and Android compatibility for</p>
        <p>seamless asset management and gifting.</p>
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[362.67px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Background13 />
      <Heading22 />
      <Container63 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p1e4e2580} id="Vector" stroke="var(--stroke-0, #991B1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg20 />
    </div>
  );
}

function Background14() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fee2e2] content-stretch flex items-center justify-center left-1/2 rounded-[32px] size-[64px] top-[33px]" data-name="Background">
      <IconifyIcon18 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[120px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[149.45px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">What3Words</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] pb-[0.585px] right-[33px] top-[162.59px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[262.13px] whitespace-pre-wrap">
        <p className="mb-0">Precision 3x3m mapping integration for</p>
        <p>exact asset location and verification.</p>
      </div>
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[362.66px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Background14 />
      <Heading23 />
      <Container64 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder13 />
      <BackgroundBorder14 />
      <BackgroundBorder15 />
    </div>
  );
}

function Container58() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64.01px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container59 />
        <Container61 />
      </div>
    </div>
  );
}

function SectionTechTrust() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 overflow-clip pb-[120px] pt-[119px] px-[120px] right-0 top-[4703.17px]" data-name="Section - Tech & Trust">
      <Container58 />
      <div className="absolute bg-[#1e293b] bottom-[0.01px] h-[80px] left-0 right-0 rounded-tl-[400px] rounded-tr-[400px]" data-name="Transition Curve" />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-full">
        <p className="leading-[52.8px] whitespace-pre-wrap">Real World Outcomes</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Tangible results from intangible connections.</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[14.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading24 />
      <Container67 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] text-white tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Education Access</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[15px] items-start left-0 pb-[24.39px] pt-[23px] px-[24px] right-0 to-[rgba(0,0,0,0.8)]" data-name="Background">
      <Heading25 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[14px] text-white w-[227.52px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Funding schools in remote regions</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip right-[392px] rounded-[12px] top-0" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[197.12%] left-0 max-w-none top-[-48.56%] w-full" src={imgBackground} />
      </div>
      <Background16 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] text-white tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Biodiversity</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[15px] items-start left-0 pb-[24.39px] pt-[23px] px-[24px] right-0 to-[rgba(0,0,0,0.8)]" data-name="Background">
      <Heading26 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[14px] text-white w-[155.97px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">{`Protecting flora & fauna`}</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute h-[504px] left-[784px] overflow-clip right-0 rounded-[12px] top-0" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[129.82%] left-0 max-w-none top-[-14.91%] w-full" src={imgBackground1} />
      </div>
      <Background18 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] text-white tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Health</p>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[15px] items-start left-0 pb-[24.39px] pt-[23px] px-[24px] right-0 to-[rgba(0,0,0,0.8)]" data-name="Background">
      <Heading27 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[14px] text-white w-[111.25px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Medical supplies</p>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip right-[784px] rounded-[12px] top-[264px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[102.22%] left-0 max-w-none top-[-1.11%] w-full" src={imgBackground2} />
      </div>
      <Background20 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] text-white tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Enterprise</p>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[15px] items-start left-0 pb-[24.39px] pt-[23px] px-[24px] right-0 to-[rgba(0,0,0,0.8)]" data-name="Background">
      <Heading28 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[14px] text-white w-[86.03px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Tech centers</p>
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="absolute h-[240px] left-[392px] overflow-clip right-[392px] rounded-[12px] top-[264px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[102.32%] left-0 max-w-none top-[-1.16%] w-full" src={imgBackground3} />
      </div>
      <Background22 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-shadow-[0px_2px_4px_rgba(0,0,0,0.3)] text-white tracking-[-0.48px] w-full">
        <p className="leading-[26.4px] whitespace-pre-wrap">Mobility</p>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[15px] items-start left-0 pb-[24.39px] pt-[23px] px-[24px] right-0 to-[rgba(0,0,0,0.8)]" data-name="Background">
      <Heading29 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[14px] text-white w-[234.66px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Sustainable transport infrastructure</p>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip right-[392px] rounded-[12px] top-[528px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[223.88%] left-0 max-w-none top-[-61.94%] w-full" src={imgBackground4} />
      </div>
      <Background24 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[768px] relative shrink-0 w-full" data-name="Container">
      <Background15 />
      <Background17 />
      <Background19 />
      <Background21 />
      <Background23 />
    </div>
  );
}

function Container65() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container66 />
        <Container68 />
      </div>
    </div>
  );
}

function SectionImpactMasonry() {
  return (
    <div className="absolute bg-[#1e293b] content-stretch flex flex-col items-start left-0 overflow-clip pb-[120px] pt-[119px] px-[120px] right-0 top-[5369.94px]" data-name="Section - Impact Masonry">
      <Container65 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <p className="leading-[52.8px] whitespace-pre-wrap">Leadership</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">The visionaries behind the protocol.</p>
      </div>
    </div>
  );
}

function Avatar2Fmale2F35502FEuropean2F() {
  return (
    <div className="absolute left-[85px] rounded-[50px] size-[100px] top-[33px]" data-name="avatar%2Fmale%2F35-50%2FEuropean%2F3">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar2Fmale2F35502FEuropean2F3} />
      </div>
    </div>
  );
}

function Heading31() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[148px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[106.83px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">John Doe</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[190.39px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[100.91px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">{`Founder & CEO`}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[13px] py-[7px] rounded-[4px] top-[225.78px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center w-[45.38px]">
        <p className="leading-[normal] whitespace-pre-wrap">LinkedIn</p>
      </div>
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Avatar2Fmale2F35502FEuropean2F />
      <Heading31 />
      <Container72 />
      <Button1 />
    </div>
  );
}

function Avatar2Ffemale2F25352FAsian2F() {
  return <div className="absolute left-[85px] rounded-[50px] size-[100px] top-[33px]" data-name="avatar%2Ffemale%2F25-35%2FAsian%2F2" />;
}

function Heading32() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[148px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[126px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">Jane Smith</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[190.39px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[112.34px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Head of Strategy</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[13px] py-[7px] rounded-[4px] top-[225.78px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center w-[45.38px]">
        <p className="leading-[normal] whitespace-pre-wrap">LinkedIn</p>
      </div>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Avatar2Ffemale2F25352FAsian2F />
      <Heading32 />
      <Container73 />
      <Button2 />
    </div>
  );
}

function Avatar2Fmale2F50652FAfrican2F() {
  return (
    <div className="absolute left-[85px] rounded-[50px] size-[100px] top-[33px]" data-name="avatar%2Fmale%2F50-65%2FAfrican%2F1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar2Fmale2F50652FAfrican2F1} />
      </div>
    </div>
  );
}

function Heading33() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[148px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[150px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">Robert Jones</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[190.39px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[127.81px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Compliance Officer</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[13px] py-[7px] rounded-[4px] top-[225.78px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center w-[45.38px]">
        <p className="leading-[normal] whitespace-pre-wrap">LinkedIn</p>
      </div>
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Avatar2Fmale2F50652FAfrican2F />
      <Heading33 />
      <Container74 />
      <Button3 />
    </div>
  );
}

function Avatar2Ffemale2F35502FHispanic2F() {
  return (
    <div className="absolute left-[85px] rounded-[50px] size-[100px] top-[33px]" data-name="avatar%2Ffemale%2F35-50%2FHispanic%2F4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar2Ffemale2F35502FHispanic2F4} />
      </div>
    </div>
  );
}

function Heading34() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[148px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[142.23px]">
        <p className="leading-[26.4px] whitespace-pre-wrap">Maria Garcia</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[190.39px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[14px] text-center w-[68.97px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Tech Lead</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[13px] py-[7px] rounded-[4px] top-[225.78px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center w-[45.38px]">
        <p className="leading-[normal] whitespace-pre-wrap">LinkedIn</p>
      </div>
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
      <Avatar2Ffemale2F35502FHispanic2F />
      <Heading34 />
      <Container75 />
      <Button4 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center pt-[9px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder16 />
      <BackgroundBorder17 />
      <BackgroundBorder18 />
      <BackgroundBorder19 />
    </div>
  );
}

function Container69() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Heading30 />
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function SectionTeam() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 overflow-clip pb-[120px] pt-[119px] px-[120px] right-0 top-[6539.53px]" data-name="Section - Team">
      <Container69 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[53px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] w-[637.92px]">
        <p className="leading-[52.8px] whitespace-pre-wrap">Frequently Asked Questions</p>
      </div>
    </div>
  );
}

function Heading36() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-[281.34px]">
          <p className="leading-[19.8px] whitespace-pre-wrap">How does iRWA differ from RWA?</p>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.585px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] w-[656.75px] whitespace-pre-wrap">
          <p className="mb-0">RWA grants financial ownership and returns. iRWA grants emotional connection and gifted benefits,</p>
          <p>without direct asset ownership.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder20() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[7.195px] items-start p-[25px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.2px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
        <Heading36 />
        <Container78 />
      </div>
    </div>
  );
}

function Heading37() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-[123.45px]">
          <p className="leading-[19.8px] whitespace-pre-wrap">Is it regulated?</p>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.585px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] w-[665.59px] whitespace-pre-wrap">
          <p className="mb-0">{`Because iRWA deals in "soft" assets and emotional connection rather than financial securities, it falls`}</p>
          <p>outside traditional tax and securities regulation (“You can’t tax love”).</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder21() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[7.195px] items-start p-[25px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.2px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
        <Heading37 />
        <Container79 />
      </div>
    </div>
  );
}

function Heading38() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-[163.05px]">
          <p className="leading-[19.8px] whitespace-pre-wrap">Can I swap tokens?</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-[702px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.585px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#949494] text-[14px] w-[666.75px] whitespace-pre-wrap">
          <p className="mb-0">Yes, tokens are swappable between verified projects within the ecosystem, allowing you to shift your</p>
          <p>support as needed.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder22() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[7.195px] items-start p-[25px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.2px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)]" data-name="Overlay+Shadow" />
        <Heading38 />
        <Container80 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder20 />
      <BackgroundBorder21 />
      <BackgroundBorder22 />
    </div>
  );
}

function Container76() {
  return (
    <div className="max-w-[800px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[47.99px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Heading35 />
        <Container77 />
      </div>
    </div>
  );
}

function SectionFaq() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip pb-[120px] pt-[119px] px-[320px] right-0 top-[7187.91px]" data-name="Section - FAQ">
      <Container76 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[62px] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-center text-white tracking-[-1.12px] w-[836.91px]">
        <p className="leading-[61.6px] whitespace-pre-wrap">Build your iRWA project with us.</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[600px] pb-[0.69px] relative shrink-0 w-[600px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[58px] justify-center leading-[28.8px] not-italic relative shrink-0 text-[#cbd5e1] text-[18px] text-center w-[585.98px] whitespace-pre-wrap">
        <p className="mb-0">{`Join the next evolution of human value. Let's create connections that`}</p>
        <p>matter.</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 w-[366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[13.3px] w-[97.05px]">
          <p className="leading-[normal] whitespace-pre-wrap">Enter your email</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[17px] relative w-full">
          <Container83 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ff272a] relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(79,70,229,0.25)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17px] pt-[16px] px-[32px] relative w-full">
          <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[171.59px]">
            <p className="leading-[normal] whitespace-pre-wrap">Start the Conversation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[400px] pb-[57.1px] pt-[25.11px] relative shrink-0 w-[400px]" data-name="Form">
      <Input />
      <Button5 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[23.39px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[281.27px]">
          <p className="leading-[22.4px] whitespace-pre-wrap">© 2025 iRWA Protocol. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[92.58px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[112.77px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Terms of Service</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[23.39px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.99px] h-full items-start relative">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[40px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container81() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[22.9px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Heading39 />
          <Container82 />
          <Form />
          <HorizontalBorder3 />
        </div>
      </div>
    </div>
  );
}

function SectionContactFooter() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[120px] pt-[119px] px-[120px] right-0 top-[7928.44px]" data-name="Section - Contact Footer" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 689.58\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(79.83 0 0 79.83 720 344.79)\\'><stop stop-color=\\'rgba(30,41,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(15,23,42,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }}>
      <Container81 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[38.39px] relative shrink-0 w-[104.69px]" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-[#ff272a] left-0 rounded-[8px] size-[32px] top-[calc(50%-0.01px)]" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[39px] justify-center leading-[0] left-[40px] not-italic text-[24px] text-black top-[calc(50%-0.69px)] w-[64.69px]">
        <p className="leading-[38.4px] whitespace-pre-wrap">iRWA</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-[56.88px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Concept</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-[54.59px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Projects</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-[45.84px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Impact</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-[36.8px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Team</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#ff272a] content-stretch flex items-center justify-center pb-[10.39px] pt-[9px] px-[24px] relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(79,70,229,0.25)] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[77.03px]">
        <p className="leading-[22.4px] whitespace-pre-wrap">Get Started</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[80px] max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[24.02px] relative size-full">
          <Container89 />
          <Container90 />
          <Link6 />
        </div>
      </div>
    </div>
  );
}

function StickyNav() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-start left-0 pb-px px-[120px] right-0 top-0" data-name="Sticky Nav">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <Container88 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-white relative size-full" data-name="Background">
      <HeroSection />
      <SectionWhatIsIRwa />
      <SectionHowItWorks />
      <SectionInstrumentsTimeline />
      <SectionCurrentProjects />
      <SectionTechTrust />
      <SectionImpactMasonry />
      <SectionTeam />
      <SectionFaq />
      <SectionContactFooter />
      <StickyNav />
    </div>
  );
}