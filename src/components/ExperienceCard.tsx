import type { Experience } from '../data/experiences.ts'

type ExperienceCardProps = {
    experience: Experience
    className?: string
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <article className="experience-card">
            <div className="experience-card-body">
                <div className="experience-card-body-header">
                    <h4>{experience.title}</h4>
                    <p>{experience.date}</p>
                </div>
                <ul className="experience-card-list">
                    {experience.details.map((detail) => (
                        <li key={experience.id}>{detail}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard