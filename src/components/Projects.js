import { projects } from '../data/projectsData';
import { IoLogoGithub } from "react-icons/io";


export function Projects({ open }) {

    return (

    <section id='projects' className={`bg-white ${open && 'blur'}`}>

        <div className="container mx-auto px-12 mb-20">

            <h2 className={`mb-12 mt-10 md:mt-14 lg:mt-0 text-center lg:text-left text-[42px] font-extrabold`}>
                Projects
            </h2>

            <div className='grid justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-14 lg:gap-x-14 lg:gap-y-20 2xl:gap-x-10'>
                {projects.map(project => (
                    <div key={project.label} className='flex flex-col items-center sm:items-start'>
                        <a href={project.href} target='_blank' rel="noreferrer">
                            <img
                            src={project.img}
                            alt={project.alt}
                            loading='lazy'
                            className={`mb-2 rounded-lg h-[135px] w-[276px] object-cover cursor-pointer transition duration-300 border border-primary-gray hover:border-sec-gray`}
                            />
                        </a>
                        <div className='flex gap-3'>
                            <h3 className='font-semibold text-2xl mb-2'>{project.label}</h3>
                            {project.repo && 
                                <a 
                                href={project.repo} target='_blank' rel="noreferrer" 
                                className='font-mono text-xs flex items-center gap-[3px] mb-2'>
                                    <IoLogoGithub />
                                    <p>code</p>
                                </a>
                            }
                        </div>
                        <p className={`text-gray-800 text-sm mb-2 max-w-[276px] text-center sm:text-start`}>
                            {project.description}
                        </p>
                        <div className='flex gap-1 justify-center sm:justify-start items-center w-full font-mono'>
                            <span className={`${project.icon1Color} ${project.icon1Size} flex items-center`}>
                                {project.icon1}
                            </span>
                            <p className='text-[11px] mr-2'>{project.icon1Label}</p>
                            <span className={`${project.icon2Color} ${project.icon2Size} flex items-center`}>
                                {project.icon2}
                            </span>
                            <p className='text-[11px] mr-2'>{project.icon2Label}</p>
                            {project.icon3 &&
                            <>
                                <span className={`${project.icon3Color} ${project.icon3Size} flex items-center`}>
                                    {project.icon3}
                                </span>
                                <p className='text-[11px] mr-2'>{project.icon3Label}</p>
                            </>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    )
}
