import CT from './../assets/CryptoToday.png';
import IN from './../assets/Influencer1.png';
import Space from './../assets/Space.png';
import MG from './../assets/MG.png';
import MGC from './../assets/MGC.png';
import chuckApp from './../assets/chuckApp.png';
import scm from './../assets/scm.png';
import Redka from './../assets/Redka.png'
import dashboard from './../assets/dashboard-1.png'
import portfolio from './../assets/portfolio.png'
import todoTS from './../assets/todoTS.png'

import { FaReact} from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";




export function Projects({open,handleClick}) {

return(

<>
<section id='projects' className={`bg-white ${open && 'blur'}`}>

    <div className="container mx-auto px-12 mb-20">

        <h2 className= 
            {`mb-12 mt-10 md:mt-14 lg:mt-0 text-center lg:text-left 
            text-[42px] font-extrabold            
            `}>
                Projects
        </h2>
    
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-x-10 gap-y-10 sm:gap-14 lg:gap-x-14 lg:gap-y-20 xl:gap-y-24">

            <div className='flex flex-col items-center lg:items-start'>
                <a href='#' target='_blank'>
                    <img
                        src={portfolio}
                        alt="portfolio"
                        loading="lazy"
                        className=
                        {`mb-2 rounded-lg w-[276px] cursor-pointer 
                        transition duration-300
                        border border-primary-gray 
                        hover:border-sec-gray
                        `}             
                    />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Portfolio</h3>

                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        My Portfolio made with React JS and Tailwind CSS
                        
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center "
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>          

                </div>                

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/todoTS/' target='_blank'>
                    <img
                        src={todoTS}
                        alt="todoTS"
                        loading="lazy"
                        className=
                        {`mb-2 rounded-lg w-[276px] cursor-pointer 
                        transition duration-300
                        border border-primary-gray 
                        hover:border-sec-gray
                        `}             
                    />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>TodoTS</h3>

                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        This is a small app I did while learning Typescript with React.
                        You can check the code <a className='underline' href='https://github.com/OswaldoDM/todoTS/tree/main/src'>here</a>
                        
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-blue-500 text-lg flex items-center "
                    >   
                        <SiTypescript />
                    </p>

                    <p className='font-mono text-xs mr-2'>Typescript</p>          

                </div>                

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/dashboard-odm/' target='_blank'>
                    <img
                        src={dashboard}
                        alt="Saas"
                        loading="lazy"
                        className=
                        {`mb-2 rounded-lg w-[276px] cursor-pointer 
                        transition duration-300
                        border border-primary-gray 
                        hover:border-sec-gray
                        `}             
                    />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>AdminHub</h3>

                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Admin Dashboard made with Vanilla code.
                        
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-orange-500 text-xl flex items-center ">
                        <FaHtml5 />
                    </p>

                    <p className='font-mono text-xs mr-2'>HTML</p>

                    <p className = "text-blue-500 text-xl flex items-center"
                    >   
                        <FaCss3Alt />
                    </p>

                    <p className='font-mono text-xs mr-2'>CSS</p>

                    <p className = "text-yellow-400 text-xl flex items-center"
                    >   
                        <SiJavascript  />
                    </p>

                    <p className='font-mono text-xs mr-2'>Javascript</p>          

                </div>                

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/Influencer/' target='_blank'>
                    <img
                        src={IN}
                        alt="Saas"
                        loading="lazy"
                        className=
                        {`mb-2 rounded-lg w-[276px] cursor-pointer 
                        transition duration-300
                        border border-primary-gray 
                        hover:border-sec-gray
                        `}             
                    />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Influencer</h3>

                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        SaaS Landing Page created with Figma and 
                        then translated into high quality code.
                        
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center "
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>          

                </div>                

            </div>

            

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/space-x-2023/' target='_blank'>
                <img
                    src={Space}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>SpaceX</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Single Page App where you can check all the SpaceX launches 
                        including articles and video recordings.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center"
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>                 

                </div>                

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/react-cryptoToday/' target='_blank'>
                <img
                    src={CT}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Crypto Today</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        This App provides you with all the info you need 
                        about the cryptocurrency markets.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center"
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>                 

                </div>

            </div>            

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/react-mightyGifs/' target='_blank'>
                <img
                    src={MG}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Mighty Gifs</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        SPA created to help you finding any kind of gif you want. 
                        It was made by using the gyphy developers API.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center"
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>                 

                </div>

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://scottwilsonmedia.co.uk/' target='_blank'>
                <img
                    src={scm}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Scott Wilson Media</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Full website for event hosting services
                        made with the Elementor builder in Wordpress.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-gray-400 text-xl flex items-center ">
                        <FaWordpress />
                    </p>

                    <p className='font-mono text-xs mr-2'>Wordpress</p>

                    <p className = "text-[#92003ac0] text-xl flex items-center"
                    >   
                        <FaElementor />
                    </p>

                    <p className='font-mono text-xs mr-2'>Elementor</p>                 

                </div>

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://www.militarygamingcommand.org/' target='_blank'>
                <img
                    src={MGC}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Military Gaming</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        A beautiful landing page for military veterans
                        made with the Divi website builder in Wordpress.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-gray-400 text-xl flex items-center ">
                        <FaWordpress />
                    </p>

                    <p className='font-mono text-xs mr-2'>Wordpress</p>

                    <p className = "text-fuchsia-500 text-xl flex items-center"
                    >   
                        <CgWebsite />
                    </p>

                    <p className='font-mono text-xs mr-2'>Divi</p>                 

                </div>

            </div> 
                   
            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://redka1.com/' target='_blank'>
                <img
                    src={Redka}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Redka</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Full Website for a property management company
                         created with Bricks builder in Wordpress
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-gray-400 text-xl flex items-center ">
                        <FaWordpress />
                    </p>

                    <p className='font-mono text-xs mr-2'>Wordpress</p>

                    <p className = "text-yellow-500 text-xl flex items-center"
                    >   
                        <CgWebsite />
                    </p>

                    <p className='font-mono text-xs mr-2'>Bricks</p>                 

                </div>
               

            </div> 

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/chuck-jokes-app/' target='_blank'>
                <img
                    src={chuckApp}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Chuck Jokes</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                    Web app with some of the best jokes ever written😆
                    thanks to the Chuck Norris jokes API.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>                    

                    <p className = "text-blue-700 text-xl flex items-center "
                    >   
                        <FaCss3Alt />
                    </p>

                    <p className='font-mono text-xs mr-2'>CSS</p>            

                </div>

            </div>        
             

        </div>

    </div>

</section>       
</>

)
}