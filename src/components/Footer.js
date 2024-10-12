import { MdOutlineEmail} from "react-icons/md";
import { SiLinkedin } from 'react-icons/si';

export function Footer({open}){

    return(
    <>
    <section id='contact' className={`bg-white ${open && 'blur'}`}>
        <div className='container mx-auto'>            
            <div className={`flex flex-col lg:flex-row justify-between items-center 
            text-center mb-16 lg:text-start lg:pl-20 lg:pr-32 xl:pb-5 xl:pl-40 xl:pr-48 
            xl:pt-5 2xl:pl-56 2xl:pr-96`}>
                <h1 className="text-2xl font-extrabold mb-5 lg:mb-0 xl:text-[28px] pad-download">
                    Download my CV and get to know more about me!
                </h1>
                <a 
                href="https://drive.google.com/drive/folders/1wsHKlG7dwQ7rJXfTNE5zn3g9UclgSBz3?usp=sharing" 
                target= "_blank"
                className={`py-3 px-5 flex-shrink-0 flex items-center text-gray-100  
                bg-secondary-black rounded hover:bg-black hover:text-white transition duration-300`}>                
                    <span className= 'mr-2 text-sm font-Poppins font-medium'>
                        Download CV
                    </span>
                    <svg 
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-gray-100 hover:text-white`}                    
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-between items-center px-5 pb-1 xl:pb-0 md:px-12">
                <a className="flex-shrink-0 flex items-center" href="mailto:oswaldoe1992@gmail.com">
                    <MdOutlineEmail className=""/>
                    <span className="font-normal text-sm ml-1">Oswaldoe1992@gmail.com</span>
                </a>               
                <div className="flex lg:items-center gap-1">                        
                    <a aria-label="github" rel="noopener noreferrer" target="_blank" 
                    href="https://github.com/OswaldoDM" 
                    className={`relative h-9 w-9 
                    flex items-center justify-center 
                    before:absolute before:inset-0 before:rounded-full 
                    before:border before:border-gray-200                    
                    `}>
                        <svg 
                        className="relative w-5 fill-primary-black 
                        hover:fill-black transition duration-300" 
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        
                    </a>
                    <a aria-label="Linkedin" rel="noopener noreferrer" target="_blank" 
                    href="https://www.linkedin.com/in/oswaldo-diaz-milan%C3%A9s-b73b512b6/" 
                    className={`relative h-9 w-9 flex items-center justify-center 
                    before:absolute before:inset-0 before:rounded-full before:border 
                    before:border-gray-200`}> 
                        <SiLinkedin 
                    className={` relative w-5 h-5 text-primary-black hover:fill-black
                    transition duration-300 cursor-pointer rounded-sm `}/>  
                    </a>                    
                </div>
            </div>
        </div>    
    </section>        
    </>
    )
}
                       
                        
                        
                        