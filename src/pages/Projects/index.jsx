import { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import RateLimitExceeded from '../../components/RateLimitExceeded';

const imageLinkPrefix = 'https://opengraph.githubassets.com/1/RoloMiniCoder/';

function SimpleCard({ html_url, image }) {
    return (
        <span className='project-card'>
            <a href={html_url} target='_blank'>
                <img src={image} className='simple-card-image' />
            </a>
        </span>
    )
}

export default function Projects() {
    const [projects, setProjects] = useState(null);
    const [error, setError] = useState(null);
    let content;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/api/github/starred');

            if (!response.ok) {
                setError('gandabosta')
                return;
            }

            const result = await response.json()
            const cleanedUpResults = result.map(({ html_url, name, description }) => {
                return {
                    html_url,
                    name,
                    description,
                    image: imageLinkPrefix + name
                }
            });
            console.log(cleanedUpResults)
            setProjects(cleanedUpResults);
        }

        fetchData();
    }, []);

    if (error) {
        content = <RateLimitExceeded />;
    } else if (!projects) {
        content = <LoadingSpinner />;
    } else {
        content = projects.map((p) => (
            <SimpleCard key={p.html_url} html_url={p.html_url} image={p.image} />
        ))
    }

    return (
        <section className="projects-section">
            <h2>Some personal projects</h2>
            <div className='project-grid'>{content}</div>
        </section>
    );
}


