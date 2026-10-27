import { sortByDateDesc } from './content.ts'

export interface Project {
    id: number
    title: string
    description: string
    thumbnail?: string
    link: string
    date: string
    skills: string[]
    repo?: string
    live?: string
    type: string
}

const projectData: Project[] = [
    {
        id: 16,
        title: 'Procedural Room',
        description: 'A walkable room made up of procedurally created assets',
        thumbnail: '',
        link: 'portfolio/walkable-room',
        date: 'October 2026',
        skills: ['Houdini', 'Houdini Engine', 'Unreal Engine 5'],
        repo: '',
        live: '',
        type: 'techart'
    },
    {
        id: 15,
        title: 'Physics Invaders',
        description: 'A new mechanic created on top of a classic game',
        thumbnail: '/projects/physicsInvaders.png',
        link: 'portfolio/physics-invaders',
        date: 'September 2026',
        skills: ['Unity 6', 'C#', 'Game Design'],
        repo: 'https://github.com/mckennaparker/Space-Invaders',
        live: '',
        type: 'games'
    },
    {
        id: 14,
        title: 'Nightlight',
        description: 'A puzzle platformer created for UniJam 2026',
        thumbnail: '/projects/nightlight.webp',
        link: '/portfolio/nightlight',
        date: 'July 2026',
        skills: ['Unity', 'C#', 'Level Design', 'UI Design'],
        repo: 'https://github.com/mckennaparker/uni-jam-day-knights',
        live: 'https://kirble1232.itch.io/nightlight',
        type: 'games'
    },
    {
        id: 13,
        title: 'Gumball Simulation',
        description: 'A gumball physics simulation modeled, simulated, and rendered in Houdini',
        thumbnail: '/blogs/foundationsWelcome.png',
        link: '/portfolio/gumball-simulation',
        date: 'June 2026',
        skills: ['Houdini', 'Copernicus', 'Solaris', 'USD'],
        repo: '',
        live: '',
        type: 'techart'
    },
    {
        id: 12,
        title: 'Ultifilm',
        description: 'A web application to watch, annotate, and implement plays in ultimate frisbee',
        thumbnail: '/projects/ultifilm.png',
        link: '/portfolio/ultifilm',
        date: 'May 2026',
        skills: ['Figma', 'React', 'TypeScript', 'Human-Computer Interaction', 'Web Development'],
        repo: 'https://github.com/thiessen2003/ultifilm',
        live: '',
        type: 'design',
    },
    {
        id: 11,
        title: 'Young Chef',
        description: 'A mobile app to help college students learn to cook on a budget',
        thumbnail: '/projects/youngChef.gif',
        link: '/portfolio/young-chef',
        date: 'May 2026',
        skills: ['Figma', 'UI/UX', 'Mobile App Design', 'Human-Computer Interaction'],
        repo: '',
        live: '',
        type: 'design',
    },
    {
        id: 10,
        title: 'Physically Based Real-time Renderer',
        description: 'A physically-based renderer implemented in C++ and GLSL',
        thumbnail: '/projects/pbr.png',
        link: '/portfolio/physically-based-renderer',
        date: 'April 2026',
        skills: ['C++', 'Graphics', 'Rendering', 'GLSL', 'Qt'],
        repo: '',
        live: '',
        type: 'techart',
    },
    {
        id: 9,
        title: 'Monte Carlo Path Tracer',
        description: 'A Monte Carlo Path Tracer implemented in C++ and GLSL',
        thumbnail: '/projects/pathTracer.png',
        link: '/portfolio/monte-carlo-path-tracer',
        date: 'March 2026',
        skills: ['C++', 'Graphics', 'Rendering', 'Path Tracing', 'Qt'],
        repo: '',
        live: '',
        type: 'techart',
    },
    {
        id: 8,
        title: 'Dream Space Project',
        description: 'A virtual reality project creating an interactive dream space',
        thumbnail: '/projects/dreamSpace.png',
        link: '/portfolio/dream-space',
        date: 'March 2026',
        skills: ['Unreal Engine 5', 'Level Design', 'VR', 'Shaders'],
        repo: '',
        live: '',
        type: 'games'
    },
    {
        id: 7,
        title: 'Path@Penn Redesign',
        description: 'A redesign of the Path@Penn website to improve usability and accessibility',
        thumbnail: '/projects/pathAtPennRedesign.png',
        link: '/portfolio/path-at-penn-redesign',
        date: 'February 2026',
        skills: ['Figma', 'UI/UX', 'Web Development', 'Accessibility'],
        repo: '',
        live: '',
        type: 'design',
    },
    {
        id: 6,
        title: 'Procedural Winter Village',
        description: 'A procedurally generated winter village created using Blender geometry nodes',
        thumbnail: '/projects/winterVillage.png',
        link: '/portfolio/winter-village',
        date: 'December 2025',
        skills: ['Blender', 'Geometry Nodes', 'Procedural Modeling'],
        repo: '',
        live: '',
        type: 'techart',
    },
    {
        id: 5,
        title: 'Technical Animation Toolkit',
        description: 'A collection of C++ tools including a curve editor, FK/IK editor, particle simulator and behavior simulator',
        thumbnail: '/projects/particleSystemFireworks.png',
        link: '/portfolio/animation-toolkit',
        date: 'September 2025 - December 2025',
        skills: ['Blender', 'Geometry Nodes', 'Procedural Modeling'],
        repo: '',
        live: '',
        type: 'techart',
    },
    {
        id: 4,
        title: 'VR Airway Surgery Trainer',
        description: 'A virtual reality tool for surgeons to practice emergency airway surgery',
        thumbnail: '/projects/surgeryTrainer.png',
        link: '/portfolio/vr-surgery-trainer',
        date: 'June 2025 - August 2025',
        skills: ['Unity', 'C#', 'User Testing', 'VR', 'UI Design'],
        repo: '',
        live: '',
        type: 'games'
    },
    {
        id: 3,
        title: 'Half Edge Mesh Editor',
        description: '3D Model Editing Software',
        thumbnail: './projects/miniMaya.png',
        link: '/portfolio/half-edge-mesh-editor',
        date: 'March 2025',
        skills: ['C++', 'OpenGL', 'GLSL', 'Git', 'Qt'],
        repo: 'https://github.com/CIS4600-Spring-2025/mini-maya',
        live: '',
        type: 'techart',
    },
    {
        id: 2,
        title: 'Surface and Post Shaders',
        description: 'Collection of GLSL Surface and Post Shaders',
        thumbnail: './projects/blinnPhongHW05.png',
        link: '/portfolio/surface-and-post-shaders',
        date: 'February 2025',
        skills: ['C++', 'OpenGL', 'GLSL', 'Git', 'Qt'],
        repo: '',
        live: '',
        type: 'techart',
    },
    {
        id: 1,
        title: '3D Rasterizer',
        description: '3D Rasterization Engine with Camera Controls',
        thumbnail: './projects/marioHW03.png',
        link: '/portfolio/3d-rasterizer',
        date: 'February 2025',
        skills: ['C++', 'Git', 'Qt', 'Linear Algebra'],
        repo: '',
        live: '',
        type: 'techart',
    },
]

export const projectDataSorted = sortByDateDesc(projectData)

export const projects = projectDataSorted