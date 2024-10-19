import portfolio from './../assets/portfolio.png';
import charts from './../assets/charts.png';
import influencer from './../assets/Influencer1.png';
import space from './../assets/Space.png';
import crypto from './../assets/CryptoToday.png';
import todo from './../assets/todoTS.png';
import gifs from './../assets/MG.png';
import nrby from './../assets/nrby.png';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export const projects = [
    {
        label: 'Mighty Gifs',
        href: 'https://gifs-phi-smoky.vercel.app/',
        repo: 'https://github.com/OswaldoDM/gifs',
        img: gifs,
        alt: 'gifs nextjs',
        description: 'SPA made with Nextjs and its server side rendering using the gyphy developers API',
        icon1: <SiNextdotjs />,
        icon1Label: 'Next',
        icon1Color: 'text-black',
        icon1Size: 'text-[17px]',
        icon2: <SiTypescript />,
        icon2Label: 'Typescript',
        icon2Color: 'text-blue-500',
        icon2Size: 'text-[15px]',
        icon3: <SiTailwindcss/>,
        icon3Label: 'Tailwind',
        icon3Color: 'text-cyan-500',
        icon3Size: 'text-xl'
    },    
    {
        label: 'Nrby Users',
        href: 'https://oswaldodm.github.io/nrby-users/',
        repo: 'https://github.com/OswaldoDM/nrby-users',
        img: nrby,
        alt: 'nrby',
        description: 'This was the technical assessment I did for Nrby. It includes the react select library',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',
        icon2: <SiTypescript />,
        icon2Label: 'Typescript',
        icon2Color: 'text-blue-500',
        icon2Size: 'text-[15px]',
        icon3: <SiTailwindcss/>,
        icon3Label: 'Tailwind',
        icon3Color: 'text-cyan-500',
        icon3Size: 'text-xl'
    },
    {
        label: 'TodoTS',
        href: 'https://oswaldodm.github.io/todoTS',
        repo: 'https://github.com/OswaldoDM/todoTS',
        img: todo,
        alt: 'todo app',
        description: 'This is a small app I did while learning Typescript with React.',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',
        icon2: <SiTypescript />,
        icon2Label: 'Typescript',
        icon2Color: 'text-blue-500',
        icon2Size: 'text-[15px]'
    },    
    {
        label: 'Influencer',
        href: 'https://oswaldodm.github.io/Influencer/',
        img: influencer,
        alt: 'Saas Landing',
        description: 'SaaS Landing Page created with Figma and then translated into code',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',
        icon2: <SiTailwindcss/>,
        icon2Label: 'Tailwind',
        icon2Color: 'text-cyan-500',
        icon2Size: 'text-xl'
    },
    {
        label: 'SpaceX App',
        href: 'https://oswaldodm.github.io/space-x-2023/',
        img: space,
        alt: 'SpaceX',
        description: 'SPA to check all the SpaceX launches including articles and videos',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',
        icon2: <SiTailwindcss/>,
        icon2Label: 'Tailwind',
        icon2Color: 'text-cyan-500',
        icon2Size: 'text-xl'
    },
    {
        label: 'Crypto Today',
        href: 'https://oswaldodm.github.io/react-cryptoToday/',
        img: crypto,
        alt: 'cryptocurrencies',
        description: 'This App provides you with all the info you need about the cryptocurrency markets',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',
        icon2: <SiTailwindcss/>,
        icon2Label: 'Tailwind',
        icon2Color: 'text-cyan-500',
        icon2Size: 'text-xl'
    },        
    {
        label: 'Charts Dashboard',
        href: 'https://oswaldodm.github.io/charts-dashboard/',
        img: charts,
        alt: 'chart tremor',
        description: 'Dashboard made using React with Tailwind and the Tremor library',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',        
        icon2: <SiTailwindcss/>,
        icon2Label: 'Tailwind',
        icon2Color: 'text-cyan-500',
        icon2Size: 'text-xl'
    },    
    {
        label: 'Portfolio',
        href: '#',
        img: portfolio,
        alt: 'portfolio',
        description: 'My Portfolio made with React JS and Tailwind CSS using create react app',
        icon1: <FaReact/>,
        icon1Label: 'React',
        icon1Color: 'text-sky-400',
        icon1Size: 'text-xl',
        icon2: <SiTailwindcss/>,
        icon2Label: 'Tailwind',
        icon2Color: 'text-cyan-500',
        icon2Size: 'text-xl'
    },

]