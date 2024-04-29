import hero_img from './../assets/dev1.svg';
import CT from './../assets/CryptoToday.png';
import MG from './../assets/MG.png';
import IN from './../assets/Influencer1.png';
import Space from './../assets/Space.png';
import { SiLinkedin } from 'react-icons/si';


export function Hero({open,handleClick}) {

return(

<>
<section className={`bg-white ${open && 'blur'}`}>

    <div className= 
    {`container mx-auto lg:flex 
    pt-[170px] sm:pt-[120px] md:pt-20 lg:pt-12 
    pb-20 lg:pb-28 xl:pb-36
    lg:pr-5 xl:pr-0 
    `}>

        <div className='lg:w-[52%] lg:pt-4 xl:pt-2 pad-css '>

                <h1 className=
                {`relative text-center text-primary-black font-black 
                text-[50px] leading-[1] sm:text-6xl xl:text-[75px] 2xl:text-[90px]
                md:px-24 lg:px-0 mb-4 
                `}>
                    Oswaldo Diaz <br/>  <span className="text-primary-blue">Milanes</span>                

                </h1>
                
                <p className=
                {`hidden sm:block px-20 md:px-40 lg:px-[22px] xl:px-20 2xl:pl-20
                text-gray-800 text-center  mb-6
                sm:text-[13px] md:text-sm
                `}>
                    FullStack Developer with more than four years of experience.
                    I've created this portfolio to show some personal projects that I'm really proud of.
                </p>

                <p className=
                {`sm:hidden px-12 md:px-40 lg:px-[22px] xl:px-20 2xl:pl-20
                text-gray-800 text-center  mb-6
                text-base 
                `}>
                    Front-End Developer
                </p>
                

                <a href='https://www.linkedin.com/in/oswaldo-diaz-milan%C3%A9s-b73b512b6/' target='_blank'
                className='flex justify-center'>
                                                     
                    <SiLinkedin className= 
                    {` w-8 h-8 xl:w-10 xl:h-10 
                    2xl:w-12 2xl:h-12 
                    text-primary-black hover:text-black
                    duration-300 cursor-pointer 
                    `}/>               

                </a>

                <a href='#projects' className='flex justify-center mt-16 lg:hidden'>

                    <div className="arrow-scroll">

                        <div className="arrow"></div>
                        <div className="arrow"></div>                        
                        <div className="arrow"></div>                        

                    </div>

                </a>

                <div className='hidden lg:block px-8 xl:px-12 2xl:px-20 lg:mt-14 xl:mt-16 2xl:mt-20'>
                    
                    <h3 className='font-extrabold mb-2'>Latest Work</h3>
                    <div className='flex gap-3'>

                        <a href='https://oswaldodm.github.io/Influencer/' target='_blank' 
                        className= 
                        {`flex-1 lg:border-[5px] xl:border-[6px]
                        2xl:border-8 border-gray-300 
                        hover:border-primary-gray
                        transition duration-300
                        cursor-pointer rounded-sm
                        `}>
                            <img src= {IN} />
                        </a>
                        <a href='https://oswaldodm.github.io/space-x-2023/' target='_blank' 
                        className= 
                        {`flex-1 lg:border-[5px] xl:border-[6px]
                        2xl:border-8 border-gray-300
                        hover:border-primary-gray
                        transition duration-300 
                        cursor-pointer rounded-sm
                        `}>
                            <img src= {Space} />
                        </a>
                        <a href='https://oswaldodm.github.io/react-mightyGifs/' target='_blank' 
                        className= 
                        {`flex-1 lg:border-[5px] xl:border-[6px]
                        2xl:border-8 border-gray-300
                        hover:border-primary-gray
                        transition duration-300 
                        cursor-pointer rounded-sm
                        `}>
                            <img src= {MG} />
                        </a>

                    </div>
                </div>            
                                        
                
        </div>

        <div className=
        {`hidden lg:block overflow-hidden        
        xl:-mr-4 w-[48%] 
        `}>
                <img src= {hero_img} alt="portfolio illustration" loading='lazy' />
        </div>

    </div> 
    

</section>
       
</>
)
}

