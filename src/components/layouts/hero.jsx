import { FloatButton} from "../ui/button";
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';


const Hero = ()=>{
    return (
    <section>
        <div className="container flex flex-col mt-10 mx-auto items-center space-y-4  px-5 py-8 md:flex-row md:space-y-0">
         <div className="flex flex-col space-y-6 mb-12 p-5 pt-3 items-center md:items-start lg:px-10 md:w-1/2">
          <div className="py-2 px-10 flex space-x-3 items-center rounded-full  shadow-xl text-center w-1.5/3 ">
            <h2 className="text-darkPink">Explore  the world!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
<path d="M17.75 7.91576V6.37082C17.75 2.96325 14.9462 0.19104 11.5 0.19104C8.05371 0.19104 5.25 2.96325 5.25 6.37082V7.91576H0.5625V21.0478C0.5625 23.1809 2.31138 24.9101 4.46875 24.9101H18.5312C20.6886 24.9101 22.4375 23.1809 22.4375 21.0478V7.91576H17.75ZM8.375 6.37082C8.375 4.66703 9.77686 3.28093 11.5 3.28093C13.2231 3.28093 14.625 4.66703 14.625 6.37082V7.91576H8.375V6.37082ZM16.1875 12.1644C15.5403 12.1644 15.0156 11.6456 15.0156 11.0056C15.0156 10.3657 15.5403 9.84694 16.1875 9.84694C16.8347 9.84694 17.3594 10.3657 17.3594 11.0056C17.3594 11.6456 16.8347 12.1644 16.1875 12.1644ZM6.8125 12.1644C6.16528 12.1644 5.64062 11.6456 5.64062 11.0056C5.64062 10.3657 6.16528 9.84694 6.8125 9.84694C7.45972 9.84694 7.98438 10.3657 7.98438 11.0056C7.98438 11.6456 7.45972 12.1644 6.8125 12.1644Z" fill="#FF4487"/>
</svg>
          </div>
          <h2 className="text-6xl max-w-md text-center font-bold md:text-left">Travel <span className="text-darkPink text-7xl">top <br/>
destination </span>
of the world </h2>
<p className="text-sm text-textLight max-w-sm">
We always make our customers happy by providing as many choices as possible 
</p>
<div className="flex justify-around space-x-12">
<FloatButton color={'bg-darkPurple'} text={'text-white'} hover={"hover:bg-white hover:text-black"}>Get Started</FloatButton>
<div className="flex space-x-3 items-center px-3 rounded-full border-2 border-lightGray cursor-pointer hover:bg-lightGray">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
  <path d="M15 0C6.71371 0 0 6.19572 0 13.8427C0 21.4897 6.71371 27.6854 15 27.6854C23.2863 27.6854 30 21.4897 30 13.8427C30 6.19572 23.2863 0 15 0ZM21.998 15.1823L11.3528 20.8199C10.3972 21.3111 9.19355 20.6803 9.19355 19.6477V8.03769C9.19355 7.01066 10.3911 6.37434 11.3528 6.86553L21.998 12.838C22.9899 13.3515 22.9899 14.6744 21.998 15.1823Z" fill="#A53FF5"/>
</svg>
<h2>
Watch Demo
</h2>
</div>
</div>
         </div>
         <div id="hero-2" className="flex space-x-0 mt-2 p-3 md:p-5  md:w-1/2">
          <div className="flex flex-col space-y-1">
            <div className="relative flex flex-col h-1/2">
<img src={hero3} alt="" className="h-8/6 w-4/5"/>
<svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125" fill="none" className="-mt-10 -ml-16">
  <g filter="url(#filter0_d_1003_1322)">
    <path d="M56.2969 1.37079C35.6934 1.37079 19 17.8766 19 38.2486C19 58.6206 35.6934 75.1264 56.2969 75.1264C76.9004 75.1264 93.5938 58.6206 93.5938 38.2486C93.5938 17.8766 76.9004 1.37079 56.2969 1.37079ZM74.6145 26.6351L68.4936 55.1559C68.0424 57.1782 66.8242 57.6689 65.1248 56.7172L55.8006 49.9216L51.3039 54.2042C50.8076 54.6949 50.3865 55.1113 49.424 55.1113L50.0857 45.7282L67.3656 30.2931C68.1176 29.6388 67.2002 29.2671 66.2076 29.9213L44.8521 43.2152L35.6482 40.375C33.648 39.7505 33.6029 38.3973 36.0693 37.4456L72.0277 23.7354C73.6971 23.1406 75.1559 24.1369 74.6145 26.6351Z" fill="#FF4487"/>
  </g>
  <defs>
    <filter id="filter0_d_1003_1322" x="0" y="0.370789" width="124.594" height="123.756" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="6" dy="24"/>
      <feGaussianBlur stdDeviation="12.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1003_1322"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1003_1322" result="shape"/>
    </filter>
  </defs>
</svg>
            </div >
            <img src={hero2} alt="" className="h-8/6 w-3/4 ml-3 -mt-10" />
            
          </div>
          <div className="relative flex flex-col justify-center ">
            <div className="">
            <img src={hero1} alt=""  className="h-8/6 w-3/4"/>
            </div><div className="absolute -right-6 flex space-x-1 items-center px-2  rounded-full shadow-lg  bg-white cursor-pointer hover:bg-lightGray">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2197 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z" fill="#FF4487"/>
</svg>
<h2 className="font-bold">
Top Places
</h2>
</div>
            <svg className=" absolute flex bottom-0 left-1/3 mb-12 p-2 rounded-full bg-darkOrange items-center shadow-md " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M12.6665 16.7383C16.3393 16.7383 19.2833 13.7561 19.2833 10.0358C19.2833 6.31551 16.3393 3.33333 12.6665 3.33333C8.99374 3.33333 6.04966 6.31551 6.04966 10.0358C6.04966 13.7561 8.99374 16.7383 12.6665 16.7383ZM12.6665 20.0203C7.27213 20.0203 2.6665 20.8828 2.6665 24.3285C2.6665 27.7731 7.2441 28.6667 12.6665 28.6667C18.0596 28.6667 22.6665 27.8041 22.6665 24.3583C22.6665 20.9125 18.0889 20.0203 12.6665 20.0203ZM26.5304 12.7838H28.1345C28.7948 12.7838 29.3332 13.3297 29.3332 13.9993C29.3332 14.6688 28.7948 15.2148 28.1345 15.2148H26.5304V16.7845C26.5304 17.4541 25.9934 18 25.3318 18C24.6716 18 24.1332 17.4541 24.1332 16.7845V15.2148H22.5318C21.8701 15.2148 21.3332 14.6688 21.3332 13.9993C21.3332 13.3297 21.8701 12.7838 22.5318 12.7838H24.1332V11.2155C24.1332 10.5459 24.6716 10 25.3318 10C25.9934 10 26.5304 10.5459 26.5304 11.2155V12.7838Z" fill="white"/>
</svg>
          </div>
         </div>
        </div>
    </section>
    )
}

export default Hero