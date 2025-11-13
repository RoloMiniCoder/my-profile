import useDataFetching from '../../hooks/useDataFetching';
import DataStateWrapper from '../../components/DataStateWrapper';


function ProjectCard({ html_url, image }) {
    return (
        <span className='project-card'>
            <a href={html_url} target='_blank'>
                <img src={image} className='simple-card-image' />
            </a>
        </span>
    )
}

export default function Projects() {
    const { data: projects, isLoading, error } = useDataFetching(`/github/starred`)

    return (
        <section className="projects-section">
            <h2>Some personal projects</h2>
            <div className='project-grid'>
                <DataStateWrapper isLoading={isLoading} error={error}>
                    {projects && projects.map((p) => (
                        <ProjectCard key={p.html_url} html_url={p.html_url} image={p.image} />
                    ))}
                </DataStateWrapper>
            </div>
        </section>
    );
}


