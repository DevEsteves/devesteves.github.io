type projectProps = {
    name: string
    description: string
}

export default function Projects({name, description}: projectProps){
    return(
        <div className="projects" id="projects">
            <section>
                <h2>Projects</h2>
                    <p>Coming soon</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </div>
    )
}