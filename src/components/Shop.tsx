import { grid } from './Databse';

interface gridType {
    subTitle: string,
    title: string,
    desc: string,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    img5: string,
    btn1: string,
    btn2: string
}


const isBrowser = (): boolean => typeof window !== "undefined";

if (isBrowser()) {
window.addEventListener('scroll', () => {

    var topLeft = document.querySelectorAll('.topLeft');
    var topRight = document.querySelectorAll('.topRight');
    var botLeft = document.querySelectorAll('.botLeft');
    var botRight = document.querySelectorAll('.botRight');

    // ####LeftAnim
    for (var i = 0; i < topLeft.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = topLeft[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            topLeft[i].classList.add('topLeftActive');
        }
        else {
            topLeft[i].classList.remove('topLeftActive');
        }
    }


    // ####RightAnim
    for (var i = 0; i < topRight.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = topRight[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            topRight[i].classList.add('topRightActive');
        }
        else {
            topRight[i].classList.remove('topRightActive');
        }
    }

    // ####botLeft
    for (var i = 0; i < botLeft.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = botLeft[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            botLeft[i].classList.add('botLeftActive');
        }
        else {
            botLeft[i].classList.remove('botLeftActive');
        }
    }

    // ####botRight
    for (var i = 0; i < botRight.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = botRight[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            botRight[i].classList.add('botRightActive');
        }
        else {
            botRight[i].classList.remove('botRightActive');
        }
    }
});
}

const gridData: gridType = grid;

export default function Shop() {
    return (
        <div className=' my-24'>
            <div className=' max-w-6xl my-[100px] m-auto md:pl-10'>
                <div className='lg:mx-[6%] mx-[3%] flex justify-between md:flex-row flex-col'>
                    <div className='md:w-[60%] w-full flex relative'>
                        <div className='flex my-[20px] min-[560px]:w-[450px] w-[210px] m-auto items-center relative '>
                            <img src={gridData.img1} alt="" className='center min-[560px]:max-w-[280px] max-w-[140px] m-auto min-[560px]:my-[40px] my-[40px] z-20 relative' />
                            <img src={gridData.img3} alt="" className='topLeft min-[560px]:max-w-[180px] max-w-[90px] absolute top-0 left-0' />
                            <img src={gridData.img5} alt="" className='topRight min-[560px]:max-w-[100px] max-w-[50px] absolute top-0 right-0' />
                            <img src={gridData.img2} alt="" className='botLeft min-[560px]:max-w-[200px] max-w-[100px] absolute bottom-0 left-0' />
                            <img src={gridData.img4} alt="" className='botRight min-[560px]:max-w-[160px] max-w-[80px] absolute bottom-0 right-0' />
                        </div>
                    </div>
                    <div className='md:w-[40%] md:m-auto md:ml-14'>
                        <h2 className=' text-[17px] tracking-widest text-gray-700'>{gridData.subTitle}</h2>
                        <h1 className=' text-[30px] font-bold leading-[35px] mt-[5px]'>{gridData.title}</h1>
                        <p className=' text-[16px] text-gray-700 mt-[20px]'>{gridData.desc}</p>
                        <button className='text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] mr-[20px]'>{gridData.btn1}</button><br className='sm:hidden' />
                        <button className='text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] '>{gridData.btn2}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
