import { useSearchParams } from "react-router-dom";

import './CategoryButtons.css'

const categories = [
    'all',
    'books',
    'music',
    'movies',
    'tech',
    'notes',
]

function CategoryButton({ category }) {
    const [searchParams, setSearchParams, a, b, c] = useSearchParams();

    const isActive = category === (searchParams.get('type') || 'all');

    const handleCategoryChange = () => {
        if (category === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ type: category });
        }
    };

    return (
        <button
            onClick={handleCategoryChange}
            type='button'
            className={`blog__categories__button ${isActive ? 'blog__categories__button--active' : ''}`}
        >
            {category.toUpperCase()}
        </button>
    )
}

export default function CategoryButtons() {
    return (
        <section className='blog__categories'>
            {categories.map(category => {
                return (<CategoryButton category={category} key={category} />)
            })}
        </section>
    )
}