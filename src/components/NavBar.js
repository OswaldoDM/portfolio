


export function NavBar({open, handleClick}) {    

    return (
    
<>
    
<section className= "bg-white">
    
        <div className=
        {`container mx-auto
        flex justify-between items-center 
        px-5 py-2 border-b-[2px]
        `}>
            
            <h1 className=
            {`font-blanka text-4xl        
            text-primary-black
            pb-2 2xl:pb-1
            `}>
                ODM
            </h1>
    
            <nav className=  
            {`hidden lg:flex gap-10 items-center 
             font-urbanist pt-2 
            text-[#3d3b3b]      
            `}>              
    
                <a href="#projects" className=
                {`cursor-pointer text-sm 2xl:text-base
                `}>
                    Projects
                </a>
    
                <a href="#contact" className=
                {`cursor-pointer text-sm 2xl:text-base
                `}>
                    Contact
                </a>

                <div data-controller="themeSwitcher" 
                className="hidden lg:flex lg:items-center gap-4 md:gap-6">
                    
                    <a aria-label="github" rel="noopener noreferrer" target="_blank" href="https://github.com/OswaldoDM" 
                    className={`relative h-9 w-9 
                    flex items-center justify-center 
                    before:absolute before:inset-0 before:rounded-full 
                    before:border before:border-gray-200                    
                    `}>
                        <svg className="relative w-5 fill-primary-black hover:fill-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                    
                </div>    
                
            </nav>        
    
            {/* Mobile NavBar Icon */}
            
            <div onClick={handleClick} className= 
            {`lg:hidden w-[22px] h-[30px]
            flex flex-col items-center justify-center
            gap-[7px] cursor-pointer
            ${ open && 'gap-0' }`} >
    
                <span className=
                {`bg-black w-full h-[2px]
                transition duration-200
                ${ open && 'rotate-45' }`}>                
                </span>
    
                <span className=
                {`bg-black w-full h-[2px]
                transition duration-200
                ${ open && 'rotate-[-45deg] relative bottom-[2px]' }`}>                
                </span>                             
    
            </div>        
            
        </div>
</section>
    
        {/* Mobile Dropdown Menu */}
    
        {open ? 
        
        <div className="absolute lg:hidden bg-[#ecf8ff] w-full z-10">
    
            <nav className= 
                {`relative lg:hidden
                container mx-auto 
                flex flex-col gap-4
                font-urbanist text-base 
                transition-all duration-300 ease-in-out
                mb-1 py-4 px-5 rounded-md 
                text-[#09141dce] bg-white    
                `}>    
                    
                    <a href="#projects"
                    onClick={handleClick} 
                    className={`cursor-pointer`}>Projects</a>
                    
                    <a aria-label="github" rel="noopener noreferrer" target="_blank" href="https://github.com/OswaldoDM" 
                    className={`relative h-9 w-9 
                    flex items-center justify-center 
                    before:absolute before:inset-0 before:rounded-full 
                    before:border before:border-gray-200                   
                    `}>
                        <svg className="relative w-5 fill-primary-black hover:fill-secondary-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>             
    
                    <a href="#contact"
                    onClick={handleClick} 
                    className= 
                    {`text-white text-center bg-primary-blue rounded-full py-2 
                    active:transform active:scale-95`}>                
                        Contact
                    </a>
                        
            </nav>
        </div>
    
        :    
    
        <div className="absolute">
            <nav></nav>             
        </div>    
    }                                       
</>      
)  
}
                
    
        
            
        
                     
    