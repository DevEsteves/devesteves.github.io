type technologySkillsProps = {
    frameworks: string[]
    progLangs: string[]
    others: string[]
}

export default function TechnologySkills({frameworks, progLangs, others}: technologySkillsProps){
    return (
    <div className="technology-skills" id="technology_skills">
        <section>

        <h2>Technology Skills</h2>
        <div className="frameworks">
            <h3>Frameworks</h3>
            <ul>
            {frameworks.map( (item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="prog-Languages">
            <h3>Programming Languages</h3>
            <ul>
            {progLangs.map( (item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="others">
            <h3>Others</h3>
            <ul>
            {others.map( (item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
                </section>
    </div>
    )
}