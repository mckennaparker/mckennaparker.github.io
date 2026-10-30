import { sortByDateDesc } from './content.ts'

export interface Experience {
    id: number
    title: string
    details: string[]
    date: string
}

const experienceData: Experience[] = [
    {
        id: 5,
        title: 'Inspiring Future Innovators Summit',
        details: ['Collaborated on a team with 4 peers and 2 mentors'],
        date: 'October 2026'
    },
    {
        id: 4,
        title: 'UniJam Game Jam',
        details: [],
        date: 'July 2026'
    },
    {
        id: 3,
        title: 'Virtual Reality Software Engineering Intern',
        details: [],
        date: 'June 2025 - August 2025'
    },
    {
        id: 2,
        title: 'Jane Street Academy of Math and Programming',
        details: [],
        date: 'July 2023 - August 2023'
    },
    {
        id: 1,
        title: "MIT Women's Technology Program",
        details: [],
        date: 'June 2022 - July 2022'
    }
]

export const experienceDataSorted = sortByDateDesc(experienceData)

export const experiences = experienceDataSorted
