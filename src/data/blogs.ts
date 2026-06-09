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
    title: 'Blender Learning Log - Part Two',
    date: '2025-08-09',
    author: 'McKenna Parker',
    url: '/blogs/blender-learning-log-two.html',
    tags: ['Blender', '3D Modeling', 'Animation'],
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    title: 'Blender Learning Log - Part One',
    date: '2025-08-02',
    author: 'McKenna Parker',
    url: '/blogs/blender-learning-log-one.html',
    tags: ['Blender', '3D Modeling', 'Animation'],
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const blogPosts = sortByDateDesc(blogPostData)