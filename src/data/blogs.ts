import { sortByDateDesc } from './content'

export interface BlogPost {
  id: number
  title: string
  date: string
  author: string
  url: string
  tags: string[]
  snippet: string
}

const blogPostData: BlogPost[] = [
  {
    id: 2,
    title: 'Houdini Learning Log: Foundations VFX Course',
    date: '2026-06-12',
    author: 'McKenna Parker',
    url: '/blog/houdini-learning-log-foundations-vfx',
    tags: ['Houdini', '3D Modeling', 'Animation'],
    snippet: 'The second entry in my Houdini learning log series where I detail my Houdini learning journey in a blog style. ',
  },
  {
    id: 1,
    title: 'Houdini Learning Log: Foundations Welcome Course',
    date: '2026-06-09',
    author: 'McKenna Parker',
    url: '/blog/houdini-learning-log-foundations-welcome',
    tags: ['Houdini', '3D Modeling', 'Animation'],
    snippet: "The first of me Houdini Learning Logs where I detail my Houdini learning journey. Following the H21 Foundations Welcome course, I created a rendered animation of candy falling into a mug. Feel free to check out the process video and renders or read through to learn about the process and what I took away.",
  },
]

export const blogPosts = sortByDateDesc(blogPostData)